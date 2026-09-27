"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { motionTiming, revealOffsets } from "@/app/lib/motion";
import { usePreferences } from "./preferences-provider";

interface RevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  variant?: keyof typeof revealOffsets;
  as?: "div" | "li";
}

export function Reveal({ children, className, delay = 0, variant = "rise", as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const { locale } = usePreferences();
  const Component = as === "li" ? motion.li : motion.div;
  const offset = variant === "slide" && locale === "ar"
    ? { opacity: 0, x: motionTiming.distance }
    : revealOffsets[variant];
  return (
    <Component
      className={`reveal ${className ?? ""}`}
      initial={reduceMotion ? false : offset}
      animate={reduceMotion ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: "some", margin: "0px 0px -24px 0px" }}
      transition={{ duration: reduceMotion ? 0 : motionTiming.reveal, delay: reduceMotion ? 0 : Math.min(delay, .14), ease: motionTiming.ease }}
    >
      {children}
    </Component>
  );
}
