"use client";

import Lenis from "lenis";
import { useEffect, type PropsWithChildren } from "react";

export function SmoothScroll({ children }: PropsWithChildren) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchPrimary = window.matchMedia("(hover: none) and (pointer: coarse)");
    const narrowScreen = window.matchMedia("(max-width: 720px)");
    let scroll: Lenis | undefined;
    const update = () => {
      scroll?.destroy();
      scroll = undefined;
      if (!reducedMotion.matches && !touchPrimary.matches && !narrowScreen.matches) {
        scroll = new Lenis({ lerp: 0.09, smoothWheel: true, autoRaf: true });
      }
    };
    update();
    reducedMotion.addEventListener("change", update);
    touchPrimary.addEventListener("change", update);
    narrowScreen.addEventListener("change", update);
    return () => {
      reducedMotion.removeEventListener("change", update);
      touchPrimary.removeEventListener("change", update);
      narrowScreen.removeEventListener("change", update);
      scroll?.destroy();
    };
  }, []);

  // Keep the page mounted when preferences change (especially an in-progress form).
  return children;
}
