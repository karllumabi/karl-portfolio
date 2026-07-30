import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "../../data/projects";

import Container from "../../components/layout/Container";
import MotionReveal from "../../components/motion/MotionReveal";
import ThemeToggle from "../../components/theme/ThemeToggle";
import ProjectCard from "../../components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Karl Lumabi",
  description:
    "Selected UI/UX design, visual design, and front-end development projects by Karl Lumabi.",
};

function BackArrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M16.5 10H3.5M8.5 5L3.5 10L8.5 15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--page)] text-[var(--text)]">
      {/* Navigation */}
      <section className="border-b border-[var(--border)] bg-[var(--page)]">
        <Container>
          <MotionReveal trigger="load" y={0} duration={0.7}>
            <div className="flex items-center justify-between py-6 sm:py-8">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)] sm:text-sm"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  <BackArrow />
                </span>

                Back to portfolio
              </Link>

              <ThemeToggle />
            </div>
          </MotionReveal>
        </Container>
      </section>

      {/* Page introduction */}
      <section className="pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <Container>
          <MotionReveal
            trigger="load"
            delay={0.05}
            y={20}
            duration={0.8}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
              Selected Work
            </p>
          </MotionReveal>

          <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <MotionReveal
                trigger="load"
                delay={0.12}
                y={30}
                duration={0.9}
              >
                <h1 className="text-[clamp(4rem,10vw,10rem)] font-normal leading-[0.85] tracking-[-0.065em] text-[var(--text)]">
                  All
                  <span className="block text-[var(--muted-light)]">
                    Projects
                  </span>
                </h1>
              </MotionReveal>
            </div>

            <div className="lg:col-span-4 lg:pb-2">
              <MotionReveal
                trigger="load"
                delay={0.25}
                y={20}
                duration={0.8}
              >
                <p className="max-w-[520px] font-mono text-sm leading-[1.9] text-[var(--muted)] sm:text-base">
                  A collection of product design, mobile UI/UX, visual design,
                  and front-end development work.
                </p>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)]">
                  {String(projects.length).padStart(2, "0")} projects
                </p>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects grid */}
      <section className="border-t border-[var(--border)] pb-20 pt-10 sm:pb-28 sm:pt-14">
        <Container>
          <div className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <MotionReveal
                key={project.name}
                className="h-full"
                delay={index * 0.08}
                duration={0.85}
                y={30}
                amount={0.1}
              >
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}