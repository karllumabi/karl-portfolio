import type { CaseStudyProject } from "../../data/case-studies/types";

import CaseStudyCTA from "./CaseStudyCTA";
import CaseStudyDesignProcess from "./CaseStudyDesignProcess";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyNavigation from "./CaseStudyNavigation";
import CaseStudyOutcome from "./CaseStudyOutcome";
import CaseStudyOverview from "./CaseStudyOverview";
import CaseStudyScreensSection from "./CaseStudyScreensSection";

type CaseStudyPageProps = {
  project: CaseStudyProject;
};

export default function CaseStudyPage({
  project,
}: CaseStudyPageProps) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--page)] text-[var(--text)]">
      <CaseStudyNavigation
        backHref={project.backHref}
        backLabel={project.backLabel}
        projectNumber={project.projectNumber}
        year={project.year}
      />

      <CaseStudyHero project={project} />

      <CaseStudyOverview
        details={project.details}
        overview={project.overview}
      />

      {project.screenSections.map((section) => (
        <CaseStudyScreensSection
          key={section.id}
          section={section}
        />
      ))}

      {project.designProcess ? (
        <CaseStudyDesignProcess
          designProcess={project.designProcess}
        />
      ) : null}

      <CaseStudyOutcome outcome={project.outcome} />

      <CaseStudyCTA cta={project.cta} />
    </main>
  );
}