import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export type ScrollVideoSource = {
  desktop: string;
  mobile: string;
};

interface ScrollFrameAnimationProps {
  videos: ScrollVideoSource;

  poster?: string;

  posterAlt?: string;

  scrollLength?: number;

  children?: ReactNode;

  className?: string;

  skipLabel?: string;
}

export function ScrollFrameAnimation({
  videos,

  poster,

  posterAlt = "",

  scrollLength = 5000,

  children,

  className = "",

  skipLabel = "Skip Intro",
}: ScrollFrameAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const pinRef = useRef<HTMLDivElement | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [viewport, setViewport] = useState<"desktop" | "mobile">(() =>
    typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop",
  );

  const [videoReady, setVideoReady] = useState(false);

  const [showSkip, setShowSkip] = useState(true);

  const prefersReducedMotion = useReducedMotion();

  /*
   * ------------------------------------------------
   * Responsive video
   * ------------------------------------------------
   */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => {
      setViewport(mediaQuery.matches ? "mobile" : "desktop");
    };

    updateViewport();

    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const videoSrc = viewport === "mobile" ? videos.mobile : videos.desktop;

  /*
   * ------------------------------------------------
   * Video metadata
   * ------------------------------------------------
   */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    setVideoReady(false);

    video.pause();

    video.currentTime = 0;

    const handleLoadedMetadata = () => {
      setVideoReady(true);
    };

    const handleLoadedData = () => {
      setVideoReady(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);

      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [videoSrc]);

  /*
   * ------------------------------------------------
   * ScrollTrigger
   * ------------------------------------------------
   */

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (!videoReady) {
      return;
    }

    const container = containerRef.current;

    const pin = pinRef.current;

    const video = videoRef.current;

    if (!container || !pin || !video) {
      return;
    }

    if (!Number.isFinite(video.duration)) {
      return;
    }

    const context = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: container,

        start: "top top",

        end: `+=${scrollLength}`,

        pin,

        scrub: 0.15,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (!video || !Number.isFinite(video.duration)) {
            return;
          }

          const progress = Math.min(1, Math.max(0, self.progress));

          /*
           * Convert scroll progress
           * into video time.
           */
          const targetTime = progress * video.duration;

          /*
           * Avoid unnecessary writes.
           */
          if (Math.abs(video.currentTime - targetTime) > 0.01) {
            video.currentTime = targetTime;
          }

          /*
           * Hide skip button near
           * the end of animation.
           */
          setShowSkip(self.progress < 0.95);
        },
      });

      scrollTriggerRef.current = trigger;

      ScrollTrigger.refresh();
    }, container);

    return () => {
      scrollTriggerRef.current = null;

      context.revert();
    };
  }, [videoReady, videoSrc, scrollLength, prefersReducedMotion]);

  /*
   * ------------------------------------------------
   * Reduced motion
   * ------------------------------------------------
   */

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();

    video.currentTime = 0;
  }, [prefersReducedMotion]);

  /*
   * ------------------------------------------------
   * Skip animation
   * ------------------------------------------------
   */

  const skipAnimation = () => {
    const trigger = scrollTriggerRef.current;

    if (trigger) {
      window.scrollTo({
        top: trigger.end,
        behavior: "smooth",
      });

      return;
    }

    const container = containerRef.current;

    if (!container) {
      return;
    }

    window.scrollTo({
      top: window.scrollY + container.getBoundingClientRect().height,

      behavior: "smooth",
    });
  };

  /*
   * ------------------------------------------------
   * Render
   * ------------------------------------------------
   */

  return (
    <section ref={containerRef} className={`relative w-full ${className}`}>
      <div
        ref={pinRef}
        className="
          relative
          h-[100svh]
          w-full
          overflow-hidden
          bg-black
        "
      >
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          poster={poster}
          muted
          playsInline
          preload="auto"
          aria-label={posterAlt}
          className="
  absolute
  inset-0
  h-full
  w-full
  object-cover
  object-center
"
        />

        {!videoReady && poster && (
          <img
            src={poster}
            alt={posterAlt}
            className="
  absolute
  inset-0
  h-full
  w-full
  object-cover
  object-center
"
          />
        )}

        <div className="relative z-10 size-full">{children}</div>

        {showSkip && !prefersReducedMotion && (
          <button
            type="button"
            onClick={skipAnimation}
            className="
              absolute
              bottom-6
              right-5
              z-30
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/30
              bg-black/25
              px-4
              py-2.5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-white/60
              hover:bg-black/40
              sm:bottom-8
              sm:right-8
            "
            aria-label={skipLabel}
          >
            <span>{skipLabel}</span>

            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </section>
  );
}
