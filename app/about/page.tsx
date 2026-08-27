import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "../../components/layout/Container";
import MotionReveal from "../../components/motion/MotionReveal";
import ThemeToggle from "../../components/theme/ThemeToggle";
import ArrowUpRight from "../../components/ui/ArrowUpRight";
import PortraitSwap from "../../components/ui/PortraitSwap";
import type { Project } from "../../components/ui/ProjectCard";
import { projects } from "../../data/projects";

export const metadata: Metadata = {
  title: "About — Karl Lumabi",
  description:
    "Learn more about Karl Lumabi, a UI/UX designer, graphic designer, and front-end developer based in the Philippines.",
};

const experience = [
  {
    period: "Aug 2025 — Present",
    role: "Graphic Designer & Social Media Manager",
    company: "Exquisite Properties PH",
    description:
      "Designing property listings, social content, and digital marketing materials while keeping every touchpoint consistent, clear, and recognisably on-brand.",
  },
  {
    period: "Jan 2026 — Apr 2026",
    role: "UI/UX & Graphic Designer Intern",
    company: "Cloud Ready Technologies Corp.",
    description:
      "Created client-ready graphics, responsive layouts, and interactive Figma prototypes while exploring a design-to-code workflow with the Figma MCP Server.",
  },
  {
    period: "2023",
    role: "UI/UX Designer",
    company: "School Project",
    description:
      "Translated early product ideas into user flows, wireframes, and considered interface designs for a real-world brief.",
  },
];

const skillGroups = [
  {
    label: "Design",
    skills: [
      "Figma",
      "UI/UX design",
      "Wireframing",
      "Prototyping",
      "Responsive layouts",
      "Graphic design",
      "Canva",
    ],
  },
  {
    label: "Development",
    skills: [
      "Next.js",
      "React Native",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "AI-assisted development",
    ],
  },
  {
    label: "Workflow",
    skills: [
      "Social media management",
      "Content scheduling",
      "Content publishing",
      "GitHub",
      "Visual Studio Code",
      "Vercel",
      "Figma MCP Server",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Make complexity feel simple.",
    body: "I look for the clearest path through a problem, then build the visual language around it.",
  },
  {
    number: "02",
    title: "Design the whole experience.",
    body: "From the first frame in Figma to the last detail in code, consistency is part of the craft.",
  },
  {
    number: "03",
    title: "Keep it human.",
    body: "Useful interfaces need personality, warmth, and enough room for people to feel in control.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page)] text-[var(--text)]">
      <header className="border-b border-[var(--border)]">
        <Container>
          <nav className="flex min-h-[76px] items-center justify-between gap-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-sm font-medium text-[var(--text)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] transition-colors duration-300 group-hover:border-[var(--button)] group-hover:bg-[var(--button)] group-hover:text-[var(--button-text)]">
                <ArrowLeft />
              </span>

              Back to portfolio
            </Link>

            <div className="flex items-center gap-4">
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-light)] sm:block">
                Karl Lumabi · About
              </span>

              <ThemeToggle />
            </div>
          </nav>
        </Container>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--border)] py-16 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 top-12 h-[520px] w-[520px] rounded-full bg-[var(--glow)] blur-[120px]"
        />

        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <MotionReveal
              trigger="load"
              duration={0.85}
              y={24}
              className="lg:col-span-7"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                About Karl / 01
              </p>

              <h1 className="mt-6 max-w-[900px] text-[clamp(3.5rem,8.8vw,8.8rem)] font-normal leading-[0.88] tracking-[-0.07em] text-[var(--text)]">
                Designing with
                <span className="block text-[var(--muted-light)]">
                  clarity and care.
                </span>
              </h1>

              <p className="mt-9 max-w-[650px] text-lg leading-8 text-[var(--text-soft)] sm:text-xl sm:leading-9">
                I&apos;m Karl Lumabi, an Information Technology graduate and
                multidisciplinary designer based in the Philippines. I turn
                complex ideas into digital experiences that feel clear,
                useful, and distinctly human.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="/files/Karl-Lumabi-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 rounded-full bg-[var(--button)] px-6 py-3.5 text-sm font-medium text-[var(--button-text)] transition-transform duration-300 hover:-translate-y-1"
                >
                  View resume

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-4 rounded-full border border-[var(--border)] px-6 py-3.5 text-sm font-medium text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--button)] hover:bg-[var(--button)] hover:text-[var(--button-text)]"
                >
                  Let&apos;s talk

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </MotionReveal>

            <MotionReveal
              trigger="load"
              duration={0.9}
              delay={0.12}
              x={24}
              className="lg:col-span-5"
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[36px]">
                <PortraitSwap
                  className="group relative block h-full w-full touch-manipulation select-none overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  showInstruction={false}
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/60">
                        Based in
                      </p>

                      <p className="mt-2 text-xl tracking-[-0.03em] text-white sm:text-2xl">
                        Naga City, Philippines
                      </p>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white/80">
                      01
                    </span>
                  </div>
                </PortraitSwap>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-8 sm:py-10">
        <Container>
          <div className="grid divide-y divide-[var(--border)] border-y border-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <Stat value="5+" label="Years exploring design" />
            <Stat value="03" label="Core disciplines" />
            <Stat value="01" label="Curious mind behind the work" />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <MotionReveal
              y={20}
              className="lg:col-span-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                How I work / 02
              </p>

              <h2 className="mt-5 max-w-[420px] text-4xl font-normal leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Thoughtful by default.
              </h2>
            </MotionReveal>

            <div className="grid gap-3 lg:col-span-8">
              {principles.map((principle, index) => (
                <MotionReveal
                  key={principle.number}
                  y={18}
                  delay={index * 0.08}
                >
                  <article className="group grid gap-6 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-500 hover:bg-[var(--surface-hover)] sm:grid-cols-[72px_1fr_1fr] sm:items-start sm:rounded-[28px] sm:p-8">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted-light)]">
                      {principle.number}
                    </span>

                    <h3 className="max-w-[270px] text-2xl leading-[1.05] tracking-[-0.04em] text-[var(--text)] sm:text-3xl">
                      {principle.title}
                    </h3>

                    <p className="max-w-[330px] text-sm leading-7 text-[var(--muted)] sm:pt-1">
                      {principle.body}
                    </p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <MotionReveal
              y={20}
              className="lg:col-span-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                Education / 03
              </p>

              <h2 className="mt-5 max-w-[420px] text-4xl font-normal leading-[0.95] tracking-[-0.055em] sm:text-5xl">
                Grounded in technology.
              </h2>
            </MotionReveal>

            <MotionReveal
              y={20}
              delay={0.1}
              className="lg:col-span-8"
            >
              <article className="grid gap-6 rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:rounded-[28px] sm:p-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)]">
                    Aug 2022 — Apr 2026 · Naga City, Philippines
                  </p>

                  <h3 className="mt-4 text-3xl tracking-[-0.045em] text-[var(--text)] sm:text-4xl">
                    Ateneo de Naga University
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
                    Bachelor of Science in Information Technology
                  </p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] font-mono text-[10px] tracking-[0.16em] text-[var(--muted)]">
                  BSIT
                </span>
              </article>
            </MotionReveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 border-b border-[var(--border)] pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                Experience / 04
              </p>

              <h2 className="mt-5 max-w-[720px] text-4xl font-normal leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                A practice built across design and technology.
              </h2>
            </div>

            <p className="max-w-[330px] font-mono text-xs leading-7 tracking-wide text-[var(--muted)] sm:text-sm">
              Every role has sharpened the same instinct: make the important
              thing easier to see, understand, and use.
            </p>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {experience.map((item, index) => (
              <MotionReveal
                key={`${item.company}-${item.period}`}
                y={20}
                delay={index * 0.08}
              >
                <article className="grid gap-5 py-8 sm:grid-cols-[180px_1fr_1.05fr] sm:gap-8 sm:py-10 lg:grid-cols-[220px_1fr_1fr] lg:gap-12">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:pt-1 sm:text-xs">
                    {item.period}
                  </p>

                  <div>
                    <h3 className="text-2xl tracking-[-0.04em] text-[var(--text)] sm:text-3xl">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {item.company}
                    </p>
                  </div>

                  <p className="max-w-[430px] text-sm leading-7 text-[var(--muted)] sm:pt-1 sm:text-[15px]">
                    {item.description}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 border-b border-[var(--border)] pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-14">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                Selected work / {String(projects.length).padStart(2, "0")}
              </p>

              <h2 className="mt-5 text-4xl font-normal leading-[0.92] tracking-[-0.06em] sm:text-6xl">
                From first frame to final build.
              </h2>
            </div>

            <Link
              href="/projects"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border)] px-5 py-3 text-sm text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--button)] hover:bg-[var(--button)] hover:text-[var(--button-text)]"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid gap-4 pt-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <MotionReveal
                key={project.name}
                y={24}
                delay={index * 0.08}
              >
                {project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[28px]"
                  >
                    <ProjectPreview project={project} />
                  </a>
                ) : (
                  <Link
                    href={project.href ?? "/projects"}
                    className="group block overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[28px]"
                  >
                    <ProjectPreview project={project} />
                  </Link>
                )}
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                Toolkit / 06
              </p>

              <h2 className="mt-5 max-w-[420px] text-4xl font-normal leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                The tools behind the thinking.
              </h2>
            </div>

            <div className="grid gap-3 lg:col-span-8 md:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[22px] border border-[var(--border)] p-5 sm:rounded-[28px] sm:p-7"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-light)]">
                    {group.label}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-sm text-[var(--text-soft)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--text)] opacity-60" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <MotionReveal y={30}>
            <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] px-6 py-12 sm:rounded-[36px] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 right-0 select-none text-[clamp(8rem,22vw,20rem)] font-medium leading-none tracking-[-0.1em] text-[var(--text)] opacity-[0.025]"
              >
                HELLO
              </span>

              <div className="relative max-w-[820px]">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                  Next chapter / 07
                </p>

                <h2 className="mt-6 text-4xl font-normal leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                  Let&apos;s make something useful, beautiful, and memorable.
                </h2>

                <Link
                  href="/#contact"
                  className="relative mt-9 inline-flex items-center gap-5 overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--button)] px-7 py-4 text-sm font-medium tracking-wide text-[var(--button-text)] shadow-[0_18px_55px_rgba(0,0,0,0.16)] sm:px-9 sm:py-5 sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="cta-auto-sheen pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-70 blur-lg"
                  />

                  <span className="relative z-10">
                    Start a conversation
                  </span>

                  <span className="cta-auto-arrow relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--button-text)] text-[var(--button)] sm:h-10 sm:w-10">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </MotionReveal>

          <div className="flex flex-col gap-3 px-2 pt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-light)] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
            <p>© 2026 Karl Lumabi</p>
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[var(--text)]"
            >
              Back to portfolio
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-6 px-5 py-5 sm:block sm:px-7 sm:py-6">
      <span className="text-3xl tracking-[-0.06em] text-[var(--text)] sm:text-4xl">
        {value}
      </span>

      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:mt-3 sm:block sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
          {project.external ? "Live" : project.year}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted-light)]">
          {project.category}
        </p>

        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl tracking-[-0.04em] text-[var(--text)]">
            {project.name}
          </h3>

          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </>
  );
}

function ArrowLeft() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M14 10H6M9 7L6 10L9 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
