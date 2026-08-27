"use client";

import Image from "next/image";
import { useRef } from "react";

import Container from "../layout/Container";
import HeroCursorTrail from "../motion/HeroCursorTrail";
import MotionReveal from "../motion/MotionReveal";
import TypewriterHeading from "../motion/TypewriterHeading";
import TypingUnderscore from "../motion/TypingUnderscore";
import ThemeToggle from "../theme/ThemeToggle";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-x-clip bg-[var(--page)]"
    >
      <Container>
        {/* Header */}
        <header className="w-full py-5 sm:py-8">
          <div className="flex w-full items-start justify-between gap-3 sm:gap-6">
            {/* Profile */}
            <MotionReveal
              trigger="load"
              x={-20}
              y={0}
              duration={0.7}
              className="min-w-0 flex-1"
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                {/* Profile image */}
                <a
                  href="#home"
                  aria-label="Go to homepage"
                  className="group relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-soft)] sm:h-12 sm:w-12"
                >
                  <Image
                    src="/images/karl-about.png"
                    alt="Karl Lumabi"
                    fill
                    priority
                    sizes="48px"
                    className="object-cover object-[center_15%] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </a>

                {/* Name and email */}
                <div className="min-w-0">
                  <p className="flex min-w-0 items-baseline whitespace-nowrap text-[13px] font-medium text-[var(--text)] sm:text-base">
                    <span>Karl Lumabi</span>
                    <TypingUnderscore />
                  </p>

                  <a
                    href="mailto:karllumabi23@gmail.com"
                    className="mt-1 block max-w-[135px] truncate text-[10px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)] min-[390px]:max-w-[155px] sm:max-w-none sm:text-sm"
                    title="karllumabi23@gmail.com"
                  >
                    karllumabi23@gmail.com
                  </a>
                </div>
              </div>
            </MotionReveal>

            {/* Right controls */}
            <MotionReveal
              trigger="load"
              x={20}
              y={0}
              delay={0.1}
              duration={0.7}
              className="shrink-0"
            >
              <div className="flex flex-col items-end gap-3 sm:gap-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <ThemeToggle />

                  <a
                    href="#contact"
                    className="whitespace-nowrap rounded-xl bg-[var(--button)] px-3.5 py-2.5 font-mono text-[10px] tracking-[0.12em] text-[var(--button-text)] transition-all duration-300 hover:-translate-y-1 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base sm:tracking-[0.18em]"
                  >
                    Contact
                  </a>
                </div>

                <a
                  href="https://www.linkedin.com/in/klumabi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-7 w-7 items-center justify-center border border-[var(--border-strong)] text-[10px] font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--text)] hover:text-[var(--page)] sm:text-xs"
                >
                  in
                </a>
              </div>
            </MotionReveal>
          </div>
        </header>

        {/* Hero content */}
        <div
          ref={heroContentRef}
          className="relative flex min-h-[44svh] flex-col justify-end pb-10 pt-12 sm:min-h-[47svh] sm:pb-12 sm:pt-12 lg:min-h-[49svh] lg:pb-14 lg:pt-14"
        >
          <HeroCursorTrail containerRef={heroContentRef} />

          <MotionReveal
            trigger="load"
            delay={0.18}
            duration={0.8}
            y={28}
          >
            <TypewriterHeading
              words={[
                "Digital Designer",
                "UI/UX Designer",
                "Front-end Developer",
              ]}
              className="min-h-[2.1em] max-w-full break-words text-[clamp(2.8rem,13vw,8.7rem)] font-normal leading-[0.92] tracking-[-0.06em] text-[var(--text)] sm:min-h-[1.1em] sm:text-[clamp(3.2rem,8.6vw,8.7rem)]"
            />
          </MotionReveal>

          <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <MotionReveal
              trigger="load"
              delay={0.48}
              duration={0.8}
              y={20}
            >
              <p className="max-w-[610px] font-mono text-xs leading-[1.9] tracking-wide text-[var(--muted)] sm:text-base sm:leading-relaxed">
                I inject personality into pixels, designing digital
                experiences that connect and feel human. Based in the
                Philippines.
              </p>
            </MotionReveal>

            <MotionReveal
              trigger="load"
              delay={0.58}
              duration={0.8}
              y={20}
            >
              <a
                href="#projects"
                className="group flex w-fit items-center gap-3 font-mono text-xs tracking-wide text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)] sm:text-base"
              >
                Scroll to Explore

                <span className="animate-bounce">↓</span>
              </a>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
