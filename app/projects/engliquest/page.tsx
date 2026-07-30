import type { Metadata } from "next";

import CaseStudyPage from "../../../components/case-study/CaseStudyPage";
import {
  engliQuestMetadata,
  engliQuestProject,
} from "../../../data/case-studies/engliQuest";

export const metadata: Metadata = engliQuestMetadata;

export default function EngliQuestProjectPage() {
  return <CaseStudyPage project={engliQuestProject} />;
}