import Image from "next/image";

import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";
import ExperienceItem, {
  type Experience,
} from "../ui/ExperienceItem";

const resumePath = "/files/Karl-Lumabi-Resume.pdf";

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
                <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface-soft)] sm:rounded-[28px] xl:h-[calc(100svh-4rem)] xl:aspect-auto">
                  <Image
                    src="/images/karl-about.svg"
                    alt="Portrait of Karl Lumabi"
                    fill
                    unoptimized
                    priority
                    sizes="(min-width: 1280px) 58vw, 100vw"
                    className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.02]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
                </div>
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

                {/* Opens the PDF directly */}
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