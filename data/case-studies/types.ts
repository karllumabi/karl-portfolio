export type CaseStudyDetail = {
  label: string;
  value: string;
};

export type CaseStudyScreen = {
  image: string;
  title: string;
  description: string;
};

export type CaseStudyScreenSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  screens: CaseStudyScreen[];
};

export type CaseStudyPrototype = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type CaseStudyDesignCard = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  layout: "narrow" | "wide";
};

export type CaseStudySpecification = {
  label: string;
  value: string;
};

export type CaseStudyDesignProcess = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  prototype?: CaseStudyPrototype;
  cards?: CaseStudyDesignCard[];
  specifications?: CaseStudySpecification[];
};

export type CaseStudyOverview = {
  eyebrow?: string;
  title: string;

  challenge: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
  };

  direction: {
    eyebrow?: string;
    title: string;
    description: string;
  };
};

export type CaseStudyOutcome = {
  eyebrow?: string;
  title: string;
  description: string;
  items: string[];
};

export type CaseStudyCTA = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type CaseStudyExternalLink = {
  label: string;
  href: string;
};

export type CaseStudyProject = {
  slug: string;
  projectNumber: string;
  year: string;

  titleLines: string[];
  tags: string[];

  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;

  backHref?: string;
  backLabel?: string;
  exploreLabel?: string;

  externalLink?: CaseStudyExternalLink;

  details: CaseStudyDetail[];
  overview: CaseStudyOverview;

  screenSections: CaseStudyScreenSection[];
  designProcess?: CaseStudyDesignProcess;

  outcome: CaseStudyOutcome;
  cta: CaseStudyCTA;
};

export type WebsiteCaseStudyPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type WebsiteCaseStudyProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type WebsiteCaseStudyShowcase = {
  eyebrow: string;
  title: string;
  description: string;

  browser: {
    image: string;
    imageAlt: string;
    domain: string;
  };

  featured: {
    image: string;
    imageAlt: string;
    label: string;
    description: string;
  };

  navigation: {
    image: string;
    imageAlt: string;
    label: string;
    description: string;
  };

  philosophy: {
    eyebrow: string;
    statement: string;
  };
};

export type WebsiteCaseStudyProject = {
  slug: string;
  projectNumber: string;
  year: string;

  titleLines: string[];
  tags: string[];

  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  browserDomain: string;

  liveSite: {
    label: string;
    href: string;
  };

  backHref?: string;
  backLabel?: string;
  exploreLabel?: string;

  details: CaseStudyDetail[];
  overview: CaseStudyOverview;

  experiencePrinciples: {
    eyebrow: string;
    title: string;
    description: string;
    items: WebsiteCaseStudyPrinciple[];
  };

  showcase: WebsiteCaseStudyShowcase;

  process: {
    eyebrow: string;
    title: string;
    steps: WebsiteCaseStudyProcessStep[];
  };

  outcome: CaseStudyOutcome;
  cta: CaseStudyCTA;
};