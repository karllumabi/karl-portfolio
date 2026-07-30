import Link from "next/link";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ThemeToggle from "../theme/ThemeToggle";

type CaseStudyNavigationProps = {
  backHref?: string;
  backLabel?: string;
  projectNumber: string;
  year: string;
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

export default function CaseStudyNavigation({
  backHref = "/#projects",
  backLabel = "Back to portfolio",
  projectNumber,
  year,
}: CaseStudyNavigationProps) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--page)]">
      <Container>
        <MotionReveal trigger="load" y={0} duration={0.7}>
          <div className="flex items-center justify-between py-6 sm:py-8">
            <Link
              href={backHref}
              className="group inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)] sm:text-sm"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                <BackArrow />
              </span>

              {backLabel}
            </Link>

            <div className="flex items-center gap-4">
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:block sm:text-xs">
                Project {projectNumber} / {year}
              </p>

              <ThemeToggle />
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}