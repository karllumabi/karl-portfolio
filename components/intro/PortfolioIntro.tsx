"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const ACCENT_COLOR = "#b8b8b8";

const roles = [
  "UI/UX DESIGNER",
  "GRAPHIC DESIGNER",
  "FRONT-END DEVELOPER",
];

export default function PortfolioIntro() {
  const reduceMotion = Boolean(useReducedMotion());

  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  const animationFrameRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const removeTimerRef = useRef<number | null>(null);
  const roleTimerRef = useRef<number | null>(null);

  const isClosingRef = useRef(false);
  const previousHtmlOverflowRef = useRef("");
  const previousBodyOverflowRef = useRef("");

  const restoreScrolling = useCallback(() => {
    document.documentElement.style.overflow =
      previousHtmlOverflowRef.current;

    document.body.style.overflow =
      previousBodyOverflowRef.current;
  }, []);

  const closeIntro = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;

    setProgress(100);
    setIsExiting(true);

    removeTimerRef.current = window.setTimeout(
      () => {
        restoreScrolling();
        setIsVisible(false);
      },
      reduceMotion ? 50 : 1050,
    );
  }, [reduceMotion, restoreScrolling]);

  useEffect(() => {
    previousHtmlOverflowRef.current =
      document.documentElement.style.overflow;

    previousBodyOverflowRef.current =
      document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const progressDuration = reduceMotion ? 400 : 3000;
    const introDuration = reduceMotion ? 600 : 3400;

    const startedAt = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startedAt;

      const nextProgress = Math.min(
        100,
        Math.round(
          (elapsed / progressDuration) * 100,
        ),
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrameRef.current =
          requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current =
      requestAnimationFrame(updateProgress);

    roleTimerRef.current = window.setInterval(
      () => {
        setRoleIndex(
          (currentIndex) =>
            (currentIndex + 1) % roles.length,
        );
      },
      reduceMotion ? 150 : 760,
    );

    exitTimerRef.current = window.setTimeout(
      closeIntro,
      introDuration,
    );

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );
      }

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }

      if (removeTimerRef.current !== null) {
        window.clearTimeout(removeTimerRef.current);
      }

      if (roleTimerRef.current !== null) {
        window.clearInterval(roleTimerRef.current);
      }

      restoreScrolling();
    };
  }, [closeIntro, reduceMotion, restoreScrolling]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed inset-0 z-[99999] overflow-hidden ${
            isExiting
              ? "pointer-events-none"
              : "pointer-events-auto"
          }`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.15,
          }}
          aria-hidden="true"
        >
          {/* Left curtain */}
          <motion.div
            className="absolute inset-y-0 left-0 w-[50.5%] bg-[#080909]"
            initial={{ x: "0%" }}
            animate={{
              x: isExiting ? "-102%" : "0%",
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Right curtain */}
          <motion.div
            className="absolute inset-y-0 right-0 w-[50.5%] bg-[#080909]"
            initial={{ x: "0%" }}
            animate={{
              x: isExiting ? "102%" : "0%",
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Gray glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-[1]"
            animate={{
              opacity: isExiting ? 0 : 1,
            }}
            transition={{ duration: 0.35 }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 42%, rgba(184, 184, 184, 0.11), transparent 48%)",
            }}
          />

          {/* Background grid */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-[1]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isExiting ? 0 : 0.13,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255, 255, 255, 0.08) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.08) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "80px 80px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />

          {/* Moving scanner */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 z-[2] w-px bg-gradient-to-b from-transparent via-[#b8b8b8]/60 to-transparent"
            initial={{ left: "-5%" }}
            animate={{ left: "105%" }}
            transition={{
              duration: reduceMotion ? 0.01 : 3.4,
              ease: "linear",
            }}
          />

          {/* Main content */}
          <motion.div
            className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-6 text-[#f5f5f1] sm:px-10 sm:py-8 lg:px-14 lg:py-10"
            animate={{
              opacity: isExiting ? 0 : 1,
              scale: isExiting ? 0.98 : 1,
              filter: isExiting
                ? "blur(8px)"
                : "blur(0px)",
            }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.4,
            }}
          >
            {/* Header */}
            <header>
              <motion.div
                className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-white/45 sm:text-[10px]"
                initial={{
                  opacity: 0,
                  y: -12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-[#b8b8b8]"
                    animate={{
                      opacity: [0.25, 1, 0.25],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                  />

                  <span>Portfolio / 2026</span>
                </div>

                <button
                  type="button"
                  onClick={closeIntro}
                  className="py-2 text-white/45 transition-colors duration-300 hover:text-white"
                >
                  Skip intro
                </button>
              </motion.div>

              <motion.div
                className="mt-5 h-px origin-left bg-white/15"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </header>

            {/* Main intro */}
            <main className="grid items-end gap-12 py-12 md:grid-cols-[minmax(0,1fr)_300px] md:py-16 lg:grid-cols-[minmax(0,1fr)_390px]">
              {/* Name */}
              <div>
                <motion.div
                  className="mb-5 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35 sm:text-[10px]"
                  initial={{
                    opacity: 0,
                    x: -18,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                  }}
                >
                  <span className="h-px w-8 bg-[#b8b8b8]/70" />

                  Design portfolio of
                </motion.div>

                <div className="font-sans text-[clamp(4.5rem,14vw,11rem)] font-medium uppercase leading-[0.75] tracking-[-0.085em]">
                  <div className="flex overflow-hidden">
                    {"KARL".split("").map(
                      (letter, index) => (
                        <span
                          key={`karl-${index}`}
                          className="inline-block overflow-hidden"
                        >
                          <motion.span
                            className="inline-block"
                            initial={{
                              y: "120%",
                              opacity: 0,
                            }}
                            animate={{
                              y: "0%",
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.8,
                              delay:
                                0.32 + index * 0.06,
                              ease: [
                                0.16, 1, 0.3, 1,
                              ],
                            }}
                          >
                            {letter}
                          </motion.span>
                        </span>
                      ),
                    )}
                  </div>

                  <div className="flex overflow-hidden">
                    {"LUMABI".split("").map(
                      (letter, index) => (
                        <span
                          key={`lumabi-${index}`}
                          className="inline-block overflow-hidden"
                        >
                          <motion.span
                            className="inline-block"
                            initial={{
                              y: "120%",
                              opacity: 0,
                            }}
                            animate={{
                              y: "0%",
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.8,
                              delay:
                                0.58 + index * 0.06,
                              ease: [
                                0.16, 1, 0.3, 1,
                              ],
                            }}
                          >
                            {letter}
                          </motion.span>
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <motion.div
                  className="mt-7 flex max-w-xl items-center gap-4"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 1.15,
                  }}
                >
                  <span className="h-px flex-1 bg-white/15" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 sm:text-[9px]">
                    Philippines
                  </span>
                </motion.div>
              </div>

              {/* Roles */}
              <div className="flex flex-col gap-12 md:pb-2">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.9,
                  }}
                >
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                    Specializing in
                  </p>

                  <div className="relative h-7 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={roles[roleIndex]}
                        className="absolute left-0 top-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-[#b8b8b8] sm:text-sm"
                        initial={{
                          opacity: 0,
                          y: 18,
                          filter: "blur(5px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          opacity: 0,
                          y: -18,
                          filter: "blur(5px)",
                        }}
                        transition={{
                          duration: reduceMotion
                            ? 0.01
                            : 0.3,
                        }}
                      >
                        {roles[roleIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 1.6,
                  }}
                >
                  <p className="text-base font-medium uppercase leading-[1.15] tracking-[-0.02em] text-white/90 sm:text-xl lg:text-2xl">
                    Designing clarity
                  </p>

                  <p className="text-base font-medium uppercase leading-[1.15] tracking-[-0.02em] text-white/40 sm:text-xl lg:text-2xl">
                    from complexity.
                  </p>

                  <motion.div
                    className="mt-6 h-px w-16 origin-left bg-[#b8b8b8]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.95,
                    }}
                  />
                </motion.div>
              </div>
            </main>

            {/* Loading */}
            <footer>
              <div className="mb-4 flex items-end justify-between">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.75,
                  }}
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                    System status
                  </p>

                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                    {progress >= 100
                      ? "Ready to enter"
                      : "Loading portfolio"}
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-end gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="font-mono text-3xl font-light leading-none tracking-[-0.06em] text-white sm:text-4xl">
                    {String(progress).padStart(2, "0")}
                  </span>

                  <span
                    className="pb-0.5 font-mono text-[9px]"
                    style={{ color: ACCENT_COLOR }}
                  >
                    %
                  </span>
                </motion.div>
              </div>

              <div className="relative h-[2px] overflow-hidden bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[#b8b8b8]"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{
                    left: `${Math.max(
                      progress - 4,
                      0,
                    )}%`,
                  }}
                  transition={{
                    duration: 0.08,
                    ease: "linear",
                  }}
                />
              </div>

              <motion.div
                className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/25 sm:text-[9px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.05 }}
              >
                <span>UI/UX Design</span>

                <span className="text-[#b8b8b8]/60">
                  ✦
                </span>

                <span>Graphic Design</span>

                <span className="text-[#b8b8b8]/60">
                  ✦
                </span>

                <span>Front-end Development</span>
              </motion.div>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}