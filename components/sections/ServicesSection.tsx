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
      className="scroll-mt-8 border-t border-[var(--border)] bg-[var(--page)] py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <MotionReveal y={20} duration={0.8}>
                <span className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs">
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
                className="mt-7 max-w-[650px] text-4xl font-normal leading-[1.02] tracking-[-0.045em] text-[var(--text)] sm:text-5xl lg:text-6xl"
              />

              <MotionReveal delay={0.18} y={18} duration={0.75}>
                <p className="mt-8 max-w-[540px] font-mono text-sm leading-[1.9] tracking-wide text-[var(--muted)] sm:text-base">
                  I combine design thinking, visual direction, and front-end
                  development to create experiences that feel intentional,
                  usable, and distinct.
                </p>
              </MotionReveal>

              <MotionReveal delay={0.26} y={18} duration={0.75}>
                <a
                  href="#contact"
                  className="group mt-9 inline-flex items-center gap-4 text-sm text-[var(--muted)] hover:text-[var(--text)] sm:text-base"
                >
                  Discuss a project

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </MotionReveal>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-7">
            {services.map((service, index) => {
              const isAccent = service.theme === "accent";

              return (
                <MotionReveal
                  key={service.number}
                  delay={index * 0.1}
                  y={30}
                  duration={0.85}
                  amount={0.12}
                >
                  <article
                    className={[
                      "group relative min-h-[420px] overflow-hidden rounded-[24px] border p-7 transition-all duration-500 sm:rounded-[30px] sm:p-10 lg:min-h-[480px] lg:p-12",
                      isAccent
                        ? "border-[var(--accent-card-border)] bg-[var(--accent-card)] text-[var(--accent-card-text)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between">
                      <p
                        className={[
                          "font-mono text-xs tracking-[0.2em]",
                          isAccent
                            ? "text-[var(--accent-card-soft)]"
                            : "text-[var(--muted-light)]",
                        ].join(" ")}
                      >
                        {service.number}
                      </p>

                      <p
                        className={[
                          "font-mono text-[10px] uppercase tracking-[0.18em]",
                          isAccent
                            ? "text-[var(--accent-card-soft)]"
                            : "text-[var(--muted-light)]",
                        ].join(" ")}
                      >
                        Capability
                      </p>
                    </div>

                    <div className="mt-20 sm:mt-24 lg:mt-28">
                      <h3 className="max-w-[620px] text-3xl font-normal leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                        {service.title}
                      </h3>

                      <p
                        className={[
                          "mt-6 max-w-[600px] font-mono text-sm leading-[1.9] sm:text-base",
                          isAccent
                            ? "text-[var(--accent-card-muted)]"
                            : "text-[var(--muted)]",
                        ].join(" ")}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={[
                        "mt-10 border-t pt-6",
                        isAccent
                          ? "border-[var(--accent-card-border)]"
                          : "border-[var(--border)]",
                      ].join(" ")}
                    >
                      <p
                        className={[
                          "font-mono text-[10px] uppercase tracking-[0.18em]",
                          isAccent
                            ? "text-[var(--accent-card-soft)]"
                            : "text-[var(--muted-light)]",
                        ].join(" ")}
                      >
                        Deliverables
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {service.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className={[
                              "rounded-full border px-4 py-2 font-mono text-[10px] tracking-wide sm:text-xs",
                              isAccent
                                ? "border-[var(--accent-card-border)] text-[var(--accent-card-muted)]"
                                : "border-[var(--border)] text-[var(--muted)] group-hover:border-[var(--border-strong)]",
                            ].join(" ")}
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={[
                        "pointer-events-none absolute -bottom-12 -right-3 text-[170px] font-medium leading-none tracking-[-0.08em] opacity-10 transition-transform duration-700 group-hover:-translate-y-3 sm:text-[220px]",
                        isAccent
                          ? "text-[var(--accent-card-soft)]"
                          : "text-[var(--muted-light)]",
                      ].join(" ")}
                    >
                      {service.number}
                    </span>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}