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

    image:
      "/projects/exquisite-properties/exquisite-background.png",

    imageAlt:
      "Exquisite Properties luxury real-estate website homepage",

    href: "/projects/exquisite-properties",

    tools: [
      "Figma",
      "Next.js",
      "Tailwind CSS",
    ],

    imageFit: "cover",
    imagePosition: "object-top",

    glowColor: "#4F919E",

    coverVariant: "exquisite",

    coverLogo:
      "/projects/exquisite-properties/logo-white.png",

    coverMockup:
      "/projects/exquisite-properties/exquisite-background.png",
  },

  {
    index: "02",
    name: "Next Trip",
    category:
      "Mobile UI/UX · Academic Project",
    year: "2026",
    label: "Top 10 Design",
    description:
      "A mobile travel application created for a UI/UX Design subject, combining itinerary planning, expense tracking, translation, and trip management. Selected as one of the Top 10 Best Designs.",

    image:
      "/projects/next-trip/NTHome.png",

    imageAlt:
      "Next Trip mobile travel application displayed inside an iPhone mockup",

    href: "/projects/next-trip",

    tools: [
      "Figma",
      "UI/UX Design",
      "Prototype",
    ],

    imageFit: "cover",
    imagePosition: "object-top",

    glowColor: "#A6BE62",

    coverVariant: "nexttrip",

    coverLogo:
      "/projects/next-trip/NTLogo.png",

    coverMockup:
      "/projects/next-trip/mockup.png",
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
      "/projects/engliquest/EQHome.png",

    imageAlt:
      "EngliQuest mobile English-learning application displayed inside an iPhone mockup",

    href: "/projects/engliquest",

    tools: [
      "React Native",
      "Firebase",
      "Python",
      "Figma",
    ],

    imageFit: "cover",
    imagePosition: "object-top",

    glowColor: "#776CCB",

    coverVariant: "engliquest",

    coverLogo:
      "/projects/engliquest/EQLogo.png",

    coverMockup:
      "/projects/engliquest/EQMockup.png",
  },

  {
    index: "04",
    name: "Astral Dev Team",
    category:
      "Team Portfolio · Vibe-coded Website",
    year: "2026",
    label: "Self-initiated Project",
    description:
      "A collaborative portfolio I created with my partner, bringing our shared digital work, experiments, and creative direction into one team-focused experience.",

    image:
      "/projects/astral-dev-team/hero.png",

    imageAlt:
      "Astral Dev Team collaborative portfolio website preview",

    href:
      "/projects/astral-dev-team",

    tools: [
      "Vibe coding",
      "Front-end",
      "Collaboration",
    ],

    imageFit: "cover",
    imagePosition: "object-center",

    glowColor: "#78A8C9",

    coverVariant: "astral",

    coverMockup:
      "/projects/astral-dev-team/hero.png",
  },
];
