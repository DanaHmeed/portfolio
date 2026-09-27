// Short, one-shot motion for groups; interaction timings live in globals.css.
export const motionTiming = {
  ease: [0.16, 1, 0.3, 1] as const,
  reveal: 0.45,
  stagger: 0.035,
  distance: 12,
};

export const revealOffsets = {
  rise: { opacity: 0, y: motionTiming.distance },
  slide: { opacity: 0, x: -motionTiming.distance },
  settle: { opacity: 0, scale: 0.98 },
};
