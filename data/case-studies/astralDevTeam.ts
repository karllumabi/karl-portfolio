import type { Metadata } from "next";

import type { WebsiteCaseStudyProject } from "./types";

export const astralDevTeamMetadata: Metadata = {
  title: "Astral Dev Team — Karl Lumabi",
  description:
    "A collaborative team portfolio case study for Astral Dev Team.",
};

export const astralDevTeamProject: WebsiteCaseStudyProject = {
  slug: "astral-dev-team",
  projectNumber: "04",
  year: "2026",

  backHref: "/#projects",
  backLabel: "Back to portfolio",
  exploreLabel: "Explore the case study",

  titleLines: ["Astral", "Dev Team"],

  tags: [
    "Team Portfolio",
    "Vibe-coded Website",
    "Front-end Development",
  ],

  heroDescription:
    "A shared digital home I created with my partner — bringing our work, experiments, and creative direction together as one team portfolio.",

  heroImage: "/projects/astral-dev-team/hero.png",
  heroImageAlt:
    "Astral Dev Team collaborative portfolio website concept",

  browserDomain: "astral-six-liard.vercel.app",

  liveSite: {
    label: "Open live view",
    href: "https://astral-six-liard.vercel.app",
  },

  livePreview: true,

  details: [
    {
      label: "Role",
      value: "Co-creator, UI/UX Designer & Front-end Developer",
    },
    {
      label: "Format",
      value: "Collaborative Team Portfolio",
    },
    {
      label: "Services",
      value: "Creative Direction, Vibe Coding, Development",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  overview: {
    eyebrow: "Project overview",
    title: "Two creative practices, one clear point of view.",

    challenge: {
      eyebrow: "The challenge",
      title:
        "Create our own team portfolio that feels unified without losing the personality of either collaborator.",
      paragraphs: [
        "We wanted our shared portfolio to make collaboration feel intentional from the first interaction. The work, roles, and point of view should be easy to understand without turning the experience into two disconnected personal sites.",
        "The challenge was shaping a flexible foundation that could hold both of our projects while still feeling like one confident creative practice.",
      ],
    },

    direction: {
      eyebrow: "The direction",
      title: "A shared orbit for ideas, craft, and collaboration.",
      description:
        "The direction uses a focused visual system, expressive type, and a dark atmospheric palette to give the team a memorable home while keeping the work in focus.",
    },
  },

  experiencePrinciples: {
    eyebrow: "Experience principles",
    title: "A team portfolio built around shared momentum.",
    description:
      "The experience keeps the team identity clear, lets the work lead, and makes collaboration feel like a strength rather than a constraint.",
    items: [
      {
        number: "01",
        title: "One shared identity",
        description:
          "A focused visual language gives the team a recognizable presence while leaving room for both collaborators to contribute their own perspective.",
      },
      {
        number: "02",
        title: "Work stays central",
        description:
          "The layout is intentionally direct so visitors can understand what the team makes before getting lost in unnecessary decoration.",
      },
      {
        number: "03",
        title: "Built to keep evolving",
        description:
          "A flexible structure makes it easy to add new projects, experiments, and collaborations as the team grows.",
      },
    ],
  },

  showcase: {
    eyebrow: "Live website",
    title: "A digital home for two creative minds.",
    description:
      "Explore the live Astral Dev Team website to see the final experience, interactions, and responsive implementation in action.",
    browser: {
      image: "/projects/astral-dev-team/hero.png",
      imageAlt:
        "Astral Dev Team live website homepage",
      domain: "astral-six-liard.vercel.app",
    },
    featured: {
      image: "/projects/astral-dev-team/astral-work-viewport.jpg",
      imageAlt:
        "Astral Dev Team selected work page",
      label: "Team identity",
      description:
        "A clear, atmospheric introduction makes the collaborative point of view immediately visible across the work archive.",
    },
    navigation: {
      image: "/projects/astral-dev-team/astral-team-viewport.jpg",
      imageAlt:
        "Astral Dev Team team page",
      label: "Live interaction",
      description:
        "The final interface brings the team story, people, and work into one focused experience.",
    },
    philosophy: {
      eyebrow: "Build philosophy",
      statement: "Start with an idea. Keep making it better.",
    },
    sections: [
      {
        id: "selected-work",
        eyebrow: "Selected work",
        title: "A portfolio that lets the work lead.",
        description: [
          "The work page gives each project enough room to make an impression while keeping the overall archive easy to scan.",
          "Distinct visual previews and short summaries help visitors move from curiosity to a deeper project view.",
        ],
        image: "/projects/astral-dev-team/astral-work-viewport.jpg",
        imageAlt: "Astral Dev Team selected work page preview",
      },
      {
        id: "services",
        eyebrow: "Capabilities",
        title: "A clear view of what the team can make.",
        description: [
          "The services page translates the team’s range into focused capabilities, from web design and frontend development to AI and product work.",
          "The structure keeps the offer easy to understand without flattening the team’s personality.",
        ],
        image: "/projects/astral-dev-team/astral-services-viewport.jpg",
        imageAlt: "Astral Dev Team services page preview",
      },
      {
        id: "team",
        eyebrow: "The team",
        title: "The people behind the work.",
        description: [
          "The team page makes the partnership visible, giving each collaborator space to share their role, strengths, and way of working.",
          "It turns a portfolio from a gallery into an invitation to work together.",
        ],
        image: "/projects/astral-dev-team/astral-team-viewport.jpg",
        imageAlt: "Astral Dev Team team page preview",
      },
    ],
  },

  process: {
    eyebrow: "Build approach",
    title: "Vibe-coded from first idea to live experience.",
    steps: [
      {
        number: "01",
        title: "Start with the idea",
        description:
          "We defined the shared point of view, tone, and story we wanted the team portfolio to communicate.",
      },
      {
        number: "02",
        title: "Shape it in code",
        description:
          "The layout, visuals, and interactions were built directly in code through fast, exploratory iteration.",
      },
      {
        number: "03",
        title: "Refine the details",
        description:
          "Spacing, responsive behavior, type, and motion were tuned in the browser until the experience felt cohesive.",
      },
      {
        number: "04",
        title: "Publish and evolve",
        description:
          "The finished site was deployed on Vercel and is ready to grow with the team’s next projects.",
      },
    ],
  },

  outcome: {
    eyebrow: "The outcome",
    title: "A stronger home for the work we make together.",
    description:
      "Astral Dev Team gives us a single, memorable place to present our work, explain our shared point of view, and invite the next project in.",
    items: [
      "A unified team identity",
      "A clearer way to explore shared work",
      "A direct path from portfolio to conversation",
    ],
  },

  cta: {
    eyebrow: "End of project",
    title: "Explore the team portfolio we created.",
    description:
      "See how we brought our collaborative work and creative direction together.",
    primaryLabel: "Visit Astral Dev Team",
    primaryHref: "https://astral-six-liard.vercel.app",
    secondaryLabel: "View all projects",
    secondaryHref: "/#projects",
  },
};
