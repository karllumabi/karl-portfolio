import Image from "next/image";

import type { WebsiteCaseStudyProject } from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";

import BrowserFrame from "./BrowserFrame";
import CaseStudyCTA from "./CaseStudyCTA";
import CaseStudyNavigation from "./CaseStudyNavigation";
import CaseStudyOutcome from "./CaseStudyOutcome";
import CaseStudyOverview from "./CaseStudyOverview";

type WebsiteCaseStudyPageProps = {
  project: WebsiteCaseStudyProject;
};

export default function WebsiteCaseStudyPage({
  project,
}: WebsiteCaseStudyPageProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--page)] text-[var(--text)]">
      {/* Navigation */}
      <CaseStudyNavigation
        backHref={project.backHref}
        backLabel={project.backLabel}
        projectNumber={project.projectNumber}
        year={project.year}
      />

      {/* Hero */}
      <section className="bg-[var(--page)] pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <Container>
          <MotionReveal
            trigger="load"
            delay={0.05}
            y={18}
            duration={0.8}
          >
            <div className="flex flex-wrap items-center gap-3">
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

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <MotionReveal
                trigger="load"
                delay={0.12}
                y={30}
                duration={0.9}
              >
                <h1 className="max-w-[1200px] text-[clamp(3.6rem,9vw,9.5rem)] font-normal leading-[0.82] tracking-[-0.065em] text-[var(--text)]">
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

                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href={project.liveSite.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-4 rounded-full bg-[var(--button)] px-6 py-3.5 text-sm font-medium text-[var(--button-text)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    {project.liveSite.label}

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>

                  <a
                    href="#case-study"
                    className="group inline-flex items-center gap-4 px-1 py-3 text-sm text-[var(--text-soft)] transition-colors duration-300 hover:text-[var(--text)]"
                  >
                    {project.exploreLabel ?? "Explore the case study"}

                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </MotionReveal>
            </div>
          </div>

          {/* Live website preview */}
          <MotionReveal
            trigger="load"
            delay={0.38}
            y={35}
            duration={1}
            className="mt-14 sm:mt-20"
          >
            <BrowserFrame
              image={project.heroImage}
              imageAlt={project.heroImageAlt}
              domain={project.browserDomain}
              liveUrl={project.liveSite.href}
              priority
            />
          </MotionReveal>
        </Container>
      </section>

      {/* Overview */}
      <CaseStudyOverview
        details={project.details}
        overview={project.overview}
      />

      {/* Experience principles */}
      <section className="border-t border-[var(--border)] bg-[var(--page)] py-20 sm:py-28">
        <Container>
          <MotionReveal y={20} duration={0.8}>
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)] sm:text-xs">
                  {project.experiencePrinciples.eyebrow}
                </p>

                <h2 className="mt-5 max-w-[600px] text-4xl leading-[1.02] tracking-[-0.045em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                  {project.experiencePrinciples.title}
                </h2>
              </div>

              <p className="max-w-[540px] font-mono text-sm leading-[1.9] text-[var(--muted)] lg:col-span-5 lg:col-start-8 lg:self-end">
                {project.experiencePrinciples.description}
              </p>
            </div>
          </MotionReveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {project.experiencePrinciples.items.map(
              (principle, index) => (
                <MotionReveal
                  key={principle.number}
                  className="h-full"
                  delay={index * 0.1}
                  y={25}
                  duration={0.8}
                >
                  <article className="flex h-full min-h-[360px] flex-col rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-7 transition-transform duration-500 hover:-translate-y-2 sm:rounded-[30px] sm:p-9">
                    <p className="font-mono text-xs tracking-[0.18em] text-[var(--muted-light)]">
                      {principle.number}
                    </p>

                    <div className="mt-auto pt-20">
                      <h3 className="max-w-[320px] text-2xl leading-tight tracking-[-0.025em] text-[var(--text)] sm:text-3xl">
                        {principle.title}
                      </h3>

                      <p className="mt-5 font-mono text-xs leading-[1.9] text-[var(--muted)] sm:text-sm">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              ),
            )}
          </div>
        </Container>
      </section>

      {/* Website showcase */}
      <section className="border-t border-[var(--border)] bg-[var(--page)] py-20 sm:py-28">
        <Container>
          <MotionReveal y={20} duration={0.8}>
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)] sm:text-xs">
                  {project.showcase.eyebrow}
                </p>

                <h2 className="mt-5 max-w-[800px] text-4xl leading-[1.04] tracking-[-0.045em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                  {project.showcase.title}
                </h2>
              </div>

              <p className="max-w-[420px] font-mono text-xs leading-[1.8] text-[var(--muted)] sm:text-sm">
                {project.showcase.description}
              </p>
            </div>
          </MotionReveal>

          {/* Static browser showcase */}
          <MotionReveal
            y={35}
            duration={1}
            className="mt-14"
          >
            <BrowserFrame
              image={project.showcase.browser.image}
              imageAlt={project.showcase.browser.imageAlt}
              domain={project.showcase.browser.domain}
            />
          </MotionReveal>

          <div className="mt-5 grid gap-5 lg:grid-cols-12">
            {/* Desktop experience */}
            <MotionReveal
              className="lg:col-span-7"
              y={30}
              duration={0.9}
            >
              <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:min-h-[620px] sm:rounded-[30px]">
                <Image
                  src={project.showcase.featured.image}
                  alt={project.showcase.featured.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    {project.showcase.featured.label}
                  </p>

                  <p className="mt-2 max-w-[460px] text-sm text-white/90 sm:text-base">
                    {project.showcase.featured.description}
                  </p>
                </div>
              </div>
            </MotionReveal>

            <div className="grid gap-5 lg:col-span-5">
              {/* Navigation preview */}
              <MotionReveal y={30} duration={0.9}>
                <div className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:min-h-[380px] sm:rounded-[30px]">
                  <Image
                    src={project.showcase.navigation.image}
                    alt={project.showcase.navigation.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="scale-[1.35] object-cover object-top"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                      {project.showcase.navigation.label}
                    </p>

                    <p className="mt-2 text-sm text-white/90">
                      {project.showcase.navigation.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>

              {/* Philosophy */}
              <MotionReveal y={30} duration={0.9}>
                <article className="flex min-h-[300px] flex-col justify-between rounded-[24px] border border-[var(--accent-card-border)] bg-[var(--accent-card)] p-7 text-[var(--accent-card-text)] sm:min-h-[380px] sm:rounded-[30px] sm:p-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-card-soft)]">
                    {project.showcase.philosophy.eyebrow}
                  </p>

                  <p className="max-w-[450px] text-3xl leading-[1.12] tracking-[-0.04em] sm:text-4xl">
                    {project.showcase.philosophy.statement}
                  </p>
                </article>
              </MotionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t border-[var(--border)] bg-[var(--page)] py-20 sm:py-28">
        <Container>
          <MotionReveal y={20} duration={0.8}>
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)] sm:text-xs">
                  {project.process.eyebrow}
                </p>

                <h2 className="mt-5 text-4xl leading-[1.04] tracking-[-0.045em] text-[var(--text)] sm:text-5xl lg:text-6xl">
                  {project.process.title}
                </h2>
              </div>
            </div>
          </MotionReveal>

          <div className="mt-14 border-t border-[var(--border)]">
            {project.process.steps.map((step, index) => (
              <MotionReveal
                key={step.number}
                delay={index * 0.05}
                y={16}
                duration={0.7}
              >
                <article className="grid gap-6 border-b border-[var(--border)] py-8 sm:grid-cols-[100px_1fr] lg:grid-cols-12 lg:items-start lg:py-10">
                  <p className="font-mono text-xs tracking-[0.18em] text-[var(--muted-light)] lg:col-span-1">
                    {step.number}
                  </p>

                  <h3 className="text-2xl tracking-[-0.025em] text-[var(--text)] sm:text-3xl lg:col-span-4">
                    {step.title}
                  </h3>

                  <p className="max-w-[650px] font-mono text-sm leading-[1.9] text-[var(--muted)] sm:col-start-2 lg:col-span-5 lg:col-start-8">
                    {step.description}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcome */}
      <CaseStudyOutcome outcome={project.outcome} />

      {/* CTA */}
      <CaseStudyCTA cta={project.cta} />
    </main>
  );
}