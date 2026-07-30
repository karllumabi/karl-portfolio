import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import ArrowUpRight from "../ui/ArrowUpRight";

export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[var(--page)] pb-5 pt-20 sm:pb-6 sm:pt-28"
    >
      <Container>
        <MotionReveal y={35} duration={0.95} amount={0.1}>
          <div className="relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] px-6 py-16 sm:rounded-[32px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow)] blur-[100px]" />

            <div className="relative flex flex-col items-center text-center">
              <span className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 font-mono text-xs tracking-[0.16em] text-[var(--muted)]">
                Contact
              </span>

              <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--muted-light)] sm:text-xs">
                Available for selected projects
              </p>

              <AnimatedHeading
                lines={[
                  "Let’s create something",
                  "worth remembering.",
                ]}
                delay={0.12}
                className="mt-5 max-w-[1000px] text-4xl font-normal leading-[0.98] tracking-[-0.05em] text-[var(--text)] sm:text-6xl lg:text-7xl xl:text-8xl"
              />

              <p className="mt-7 max-w-[580px] font-mono text-xs leading-[1.8] tracking-wide text-[var(--muted)] sm:text-sm">
                Have a project, collaboration, or creative idea in mind?
                Let&apos;s talk about how we can bring it to life.
              </p>

              <a
                href="mailto:karllumabi23@gmail.com"
                className="group mt-10 inline-flex items-center gap-5 rounded-full bg-[var(--button)] px-7 py-4 text-sm font-medium tracking-wide text-[var(--button-text)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:px-9 sm:py-5 sm:text-base"
              >
                <span>Start a conversation</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--button-text)] text-[var(--button)] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className="relative mt-20 grid gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3 sm:items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-light)]">
                  Email
                </p>

                <a
                  href="mailto:karllumabi23@gmail.com"
                  className="mt-3 block w-fit text-sm text-[var(--text-soft)] hover:text-[var(--text)] sm:text-base"
                >
                  karllumabi23@gmail.com
                </a>
              </div>

              <div className="sm:text-center">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-light)]">
                  Based in
                </p>

                <p className="mt-3 text-sm text-[var(--text-soft)] sm:text-base">
                  Philippines
                </p>
              </div>

              <div className="sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-light)]">
                  Social
                </p>

                <div className="mt-3 flex gap-5 sm:justify-end">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-soft)] hover:text-[var(--text)] sm:text-base"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="#home"
                    className="text-sm text-[var(--text-soft)] hover:text-[var(--text)] sm:text-base"
                  >
                    Back to top ↑
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        <div className="flex flex-col gap-3 px-2 pb-3 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted-light)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Karl Lumabi</p>

          <p>UI/UX · Graphic Design · Front-end Development</p>
        </div>
      </Container>
    </footer>
  );
}