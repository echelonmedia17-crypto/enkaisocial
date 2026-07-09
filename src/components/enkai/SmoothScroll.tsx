import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    let lenis: any;
    let isActive = true;
    let gsapInstance: any;
    let tickFn: any;

    (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      
      if (!isActive) return;

      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      (window as any).__lenis = lenis;
      (window as any).__lenisStart = () => lenis?.start?.();
      (window as any).__lenisStop = () => lenis?.stop?.();
      (window as any).__lenisDestroy = () => lenis?.destroy?.();

      tickFn = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickFn);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);
    })();

    return () => {
      isActive = false;
      if (lenis) {
        lenis.destroy();
        delete (window as any).__lenis;
      }
      if (gsapInstance && tickFn) {
        gsapInstance.ticker.remove(tickFn);
      }
    };
  }, []);

  return null;
}
