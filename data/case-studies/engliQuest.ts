import type { Metadata } from "next";

import type { CaseStudyProject } from "./types";

export const engliQuestMetadata: Metadata = {
  title: "EngliQuest — Karl Lumabi",
  description:
    "A mobile UI/UX and development capstone case study for EngliQuest, an English-learning application.",
};

export const engliQuestProject: CaseStudyProject = {
  slug: "engliquest",

  projectNumber: "03",

  year: "2026",

  backHref: "/#projects",

  backLabel: "Back to portfolio",

  exploreLabel: "Explore the case study",

  externalLink: {
    label: "View GitHub",
    href: "https://github.com/karllumabi/EngliQuest",
  },

  titleLines: ["Engli", "Quest"],

  tags: [
    "Mobile UI/UX",
    "Capstone Project",
    "Education",
    "Mobile Development",
  ],

  heroDescription:
    "A mobile English-learning application designed and developed to combine vocabulary, grammar, reading comprehension, translation, assessments, and learner progress into one structured experience.",

  heroImage: "/projects/engliquest/EQMockup.png",

  heroImageAlt:
    "EngliQuest mobile English-learning application presentation mockup",

  details: [
    {
      label: "Role",
      value: "UI/UX Designer and Mobile Developer",
    },
    {
      label: "Project",
      value: "College Capstone Project",
    },
    {
      label: "Industry",
      value: "Education Technology",
    },
    {
      label: "Platform",
      value: "Mobile Application",
    },
    {
      label: "Tools",
      value: "Figma, React Native, Expo",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  overview: {
    eyebrow: "Project overview",

    title:
      "Making English practice more structured, accessible, and engaging.",

    challenge: {
      eyebrow: "The capstone problem",

      title:
        "English learners often rely on disconnected tools without a clear learning path.",

      paragraphs: [
        "Vocabulary, grammar, reading comprehension, translation, and assessment are often separated across different platforms, making it difficult for learners to maintain a consistent learning routine.",

        "The capstone project needed to organize these activities into one mobile application while keeping each lesson approachable, focused, and easy to understand.",
      ],
    },

    direction: {
      eyebrow: "The direction",

      title:
        "One guided learning experience for essential English skills.",

      description:
        "EngliQuest uses a clear dashboard, structured learning categories, focused activities, immediate feedback, and visible progress to help learners continue improving.",
    },
  },

  screenSections: [
    {
      id: "access-and-personalization",

      eyebrow: "Access and personalization",

      title:
        "A clear starting point tailored to each learner.",

      description:
        "The login and registration experience collects the essential information needed to create a more personalized English-learning journey.",

      screens: [
        {
          image: "/projects/engliquest/EQLogin.png",

          title: "Login",

          description:
            "A focused login screen provides a simple and familiar entry point for returning learners.",
        },
        {
          image: "/projects/engliquest/EQRegistration.png",

          title: "Registration",

          description:
            "Personal and account information is organized into clear and manageable input fields.",
        },
        {
          image:
            "/projects/engliquest/EQInterestSelection.png",

          title: "Interest selection",

          description:
            "Learners select their interests to support more relevant topics and learning activities.",
        },
      ],
    },

    {
      id: "dashboard-and-progress",

      eyebrow: "Dashboard and progress",

      title:
        "Lessons, recommendations, and progress remain easy to understand.",

      description:
        "The main experience gives learners quick access to learning modules, recommended activities, current progress, and account settings.",

      screens: [
        {
          image: "/projects/engliquest/EQHome.png",

          title: "Learning dashboard",

          description:
            "The dashboard presents available learning categories, recommendations, and current activities in one organized view.",
        },
        {
          image: "/projects/engliquest/EQProgress.png",

          title: "Progress tracking",

          description:
            "Progress indicators help learners understand completed activities, scores, and skills that still need improvement.",
        },
        {
          image: "/projects/engliquest/EQSettings.png",

          title: "Profile and settings",

          description:
            "Account information, interests, achievements, preferences, and application settings are grouped into one familiar location.",
        },
      ],
    },

    {
      id: "vocabulary-and-grammar",

      eyebrow: "Vocabulary and grammar",

      title:
        "Focused practice for building stronger language foundations.",

      description:
        "Vocabulary and grammar modules use clear instructions, manageable questions, and immediate feedback to support continuous learning.",

      screens: [
        {
          image: "/projects/engliquest/EQVocabulary.png",

          title: "Vocabulary lessons",

          description:
            "Vocabulary activities help learners understand definitions, word usage, context, and correct answers.",
        },
        {
          image: "/projects/engliquest/EQGrammar.png",

          title: "Grammar exercises",

          description:
            "Grammar exercises present focused questions with clear answer states and explanations.",
        },
      ],
    },

    {
      id: "reading-and-translation",

      eyebrow: "Reading and translation",

      title:
        "Helping learners understand and apply English in context.",

      description:
        "Reading and translation activities allow learners to practice comprehension, interpretation, and practical language use.",

      screens: [
        {
          image: "/projects/engliquest/EQReading.png",

          title: "Reading comprehension",

          description:
            "Reading activities combine short passages, comprehension questions, and guided answer feedback.",
        },
        {
          image: "/projects/engliquest/EQTranslation.png",

          title: "Translation",

          description:
            "Translation exercises support language understanding through structured prompts and immediate results.",
        },
      ],
    },

    {
      id: "assessment-and-feedback",

      eyebrow: "Assessment and feedback",

      title:
        "Learning becomes measurable through quizzes and immediate results.",

      description:
        "Assessment activities allow learners to apply what they studied while clear feedback helps them understand mistakes and continue improving.",

      screens: [
        {
          image:
            "/projects/engliquest/EQSentenceConstruction.png",

          title: "Sentence construction",

          description:
            "Learners organize words and build sentences through focused activities that reinforce grammar and proper word order.",
        },
        {
          image:
            "/projects/engliquest/EQComprehensionQuiz.png",

          title: "Comprehension quiz",

          description:
            "Quiz questions measure understanding and provide a clear summary of the learner's performance.",
        },
      ],
    },
  ],

  outcome: {
    eyebrow: "Capstone outcome",

    title:
      "A working mobile learning experience built around continuous improvement.",

    description:
      "EngliQuest brings essential English-learning activities into one consistent mobile application while giving learners clear feedback, visible progress, and an easier way to continue practicing.",

    items: [
      "Centralized English-learning modules",
      "Clear learner progress tracking",
      "Working mobile application",
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