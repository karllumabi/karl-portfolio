"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";
import ExperienceItem, {
  type Experience,
} from "../ui/ExperienceItem";

const resumePath = "/files/Karl-Lumabi-Resume.pdf";

const defaultPortrait = "/images/karl-about.png";
const alternatePortrait = "/images/karl-about-hover1.png";

const experiences: Experience[] = [
  {
    startYear: "2022",
    endYear: "Now",
    role: "Graphics Designer",
    company: "Exquisite Properties PH",
  },
  {
    startYear: "2026",
    endYear: "Now",
    role: "UI/UX Designer & Front-end Developer",
    company: "Exquisite Properties PH",
  },
  {
    startYear: "2023",
    endYear: "2023",
    role: "UI/UX Designer",
    company: "School Project",
  },
];

export default function AboutSection() {
  const [supportsHover, setSupportsHover] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const updateHoverSupport = () => {
      setSupportsHover(hoverMediaQuery.matches);
    };

    updateHoverSupport();

    hoverMediaQuery.addEventListener(
      "change",
      updateHoverSupport,
    );

    return () => {
      hoverMediaQuery.removeEventListener(
        "change",
        updateHoverSupport,
      );
    };
  }, []);

  const showAlternatePortrait = supportsHover
    ? isHovering
    : isTapped;

  const handlePortraitClick = () => {
    if (supportsHover) {
      return;
    }

    setIsTapped((current) => !current);
  };

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[var(--page)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-5 xl:grid-cols-12">
          {/* Portrait */}
          <div className="xl:col-span-7">
            <div className="xl:sticky xl:top-8">
              <MotionReveal
                y={0}
                duration={1}
                amount={0.1}
              >
                <button
                  type="button"
                  onClick={handlePortraitClick}
                  onMouseEnter={() => {
                    if (supportsHover) {
                      setIsHovering(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (supportsHover) {
                      setIsHovering(false);
                    }
                  }}
                  aria-label={
                    showAlternatePortrait
                      ? "Show original portrait"
                      : "Show alternate portrait"
                  }
                  aria-pressed={showAlternatePortrait}
                  className="group relative block aspect-[4/5] w-full touch-manipulation select-none overflow-hidden rounded-[22px] border border-[var(--border)] bg-[#0d0d0d] text-left [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:aspect-[5/6] sm:rounded-[28px] xl:h-[calc(100svh-4rem)] xl:aspect-auto"
                >
                  {/* Original portrait */}
                  <Image
                    src={defaultPortrait}
                    alt="Karl Lumabi wearing graduation attire"
                    fill
                    priority
                    unoptimized
                    draggable={false}
                    sizes="(min-width: 1280px) 58vw, (min-width: 640px) 90vw, 100vw"
                    className={`pointer-events-none object-cover object-top transition-all duration-700 ease-in-out ${
                      showAlternatePortrait
                        ? "scale-[1.02] opacity-0"
                        : "scale-100 opacity-100"
                    }`}
                  />

                  {/* Alternate portrait */}
                  <Image
                    src={alternatePortrait}
                    alt="Karl Lumabi wearing a cap, glasses, and earrings"
                    fill
                    unoptimized
                    draggable={false}
                    sizes="(min-width: 1280px) 58vw, (min-width: 640px) 90vw, 100vw"
                    className={`pointer-events-none object-cover object-top transition-all duration-700 ease-in-out ${
                      showAlternatePortrait
                        ? "scale-[1.02] opacity-100"
                        : "scale-100 opacity-0"
                    }`}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />

                  {/* Instruction */}
                  <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-5">
                    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/50 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/75 shadow-lg backdrop-blur-md">
                      <SwitchIcon />

                      {supportsHover
                        ? "Hover to switch look"
                        : showAlternatePortrait
                          ? "Tap to switch back"
                          : "Tap to switch look"}
                    </span>
                  </div>
                </button>
              </MotionReveal>
            </div>
          </div>

          {/* About and experience */}
          <div className="flex flex-col gap-5 xl:col-span-5">
            {/* About card */}
            <MotionReveal
              duration={0.85}
              x={25}
              y={0}
              amount={0.15}
            >
              <article className="flex flex-col items-center rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 text-center sm:rounded-[28px] sm:p-10 xl:min-h-[calc(100svh-4rem)] xl:p-12">
                <span className="inline-flex rounded-xl border border-[var(--border)] px-5 py-2.5 font-mono text-xs tracking-[0.16em] text-[var(--muted)] sm:text-sm">
                  About
                </span>

                <div className="flex w-full flex-col items-center py-10 text-center sm:py-14 xl:flex-1 xl:justify-center xl:py-12">
                  <AnimatedHeading
                    lines={[
                      "Hi, I’m Karl Lumabi",
                      "UI/UX & Graphic Designer",
                    ]}
                    className="max-w-[430px] text-2xl font-normal leading-[1.25] tracking-[-0.025em] text-[var(--text)] sm:text-3xl lg:text-[34px]"
                  />

                  <MotionReveal
                    delay={0.15}
                    y={18}
                  >
                    <p className="mt-8 max-w-[460px] font-mono text-sm leading-[1.9] tracking-wide text-[var(--muted)] sm:text-base">
                      I create thoughtful digital experiences and
                      visual identities that balance personality,
                      usability, and business goals.
                    </p>
                  </MotionReveal>

                  <MotionReveal
                    delay={0.25}
                    y={18}
                  >
                    <p className="mt-5 max-w-[460px] font-mono text-sm leading-[1.9] tracking-wide text-[var(--muted)] sm:text-base">
                      My work spans branding, UI/UX, graphic design,
                      and front-end development, allowing me to create
                      consistent experiences from the first idea to
                      final execution.
                    </p>
                  </MotionReveal>
                </div>
              </article>
            </MotionReveal>

            {/* Experience card */}
            <MotionReveal
              duration={0.85}
              x={25}
              y={0}
              amount={0.12}
            >
              <article className="flex flex-col items-center rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 text-center sm:rounded-[28px] sm:p-10 xl:min-h-[calc(100svh-4rem)] xl:p-12">
                <span className="inline-flex rounded-xl border border-[var(--border)] px-5 py-2.5 font-mono text-xs tracking-[0.16em] text-[var(--muted)] sm:text-sm">
                  Experience
                </span>

                <div className="flex w-full flex-col items-center py-10 sm:py-14 xl:flex-1 xl:justify-center xl:py-12">
                  {experiences.map((experience, index) => (
                    <MotionReveal
                      key={`${experience.role}-${experience.startYear}`}
                      className="w-full"
                      delay={index * 0.12}
                      y={18}
                      amount={0.15}
                    >
                      <ExperienceItem
                        experience={experience}
                        showDivider={
                          index < experiences.length - 1
                        }
                      />
                    </MotionReveal>
                  ))}
                </div>

                <MotionReveal
                  delay={0.2}
                  y={15}
                >
                  <a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-full bg-[var(--button)] px-7 py-4 text-sm font-medium text-[var(--button-text)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    View Resume

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </MotionReveal>
              </article>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SwitchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path
        d="M3.5 7.25A6.75 6.75 0 0 1 15.3 4.8L17 6.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M17 3.5V6.5H14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.5 12.75A6.75 6.75 0 0 1 4.7 15.2L3 13.5"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 16.5V13.5H6"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}