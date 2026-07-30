import type {
  CaseStudyOutcome as OutcomeData,
} from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";

type CaseStudyOutcomeProps = {
  outcome: OutcomeData;
};

export default function CaseStudyOutcome({
  outcome,
}: CaseStudyOutcomeProps) {
  return (
    <section className="border-t border-[var(--border)] py-20 sm:py-28">
      <Container>
        <MotionReveal y={30} duration={0.9}>
          <article className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[36px]">
            <div className="grid lg:grid-cols-12">
              <div className="p-7 sm:p-12 lg:col-span-7 lg:p-16">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)]">
                  {outcome.eyebrow ?? "The outcome"}
                </p>

                <h2 className="mt-7 max-w-[850px] text-4xl leading-[1.02] tracking-[-0.05em] text-[var(--text)] sm:text-5xl lg:text-7xl">
                  {outcome.title}
                </h2>

                <p className="mt-8 max-w-[620px] font-mono text-sm leading-[1.9] text-[var(--muted)] sm:text-base">
                  {outcome.description}
                </p>
              </div>

              <div className="grid border-t border-[var(--border)] lg:col-span-5 lg:border-l lg:border-t-0">
                {outcome.items.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex min-h-[160px] items-end border-b border-[var(--border)] p-7 last:border-b-0 sm:p-10"
                  >
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted-light)]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-5 max-w-[350px] text-xl leading-tight text-[var(--text-soft)] sm:text-2xl">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </MotionReveal>
      </Container>
    </section>
  );
}