import {
  Code2,
  ServerCog,
  ShieldCheck,
  Database,
  Headphones,
  Users,
  Boxes,
} from "lucide-react";
import type {
  ServiceSummary,
  ProofPoint,
  CaseStudySummary,
  Testimonial,
  TechCategory,
} from "../types";

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
  {
    slug: "crm-solutions",
    title: "CRM Solutions",
    shortTitle: "CRM",
    icon: Users,
    description:
      "Customer relationship management platforms that connect sales, marketing, and support teams. We set up, customize, and support CRM systems that fit how your business works.",
    path: "/services/crm-solutions",
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    shortTitle: "ERP",
    icon: Boxes,
    description:
      "Enterprise resource planning systems that connect finance, inventory, HR, and operations in one place. We implement and customize ERP platforms for your business.",
    path: "/services/erp-solutions",
  },
];

export const proofPoints: ProofPoint[] = [
  { value: "10", label: "Years of Delivery", suffix: "+" },
  { value: "5", label: "Managed Service Lines" },
  { value: "24/7", label: "Operations Coverage" },
  { value: "SLA", label: "Governed Delivery" },
];

export const caseStudies: CaseStudySummary[] = [];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "AStechnix took operational ownership of our infrastructure in a way no staffing partner ever had. Within the first quarter, our incident response times dropped dramatically and our monthly SLA reviews gave us visibility we never had before.",
    author: "Chris Green",
    role: "CTO",
    company: "FinTech Platform",
    initials: "RK",
    metric: { value: "60%", label: "Faster incident response" },
  },
  {
    id: "t2",
    quote:
      "We'd tried body-shopping and staff augmentation before. The difference with AStechnix is accountability — they own the outcome, not just the headcount. Our QA process went from ad hoc to structured with real metrics.",
    author: "Priya Sharma",
    role: "VP Engineering",
    company: "HealthTech Solutions",
    initials: "PS",
    metric: { value: "85%", label: "Test automation coverage" },
  },
  {
    id: "t3",
    quote:
      "The transition was seamless. Their team understood our domain from day one and the SLA governance framework meant we always knew exactly how the service was performing. No surprises, no opacity.",
    author: "Michael Chen",
    role: "Head of Operations",
    company: "Logistics Platform",
    initials: "MC",
    metric: { value: "99.9%", label: "Infrastructure uptime" },
  },
  {
    id: "t4",
    quote:
      "What sets AStechnix apart is that they don't just place people — they manage the entire delivery. Monthly governance reviews, transparent reporting, and a single point of accountability. It's a fundamentally different model.",
    author: "Sarah Williams",
    role: "Director of IT",
    company: "Enterprise SaaS",
    initials: "SW",
    metric: { value: "3x", label: "Delivery velocity" },
  },
];

export const clientLogos: string[] = [
  "Nexus",
  "Vertex",
  "Quantum",
  "Orbital",
  "Meridian",
  "Apex",
  "INCYT",
];

export const techCategories: TechCategory[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Java",
      ".NET",
      "Go",
      "Angular",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Snowflake",
      "BigQuery",
      "dbt",
      "Airflow",
      "Power BI",
      "Tableau",
      "Spark",
    ],
  },
  {
    category: "QA & Testing",
    items: [
      "Cypress",
      "Playwright",
      "Selenium",
      "Jest",
      "Postman",
      "k6",
      "JMeter",
    ],
  },
];
