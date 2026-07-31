import type { Project } from "../components/ui/ProjectCard";

export const projects: Project[] = [
  {
    index: "01",
    name: "Exquisite Properties",
    category:
      "UI/UX Design · Front-end Development",
    year: "2026",
    label: "Live Case Study",
    description:
      "A responsive luxury real-estate experience designed to make property discovery clearer, more refined, and easier to navigate.",
    image: "/projects/exquisite-homepage.svg",
    imageAlt:
      "Exquisite Properties luxury real-estate website homepage",
    href: "/projects/exquisite-properties",
    tools: [
      "Figma",
      "Next.js",
      "Tailwind CSS",
    ],
    imageFit: "cover",
    imagePosition: "object-center",
    glowColor: "#D2B576",
  },
  {
    index: "02",
    name: "Next Trip",
    category:
      "Mobile UI/UX · Product Redesign",
    year: "2026",
    label: "UI/UX Case Study",
    description:
      "A mobile travel companion redesigned to combine itinerary planning, expense tracking, translation, and trip management into one organized experience.",
    image: "/projects/next-trip/mockup.png",
    imageAlt:
      "Next Trip mobile travel application case-study presentation",
    href: "/projects/next-trip",
    tools: [
      "Figma",
      "UI/UX Design",
      "Prototype",
    ],
    imageFit: "cover",
    imagePosition: "object-center",
    glowColor: "#5B72FF",
  },
  {
    index: "03",
    name: "EngliQuest",
    category:
      "Mobile UI/UX · Capstone Project",
    year: "2026",
    label: "Capstone Case Study",
    description:
      "A gamified English-learning application combining interactive language activities, progressive difficulty, assessments, and AI-assisted personalization.",
    image:
      "/projects/engliquest/EQMockup.png",
    imageAlt:
      "EngliQuest gamified English-learning mobile application capstone project",
    href: "/projects/engliquest",
    tools: [
      "React Native",
      "Firebase",
      "Python",
      "Figma",
    ],
    imageFit: "cover",
    imagePosition: "object-center",
    glowColor: "#6866D9",
  },
  {
    index: "04",
    name: "Fashion Discovery",
    category:
      "E-commerce UI/UX · Figma Concept",
    year: "2025",
    label: "Figma Design",
    description:
      "A clean fashion-shopping concept combining editorial visuals with a simple and focused product-discovery experience.",
    image: "/designs/mobile-fashion.svg",
    imageAlt:
      "Fashion Discovery mobile shopping application UI design",
    tools: [
      "Figma",
      "E-commerce",
      "Prototype",
    ],
    imageFit: "cover",
    imagePosition: "object-center",
    glowColor: "#D98FA7",
  },
];