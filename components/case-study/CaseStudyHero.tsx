import Image from "next/image";

import type { CaseStudyProject } from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";

type CaseStudyHeroProps = {
  project: CaseStudyProject;
};

export default function CaseStudyHero({
  project,
}: CaseStudyHeroProps) {
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <Container>
        {/* Tags */}
        <MotionReveal
          trigger="load"
          delay={0.05}
          y={18}
          duration={0.8}
        >
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </MotionReveal>

        {/* Title and description */}
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <MotionReveal
              trigger="load"
              delay={0.12}
              y={30}
              duration={0.9}
            >
              <h1 className="max-w-[1200px] text-[clamp(4.4rem,11vw,11rem)] font-normal leading-[0.82] tracking-[-0.07em] text-[var(--text)]">
                {project.titleLines.map((line, index) => (
                  <span
                    key={`${line}-${index}`}
                    className={
                      index === 0
                        ? "block"
                        : "block text-[var(--muted-light)]"
                    }
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </MotionReveal>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <MotionReveal
              trigger="load"
              delay={0.28}
              y={22}
              duration={0.8}
            >
              <p className="max-w-[540px] font-mono text-sm leading-[1.9] tracking-wide text-[var(--muted)] sm:text-base">
                {project.heroDescription}
              </p>

              {/* Hero buttons */}
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#case-study"
                  className="group inline-flex items-center gap-4 rounded-full bg-[var(--button)] px-6 py-3.5 text-sm font-medium text-[var(--button-text)] transition-all duration-300 hover:-translate-y-1"
                >
                  {project.exploreLabel ?? "Explore the case study"}

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>

                {project.externalLink ? (
                  <a
                    href={project.externalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                  >
                    {project.externalLink.label}

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                ) : null}
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* Hero image */}
        <MotionReveal
          trigger="load"
          delay={0.38}
          y={35}
          duration={1}
          className="mt-14 sm:mt-20"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[32px]">
            <Image
              src={project.heroImage}
              alt={project.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
            />
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}