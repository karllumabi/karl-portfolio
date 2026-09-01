"use client";

import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type HoverBorderGradientProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  duration?: number;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "children" | "className"
>;

export default function HoverBorderGradient<
  T extends ElementType = "button",
>({
  as,
  children,
  className = "",
  containerClassName = "",
  duration = 1.8,
  ...props
}: HoverBorderGradientProps<T>) {
  const Tag = as ?? "button";
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Tag
      {...props}
      className={`group relative isolate inline-flex overflow-hidden rounded-full bg-[var(--border)] p-px ${containerClassName}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[120%] opacity-0 blur-[1px]"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 245deg, var(--text) 305deg, var(--text) 330deg, transparent 360deg)",
        }}
        animate={{
          opacity: hovered ? 1 : 0,
          rotate: hovered && !shouldReduceMotion ? 360 : 0,
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: hovered && !shouldReduceMotion ? Infinity : 0,
        }}
      />

      <span
        className={`relative z-10 inline-flex w-full items-center justify-center rounded-[inherit] ${className}`}
      >
        {children}
      </span>
    </Tag>
  );
}
