import type {
  CaseStudyDetail,
  CaseStudyProject,
} from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";

type CaseStudyOverviewProps = {
  details: CaseStudyDetail[];
  overview: CaseStudyProject["overview"];
};

export default function CaseStudyOverview({
  details,
  overview,
}: CaseStudyOverviewProps) {
  return (
    <section
      id="case-study"
      className="scroll-mt-10 border-t border-[var(--border)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-8">
              <MotionReveal
                y={24}
                fromScale={0.98}
                amount={0.15}
                duration={0.85}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)] sm:text-xs">
                  {overview.eyebrow ?? "Project overview"}
                </p>

                <h2 className="mt-5 max-w-[450px] text-3xl leading-tight tracking-[-0.035em] text-[var(--text)] sm:text-4xl">
                  {overview.title}
                </h2>
              </MotionReveal>

              <div className="mt-10 border-t border-[var(--border)]">
                {details.map((detail, index) => (
                  <MotionReveal
                    key={detail.label}
                    delay={index * 0.06}
                    x={-14}
                    y={8}
                    fromScale={0.99}
                    amount={0.2}
                    duration={0.65}
                  >
                    <div className="grid grid-cols-[85px_1fr] gap-5 border-b border-[var(--border)] py-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-light)] sm:text-[10px]">
                        {detail.label}
                      </p>

                      <p className="text-sm leading-relaxed text-[var(--text-soft)]">
                        {detail.value}
                      </p>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-8">
            <MotionReveal
              x={26}
              y={30}
              fromScale={0.96}
              amount={0.15}
              duration={1}
            >
              <article className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-7 sm:rounded-[30px] sm:p-10 lg:p-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                  {overview.challenge.eyebrow ?? "The challenge"}
                </p>

                <h3 className="mt-6 max-w-[850px] text-3xl leading-[1.12] tracking-[-0.035em] text-[var(--text)] sm:text-4xl lg:text-5xl">
                  {overview.challenge.title}
                </h3>

                <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-2">
                  {overview.challenge.paragraphs.map((paragraph, index) => (
                    <p
                      key={`${paragraph}-${index}`}
                      className="font-mono text-sm leading-[1.9] text-[var(--muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </MotionReveal>

            <MotionReveal
              x={34}
              y={28}
              fromScale={0.95}
              delay={0.12}
              amount={0.15}
              duration={1.05}
            >
              <article className="rounded-[24px] border border-[var(--accent-card-border)] bg-[var(--accent-card)] p-7 text-[var(--accent-card-text)] sm:rounded-[30px] sm:p-10 lg:p-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent-card-soft)]">
                  {overview.direction.eyebrow ?? "The direction"}
                </p>

                <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-end">
                  <h3 className="text-3xl leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    {overview.direction.title}
                  </h3>

                  <p className="font-mono text-sm leading-[1.9] text-[var(--accent-card-muted)]">
                    {overview.direction.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
