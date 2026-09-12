import { useEffect } from "react";
import type Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    let lenis: Lenis | undefined;
    let isActive = true;
    let gsapInstance: ReturnType<typeof import("gsap")> extends Promise<infer M>
      ? M["default"]
      : never;
    let tickFn: ((time: number) => void) | undefined;

    (async () => {
      const [{ default: LenisClass }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!isActive) return;

      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      lenis = new LenisClass({
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      window.__lenis = lenis;
      window.__lenisStart = () => lenis?.start?.();
      window.__lenisStop = () => lenis?.stop?.();
      window.__lenisDestroy = () => lenis?.destroy?.();

      tickFn = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(tickFn);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);
    })();

    return () => {
      isActive = false;
      if (lenis) {
        lenis.destroy();
        window.__lenis = undefined;
      }
      if (gsapInstance && tickFn) {
        gsapInstance.ticker.remove(tickFn);
      }
    };
  }, []);

  return null;
}
