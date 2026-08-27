import type { Metadata } from "next";

import WebsiteCaseStudyPage from "../../../components/case-study/WebsiteCaseStudyPage";
import {
  astralDevTeamMetadata,
  astralDevTeamProject,
} from "../../../data/case-studies/astralDevTeam";

export const metadata: Metadata = astralDevTeamMetadata;

export default function AstralDevTeamProjectPage() {
  return <WebsiteCaseStudyPage project={astralDevTeamProject} />;
}
