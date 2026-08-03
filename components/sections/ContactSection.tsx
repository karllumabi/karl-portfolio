import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";

const email = "karllumabi23@gmail.com";
const linkedin = "https://www.linkedin.com/in/klumabi/";

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-8 bg-[var(--page)] pb-5 pt-20 sm:pb-6 sm:pt-28"
    >
      <Container>
        <MotionReveal y={40} duration={0.95} amount={0.08}>
          <div className="group/contact relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] sm:rounded-[36px]">
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-52 -top-52 h-[520px] w-[520px] rounded-full bg-[var(--glow)] opacity-70 blur-[120px] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/contact:-translate-x-12 group-hover/contact:translate-y-12"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-64 -left-44 h-[520px] w-[520px] rounded-full bg-[var(--glow)] opacity-40 blur-[130px] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/contact:translate-x-16 group-hover/contact:-translate-y-10"
            />

            {/* Large decorative text */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 right-0 hidden select-none text-[clamp(8rem,18vw,18rem)] font-medium leading-none tracking-[-0.09em] text-[var(--text)] opacity-[0.025] lg:block"
            >
              HELLO
            </span>

            <div className="relative grid lg:grid-cols-12">
              {/* Main contact content */}
              <div className="border-b border-[var(--border)] px-6 py-12 sm:px-10 sm:py-16 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-14 lg:py-20 xl:px-16 xl:py-24">
                <MotionReveal y={18} duration={0.75}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs">
                      Contact
                    </span>

                    <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:text-[10px]">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--text)] opacity-30" />

                        <span className="relative h-2 w-2 rounded-full bg-[var(--text)] opacity-70" />
                      </span>

                      Available for selected projects
                    </span>
                  </div>
                </MotionReveal>

                <AnimatedHeading
                  lines={["Have an idea?", "Let’s make it real."]}
                  delay={0.1}
                  stagger={0.06}
                  className="mt-10 max-w-[850px] text-[clamp(3rem,8vw,7.5rem)] font-normal leading-[0.9] tracking-[-0.06em] text-[var(--text)]"
                />

                <MotionReveal
                  delay={0.2}
                  y={20}
                  duration={0.8}
                >
                  <p className="mt-8 max-w-[570px] font-mono text-xs leading-[1.9] tracking-wide text-[var(--muted)] sm:text-sm lg:text-base">
                    Have a project, collaboration, or creative idea in
                    mind? Tell me about it, and let&apos;s create
                    something thoughtful, useful, and memorable.
                  </p>
                </MotionReveal>

                <MotionReveal
                  delay={0.28}
                  y={18}
                  duration={0.8}
                >
                  {/* Animated contact button */}
                  <a
                    href={`mailto:${email}`}
                    className="group/button relative mt-10 inline-flex items-center gap-5 overflow-hidden rounded-full bg-[var(--button)] px-7 py-4 text-sm font-medium tracking-wide text-[var(--button-text)] shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:px-9 sm:py-5 sm:text-base"
                  >
                    {/* Background fill */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 origin-left scale-x-0 bg-[var(--button-text)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:scale-x-100"
                    />

                    {/* Moving shine */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 blur-lg transition-all duration-1000 group-hover/button:left-[130%] group-hover/button:opacity-100"
                    />

                    {/* Button text */}
                    <span className="relative z-10 transition-[color,letter-spacing,transform] duration-500 group-hover/button:translate-x-1 group-hover/button:tracking-[0.08em] group-hover/button:text-[var(--button)]">
                      Start a conversation
                    </span>

                    {/* Animated arrow */}
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--button-text)] text-[var(--button)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/button:translate-x-1 group-hover/button:rotate-45 group-hover/button:bg-[var(--button)] group-hover/button:text-[var(--button-text)] sm:h-10 sm:w-10">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-current opacity-0 transition-all duration-700 group-hover/button:scale-[1.7] group-hover/button:opacity-0"
                      />

                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </MotionReveal>
              </div>

              {/* Contact details */}
              <div className="flex flex-col lg:col-span-5">
                <ContactLink
                  label="Email"
                  value={email}
                  href={`mailto:${email}`}
                />

                <ContactLink
                  label="LinkedIn"
                  value="linkedin.com/in/klumabi"
                  href={linkedin}
                  external
                />

                <div className="flex flex-1 flex-col justify-between gap-10 px-6 py-9 sm:px-10 sm:py-11 lg:px-12">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-light)] sm:text-[10px]">
                      Based in
                    </p>

                    <p className="mt-4 text-xl tracking-[-0.02em] text-[var(--text)] sm:text-2xl">
                      Philippines
                    </p>
                  </div>

                  <div className="border-t border-[var(--border)] pt-7">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-light)] sm:text-[10px]">
                      Services
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "UI/UX Design",
                        "Graphic Design",
                        "Front-end Development",
                      ].map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-[var(--border)] px-3 py-2 font-mono text-[9px] tracking-wide text-[var(--muted)] transition-colors duration-300 hover:border-[var(--border-strong)] hover:text-[var(--text)] sm:px-4 sm:text-[10px]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="relative flex flex-col gap-5 border-t border-[var(--border)] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
              <p className="font-mono text-[9px] uppercase tracking-[0.17em] text-[var(--muted-light)] sm:text-[10px]">
                Open to thoughtful ideas and meaningful collaborations
              </p>

              <a
                href="#home"
                className="group/top inline-flex w-fit items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
              >
                Back to top

                <span className="transition-transform duration-300 group-hover/top:-translate-y-1">
                  ↑
                </span>
              </a>
            </div>
          </div>
        </MotionReveal>

        {/* Copyright */}
        <div className="flex flex-col gap-3 px-2 pb-3 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-light)] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <p>© {currentYear} Karl Lumabi</p>

          <p>Designed and developed with intention</p>
        </div>
      </Container>
    </footer>
  );
}

function ContactLink({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group/link relative flex items-center justify-between gap-5 overflow-hidden border-b border-[var(--border)] px-6 py-9 transition-colors duration-500 hover:bg-[var(--surface-hover)] sm:px-10 sm:py-11 lg:px-12"
    >
      {/* Animated left border */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-[var(--text)] opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-y-100"
      />

      <div className="min-w-0">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-light)] sm:text-[10px]">
          {label}
        </p>

        <p className="mt-4 break-all text-base tracking-[-0.02em] text-[var(--text-soft)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1 group-hover/link:text-[var(--text)] sm:text-lg">
          {value}
        </p>
      </div>

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:rotate-45 group-hover/link:border-[var(--border-strong)] group-hover/link:bg-[var(--text)] group-hover/link:text-[var(--page)] sm:h-12 sm:w-12">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}