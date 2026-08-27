import type { Metadata } from "next";

import WebsiteCaseStudyPage from "../../../components/case-study/WebsiteCaseStudyPage";
import {
  exquisitePropertiesMetadata,
  exquisitePropertiesProject,
} from "../../../data/case-studies/exquisiteProperties";

export const metadata: Metadata =
  exquisitePropertiesMetadata;

export default function ExquisitePropertiesProjectPage() {
  return (
    <WebsiteCaseStudyPage
      project={exquisitePropertiesProject}
    />
  );
}
