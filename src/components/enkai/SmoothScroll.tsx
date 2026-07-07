import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    let lenis: any;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
      });

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);

      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return null;
}
