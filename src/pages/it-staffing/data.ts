import {
  Cloud,
  Users,
  ShieldCheck,
  Code2,
  BarChart3,
  UserPlus,
  Boxes,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

export type RoleCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  roles: { title: string; exp: string; rate: string }[];
};

export const ROLE_CATEGORIES: RoleCategory[] = [
  {
    id: "cloud",
    label: "Cloud & System Admin",
    icon: Cloud,
    blurb: "Infrastructure specialists who keep production stable and secure.",
    roles: [
      { title: "AWS Solutions Architect", exp: "8+ yrs", rate: "$38/hr" },
      { title: "Azure Cloud Engineer", exp: "6+ yrs", rate: "$34/hr" },
      { title: "Linux Systems Administrator", exp: "7+ yrs", rate: "$24/hr" },
      {
        title: "Database Administrator (PostgreSQL/SQL Server)",
        exp: "9+ yrs",
        rate: "$30/hr",
      },
      { title: "Network Engineer (CCNP/CCIE)", exp: "8+ yrs", rate: "$32/hr" },
      { title: "Windows Server Administrator", exp: "6+ yrs", rate: "$22/hr" },
    ],
  },
  {
    id: "crm",
    label: "CRM & Enterprise Platforms",
    icon: Users,
    blurb: "Certified platform specialists for Salesforce, SAP, and Dynamics.",
    roles: [
      {
        title: "Salesforce Administrator (ADV-Certified)",
        exp: "7+ yrs",
        rate: "$28/hr",
      },
      {
        title: "Salesforce Developer (Apex/LWC)",
        exp: "6+ yrs",
        rate: "$32/hr",
      },
      { title: "HubSpot Technical Specialist", exp: "5+ yrs", rate: "$24/hr" },
      { title: "SAP S/4HANA Consultant", exp: "10+ yrs", rate: "$45/hr" },
      {
        title: "Microsoft Dynamics 365 Consultant",
        exp: "8+ yrs",
        rate: "$38/hr",
      },
      { title: "ServiceNow Administrator", exp: "6+ yrs", rate: "$30/hr" },
    ],
  },
  {
    id: "security",
    label: "Cybersecurity & Compliance",
    icon: ShieldCheck,
    blurb:
      "SOC, IAM, and penetration testing talent for regulated environments.",
    roles: [
      { title: "Senior SOC Analyst (L3)", exp: "6+ yrs", rate: "$36/hr" },
      { title: "Security Engineer (IAM/PAM)", exp: "7+ yrs", rate: "$40/hr" },
      { title: "Penetration Tester (OSCP)", exp: "5+ yrs", rate: "$42/hr" },
      {
        title: "Compliance Specialist (ISO 27001)",
        exp: "8+ yrs",
        rate: "$34/hr",
      },
      { title: "Cloud Security Architect", exp: "9+ yrs", rate: "$48/hr" },
      { title: "GRC Analyst", exp: "6+ yrs", rate: "$30/hr" },
    ],
  },
  {
    id: "devops",
    label: "Software & DevOps",
    icon: Code2,
    blurb: "Full-stack engineers and platform builders who ship and automate.",
    roles: [
      {
        title: "Full-Stack Developer (React/Node)",
        exp: "6+ yrs",
        rate: "$30/hr",
      },
      {
        title: "DevOps Engineer (Kubernetes/Terraform)",
        exp: "7+ yrs",
        rate: "$38/hr",
      },
      { title: "Python Backend Engineer", exp: "5+ yrs", rate: "$28/hr" },
      {
        title: "Mobile Developer (iOS/Android)",
        exp: "6+ yrs",
        rate: "$32/hr",
      },
      {
        title: "Platform Engineer (ArgoCD/GitOps)",
        exp: "8+ yrs",
        rate: "$40/hr",
      },
      {
        title: "SRE (Observability/Reliability)",
        exp: "7+ yrs",
        rate: "$42/hr",
      },
    ],
  },
  {
    id: "qa",
    label: "QA & Data Analytics",
    icon: BarChart3,
    blurb: "Quality, data, and analytics professionals who de-risk delivery.",
    roles: [
      {
        title: "Automation QA Engineer (Cypress/Playwright)",
        exp: "6+ yrs",
        rate: "$24/hr",
      },
      { title: "BI Analyst (Power BI/Tableau)", exp: "7+ yrs", rate: "$28/hr" },
      { title: "Data Engineer (Snowflake/dbt)", exp: "6+ yrs", rate: "$34/hr" },
      {
        title: "AI/ML Implementer (Python/LLMs)",
        exp: "5+ yrs",
        rate: "$40/hr",
      },
      { title: "Manual QA Tester", exp: "4+ yrs", rate: "$16/hr" },
      { title: "Data Analyst (SQL/Python)", exp: "5+ yrs", rate: "$22/hr" },
    ],
  },
];

export type TalentCard = {
  id: string;
  category: string;
  role: string;
  exp: string;
  certifications: string[];
  stack: string[];
  rate: string;
  overlap: string;
  available: string;
};

export const TALENT_CARDS: TalentCard[] = [
  {
    id: "#418",
    category: "Cybersecurity & Compliance",
    role: "Senior SOC & Cloud IAM Security Engineer",
    exp: "6+ yrs",
    certifications: [
      "CISSP",
      "CompTIA Security+",
      "ISO 27001 Lead",
      "AWS Certified Security - Specialty",
    ],
    stack: ["Splunk", "Sentinel", "Okta", "AD", "CrowdStrike"],
    rate: "$36/hr",
    overlap: "US EST Overlap",
    available: "Available Immediately",
  },
  {
    id: "#702",
    category: "CRM & Enterprise Platforms",
    role: "Certified Salesforce & HubSpot Technical Administrator",
    exp: "7+ yrs",
    certifications: [
      "Salesforce ADV-ADM",
      "HubSpot Solutions",
      "ServiceNow CSA",
    ],
    stack: ["Salesforce", "HubSpot", "Apex", "LWC", "MuleSoft"],
    rate: "$26/hr",
    overlap: "UK GMT Overlap",
    available: "Available in 5 days",
  },
  {
    id: "#315",
    category: "Cloud & System Admin",
    role: "Lead AWS & Kubernetes Systems Engineer",
    exp: "9+ yrs",
    certifications: [
      "AWS Solutions Architect Pro",
      "CKA",
      "Terraform Associate",
    ],
    stack: ["AWS", "Kubernetes", "Terraform", "Linux", "Prometheus"],
    rate: "$40/hr",
    overlap: "US PST Overlap",
    available: "Available Immediately",
  },
];

export type EngagementModel = {
  title: string;
  description: string;
  best: string;
  icon: LucideIcon;
};

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Staff Augmentation",
    description:
      "Individual specialists embed directly into your existing Jira, Slack, or ServiceNow workflows. You keep full operational control.",
    best: "Best for scaling an existing team without hiring overhead.",
    icon: UserPlus,
  },
  {
    title: "Dedicated IT Functional Pods",
    description:
      "Managed mini-teams—Lead + Engineers + QA/Admin—operating as an extension of your delivery org with shared accountability.",
    best: "Best for standing up a new capability or project fast.",
    icon: Boxes,
  },
  {
    title: "Contract-to-Hire (C2H)",
    description:
      "Evaluate technical performance on-the-job before committing to a full-time hire. Convert at a fixed fee after 90 days.",
    best: "Best when you need a permanent hire but want to de-risk fit.",
    icon: UserCheck,
  },
];

export type ComparisonRow = {
  metric: string;
  local: string;
  ours: string;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  { metric: "Time-to-Deploy", local: "6–12 weeks", ours: "48 hours" },
  {
    metric: "Cost Overhead (Fully Loaded)",
    local: "$90–$140/hr",
    ours: "$22–$48/hr",
  },
  {
    metric: "Replacement Guarantee",
    local: "30–60 day backfill",
    ours: "48-hour replacement",
  },
  { metric: "Trial Period", local: "Rarely offered", ours: "14-day, $0 risk" },
  {
    metric: "Timezone Overlap",
    local: "Same office only",
    ours: "4–5 hrs daily, or 24/7",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How do you safeguard our data, infrastructure access, and IP?",
    a: "All engagements include 100% IP ownership transfer to your company, enforceable US/EU NDAs, background-checked staff, and strict access controls under our ISO 27001 and SOC 2 Type II security protocols. Least-privilege access is the default.",
  },
  {
    q: "Can your staff handle specialized enterprise tools like Salesforce, SAP, or AWS security?",
    a: "Yes. Every candidate holds verifiable vendor certifications (Salesforce ADV-ADM, SAP S/4HANA, AWS Solutions Architect Pro, CISSP, and others) and completes a practical skill assessment before being added to our bench.",
  },
  {
    q: "What if a placed specialist is not a culture or performance fit?",
    a: "We offer an immediate replacement within 48 hours, or complete cancellation under our 14-day zero-risk trial—$0 cost obligation if performance does not meet your standards.",
  },
  {
    q: "How do you manage timezone alignment for system monitoring and admin roles?",
    a: "We guarantee a minimum 4–5 hours of active daily overlap with your team (US EST/PST, UK GMT, AEST, or Gulf GST). For NOC, SOC, and admin roles, we also staff full 24/7 coverage shifts on request.",
  },
];

export type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "15-Min Requirements Call",
    description:
      "Specify technical requirements, required certifications, timezone needs, and reporting structure.",
  },
  {
    step: "02",
    title: "Shortlist in 24 Hours",
    description:
      "Receive 3–5 hand-picked, pre-vetted candidate profiles with rate cards and availability.",
  },
  {
    step: "03",
    title: "Client-Led Interview",
    description:
      "Evaluate candidates through direct technical or operational interviews—your standards, your call.",
  },
  {
    step: "04",
    title: "14-Day Risk-Free Trial",
    description:
      "Start work immediately with $0 cost obligation if performance does not match your standards.",
  },
];

export const COMPLIANCE_BADGES = [
  { label: "ISO 27001 Certified", sub: "Information Security" },
  { label: "SOC 2 Type II", sub: "Service Organization" },
  { label: "GDPR Compliant", sub: "EU Data Protection" },
  { label: "HIPAA Compliant", sub: "Healthcare Data" },
  { label: "Clutch 4.9/5", sub: "Verified Reviews" },
];

export interface TalentCategoriesProps {
  onFindSpecialists: () => void;
}
