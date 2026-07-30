import type { Metadata } from "next";

import type { CaseStudyProject } from "./types";

export const nextTripMetadata: Metadata = {
  title: "Next Trip — Karl Lumabi",
  description:
    "A mobile UI/UX redesign case study for Next Trip, a travel-planning and expense-management application.",
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
    "Product Redesign",
    "Travel",
    "Figma",
  ],

  heroDescription:
    "A mobile travel companion redesigned to bring itinerary planning, expense tracking, translation, and trip management into one clear experience.",

  heroImage: "/projects/next-trip/mockup.png",

  heroImageAlt:
    "Next Trip mobile application presentation mockup",

  details: [
    {
      label: "Role",
      value: "UI/UX Designer",
    },
    {
      label: "Project",
      value: "Mobile Application Redesign",
    },
    {
      label: "Platform",
      value: "iOS and Android",
    },
    {
      label: "Tools",
      value: "Figma, Prototyping",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  overview: {
    eyebrow: "Project overview",

    title:
      "Making every part of a trip easier to manage.",

    challenge: {
      eyebrow: "The challenge",

      title:
        "Travel information was spread across too many disconnected tools.",

      paragraphs: [
        "Travelers often move between calendar apps, notes, calculators, maps, and translation tools while planning and managing a trip.",

        "The redesign needed to combine these essential tasks without making the interface feel crowded or difficult to understand.",
      ],
    },

    direction: {
      eyebrow: "The direction",

      title:
        "One calm and organized travel companion.",

      description:
        "The new experience uses clearer hierarchy, simplified navigation, consistent cards, and focused task flows to help users plan without unnecessary friction.",
    },
  },

  screenSections: [
    {
      id: "onboarding",

      eyebrow: "Onboarding and access",

      title:
        "Introducing the experience without overwhelming the user.",

      description:
        "The onboarding sequence explains the app's value through a simple story before guiding users into a focused login screen.",

      screens: [
        {
          image:
            "/projects/next-trip/NTOnboarding1.png",

          title: "Discover",

          description:
            "Introduces the app as a central place for organizing upcoming travel.",
        },
        {
          image:
            "/projects/next-trip/NTOnboarding2.png",

          title: "Plan",

          description:
            "Communicates how users can organize activities and daily itineraries.",
        },
        {
          image:
            "/projects/next-trip/NTOnboarding3.png",

          title: "Travel",

          description:
            "Highlights the tools available to support users during their trip.",
        },
        {
          image:
            "/projects/next-trip/NTLogin.png",

          title: "Login",

          description:
            "A clean entry point with clear hierarchy and minimal distractions.",
        },
      ],
    },

    {
      id: "planning",

      eyebrow: "Planning experience",

      title:
        "From the trip overview to every individual activity.",

      description:
        "Users can understand their schedule at a glance, review activity details, and add new plans without leaving the main travel flow.",

      screens: [
        {
          image: "/projects/next-trip/NTHome.png",

          title: "Trip overview",

          description:
            "A central dashboard showing the current trip, important details, and daily spending.",
        },
        {
          image:
            "/projects/next-trip/NTItinerary.png",

          title: "Daily itinerary",

          description:
            "Activities are organized by day and time, making the travel schedule easier to scan.",
        },
        {
          image:
            "/projects/next-trip/NTActivityDetails.png",

          title: "Activity details",

          description:
            "Important location, time, notes, and activity information appear in one focused view.",
        },
        {
          image:
            "/projects/next-trip/NTAddActivity.png",

          title: "Add activity",

          description:
            "A structured form reduces friction when adding new plans to the itinerary.",
        },
      ],
    },

    {
      id: "utilities",

      eyebrow: "Travel utilities",

      title:
        "Useful tools remain accessible throughout the journey.",

      description:
        "Expenses, translation, and account preferences are organized as supporting tools instead of competing with the main itinerary.",

      screens: [
        {
          image:
            "/projects/next-trip/NTExpenses.png",

          title: "Expense tracking",

          description:
            "Daily totals and spending categories help travelers understand where their money goes.",
        },
        {
          image:
            "/projects/next-trip/NTAddExpense.png",

          title: "Add expense",

          description:
            "A focused expense-entry flow keeps financial tracking quick and manageable.",
        },
        {
          image:
            "/projects/next-trip/NTTranslate.png",

          title: "Translation",

          description:
            "An accessible translation tool supports communication while traveling.",
        },
        {
          image:
            "/projects/next-trip/NTProfile.png",

          title: "Profile and settings",

          description:
            "Account preferences and trip settings are organized in one familiar location.",
        },
      ],
    },
  ],

  designProcess: {
    id: "design-process",

    eyebrow: "Design process",

    title:
      "Building a consistent and reusable mobile design system.",

    description:
      "The final interface was supported by a complete prototype flow, reusable color styles, and a structured layout grid created in Figma.",

    prototype: {
      image:
        "/projects/next-trip/NTPrototypeFlow.png",

      imageAlt:
        "Next Trip Figma prototype flow",

      eyebrow: "Prototype flow",

      title:
        "Connecting every screen into one complete travel journey.",

      description:
        "The interactive prototype demonstrates how users move from onboarding and login to trip planning, expense tracking, translation, and profile management.",
    },

    cards: [
      {
        image:
          "/projects/next-trip/NTColorStyles.png",

        imageAlt:
          "Next Trip color styles created in Figma",

        eyebrow: "Color styles",

        title:
          "A reusable visual language.",

        description:
          "Primary, secondary, text, surface, and feedback colors were saved as reusable Figma styles to maintain consistency across every screen.",

        layout: "narrow",
      },
      {
        image:
          "/projects/next-trip/NTGridSystem.png",

        imageAlt:
          "Next Trip mobile grid system created in Figma",

        eyebrow: "Grid system",

        title:
          "A structured mobile layout.",

        description:
          "Every screen was designed using a 430 × 932 mobile frame, consistent margins, spacing rules, Auto Layout, and reusable components.",

        layout: "wide",
      },
    ],

    specifications: [
      {
        label: "Frame",
        value: "430 × 932 px",
      },
      {
        label: "Layout",
        value: "Auto Layout",
      },
      {
        label: "Spacing",
        value: "Consistent system",
      },
      {
        label: "Styles",
        value: "Reusable components",
      },
    ],
  },

  outcome: {
    eyebrow: "The outcome",

    title:
      "A clearer and more complete way to plan every trip.",

    description:
      "The redesign brings essential travel tasks into one consistent system while preserving enough space and clarity for users to stay focused.",

    items: [
      "Simplified trip planning",
      "Clear daily expense tracking",
      "Consistent mobile interface",
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

    secondaryHref: "/#projects",
  },
};