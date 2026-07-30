import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import type { DesignItem } from "../ui/DesignCard";
import InfiniteDesignRow from "../ui/InfiniteDesignRow";

const mobileDesigns: DesignItem[] = [
  {
    title: "Fashion Discovery",
    category: "E-commerce UI/UX",
    year: "2025",
    image: "/designs/mobile-fashion.svg",
    imageAlt: "Fashion shopping mobile application interface",
    format: "mobile",
    borderRadius: "28px",
  },
  {
    title: "Travel Explorer",
    category: "Travel App Design",
    year: "2025",
    image: "/designs/mobile-travel.svg",
    imageAlt: "Travel exploration mobile application interface",
    format: "mobile",
    borderRadius: "24px",
  },
  {
    title: "City Guide",
    category: "Lifestyle UI/UX",
    year: "2025",
    image: "/designs/mobile-city-guide.svg",
    imageAlt: "City guide mobile application interface",
    format: "mobile",
    borderRadius: "30px",
  },
  {
    title: "Style Campaign",
    category: "Fashion Experience",
    year: "2025",
    image: "/designs/mobile-style.svg",
    imageAlt: "Fashion campaign mobile application interface",
    format: "mobile",
    borderRadius: "24px",
  },
  {
    title: "Destination Details",
    category: "Travel Interface",
    year: "2025",
    image: "/designs/mobile-destination.svg",
    imageAlt: "Travel destination details mobile application interface",
    format: "mobile",
    borderRadius: "28px",
  },
];

const graphicDesigns: DesignItem[] = [
  {
    title: "Exquisite Brand Introduction",
    category: "Brand Design",
    year: "2026",
    image: "/designs/exquisite-introduction.svg",
    imageAlt: "Exquisite Properties introduction graphic",
    format: "graphic",
    borderRadius: "14px",
  },
  {
    title: "One Rockwell Listing",
    category: "Real Estate Campaign",
    year: "2026",
    image: "/designs/one-rockwell.svg",
    imageAlt: "One Rockwell real estate listing graphic",
    format: "graphic",
    borderRadius: "14px",
  },
  {
    title: "Exquisite Answers",
    category: "Social Media Design",
    year: "2026",
    image: "/designs/exquisite-answers.svg",
    imageAlt: "Exquisite Answers social media graphic",
    format: "graphic",
    borderRadius: "14px",
  },
  {
    title: "Contact Campaign",
    category: "Marketing Design",
    year: "2026",
    image: "/designs/exquisite-contact.svg",
    imageAlt: "Exquisite Properties contact graphic",
    format: "graphic",
    borderRadius: "14px",
  },
];

export default function DesignsSection() {
  return (
    <section
      id="designs"
      className="bg-[var(--page)] py-20 sm:py-28"
    >
      <Container>
        <div className="overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--surface)] py-10 sm:rounded-[32px] sm:py-14 lg:py-16">
          <MotionReveal y={25} duration={0.85} amount={0.15}>
            <div className="flex flex-col items-center px-5 text-center sm:px-8 lg:px-10">
              <span className="inline-flex rounded-xl border border-[var(--border)] px-4 py-2 font-mono text-xs tracking-[0.16em] text-[var(--muted)]">
                Designs
              </span>

              <AnimatedHeading
                lines={[
                  "Selected visual and digital",
                  "experiences",
                ]}
                delay={0.08}
                stagger={0.06}
                className="mt-7 max-w-[680px] text-3xl leading-tight tracking-[-0.035em] text-[var(--text)] sm:text-4xl lg:text-5xl"
              />

              <p className="mt-5 max-w-[600px] font-mono text-xs leading-[1.8] text-[var(--muted)] sm:text-sm">
                A collection of interface designs, brand systems, social media
                graphics, and digital campaigns.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-14 sm:mt-16">
            <MotionReveal y={20} duration={0.75} amount={0.15}>
              <div className="mx-5 mb-6 flex items-end justify-between border-b border-[var(--border)] pb-4 sm:mx-8 lg:mx-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                    Collection 01
                  </p>

                  <h3 className="mt-2 text-lg tracking-wide text-[var(--text-soft)]">
                    UI/UX Design
                  </h3>
                </div>

                <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:block">
                  Mobile Interfaces
                </p>
              </div>
            </MotionReveal>

            <MotionReveal y={30} duration={0.9} amount={0.08}>
              <InfiniteDesignRow
                designs={mobileDesigns}
                direction="left"
                duration={62}
              />
            </MotionReveal>
          </div>

          <div className="mt-16 sm:mt-20">
            <MotionReveal y={20} duration={0.75} amount={0.15}>
              <div className="mx-5 mb-6 flex items-end justify-between border-b border-[var(--border)] pb-4 sm:mx-8 lg:mx-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                    Collection 02
                  </p>

                  <h3 className="mt-2 text-lg tracking-wide text-[var(--text-soft)]">
                    Graphic Design
                  </h3>
                </div>

                <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:block">
                  Branding and Social
                </p>
              </div>
            </MotionReveal>

            <MotionReveal y={30} duration={0.9} amount={0.08}>
              <InfiniteDesignRow
                designs={graphicDesigns}
                direction="right"
                duration={68}
              />
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}