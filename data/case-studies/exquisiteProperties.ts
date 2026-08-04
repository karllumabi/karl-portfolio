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
    "A premium digital experience designed to present high-value real estate with clarity, confidence, and a more personal approach to property discovery.",

  heroImage:
    "/projects/exquisite-properties/exquisite-hero.png",

  heroImageAlt:
    "Exquisite Properties PH homepage with property imagery, navigation, and search controls",

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
      value: "Premium Real Estate",
    },
    {
      label: "Services",
      value:
        "Strategy, UI/UX, Visual Design, Development",
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
        "Create a premium property website that feels polished without becoming complicated.",

      paragraphs: [
        "Real estate websites often present visitors with too much information at once. This can make the experience feel crowded, impersonal, and overly transactional.",

        "The challenge was balancing property imagery, listing information, brand credibility, and accessible contact options inside one clear and cohesive experience.",
      ],
    },

    direction: {
      eyebrow: "The direction",

      title:
        "Editorial design meets modern property discovery.",

      description:
        "The final direction combines a restrained palette, expressive typography, spacious layouts, focused calls to action, and immersive property imagery.",
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
          "Generous spacing, strong typography, and restrained visual elements create a refined experience that still feels welcoming.",
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
      "A refined digital experience for high-value properties.",

    description:
      "Actual website screens demonstrate how the visual direction supports property discovery, brand storytelling, and broker inquiries.",

    browser: {
      image:
        "/projects/exquisite-properties/exquisite-hero.png",

      imageAlt:
        "Exquisite Properties PH homepage and property search experience",

      domain: "exquisitepropertiesph.vercel.app",
    },

    featured: {
      image:
        "/projects/exquisite-properties/exquisite-listing-cards.png",

      imageAlt:
        "Property listing cards on the Exquisite Properties PH website",

      label: "Property presentation",

      description:
        "A consistent listing system that keeps property photography and essential information easy to understand.",
    },

    navigation: {
      image:
        "/projects/exquisite-properties/exquisite-property-search.png",

      imageAlt:
        "Property search controls on the Exquisite Properties PH website",

      label: "Property discovery",

      description:
        "Focused filters give visitors a clear starting point for browsing available properties.",
    },

    philosophy: {
      eyebrow: "Interface philosophy",

      statement:
        "Reduce visual noise. Increase confidence.",
    },

    sections: [
      {
        id: "property-search",

        eyebrow: "Property discovery",

        title: "Making property search feel effortless.",

        description: [
          "The property search experience gives visitors a clear starting point without overwhelming them with too many decisions.",

          "Location, transaction type, property type, and price controls are organized inside a focused interface that supports faster browsing while preserving the premium visual direction.",
        ],

        image:
          "/projects/exquisite-properties/exquisite-property-search.png",

        imageAlt:
          "Property search interface on the Exquisite Properties PH website",
      },
      {
        id: "listing-cards",

        eyebrow: "Property presentation",

        title: "A flexible system for every listing.",

        description: [
          "Property cards make the most important information easy to scan while allowing photography to remain the primary visual focus.",

          "Consistent image proportions, typography, pricing, locations, and property details create a reusable structure for different types of listings.",
        ],

        image:
          "/projects/exquisite-properties/exquisite-listing-cards.png",

        imageAlt:
          "Property listing cards from the Exquisite Properties PH website",
      },
      {
        id: "about-exquisite",

        eyebrow: "Brand story",

        title: "Real estate, made personal.",

        description: [
          "The About experience moves beyond property listings and communicates how Exquisite Properties PH guides clients through important real estate decisions.",

          "Large editorial typography, concise messaging, and generous spacing create a calmer and more personal expression of the brand.",
        ],

        image:
          "/projects/exquisite-properties/exquisite-about-section.png",

        imageAlt:
          "About page of the Exquisite Properties PH website",
      },
      {
        id: "final-call-to-action",

        eyebrow: "Conversion",

        title: "From browsing to conversation.",

        description: [
          "The final call to action provides a clear transition from exploring properties to contacting a broker.",

          "A focused message, strong property imagery, and one direct action end the experience confidently without making it feel overly promotional.",
        ],

        image:
          "/projects/exquisite-properties/exquisite-final-cta.png",

        imageAlt:
          "Final broker contact call-to-action on the Exquisite Properties PH website",
      },
    ],
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
          "Organized property listings, search controls, brokerage information, services, and contact points into a clear website structure.",
      },
      {
        number: "03",

        title: "Visual design",

        description:
          "Created a polished interface with editorial typography, premium spacing, restrained colors, and property-focused visual storytelling.",
      },
      {
        number: "04",

        title: "Development",

        description:
          "Translated the design into responsive Next.js components optimized for desktop, tablet, and mobile experiences.",
      },
    ],
  },

  outcome: {
    eyebrow: "The outcome",

    title:
      "A confident digital home for the Exquisite brand.",

    description:
      "The finished experience creates a clearer way to discover listings, strengthens the brokerage’s premium positioning, and provides direct paths from browsing to inquiry.",

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

    primaryHref: "mailto:karllumabi23@gmail.com",

    secondaryLabel: "View all projects",

    secondaryHref: "/#projects",
  },
};