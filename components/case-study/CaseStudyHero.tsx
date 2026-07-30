import Image from "next/image";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";

type CaseStudyHeroProps = {
  titleLines: string[];
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
  exploreLabel?: string;
};

export default function CaseStudyHero({
  titleLines,
  tags,
  description,
  image,
  imageAlt,
  exploreLabel = "Explore the case study",
}: CaseStudyHeroProps) {
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <Container>
        <MotionReveal trigger="load" delay={0.05} y={18} duration={0.8}>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
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
              <h1 className="max-w-[1200px] text-[clamp(4.4rem,11vw,11rem)] font-normal leading-[0.82] tracking-[-0.07em] text-[var(--text)]">
                {titleLines.map((line, index) => (
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
                {description}
              </p>

              <a
                href="#case-study"
                className="group mt-8 inline-flex items-center gap-4 text-sm text-[var(--text-soft)] transition-colors duration-300 hover:text-[var(--text)]"
              >
                {exploreLabel}

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </MotionReveal>
          </div>
        </div>

        <MotionReveal
          trigger="load"
          delay={0.38}
          y={35}
          duration={1}
          className="mt-14 sm:mt-20"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-3 sm:rounded-[32px] sm:p-6">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-contain p-3 sm:p-6"
            />
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}