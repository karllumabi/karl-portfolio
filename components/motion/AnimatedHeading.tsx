"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedHeadingProps = {
  lines: string[];
  level?: 1 | 2;
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: "load" | "view";
};

export default function AnimatedHeading({
  lines,
  level = 2,
  className = "",
  delay = 0,
  stagger = 0.07,
  trigger = "view",
}: AnimatedHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const Heading = level === 1 ? motion.h1 : motion.h2;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "110%",
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const headingContent = (
    <>
      <span className="sr-only">{lines.join(" ")}</span>

      <span aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <span
            key={`${line}-${lineIndex}`}
            className="block overflow-hidden"
          >
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={`${word}-${lineIndex}-${wordIndex}`}
                variants={wordVariants}
                className="mr-[0.24em] inline-block last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </span>
        ))}
      </span>
    </>
  );

  if (trigger === "load") {
    return (
      <Heading
        className={className}
        variants={containerVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        animate="visible"
      >
        {headingContent}
      </Heading>
    );
  }

  return (
    <Heading
      className={className}
      variants={containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.55,
      }}
    >
      {headingContent}
    </Heading>
  );
}