"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type PropsWithChildren } from "react";

export function SmoothScroll({ children }: PropsWithChildren) {
  const [useNativeScroll, setUseNativeScroll] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touchPrimary = window.matchMedia("(hover: none) and (pointer: coarse)");
    setUseNativeScroll(reducedMotion.matches || touchPrimary.matches);
  }, []);

  if (useNativeScroll) return children;

  return (
    <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
