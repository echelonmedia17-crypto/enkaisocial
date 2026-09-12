import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
    __lenisStart?: () => void;
    __lenisStop?: () => void;
    __lenisDestroy?: () => void;
  }
}

export {};
