import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFrameSequence } from "@/animations/useFrameSequence";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useViewportKind } from "@/hooks/use-viewport";
import { initGsap } from "@/lib/gsap";
import type { FrameSet } from "@/data/frames";
import { cn } from "@/lib/utils";

export type Chapter = { no: string; title: string; copy: string };

type Props = {
  frames: FrameSet;
  /** Poster shown before frames load, on reduced motion, or if frames are absent. */
  poster: string;
  posterAlt: string;
  /** ScrollTrigger scroll distance for the pinned canvas. */
  scrollLength?: number;
  chapters?: Chapter[];
  children?: ReactNode;
  className?: string;
};

/**
 * Canvas-driven, scroll-scrubbed frame sequence.
 *
 * - one canvas, no DOM image per frame
 * - GSAP ScrollTrigger maps scroll progress to a frame index
 * - painting happens inside requestAnimationFrame
 * - devicePixelRatio is honoured but capped (mobile memory)
 * - listeners + ScrollTriggers are disposed on unmount
 * - reduced motion => static poster, no sequence download at all
 */
export function ScrollFrameAnimation({
  frames,
  poster,
  posterAlt,
  scrollLength = 4000,
  chapters = [],
  children,
  className,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();
  const viewport = useViewportKind();
  const [near, setNear] = useState(false);

  const sequence = reduced || !viewport ? null : frames[viewport];
  const { frameAt, setPriority, firstReady, unavailable } = useFrameSequence(
    sequence,
    near,
  );

  // Lazy activation: only start downloading when the section approaches.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduced) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "150% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  // Canvas painting + ScrollTrigger scrub.
  useEffect(() => {
    if (reduced || !sequence) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const { gsap, ScrollTrigger } = initGsap();
    const state = { index: 0 };
    let raf = 0;
    let dirty = true;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      dirty = true;
    };

    const paint = () => {
      const image = frameAt(Math.round(state.index));
      if (!image) return;
      const cw = canvas.width;
      const ch = canvas.height;
      // Cover, centred — the source aspect ratio is never distorted.
      const scale = Math.max(cw / image.naturalWidth, ch / image.naturalHeight);
      const w = image.naturalWidth * scale;
      const h = image.naturalHeight * scale;
      ctx.fillStyle = "#141414";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(image, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const tick = () => {
      if (dirty) {
        paint();
        dirty = false;
      }
      raf = requestAnimationFrame(tick);
    };

    sizeCanvas();
    raf = requestAnimationFrame(tick);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${scrollLength}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.6,
      onUpdate: (self) => {
        const next = self.progress * (sequence.count - 1);
        state.index = next;
        setPriority(Math.round(next));
        dirty = true;
      },
    });

    // Chapter copy fades in and out with scroll, never all at once.
    const chapterTriggers = chapterRefs.current.filter(Boolean).map((el, i, arr) => {
      const span = scrollLength / arr.length;
      gsap.set(el, { autoAlpha: 0, y: 24 });
      return ScrollTrigger.create({
        trigger: section,
        start: `top+=${i * span} top`,
        end: `top+=${(i + 1) * span} top`,
        onEnter: () => gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }),
        onLeave: () => gsap.to(el, { autoAlpha: 0, y: -16, duration: 0.4 }),
        onEnterBack: () => gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.5 }),
        onLeaveBack: () => gsap.to(el, { autoAlpha: 0, y: 24, duration: 0.4 }),
      });
    });

    const onResize = () => {
      sizeCanvas();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      trigger.kill();
      chapterTriggers.forEach((t) => t.kill());
    };
  }, [sequence, reduced, scrollLength, frameAt, setPriority]);

  const showPoster = reduced || unavailable || !firstReady;

  return (
    <div ref={sectionRef} className={cn("relative h-screen w-full overflow-hidden bg-ink", className)}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full transition-opacity duration-700",
          showPoster ? "opacity-0" : "opacity-100",
        )}
      />
      <img
        src={poster}
        alt={posterAlt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          showPoster ? "opacity-100" : "opacity-0",
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/50" />

      {/* Chapter copy sits in a fixed column so it never covers the frame centre */}
      {chapters.length > 0 && (
        <div className="pointer-events-none absolute inset-0">
          {chapters.map((chapter, i) => (
            <div
              key={chapter.no}
              ref={(el) => {
                chapterRefs.current[i] = el;
              }}
              className="absolute bottom-16 left-6 max-w-sm sm:bottom-20 sm:left-12 md:bottom-24 md:left-16"
            >
              <p className="label-xs text-primary">{chapter.no} — {chapter.title}</p>
              <p className="mt-3 font-display text-2xl leading-tight text-ink-foreground sm:text-3xl md:text-4xl">
                {chapter.copy}
              </p>
            </div>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}
