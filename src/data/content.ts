import {
  Code2,
  ServerCog,
  ShieldCheck,
  Database,
  Headphones,
} from "lucide-react";
import type { ServiceSummary, ProofPoint, CaseStudySummary } from "../types";

export const services: ServiceSummary[] = [
  {
    slug: "software-engineering-outsourcing",
    title: "Software Engineering Outsourcing",
    shortTitle: "Software Engineering",
    icon: Code2,
    description:
      "Full-lifecycle application development, maintenance, and modernization with dedicated engineering teams operating under SLA governance.",
    path: "/services/software-engineering-outsourcing",
  },
  {
    slug: "managed-it-infrastructure",
    title: "Managed IT Infrastructure",
    shortTitle: "Managed Infrastructure",
    icon: ServerCog,
    description:
      "Round-the-clock monitoring, administration, and optimization of cloud, network, and server infrastructure with proactive incident management.",
    path: "/services/managed-it-infrastructure",
  },
  {
    slug: "quality-assurance-testing",
    title: "QA & Testing",
    shortTitle: "QA & Testing",
    icon: ShieldCheck,
    description:
      "Comprehensive quality assurance — automated and manual testing, performance validation, and regression management across the delivery lifecycle.",
    path: "/services/quality-assurance-testing",
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    shortTitle: "Data & Analytics",
    icon: Database,
    description:
      "Pipeline architecture, data platform modernization, and analytics enablement for operational intelligence and decision-grade data quality.",
    path: "/services/data-engineering-analytics",
  },
  {
    slug: "helpdesk-end-user-support",
    title: "Helpdesk & End-User Support",
    shortTitle: "Helpdesk & Support",
    icon: Headphones,
    description:
      "Tiered support operations with ticketing discipline, resolution SLAs, and end-user experience monitoring across global time zones.",
    path: "/services/helpdesk-end-user-support",
  },
];

export const proofPoints: ProofPoint[] = [
  { value: "10", label: "Years of Delivery", suffix: "+" },
  { value: "5", label: "Managed Service Lines" },
  { value: "24/7", label: "Operations Coverage" },
  { value: "SLA", label: "Governed Delivery" },
];

export const caseStudies: CaseStudySummary[] = [];
