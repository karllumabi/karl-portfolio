"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type TypewriterHeadingProps = {
  words?: string[];
  className?: string;
};

type Phase = "typing" | "pausing" | "deleting";

const defaultWords = [
  "Digital Designer",
  "UI/UX Designer",
  "Front-end Developer",
];

export default function TypewriterHeading({
  words = defaultWords,
  className = "",
}: TypewriterHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  const currentWord = words[wordIndex] ?? words[0];
  const wordsKey = words.join("|");

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedText(words[0]);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentWord.slice(0, displayedText.length + 1),
          );
        }, 75);
      } else {
        timeout = setTimeout(() => {
          setPhase("pausing");
        }, 1300);
      }
    }

    if (phase === "pausing") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 350);
    }

    if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((text) => text.slice(0, -1));
        }, 38);
      } else {
        timeout = setTimeout(() => {
          setWordIndex((index) => (index + 1) % words.length);
          setPhase("typing");
        }, 220);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentWord,
    displayedText,
    phase,
    shouldReduceMotion,
    words,
    wordsKey,
  ]);

  return (
    <h1
      className={className}
      aria-label={words.join(", ")}
    >
      <span aria-hidden="true">{displayedText}</span>

      <motion.span
        aria-hidden="true"
        className="ml-[0.06em] inline-block h-[0.78em] w-[0.025em] translate-y-[0.04em] bg-[var(--text)]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [1, 1, 0, 0, 1],
              }
        }
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </h1>
  );
}