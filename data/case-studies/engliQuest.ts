import type { Metadata } from "next";

import type { CaseStudyProject } from "./types";

export const engliQuestMetadata: Metadata = {
  title: "EngliQuest — Karl Lumabi",
  description:
    "A gamified English-learning mobile application designed to support reading comprehension, vocabulary, grammar, sentence construction, translation, assessments, and personalized learning.",
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
    "Gamified Learning",
    "React Native",
    "AI Personalization",
  ],

  heroDescription:
    "A gamified English-learning mobile application that combines interactive language activities, progressive difficulty, measurable assessments, and AI-assisted personalization into one structured learning experience.",

  heroImage: "/projects/engliquest/EQMockup.png",

  heroImageAlt:
    "EngliQuest gamified English-learning mobile application presentation mockup",

  details: [
    {
      label: "Role",
      value: "UI/UX Designer and Mobile Developer",
    },
    {
      label: "Project",
      value: "Academic Capstone Project",
    },
    {
      label: "Users",
      value: "Learners, Teachers, and Administrators",
    },
    {
      label: "Platform",
      value: "Cross-platform Mobile Application",
    },
    {
      label: "Stack",
      value: "React Native, Firebase, Python, Figma",
    },
    {
      label: "Year",
      value: "2026",
    },
  ],

  overview: {
    eyebrow: "Project overview",

    title:
      "Making English learning more interactive, personalized, and measurable.",

    challenge: {
      eyebrow: "The problem",

      title:
        "Traditional English-learning activities often struggle to maintain learner engagement.",

      paragraphs: [
        "Learners need an accessible and interactive way to practice reading comprehension, vocabulary, grammar, sentence construction, and Filipino-English translation.",

        "Many learning tools also lack personalized content, structured difficulty progression, and measurable assessment methods that clearly show whether a learner is improving.",
      ],
    },

    direction: {
      eyebrow: "The solution",

      title:
        "A gamified mobile environment built around repeated practice and progression.",

      description:
        "EngliQuest presents English-learning activities as short interactive challenges. It combines game mechanics, immediate feedback, progressive difficulty, learner interests, AI-assisted reading content, and pretest and post-test assessments.",
    },
  },

  screenSections: [
    {
      id: "account-and-personalization",

      eyebrow: "Account and personalization",

      title:
        "A clear starting experience personalized around learner interests.",

      description:
        "Learners create an account, provide essential information, and choose interests that can be used to generate more relevant reading materials.",

      screens: [
        {
          image: "/projects/engliquest/EQLogin.png",

          title: "Login",

          description:
            "A simple login experience gives returning learners direct access to their account and learning progress.",
        },
        {
          image: "/projects/engliquest/EQRegistration.png",

          title: "Account registration",

          description:
            "The registration flow organizes learner information into clear and manageable fields.",
        },
        {
          image:
            "/projects/engliquest/EQInterestSelection.png",

          title: "Interest selection",

          description:
            "Learners select topics they are interested in to support more personalized reading content and activities.",
        },
      ],
    },

    {
      id: "learning-environment",

      eyebrow: "Learning environment",

      title:
        "One organized place for activities, progress, and account management.",

      description:
        "The main environment gives learners quick access to English-learning modes, current activities, performance information, and personal settings.",

      screens: [
        {
          image: "/projects/engliquest/EQHome.png",

          title: "Learning dashboard",

          description:
            "The dashboard presents available learning modes, recommendations, activities, and progression in one clear interface.",
        },
        {
          image: "/projects/engliquest/EQProgress.png",

          title: "Learning progress",

          description:
            "Progress information helps learners understand completed activities, performance, and areas that need more practice.",
        },
        {
          image: "/projects/engliquest/EQSettings.png",

          title: "Profile and settings",

          description:
            "Learner information, interests, preferences, achievements, and account actions are grouped in one familiar location.",
        },
      ],
    },

    {
      id: "core-learning-modes",

      eyebrow: "Core learning modes",

      title:
        "Interactive challenges targeting practical English skills.",

      description:
        "EngliQuest combines several language-learning modes so learners can practice comprehension, word knowledge, grammar, and translation without switching between different applications.",

      screens: [
        {
          image: "/projects/engliquest/EQVocabulary.png",

          title: "Vocabulary building",

          description:
            "Interactive activities help learners practice English words, definitions, meanings, context, and proper usage.",
        },
        {
          image: "/projects/engliquest/EQGrammar.png",

          title: "Grammar practice",

          description:
            "Grammar-focused questions help learners identify and apply correct grammatical structures.",
        },
        {
          image: "/projects/engliquest/EQReading.png",

          title: "Reading comprehension",

          description:
            "Learners read passages and answer comprehension questions to evaluate their understanding of the text.",
        },
        {
          image: "/projects/engliquest/EQTranslation.png",

          title: "Filipino-English translation",

          description:
            "Translation activities allow learners to practice English and Filipino words, expressions, and equivalent meanings.",
        },
      ],
    },

    {
      id: "assessment-and-progression",

      eyebrow: "Assessment and progression",

      title:
        "Feedback, difficulty levels, and assessments make improvement measurable.",

      description:
        "Activities are designed around repeated practice, challenge, progression, and feedback. Learners begin with easier content before unlocking medium and hard difficulty levels.",

      screens: [
        {
          image:
            "/projects/engliquest/EQSentenceConstruction.png",

          title: "Sentence construction",

          description:
            "Learners arrange and construct words into grammatically correct sentences while receiving immediate feedback.",
        },
        {
          image:
            "/projects/engliquest/EQComprehensionQuiz.png",

          title: "Comprehension assessment",

          description:
            "Quiz activities evaluate understanding and support the pretest, learning activity, and post-test assessment structure.",
        },
      ],
    },
  ],

  designProcess: {
    id: "achievement-badge-system",

    eyebrow: "Gamification system",

    title:
      "A manually designed badge system that rewards every stage of learner progression.",

    description:
      "The achievement system gives learners a visible reward for completing activities across vocabulary, grammar, reading comprehension, translation, and sentence construction.",

    cards: [
      {
        image: "/projects/engliquest/EQBadges.png",

        imageAlt:
          "EngliQuest achievement badge progression for vocabulary, grammar, reading comprehension, translation, sentence construction, and ultimate completion",

        eyebrow: "Achievement badge design",

        title:
          "Progress made visible across every learning mode.",

        description:
          "Each learning mode uses its own badge color and identity. Learners progress through Easy, Medium, and Hard achievements before earning a Champion badge. Completing all five learning modes rewards the final Ultimate Word Warrior achievement.",

        layout: "wide",
      },
    ],
  },

  outcome: {
    eyebrow: "Capstone outcome",

    title:
      "A connected learning system combining education, gamification, and personalization.",

    description:
      "EngliQuest was developed as an academic and research-oriented mobile learning project. It connects the learner application, teacher-managed learning materials, and supporting backend and AI services into one system.",

    items: [
      "Gamified multi-skill English practice",
      "Progressive difficulty and measurable assessments",
      "AI-assisted personalization and managed learning content",
    ],
  },

  cta: {
    eyebrow: "End of project",

    title: "Have a project in mind?",

    description:
      "Let's create a clear, thoughtful, and memorable digital experience.",

    primaryLabel: "Start a conversation",

    primaryHref: "mailto:karllumabi23@gmail.com",

    secondaryLabel: "View all projects",

    secondaryHref: "/projects",
  },
};