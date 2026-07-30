import type { Metadata } from "next";

import type { WebsiteCaseStudyProject } from "./types";

export const exquisitePropertiesMetadata: Metadata = {
  title: "Exquisite Properties — Karl Lumabi",
  description:
    "A UI/UX design and front-end development case study for Exquisite Properties.",
};

export const exquisitePropertiesProject: WebsiteCaseStudyProject = {
  slug: "exquisite-properties",

  projectNumber: "01",

  year: "2026",

  backHref: "/#projects",

  backLabel: "Back to portfolio",

  exploreLabel: "Explore the case study",

  titleLines: ["Exquisite", "Properties"],

  tags: [
    "UI/UX Design",
    "Front-end Development",
    "Real Estate",
  ],

  heroDescription:
    "A premium digital experience designed to present luxury real estate with clarity, confidence, and a more human approach to property discovery.",

  heroImage: "/projects/exquisite-homepage.svg",

  heroImageAlt:
    "Exquisite Properties luxury real-estate website homepage",

  browserDomain: "exquisitepropertiesph.vercel.app",

  liveSite: {
    label: "View live website",
    href: "https://exquisitepropertiesph.vercel.app",
  },

  details: [
    {
      label: "Role",
      value: "UI/UX Designer & Front-end Developer",
    },
    {
      label: "Industry",
      value: "Luxury Real Estate",
    },
    {
      label: "Services",
      value: "Strategy, UI/UX, Visual Design, Development",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  overview: {
    eyebrow: "Project overview",

    title:
      "Building trust through a refined digital experience.",

    challenge: {
      eyebrow: "The challenge",

      title:
        "Create a luxury property website that feels premium without becoming complicated.",

      paragraphs: [
        "Real-estate websites often present visitors with too much information at once. This can make the experience feel crowded and transactional.",

        "The challenge was balancing property visuals, listing information, brand credibility, and accessible contact options in one coherent experience.",
      ],
    },

    direction: {
      eyebrow: "The direction",

      title:
        "Editorial design meets modern property discovery.",

      description:
        "The final direction combines an elegant neutral palette, expressive typography, spacious layouts, and immersive property imagery.",
    },
  },

  experiencePrinciples: {
    eyebrow: "Experience principles",

    title:
      "Designed around clarity, trust, and visual impact.",

    description:
      "Every design decision supports the visitor’s ability to explore properties, understand the brokerage, and confidently begin a conversation.",

    items: [
      {
        number: "01",

        title: "Premium without feeling distant",

        description:
          "The interface uses generous spacing, strong typography, and restrained visual elements to create a luxury experience that still feels welcoming.",
      },
      {
        number: "02",

        title: "Properties remain the focus",

        description:
          "Large property photography and clear information hierarchy allow visitors to understand each listing without unnecessary distractions.",
      },
      {
        number: "03",

        title: "Simple paths to inquiry",

        description:
          "Calls to action are placed naturally throughout the experience so potential buyers can contact the brokerage without interrupting their browsing.",
      },
    ],
  },

  showcase: {
    eyebrow: "Website showcase",

    title:
      "A visual system made for high-value properties.",

    description:
      "Each visual demonstrates a different part of the browsing and inquiry experience.",

    browser: {
      image: "/projects/exquisite-homepage.svg",

      imageAlt:
        "Exquisite Properties complete website homepage",

      domain: "exquisitepropertiesph.vercel.app",
    },

    featured: {
      image: "/projects/exquisite-homepage.svg",

      imageAlt:
        "Exquisite Properties desktop website experience",

      label: "Desktop experience",

      description:
        "An immersive editorial homepage designed for luxury property discovery.",
    },

    navigation: {
      image: "/projects/exquisite-homepage.svg",

      imageAlt:
        "Exquisite Properties website navigation",

      label: "Clear navigation",

      description:
        "Simple pathways help visitors explore properties quickly.",
    },

    philosophy: {
      eyebrow: "Interface philosophy",

      statement:
        "Reduce visual noise. Increase confidence.",
    },
  },

  process: {
    eyebrow: "Design process",

    title:
      "From brand strategy to responsive execution.",

    steps: [
      {
        number: "01",

        title: "Discovery",

        description:
          "Defined the brand personality, target property buyers, business goals, and the most important actions visitors should take.",
      },
      {
        number: "02",

        title: "Information architecture",

        description:
          "Organized property listings, brokerage information, services, and contact points into a clear website structure.",
      },
      {
        number: "03",

        title: "Visual design",

        description:
          "Created a polished interface with editorial typography, premium spacing, and property-focused visual storytelling.",
      },
      {
        number: "04",

        title: "Development",

        description:
          "Translated the design into a responsive front-end experience optimized for desktop, tablet, and mobile screens.",
      },
    ],
  },

  outcome: {
    eyebrow: "The outcome",

    title:
      "A confident digital home for the Exquisite brand.",

    description:
      "The finished experience creates a clearer way to discover listings, strengthens the brokerage’s premium positioning, and provides direct paths to inquiries.",

    items: [
      "Clearer property browsing",
      "Stronger premium brand presence",
      "Responsive experience across devices",
    ],
  },

  cta: {
    eyebrow: "End of project",

    title: "Have a project in mind?",

    description:
      "Let's create a thoughtful digital experience that connects your brand with the people it was made for.",

    primaryLabel: "Start a conversation",

    primaryHref:
      "mailto:karllumabi23@gmail.com",

    secondaryLabel: "View all projects",

    secondaryHref: "/#projects",
  },
};