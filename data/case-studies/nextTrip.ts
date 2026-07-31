import type { Metadata } from "next";

import type { CaseStudyProject } from "./types";

export const nextTripMetadata: Metadata = {
  title: "Next Trip — Karl Lumabi",
  description:
    "A mobile travel application created for a UI/UX Design subject and selected as one of the Top 10 Best Designs.",
};

export const nextTripProject: CaseStudyProject = {
  slug: "next-trip",

  projectNumber: "02",

  year: "2026",

  backHref: "/#projects",

  backLabel: "Back to portfolio",

  exploreLabel: "Explore the case study",

  titleLines: ["Next", "Trip"],

  tags: [
    "Mobile UI/UX",
    "Academic Project",
    "Top 10 Design",
    "Travel",
    "Figma",
  ],

  heroDescription:
    "A mobile travel application created for a UI/UX Design subject. The project combines itinerary planning, expense tracking, translation, and trip management in one organized experience and was selected as one of the Top 10 Best Designs.",

  heroImage: "/projects/next-trip/mockup.png",

  heroImageAlt:
    "Next Trip mobile travel application UI/UX project presentation mockup",

  details: [
    {
      label: "Role",
      value: "UI/UX Designer",
    },
    {
      label: "Project",
      value: "UI/UX Design Subject Project",
    },
    {
      label: "Recognition",
      value: "Top 10 Best Designs",
    },
    {
      label: "Platform",
      value: "Mobile Application",
    },
    {
      label: "Tools",
      value: "Figma, Auto Layout, Prototyping",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  overview: {
    eyebrow: "Project overview",

    title:
      "A complete travel companion designed for planning and managing every trip.",

    challenge: {
      eyebrow: "The project goal",

      title:
        "Create one mobile experience that organizes essential travel activities.",

      paragraphs: [
        "Travelers often use separate applications for itineraries, expenses, translation, notes, and other important trip information.",

        "The objective of the UI/UX Design subject project was to create a clear mobile experience that combines these tools without making the interface feel crowded or difficult to navigate.",
      ],
    },

    direction: {
      eyebrow: "The design direction",

      title:
        "A calm, organized, and practical mobile travel experience.",

      description:
        "Next Trip uses clear visual hierarchy, consistent cards, focused user flows, and simple navigation to help users prepare for a trip and manage important activities while traveling.",
    },
  },

  screenSections: [
    {
      id: "onboarding",

      eyebrow: "Onboarding and access",

      title:
        "Introducing the application through a simple and focused onboarding flow.",

      description:
        "The onboarding screens communicate the main purpose of Next Trip before guiding users toward account access.",

      screens: [
        {
          image:
            "/projects/next-trip/NTOnboarding1.png",

          title: "Discover",

          description:
            "Introduces Next Trip as one organized place for preparing and managing upcoming travel.",
        },
        {
          image:
            "/projects/next-trip/NTOnboarding2.png",

          title: "Plan",

          description:
            "Shows how users can organize activities, destinations, and daily travel schedules.",
        },
        {
          image:
            "/projects/next-trip/NTOnboarding3.png",

          title: "Travel",

          description:
            "Highlights the supporting tools available to users during their journey.",
        },
        {
          image: "/projects/next-trip/NTLogin.png",

          title: "Login",

          description:
            "A clean and focused login screen provides a clear entry point into the application.",
        },
      ],
    },

    {
      id: "planning",

      eyebrow: "Trip planning",

      title:
        "From the complete trip overview to every individual activity.",

      description:
        "The planning experience allows users to understand their trip at a glance, review daily activities, and add new plans through a consistent flow.",

      screens: [
        {
          image: "/projects/next-trip/NTHome.png",

          title: "Trip overview",

          description:
            "The home screen presents the active trip, important details, upcoming activities, and daily spending.",
        },
        {
          image:
            "/projects/next-trip/NTItinerary.png",

          title: "Daily itinerary",

          description:
            "Activities are arranged by day and time to make the travel schedule easier to scan.",
        },
        {
          image:
            "/projects/next-trip/NTActivityDetails.png",

          title: "Activity details",

          description:
            "Location, time, notes, and other important activity information are presented in one focused view.",
        },
        {
          image:
            "/projects/next-trip/NTAddActivity.png",

          title: "Add activity",

          description:
            "A structured form allows users to add activities without interrupting the main planning flow.",
        },
      ],
    },

    {
      id: "utilities",

      eyebrow: "Travel utilities",

      title:
        "Supporting tools remain accessible throughout the journey.",

      description:
        "Expense tracking, translation, and account settings are organized as supporting features alongside the main itinerary experience.",

      screens: [
        {
          image:
            "/projects/next-trip/NTExpenses.png",

          title: "Expense tracking",

          description:
            "Daily totals and spending categories help travelers understand and monitor their expenses.",
        },
        {
          image:
            "/projects/next-trip/NTAddExpense.png",

          title: "Add expense",

          description:
            "A focused expense-entry form makes recording travel purchases quick and manageable.",
        },
        {
          image:
            "/projects/next-trip/NTTranslate.png",

          title: "Translation",

          description:
            "A built-in translation tool supports communication and language assistance while traveling.",
        },
        {
          image:
            "/projects/next-trip/NTProfile.png",

          title: "Profile and settings",

          description:
            "Personal information, preferences, and trip settings are organized in one familiar location.",
        },
      ],
    },
  ],

  designProcess: {
    id: "design-process",

    eyebrow: "Design process and system",

    title:
      "Created through a connected prototype and a consistent visual system.",

    description:
      "The project used prototype connections, reusable color styles, Auto Layout, mobile frame specifications, and layout grids to maintain consistency across the experience.",

    prototype: {
      image:
        "/projects/next-trip/NTPrototypeFlow.png",

      imageAlt:
        "Next Trip mobile application interactive prototype connections in Figma",

      eyebrow: "Interactive prototype",

      title:
        "Connecting onboarding, planning, expenses, translation, and account management.",

      description:
        "The Figma prototype demonstrates how users move from onboarding and login to the trip dashboard, itinerary, travel utilities, and profile screens.",
    },

    cards: [
      {
        image:
          "/projects/next-trip/NTColorStyles.png",

        imageAlt:
          "Next Trip reusable interface color styles created in Figma",

        eyebrow: "Reusable styles",

        title: "A consistent color system.",

        description:
          "Brand, navigation, background, text, card, and interface colors were organized as reusable Figma styles.",

        layout: "narrow",
      },
      {
        image:
          "/projects/next-trip/NTGridSystem.png",

        imageAlt:
          "Next Trip mobile layout grid and Auto Layout system in Figma",

        eyebrow: "Grid and Auto Layout",

        title:
          "A consistent structure across every mobile screen.",

        description:
          "A shared mobile frame, column grid, spacing system, and Auto Layout structure helped maintain alignment and consistency throughout the project.",

        layout: "wide",
      },
    ],

    specifications: [
      {
        label: "Frame",
        value: "430 × 932",
      },
      {
        label: "Layout",
        value: "12-column grid",
      },
      {
        label: "Structure",
        value: "Auto Layout",
      },
      {
        label: "Recognition",
        value: "Top 10 Best Designs",
      },
    ],
  },

  outcome: {
    eyebrow: "Project recognition",

    title:
      "Selected as one of the Top 10 Best Designs in the UI/UX Design subject.",

    description:
      "Next Trip presented a complete mobile travel experience supported by clear user flows, consistent interface patterns, reusable design styles, and an interactive Figma prototype.",

    items: [
      "Top 10 Best Designs recognition",
      "Complete mobile travel experience",
      "Consistent UI system and prototype",
    ],
  },

  cta: {
    eyebrow: "End of project",

    title: "Have a project in mind?",

    description:
      "Let's create a clear, thoughtful, and memorable digital experience.",

    primaryLabel: "Start a conversation",

    primaryHref:
      "mailto:karllumabi23@gmail.com",

    secondaryLabel: "View all projects",

    secondaryHref: "/projects",
  },
};