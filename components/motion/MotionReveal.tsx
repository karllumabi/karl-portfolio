"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  amount?: number;
  trigger?: "load" | "view";
};

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  x = 0,
  y = 28,
  amount = 0.2,
  trigger = "view",
}: MotionRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const hidden = {
    opacity: 0,
    x,
    y,
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  const transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  if (trigger === "load") {
    return (
      <motion.div
        className={className}
        initial={shouldReduceMotion ? false : hidden}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : hidden}
      whileInView={visible}
      viewport={{
        once: true,
        amount,
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}