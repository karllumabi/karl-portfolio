import type { CSSProperties } from "react";

import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";

type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  theme: "default" | "accent";
};

const services: Service[] = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "I design intuitive and responsive digital experiences built around user needs, brand personality, and business goals.",
    deliverables: [
      "User flows",
      "Wireframes",
      "Responsive interfaces",
      "Interactive prototypes",
      "Design systems",
    ],
    theme: "default",
  },
  {
    number: "02",
    title: "Visual & Graphic Design",
    description:
      "I create cohesive visual systems that help brands communicate clearly and build a recognizable presence across digital platforms.",
    deliverables: [
      "Brand identity",
      "Campaign graphics",
      "Social media design",
      "Presentation design",
      "Marketing materials",
    ],
    theme: "accent",
  },
  {
    number: "03",
    title: "Front-end Development",
    description:
      "I transform approved designs into responsive, polished, and interactive websites with thoughtful motion and attention to detail.",
    deliverables: [
      "Next.js development",
      "React interfaces",
      "Tailwind CSS",
      "Responsive implementation",
      "Motion and interactions",
    ],
    theme: "default",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-8 overflow-visible border-t border-[var(--border)] bg-[var(--page)] py-10 lg:py-28"
    >
      <Container>
        <div className="relative grid items-start overflow-visible lg:grid-cols-12 lg:gap-8">
          {/*
            MOBILE:
            The sticky wrapper is one full viewport tall.
            Its visible content occupies only the upper half.

            DESKTOP:
            It returns to the original left-column layout.
          */}
          <aside className="pointer-events-none col-start-1 row-start-1 self-stretch lg:pointer-events-auto lg:col-span-5 lg:col-start-auto lg:row-start-auto">
            <div className="sticky top-0 z-40 h-svh lg:top-8 lg:h-[592px]">
              <div className="pointer-events-auto flex h-[50svh] items-center bg-[var(--page)] pb-4 pt-3 lg:block lg:h-auto lg:bg-transparent lg:py-0">
                <ServicesIntroduction />
              </div>
            </div>
          </aside>

          {/*
            MOBILE:
            The cards begin after the upper 50% of the screen.
            They remain inside the lower half.

            Both this card stack and the sticky introduction use
            the same parent boundary, so Card 03 and the complete
            introduction leave together.
          */}
          <div className="relative col-start-1 row-start-1 flex flex-col gap-3 overflow-visible pt-[50svh] lg:col-span-7 lg:col-start-auto lg:row-start-auto lg:gap-5 lg:pt-0">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}

            {/* Gives Card 03 time to remain fully visible */}
            <div
              aria-hidden="true"
              className="h-[calc(50svh-28px)] sm:h-[calc(50svh-36px)] lg:h-[580px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesIntroduction() {
  return (
    <div className="w-full">
      <MotionReveal y={16} duration={0.8}>
        <span className="inline-flex rounded-lg border border-[var(--border)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-[var(--muted)] sm:rounded-xl sm:px-4 sm:py-2 sm:text-[10px] lg:text-xs">
          Capabilities
        </span>
      </MotionReveal>

      <AnimatedHeading
        lines={[
          "Designing brands and",
          "digital experiences",
          "from concept to launch.",
        ]}
        delay={0.08}
        stagger={0.05}
        className="mt-4 max-w-[650px] text-[clamp(1.75rem,7.6vw,2.4rem)] font-normal leading-[1.01] tracking-[-0.045em] text-[var(--text)] sm:mt-5 sm:text-[clamp(2.2rem,6.5vw,3.2rem)] lg:mt-7 lg:text-6xl"
      />

      <MotionReveal
        delay={0.18}
        y={14}
        duration={0.75}
      >
        <p className="mt-4 max-w-[540px] font-mono text-[9px] leading-[1.65] tracking-wide text-[var(--muted)] min-[390px]:text-[10px] sm:mt-5 sm:text-xs sm:leading-[1.75] lg:mt-8 lg:text-base lg:leading-[1.9]">
          I combine design thinking, visual direction, and front-end
          development to create experiences that feel intentional,
          usable, and distinct.
        </p>
      </MotionReveal>

      <MotionReveal
        delay={0.26}
        y={14}
        duration={0.75}
      >
        <a
          href="#contact"
          className="group mt-4 inline-flex items-center gap-3 text-[10px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)] sm:mt-5 sm:text-xs lg:mt-9 lg:gap-4 lg:text-base"
        >
          Discuss a project

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </MotionReveal>
    </div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isAccent = service.theme === "accent";

  const cardStyle = {
    /*
      Mobile cards remain inside the lower half.

      Card 01: 50svh + 8px
      Card 02: 50svh + 18px
      Card 03: 50svh + 28px

      Card 03 bottom:
      50svh + 28px + (50svh - 28px) = 100svh
    */
    "--card-top-mobile": `calc(50svh + ${8 + index * 10}px)`,
    "--card-top-tablet": `calc(50svh + ${12 + index * 12}px)`,
    "--card-top-desktop": `${32 + index * 16}px`,
    zIndex: index + 1,
  } as CSSProperties;

  return (
    <article
      style={cardStyle}
      className={[
        "group sticky top-[var(--card-top-mobile)]",
        "relative h-[calc(50svh-28px)] min-h-0 overflow-hidden rounded-[20px] border p-5",
        "shadow-[0_-10px_36px_rgba(0,0,0,0.18)]",
        "transition-[border-color,background-color,box-shadow] duration-700",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",

        "sm:top-[var(--card-top-tablet)]",
        "sm:h-[calc(50svh-36px)]",
        "sm:rounded-[26px]",
        "sm:p-7",

        "lg:top-[var(--card-top-desktop)]",
        "lg:h-[560px]",
        "lg:min-h-[560px]",
        "lg:rounded-[30px]",
        "lg:p-12",
        "lg:shadow-[0_-14px_50px_rgba(0,0,0,0.2)]",

        isAccent
          ? "border-[var(--accent-card-border)] bg-[var(--accent-card)] text-[var(--accent-card-text)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]"
          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]",
      ].join(" ")}
    >
      {/* Moving background glow */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl",
          "opacity-0 transition-all duration-1000",
          "group-hover:-translate-x-12 group-hover:translate-y-12 group-hover:opacity-100",
          isAccent
            ? "bg-white/10"
            : "bg-[var(--text)]/[0.04]",
        ].join(" ")}
      />

      {/* Secondary glow */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -bottom-40 -left-28 h-72 w-72 rounded-full blur-3xl",
          "opacity-0 transition-all duration-1000 delay-100",
          "group-hover:translate-x-12 group-hover:-translate-y-10 group-hover:opacity-100",
          isAccent
            ? "bg-black/10"
            : "bg-[var(--text)]/[0.035]",
        ].join(" ")}
      />

      {/* Animated top line */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-0 top-0 h-px w-full",
          "origin-left scale-x-0 transition-transform duration-700",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:scale-x-100",
          isAccent
            ? "bg-[var(--accent-card-text)]/50"
            : "bg-[var(--text)]/50",
        ].join(" ")}
      />

      {/* Light sweep */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg]",
          "opacity-0 blur-xl transition-all duration-1000",
          "group-hover:left-[120%] group-hover:opacity-100",
          isAccent
            ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/10 to-transparent",
        ].join(" ")}
      />

      {/* Card number */}
      <div className="relative z-10">
        <p
          className={[
            "font-mono text-[9px] tracking-[0.18em] sm:text-[10px] lg:text-xs",
            "transition-transform duration-500",
            "group-hover:translate-x-1",
            isAccent
              ? "text-[var(--accent-card-soft)]"
              : "text-[var(--muted-light)]",
          ].join(" ")}
        >
          {service.number}
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 mt-7 sm:mt-10 lg:mt-24">
        <div className="overflow-hidden">
          <h3 className="max-w-[620px] text-2xl font-normal leading-[1.05] tracking-[-0.035em] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:text-3xl lg:text-5xl">
            {service.title}
          </h3>
        </div>

        <p
          className={[
            "mt-3 max-w-[600px] font-mono text-[9px] leading-[1.6]",
            "transition-transform duration-700",
            "group-hover:translate-x-2",
            "sm:mt-4 sm:text-[11px] sm:leading-[1.7]",
            "lg:mt-6 lg:text-base lg:leading-[1.9]",
            isAccent
              ? "text-[var(--accent-card-muted)]"
              : "text-[var(--muted)]",
          ].join(" ")}
        >
          {service.description}
        </p>
      </div>

      {/* Deliverables */}
      <div
        className={[
          "relative z-10 mt-4 border-t pt-4 sm:mt-5 sm:pt-5 lg:mt-8 lg:pt-6",
          "transition-colors duration-500",
          isAccent
            ? "border-[var(--accent-card-border)]"
            : "border-[var(--border)] group-hover:border-[var(--border-strong)]",
        ].join(" ")}
      >
        <p
          className={[
            "font-mono text-[7px] uppercase tracking-[0.16em] sm:text-[8px] lg:text-[10px]",
            "transition-transform duration-500",
            "group-hover:translate-x-1",
            isAccent
              ? "text-[var(--accent-card-soft)]"
              : "text-[var(--muted-light)]",
          ].join(" ")}
        >
          Deliverables
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2 lg:mt-5 lg:gap-2.5">
          {service.deliverables.map(
            (deliverable, deliverableIndex) => (
              <span
                key={deliverable}
                className={[
                  "rounded-full border px-2.5 py-1 font-mono text-[7px] tracking-wide",
                  "transition-[transform,border-color,background-color,color] duration-500",
                  "group-hover:-translate-y-1",
                  "sm:px-3 sm:py-1.5 sm:text-[9px]",
                  "lg:px-4 lg:py-2 lg:text-xs",
                  isAccent
                    ? "border-[var(--accent-card-border)] text-[var(--accent-card-muted)] group-hover:bg-white/10"
                    : "border-[var(--border)] text-[var(--muted)] group-hover:border-[var(--border-strong)] group-hover:bg-[var(--surface-soft)] group-hover:text-[var(--text)]",
                ].join(" ")}
                style={{
                  transitionDelay: `${deliverableIndex * 55}ms`,
                }}
              >
                {deliverable}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Large number */}
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -bottom-7 -right-2",
          "text-[105px] font-medium leading-none tracking-[-0.08em]",
          "opacity-[0.08]",
          "transition-all duration-1000",
          "ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:-translate-x-3 group-hover:-translate-y-6",
          "group-hover:rotate-[-4deg] group-hover:opacity-[0.14]",
          "sm:-bottom-9 sm:text-[145px]",
          "lg:-bottom-12 lg:-right-3 lg:text-[220px]",
          isAccent
            ? "text-[var(--accent-card-soft)]"
            : "text-[var(--muted-light)]",
        ].join(" ")}
      >
        {service.number}
      </span>

      {/* Corner detail */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute bottom-4 left-4",
          "h-4 w-4 border-b border-l opacity-0",
          "translate-x-2 translate-y-2",
          "transition-all duration-500",
          "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-60",
          "sm:bottom-5 sm:left-5",
          "lg:bottom-7 lg:left-7 lg:h-5 lg:w-5",
          isAccent
            ? "border-[var(--accent-card-soft)]"
            : "border-[var(--muted-light)]",
        ].join(" ")}
      />
    </article>
  );
}