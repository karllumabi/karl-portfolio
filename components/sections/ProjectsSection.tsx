import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ProjectCard, {
  type Project,
} from "../ui/ProjectCard";

const projects: Project[] = [
  {
    index: "01",
    name: "Exquisite Properties",
    category: "UI/UX Design · Front-end Development",
    year: "2026",
    label: "Live Case Study",
    description:
      "A responsive luxury real-estate experience designed to make property discovery clearer, more refined, and easier to navigate.",
    image: "/projects/exquisite-homepage.svg",
    imageAlt:
      "Exquisite Properties luxury real-estate website homepage",
    href: "/projects/exquisite-properties",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    imageFit: "cover",
    imagePosition: "object-center",
  },
  {
    index: "02",
    name: "Next Trip",
    category: "Mobile UI/UX · Product Redesign",
    year: "2026",
    label: "UI/UX Case Study",
    description:
      "A mobile travel companion redesigned to combine itinerary planning, expense tracking, translation, and trip management into one organized experience.",
    image: "/projects/next-trip/mockup.png",
    imageAlt:
      "Next Trip mobile travel application case-study presentation",
    href: "/projects/next-trip",
    tools: ["Figma", "UI/UX Design", "Prototype"],
    imageFit: "cover",
    imagePosition: "object-center",
  },
  {
    index: "03",
    name: "City Guide",
    category: "Product Design · Figma Concept",
    year: "2025",
    label: "Figma Design",
    description:
      "A location-based mobile experience designed to help users discover places, activities, and recommendations around the city.",
    image: "/designs/mobile-city-guide.svg",
    imageAlt: "City Guide mobile application UI design",
    tools: ["Figma", "UX Research", "Mobile UI"],
    imageFit: "cover",
    imagePosition: "object-center",
  },
  {
    index: "04",
    name: "Fashion Discovery",
    category: "E-commerce UI/UX · Figma Concept",
    year: "2025",
    label: "Figma Design",
    description:
      "A clean fashion-shopping concept that combines editorial visuals with a simple and focused product-discovery experience.",
    image: "/designs/mobile-fashion.svg",
    imageAlt: "Fashion Discovery shopping application UI design",
    tools: ["Figma", "E-commerce", "Prototype"],
    imageFit: "cover",
    imagePosition: "object-center",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-6 bg-[var(--page)] pb-20 pt-6 sm:pb-28 sm:pt-10"
    >
      <Container>
        <MotionReveal duration={0.75} y={20}>
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-[var(--border)] pb-5 sm:mb-10">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--muted-light)] sm:text-xs">
                Selected Work
              </p>

              <h2 className="mt-3 text-3xl font-normal tracking-[-0.035em] text-[var(--text)] sm:text-4xl">
                Projects
              </h2>
            </div>

            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted-light)] sm:text-xs">
                Four selected projects
              </p>

              <p className="mt-2 hidden text-sm text-[var(--muted)] sm:block">
                UI/UX · Visual Design · Development
              </p>
            </div>
          </div>
        </MotionReveal>

        <div className="grid items-stretch gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionReveal
              key={project.name}
              className="h-full"
              delay={index * 0.08}
              duration={0.85}
              y={30}
              amount={0.1}
            >
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}