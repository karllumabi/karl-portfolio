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
    "/projects/exquisite-properties/exquisite-background.png",

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
        "/projects/exquisite-properties/exquisite-background.png",

      imageAlt:
        "Exquisite Properties PH homepage and property search experience",

      domain: "exquisitepropertiesph.vercel.app",
    },

    featured: {
      image:
        "/projects/exquisite-properties/exquisite-featured-properties.png",

      imageAlt:
        "Property listing cards on the Exquisite Properties PH website",

      label: "Property presentation",

      description:
        "A consistent listing system that keeps property photography and essential information easy to understand.",
    },

    navigation: {
      image:
        "/projects/exquisite-properties/exquisite-featured-properties.png",

      imageAlt:
        "Featured property listings on the Exquisite Properties PH website",

      label: "Featured properties",

      description:
        "A flexible listing system keeps the property experience clear and easy to explore.",
    },

    philosophy: {
      eyebrow: "Interface philosophy",

      statement:
        "Reduce visual noise. Increase confidence.",
    },

    sections: [
      {
        id: "listing-cards",

        eyebrow: "Property presentation",

        title: "A flexible system for every listing.",

        description: [
          "Property cards make the most important information easy to scan while allowing photography to remain the primary visual focus.",

          "Consistent image proportions, typography, pricing, locations, and property details create a reusable structure for different types of listings.",
        ],

        image:
          "/projects/exquisite-properties/exquisite-featured-properties.png",

        imageAlt:
          "Property listing cards from the Exquisite Properties PH website",
      },
      {
        id: "services-exquisite",

        eyebrow: "Services",

        title: "Expertise that moves with the client.",

        description: [
          "The services experience positions Exquisite Properties PH as a thoughtful partner across buying, selling, leasing, and investment decisions.",

          "A focused editorial layout pairs a clear value proposition with a strong architectural image and concise service cues.",
        ],

        image:
          "/projects/exquisite-properties/exquisite-services-hero.png",

        imageAlt:
          "Services hero design for the Exquisite Properties PH website",
      },
    ],
  },

  designProcess: {
    id: "design-process",

    eyebrow: "Figma design process",

    title:
      "Mapped as a connected experience before it was built.",

    description:
      "The Figma work brings the page structure, visual direction, and key user paths together so every section feels like part of one property journey.",

    prototype: {
      image:
        "/projects/exquisite-properties/figma-prototype-flow-2x.png",

      imageAlt:
        "Exquisite Properties PH connected prototype flow in Figma",

      eyebrow: "Prototype and page map",

      title:
        "Connecting every page into one property journey.",

      description:
        "The prototype board maps the navigation between the landing page, properties, services, and About flows before development.",
    },

    cards: [
      {
        image:
          "/projects/exquisite-properties/figma-canvas-layout-2x.png",

        imageAlt:
          "Exquisite Properties PH page sections arranged on a Figma canvas",

        eyebrow: "Section layout",

        title: "A page system you can see at a glance.",

        description:
          "The Figma canvas shows the landing-page sections and supporting screen compositions arranged as one connected design system.",

        layout: "wide",
      },
      {
        image: "/projects/exquisite-properties/figma-layers-2x.png",

        imageAlt:
          "Exquisite Properties PH section layers organized in Figma",

        eyebrow: "Layer structure",

        title: "Organized for responsive implementation.",

        description:
          "Named sections, nested frames, and grouped components keep the design handoff clear and make the front-end structure easier to maintain.",

        layout: "narrow",
      },
    ],

    specifications: [
      {
        label: "Canvas",
        value: "1920 px desktop",
      },
      {
        label: "Structure",
        value: "Landing + 4 page flows",
      },
      {
        label: "System",
        value: "Reusable sections",
      },
      {
        label: "Prototype",
        value: "Connected navigation",
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
