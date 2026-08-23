import { type LucideIcon } from "lucide-react";

export interface ServiceSummary {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  path: string;
}

export interface ProofPoint {
  value: string;
  label: string;
  suffix?: string;
}

export interface CaseStudySummary {
  slug: string;
  title: string;
  client: string;
  sector: string;
  summary: string;
  metrics: { value: string; label: string }[];
}
