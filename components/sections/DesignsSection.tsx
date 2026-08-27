import Container from "../layout/Container";
import AnimatedHeading from "../motion/AnimatedHeading";
import MotionReveal from "../motion/MotionReveal";
import type { DesignItem } from "../ui/DesignCard";
import InfiniteDesignRow from "../ui/InfiniteDesignRow";

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
    title: "Residential Design 01",
    category: "Real Estate Graphic Design",
    year: "2026",
    image: "/designs/Residential design.png",
    imageAlt: "Residential real estate social media graphic design",
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
    title: "Residential Design 02",
    category: "Property Marketing",
    year: "2026",
    image: "/designs/Residential design3.png",
    imageAlt: "Residential property marketing graphic design",
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
    title: "Residential Design 03",
    category: "Real Estate Campaign",
    year: "2026",
    image: "/designs/Residential design1.png",
    imageAlt: "Residential real estate campaign graphic",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Residential Design 04",
    category: "Social Media Design",
    year: "2026",
    image: "/designs/Residential design5.png",
    imageAlt: "Residential social media graphic design",
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

  {
    title: "Residential Design 05",
    category: "Property Marketing",
    year: "2026",
    image: "/designs/Residential design2.png",
    imageAlt: "Residential property marketing visual",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Residential Design 06",
    category: "Real Estate Graphic Design",
    year: "2026",
    image: "/designs/Residential design4.png",
    imageAlt: "Residential real estate graphic design",
    format: "graphic",
    borderRadius: "14px",
  },
  {
    title: "Graphic Design 19",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-19.png",
    imageAlt: "Graphic design artwork 19",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 20",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-20.png",
    imageAlt: "Graphic design artwork 20",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 21",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-21.png",
    imageAlt: "Graphic design artwork 21",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 22",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-22.png",
    imageAlt: "Graphic design artwork 22",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 23",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-23.png",
    imageAlt: "Graphic design artwork 23",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 24",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-24.png",
    imageAlt: "Graphic design artwork 24",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 25",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-25.png",
    imageAlt: "Graphic design artwork 25",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 26",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-26.png",
    imageAlt: "Graphic design artwork 26",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 27",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-27.png",
    imageAlt: "Graphic design artwork 27",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 28",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-28.png",
    imageAlt: "Graphic design artwork 28",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 29",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-29.png",
    imageAlt: "Graphic design artwork 29",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 30",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-30.png",
    imageAlt: "Graphic design artwork 30",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 31",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-31.png",
    imageAlt: "Graphic design artwork 31",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 32",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-32.png",
    imageAlt: "Graphic design artwork 32",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 33",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-33.png",
    imageAlt: "Graphic design artwork 33",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 34",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-34.png",
    imageAlt: "Graphic design artwork 34",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 35",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-35.png",
    imageAlt: "Graphic design artwork 35",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 36",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-36.png",
    imageAlt: "Graphic design artwork 36",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 37",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-37.png",
    imageAlt: "Graphic design artwork 37",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 38",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-38.png",
    imageAlt: "Graphic design artwork 38",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 39",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-39.png",
    imageAlt: "Graphic design artwork 39",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 40",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-40.png",
    imageAlt: "Graphic design artwork 40",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 41",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-41.png",
    imageAlt: "Graphic design artwork 41",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 42",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-42.png",
    imageAlt: "Graphic design artwork 42",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 43",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-43.png",
    imageAlt: "Graphic design artwork 43",
    format: "graphic",
    borderRadius: "14px",
  },

  {
    title: "Graphic Design 44",
    category: "Graphic Design",
    year: "2026",
    image: "/designs/graphics-44.png",
    imageAlt: "Graphic design artwork 44",
    format: "graphic",
    borderRadius: "14px",
  },
];

const mobileDesigns: DesignItem[] = [
  {
    title: "Next Trip",
    category: "Mobile Travel App",
    year: "2026",
    image: "/designs/mobile-travel.svg",
    imageAlt: "Next Trip mobile travel interface design",
    format: "mobile",
    borderRadius: "28px",
  },
  {
    title: "City Guide",
    category: "Mobile Product Design",
    year: "2026",
    image: "/designs/mobile-city-guide.svg",
    imageAlt: "City guide mobile interface design",
    format: "mobile",
    borderRadius: "28px",
  },
  {
    title: "Destination Planner",
    category: "Mobile UX Design",
    year: "2026",
    image: "/designs/mobile-destination.svg",
    imageAlt: "Destination planner mobile interface design",
    format: "mobile",
    borderRadius: "28px",
  },
  {
    title: "Fashion Journal",
    category: "Mobile Editorial Design",
    year: "2026",
    image: "/designs/mobile-fashion.svg",
    imageAlt: "Fashion journal mobile interface design",
    format: "mobile",
    borderRadius: "28px",
  },
  {
    title: "Style Guide",
    category: "Mobile Interface Design",
    year: "2026",
    image: "/designs/mobile-style.svg",
    imageAlt: "Style guide mobile interface design",
    format: "mobile",
    borderRadius: "28px",
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

          <div className="mt-16 sm:mt-20">
            <MotionReveal y={20} duration={0.75} amount={0.15}>
              <div className="mx-5 mb-6 flex items-end justify-between border-b border-[var(--border)] pb-4 sm:mx-8 lg:mx-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-light)]">
                    Collection 01
                  </p>

                  <h3 className="mt-2 text-lg tracking-wide text-[var(--text-soft)]">
                    Mobile Interfaces
                  </h3>
                </div>

                <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:block">
                  UI/UX and Product Design
                </p>
              </div>
            </MotionReveal>

            <MotionReveal y={30} duration={0.9} amount={0.08}>
              <InfiniteDesignRow
                designs={mobileDesigns}
                direction="left"
                duration={72}
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
                duration={80}
              />
            </MotionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
