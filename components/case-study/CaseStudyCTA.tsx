import Link from "next/link";

import type {
  CaseStudyCTA as CTAData,
} from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";

type CaseStudyCTAProps = {
  cta: CTAData;
};

export default function CaseStudyCTA({
  cta,
}: CaseStudyCTAProps) {
  return (
    <section className="border-t border-[var(--border)] py-20 sm:py-28">
      <Container>
        <MotionReveal y={25} duration={0.85}>
          <div className="flex flex-col items-center text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)]">
              {cta.eyebrow ?? "End of project"}
            </p>

            <h2 className="mt-6 max-w-[900px] text-4xl leading-[1] tracking-[-0.05em] text-[var(--text)] sm:text-6xl lg:text-8xl">
              {cta.title}
            </h2>

            <p className="mt-7 max-w-[560px] font-mono text-sm leading-[1.9] text-[var(--muted)]">
              {cta.description}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={cta.primaryHref}
                className="group inline-flex items-center gap-5 rounded-full bg-[var(--button)] px-7 py-4 text-sm font-medium text-[var(--button-text)] transition-all duration-300 hover:-translate-y-1 sm:px-9 sm:py-5"
              >
                {cta.primaryLabel}

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>

              <Link
                href={cta.secondaryHref}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-4 text-sm text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:text-[var(--text)] sm:px-9 sm:py-5"
              >
                {cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}