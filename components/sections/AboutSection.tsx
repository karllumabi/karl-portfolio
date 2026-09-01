"use client";

import Link from "next/link";

import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";
import ExperienceItem, {
  type Experience,
} from "../ui/ExperienceItem";
import HoverBorderGradient from "../ui/HoverBorderGradient";
import PortraitSwap from "../ui/PortraitSwap";

const resumePath = "/files/Karl-Lumabi-Resume.pdf";

const experiences: Experience[] = [
  {
    startYear: "Aug 2025",
    endYear: "Present",
    role: "UI/UX Designer, Front-End Developer & Graphic Designer",
    company: "Exquisite Properties PH",
  },
  {
    startYear: "Jan 2026",
    endYear: "Apr 2026",
    role: "UI/UX & Graphic Designer Intern",
    company: "Cloud Ready Technologies Corp.",
  },
];

export default function AboutSection() {
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
                <PortraitSwap
                  className="group relative block aspect-[4/5] w-full touch-manipulation select-none overflow-hidden rounded-[22px] border border-[var(--border)] bg-[#0d0d0d] text-left [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:aspect-[5/6] sm:rounded-[28px] xl:h-[calc(100svh-4rem)] xl:aspect-auto"
                  sizes="(min-width: 1280px) 58vw, (min-width: 640px) 90vw, 100vw"
                  priority
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />

                </PortraitSwap>
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

                <div className="flex w-full max-w-[390px] flex-col items-center py-10 text-center sm:py-14 xl:flex-1 xl:justify-center xl:py-12">
                  <AnimatedHeading
                    lines={[
                      "Hi, I’m Karl Lumabi",
                      "UI/UX & Graphic Designer",
                    ]}
                    className="max-w-[360px] text-2xl font-normal leading-[1.2] tracking-[-0.035em] text-[var(--text)] sm:text-3xl lg:text-[30px]"
                  />

                  <MotionReveal
                    delay={0.15}
                    y={18}
                  >
                    <p className="mt-8 max-w-[370px] font-mono text-xs leading-[1.85] tracking-wide text-[var(--muted)] sm:text-sm sm:leading-[1.9]">
                      UI/UX Designer and Front-End Developer with hands-on
                      experience designing responsive digital interfaces and
                      translating them into functional web experiences. I
                      combine visual design, reusable components, and
                      thoughtful interaction to create clear, consistent
                      products.
                    </p>
                  </MotionReveal>

                  <MotionReveal
                    delay={0.25}
                    y={12}
                  >
                    <div
                      aria-hidden="true"
                      className="my-9 h-10 w-px bg-[var(--border-strong)] sm:my-10 sm:h-11"
                    />
                  </MotionReveal>

                  <MotionReveal
                    delay={0.3}
                    y={14}
                  >
                    <div className="space-y-1 font-mono text-xs leading-[1.7] tracking-[0.1em] text-[var(--muted-light)] sm:text-sm">
                      <p>(UI/UX design + front-end development)</p>
                      <p>(Exquisite Properties PH)</p>
                      <p>(Figma to production)</p>
                      <p>(Based in the Philippines)</p>
                    </div>
                  </MotionReveal>

                  <MotionReveal
                    delay={0.4}
                    y={18}
                  >
                    <HoverBorderGradient
                      as={Link}
                      href="/about"
                      containerClassName="mt-9 transition-transform duration-300 hover:-translate-y-1"
                      className="gap-3 bg-[var(--button)] px-4 py-2.5 font-mono text-xs tracking-[0.08em] text-[var(--button-text)]"
                    >
                      More about me

                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </HoverBorderGradient>
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
              <article className="relative flex flex-col items-center overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-7 text-center sm:rounded-[28px] sm:p-10 xl:min-h-[calc(100svh-4rem)] xl:p-12">
                <span className="inline-flex rounded-xl border border-[var(--border)] px-5 py-2.5 font-mono text-xs tracking-[0.16em] text-[var(--muted)] sm:text-sm">
                  Experience
                </span>

                <div className="relative flex w-full max-w-[360px] flex-col items-center py-10 sm:py-14 xl:flex-1 xl:justify-center xl:py-12">
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
                  <HoverBorderGradient
                    as="a"
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    containerClassName="transition-transform duration-300 hover:-translate-y-1"
                    className="gap-4 bg-[var(--button)] px-7 py-4 text-sm font-medium text-[var(--button-text)]"
                  >
                    View Resume

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </HoverBorderGradient>
                </MotionReveal>
              </article>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
