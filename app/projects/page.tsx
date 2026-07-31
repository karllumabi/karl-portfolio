import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "../../data/projects";

import Container from "../../components/layout/Container";
import MotionReveal from "../../components/motion/MotionReveal";
import ProjectGlowGrid from "../../components/sections/ProjectGlowGrid";
import ThemeToggle from "../../components/theme/ThemeToggle";
import ArrowUpRight from "../../components/ui/ArrowUpRight";

export const metadata: Metadata = {
  title: "Projects — Karl Lumabi",
  description:
    "Explore selected UI/UX design, mobile application, and front-end development projects by Karl Lumabi.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--page)] text-[var(--text)]">
      {/* Navigation */}
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
                Karl Lumabi · Portfolio
              </span>

              <ThemeToggle />
            </div>
          </nav>
        </Container>
      </header>

      {/* Page introduction */}
      <section className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Container>
          <MotionReveal
            trigger="load"
            duration={0.8}
            y={24}
          >
            <div className="flex flex-col gap-10 border-b border-[var(--border)] pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                  Selected work
                </p>

                <h1 className="mt-5 max-w-[900px] text-[clamp(3.5rem,9vw,8.5rem)] font-normal leading-[0.86] tracking-[-0.065em] text-[var(--text)]">
                  All
                  <span className="block text-[var(--muted-light)]">
                    Projects
                  </span>
                </h1>
              </div>

              <div className="max-w-[440px] lg:pb-2">
                <p className="font-mono text-sm leading-[1.9] tracking-wide text-[var(--muted)]">
                  A collection of UI/UX design, mobile
                  application, academic, and front-end
                  development projects.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="flex h-9 min-w-9 items-center justify-center rounded-full border border-[var(--border)] px-3 font-mono text-[10px] text-[var(--text-soft)]">
                    {String(projects.length).padStart(2, "0")}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)]">
                    Featured case studies
                  </span>
                </div>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>

      {/* All projects with project-colored glow */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <ProjectGlowGrid projects={projects} />
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[var(--border)] py-16 sm:py-20">
        <Container>
          <MotionReveal
            duration={0.8}
            y={20}
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                  End of projects
                </p>

                <h2 className="mt-3 text-3xl font-normal tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
                  Have a project in mind?
                </h2>
              </div>

              <Link
                href="/#contact"
                className="group inline-flex w-fit items-center gap-5 rounded-full bg-[var(--button)] px-7 py-4 text-sm font-medium text-[var(--button-text)] transition-transform duration-300 hover:-translate-y-1 sm:px-9 sm:py-5"
              >
                Start a conversation

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </main>
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