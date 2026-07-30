import type { Metadata } from "next";

import CaseStudyPage from "../../../components/case-study/CaseStudyPage";
import {
  nextTripMetadata,
  nextTripProject,
} from "../../../data/case-studies/nextTrip";

export const metadata: Metadata = nextTripMetadata;

export default function NextTripProjectPage() {
  return <CaseStudyPage project={nextTripProject} />;
}