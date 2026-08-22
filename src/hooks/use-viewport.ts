import { useEffect, useState } from "react";

/**
 * Returns "mobile" | "desktop" for the current viewport, or null before
 * hydration so we never request the wrong frame sequence during SSR.
 */
export function useViewportKind(breakpoint = 768) {
  const [kind, setKind] = useState<"mobile" | "desktop" | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setKind(mq.matches ? "mobile" : "desktop");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return kind;
}
