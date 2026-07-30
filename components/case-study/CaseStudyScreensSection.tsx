import type { CaseStudyScreenSection } from "../../data/case-studies/types";

import Container from "../layout/Container";
import MotionReveal from "../motion/MotionReveal";
import ScreenCard from "./ScreenCard";
import SectionIntro from "./SectionIntro";

type CaseStudyScreensSectionProps = {
  section: CaseStudyScreenSection;
};

export default function CaseStudyScreensSection({
  section,
}: CaseStudyScreensSectionProps) {
  return (
    <section
      id={section.id}
      className="border-t border-[var(--border)] py-20 sm:py-28"
    >
      <Container>
        <SectionIntro
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {section.screens.map((screen, index) => (
            <MotionReveal
              key={`${section.id}-${screen.title}`}
              className="h-full"
              delay={index * 0.08}
              y={30}
              duration={0.85}
            >
              <ScreenCard {...screen} index={index} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}