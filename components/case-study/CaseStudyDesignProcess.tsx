import Image from "next/image";

import type {
  CaseStudyDesignProcess as DesignProcessData,
} from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import SectionIntro from "./SectionIntro";

type CaseStudyDesignProcessProps = {
  designProcess: DesignProcessData;
};

export default function CaseStudyDesignProcess({
  designProcess,
}: CaseStudyDesignProcessProps) {
  return (
    <section
      id={designProcess.id ?? "design-process"}
      className="border-t border-[var(--border)] py-20 sm:py-28"
    >
      <Container>
        <SectionIntro
          eyebrow={designProcess.eyebrow}
          title={designProcess.title}
          description={designProcess.description}
        />

        {designProcess.prototype ? (
          <MotionReveal className="mt-14" y={30} duration={0.9}>
            <article className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[32px]">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)]">
                <Image
                  src={designProcess.prototype.image}
                  alt={designProcess.prototype.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain p-3 sm:p-6"
                />
              </div>

              <div className="grid gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:items-end lg:p-12">
                <div className="lg:col-span-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                    {designProcess.prototype.eyebrow}
                  </p>

                  <h3 className="mt-5 max-w-[700px] text-3xl leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-4xl lg:text-5xl">
                    {designProcess.prototype.title}
                  </h3>
                </div>

                <p className="font-mono text-sm leading-[1.9] text-[var(--muted)] lg:col-span-4 lg:col-start-9">
                  {designProcess.prototype.description}
                </p>
              </div>
            </article>
          </MotionReveal>
        ) : null}

        {designProcess.cards?.length ? (
          <div className="mt-5 grid gap-5 lg:grid-cols-12">
            {designProcess.cards.map((card, index) => {
              const isNarrow = card.layout === "narrow";

              return (
                <MotionReveal
                  key={`${card.title}-${index}`}
                  className={
                    isNarrow
                      ? "h-full lg:col-span-4"
                      : "h-full lg:col-span-8"
                  }
                  delay={index * 0.08}
                  y={30}
                  duration={0.85}
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[30px]">
                    <div
                      className={
                        isNarrow
                          ? "relative min-h-[520px] flex-1 overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)] sm:min-h-[620px]"
                          : "relative aspect-[16/10] overflow-hidden border-b border-[var(--border)] bg-[var(--surface-soft)]"
                      }
                    >
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        sizes={
                          isNarrow
                            ? "(min-width: 1024px) 34vw, 100vw"
                            : "(min-width: 1024px) 66vw, 100vw"
                        }
                        className="object-contain p-5 sm:p-8"
                      />
                    </div>

                    <div
                      className={
                        isNarrow
                          ? "p-6 sm:p-8"
                          : "grid flex-1 gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-end"
                      }
                    >
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                          {card.eyebrow}
                        </p>

                        <h3 className="mt-4 text-2xl leading-tight tracking-[-0.035em] text-[var(--text)] sm:text-3xl">
                          {card.title}
                        </h3>
                      </div>

                      <p
                        className={
                          isNarrow
                            ? "mt-5 font-mono text-xs leading-[1.9] text-[var(--muted)] sm:text-sm"
                            : "font-mono text-xs leading-[1.9] text-[var(--muted)] sm:text-sm"
                        }
                      >
                        {card.description}
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        ) : null}

        {designProcess.specifications?.length ? (
          <div className="mt-5 grid overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] sm:grid-cols-2 lg:grid-cols-4">
            {designProcess.specifications.map((specification, index) => (
              <MotionReveal
                key={specification.label}
                delay={index * 0.06}
                y={15}
                duration={0.65}
              >
                <div className="min-h-[150px] border-b border-r border-[var(--border)] p-6 sm:min-h-[170px] sm:p-8 lg:border-b-0">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-light)] sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {specification.label}
                  </p>

                  <p className="mt-8 text-xl leading-tight tracking-[-0.025em] text-[var(--text-soft)] sm:text-2xl">
                    {specification.value}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}