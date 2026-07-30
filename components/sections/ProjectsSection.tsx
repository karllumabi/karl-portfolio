import Link from "next/link";

import { projects } from "../../data/projects";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";
import ProjectCard from "../ui/ProjectCard";

const featuredProjects = projects.slice(0, 2);

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-6 bg-[var(--page)] pb-20 pt-6 sm:pb-28 sm:pt-10"
    >
      <Container>
        {/* Section heading */}
        <MotionReveal duration={0.75} y={20}>
          <div className="mb-8 flex flex-col gap-6 border-b border-[var(--border)] pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                Selected Work
              </p>

              <h2 className="mt-3 text-3xl font-normal tracking-[-0.035em] text-[var(--text)] sm:text-4xl">
                Featured Projects
              </h2>
            </div>

            <div className="sm:text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:text-xs">
                Two selected projects
              </p>

              <p className="mt-2 hidden text-sm text-[var(--muted)] sm:block">
                UI/UX · Visual Design · Development
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Two featured projects */}
        <div className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
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

        {/* View all projects */}
        <MotionReveal
          className="mt-10 flex justify-center sm:mt-12"
          delay={0.15}
          duration={0.8}
          y={20}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 text-sm font-medium text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:text-[var(--text)] sm:px-9 sm:py-5"
          >
            View all projects

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </MotionReveal>
      </Container>
    </section>
  );
}