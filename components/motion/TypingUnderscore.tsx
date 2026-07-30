"use client";

import { motion, useReducedMotion } from "motion/react";

export default function TypingUnderscore() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className="ml-[0.08em] inline-block overflow-hidden whitespace-nowrap align-baseline font-mono text-[var(--text)]"
      initial={{
        width: shouldReduceMotion ? "1ch" : "0ch",
      }}
      animate={
        shouldReduceMotion
          ? {
              width: "1ch",
            }
          : {
              width: ["0ch", "1ch", "1ch", "0ch", "0ch"],
            }
      }
      transition={{
        duration: 1.6,
        repeat: Infinity,
        times: [0, 0.12, 0.65, 0.78, 1],
        ease: "linear",
      }}
    >
      _
    </motion.span>
  );
}