import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP is browser-only. Registering ScrollTrigger during SSR throws, so all
 * registration happens lazily on the client through this module.
 */
let registered = false;

export function initGsap() {
  if (typeof window === "undefined") return { gsap, ScrollTrigger };
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };
