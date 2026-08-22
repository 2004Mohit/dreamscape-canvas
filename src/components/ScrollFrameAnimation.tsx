import { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { FrameSet } from "@/data/frames";
import { useFrameSequence } from "@/animations/useFrameSequence";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFrameAnimationProps {
  frames: FrameSet;

  /**
   * Optional fallback image shown before the first frame loads.
   */
  poster?: string;

  posterAlt?: string;

  /**
   * Approximate scroll distance in pixels.
   */
  scrollLength?: number;

  /**
   * Optional chapter markers.
   *
   * The component does not require chapters to render the animation.
   */
  chapters?: unknown[];

  children?: ReactNode;

  className?: string;
}

/**
 * Canvas-based scroll frame animation.
 *
 * Desktop and mobile sequences are selected automatically
 * by the viewport width.
 */
export function ScrollFrameAnimation({
  frames,
  poster,
  posterAlt = "",
  scrollLength = 5000,
  children,
  className = "",
}: ScrollFrameAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const viewportRef = useRef<"desktop" | "mobile" | null>(null);

  const currentFrameRef = useRef(0);
  const frameImagesRef = useRef<Array<HTMLImageElement | null>>([]);
  const progressRef = useRef(0);

  const sequence = useResponsiveSequence(frames);

  const { frames: loadedFrames, isReady } = useFrameSequence(sequence, {
    preloadCount: 5,
  });

  frameImagesRef.current = loadedFrames;

  /**
   * Keep viewport selection stable for the current mounted component.
   */
  useEffect(() => {
    if (!sequence) return;

    viewportRef.current = window.innerWidth < 768 ? "mobile" : "desktop";
  }, [sequence]);

  /**
   * Configure canvas dimensions.
   */
  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !sequence) return;

    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!context) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const observer = new ResizeObserver(resizeCanvas);

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, [sequence]);

  /**
   * Draw a frame while preserving its aspect ratio.
   */
  const drawFrame = (frameIndex: number, force = false) => {
    const canvas = canvasRef.current;

    if (!canvas || !sequence) return;

    const image = frameImagesRef.current[frameIndex];

    if (!image || !image.complete) return;

    if (!force && currentFrameRef.current === frameIndex) {
      return;
    }

    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });

    if (!context) return;

    const rect = canvas.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    if (width <= 0 || height <= 0) return;

    context.clearRect(0, 0, width, height);

    const imageRatio = image.naturalWidth / image.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    /**
     * Cover behavior:
     *
     * The frame fills the entire canvas without stretching.
     * Some image edges may extend beyond the viewport.
     */
    if (imageRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = height * imageRatio;
      offsetX = (width - drawWidth) / 2;
    } else {
      drawWidth = width;
      drawHeight = width / imageRatio;
      offsetY = (height - drawHeight) / 2;
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

    currentFrameRef.current = frameIndex;
  };

  /**
   * Draw first available frame as soon as it arrives.
   */
  useEffect(() => {
    if (!isReady) return;

    const firstAvailable = frameImagesRef.current.findIndex((frame) => frame !== null);

    if (firstAvailable >= 0) {
      drawFrame(firstAvailable, true);
    }
  }, [isReady, loadedFrames]);

  /**
   * Redraw the current frame when the viewport changes.
   */
  useEffect(() => {
    const handleResize = () => {
      const current = currentFrameRef.current;

      requestAnimationFrame(() => {
        drawFrame(current, true);
      });
    };

    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sequence]);

  /**
   * GSAP ScrollTrigger.
   */
  useLayoutEffect(() => {
    const container = containerRef.current;
    const pin = pinRef.current;

    if (!container || !pin || !sequence) return;

    const context = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: container,

        start: "top top",

        end: `+=${scrollLength}`,

        pin,

        scrub: 0.35,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          progressRef.current = self.progress;

          const totalFrames = sequence.count;

          if (totalFrames <= 1) return;

          const frameIndex = Math.min(
            totalFrames - 1,
            Math.max(0, Math.round(self.progress * (totalFrames - 1))),
          );

          if (frameIndex === currentFrameRef.current) {
            return;
          }

          /**
           * If the requested frame hasn't loaded yet,
           * use the nearest loaded frame.
           */
          let targetIndex = frameIndex;

          if (!frameImagesRef.current[targetIndex]) {
            const direction = targetIndex > currentFrameRef.current ? 1 : -1;

            let fallback = targetIndex;

            while (fallback >= 0 && fallback < totalFrames && !frameImagesRef.current[fallback]) {
              fallback -= direction;
            }

            if (fallback >= 0 && fallback < totalFrames && frameImagesRef.current[fallback]) {
              targetIndex = fallback;
            } else {
              return;
            }
          }

          drawFrame(targetIndex);
        },
      });

      ScrollTrigger.refresh();

      return () => {
        trigger.kill();
      };
    }, container);

    return () => {
      context.revert();
    };
  }, [sequence, scrollLength]);

  /**
   * Respect reduced motion.
   *
   * We still render the first available frame but avoid
   * creating the scroll-driven animation.
   */
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;

    if (!container) return;

    const pin = pinRef.current;

    if (!pin) return;

    pin.style.position = "relative";

    return;
  }, []);

  return (
    <section ref={containerRef} className={`relative ${className}`}>
      <div ref={pinRef} className="relative h-[100svh] w-full overflow-hidden">
        {!isReady && poster && (
          <img src={poster} alt={posterAlt} className="absolute inset-0 size-full object-cover" />
        )}

        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />

        <div className="relative z-10 size-full">{children}</div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* RESPONSIVE SEQUENCE                                                        */
/* -------------------------------------------------------------------------- */

function useResponsiveSequence(frames: FrameSet) {
  const [viewport, setViewport] = useState<"desktop" | "mobile" | null>(null);

  useEffect(() => {
    const updateViewport = () => {
      setViewport(window.innerWidth < 768 ? "mobile" : "desktop");
    };

    updateViewport();

    window.addEventListener("resize", updateViewport, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  if (!viewport) {
    return null;
  }

  return frames[viewport];
}
