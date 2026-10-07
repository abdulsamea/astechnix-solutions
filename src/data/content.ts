import {
  Laptop,
  ShieldCheck,
  CloudCog,
  Headphones,
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
    slug: "endpoint-management-patching",
    title: "Endpoint Management and Patching",
    shortTitle: "Endpoint Management",
    icon: Laptop,
    description:
      "Keeping remote laptops and workstations updated, healthy, and ready for everyday work.",
    path: "/services/managed-it-infrastructure",
  },
  {
    slug: "endpoint-security-monitoring",
    title: "Endpoint Security and Monitoring",
    shortTitle: "Endpoint Security",
    icon: ShieldCheck,
    description:
      "Protecting devices against threats with proactive monitoring and clear response procedures.",
    path: "/delivery-model/security-compliance-ip-protection",
  },
  {
    slug: "vulnerability-cloud-care",
    title: "Vulnerability Checks and Cloud Care",
    shortTitle: "Cloud Care",
    icon: CloudCog,
    description:
      "Finding and fixing security gaps in cloud infrastructure before they become larger problems.",
    path: "/services/managed-it-infrastructure",
  },
  {
    slug: "helpdesk-end-user-support",
    title: "IT Helpdesk and Support",
    shortTitle: "IT Helpdesk",
    icon: Headphones,
    description:
      "Reliable technical help for your team's day-to-day computer, access, and software needs.",
    path: "/services/helpdesk-end-user-support",
  },
];

export const proofPoints: ProofPoint[] = [
  { value: "6", label: "Years Supporting Teams", suffix: "+" },
  { value: "24/7", label: "Support Coverage" },
  { value: "4", label: "Core Service Areas" },
  { value: "1", label: "Clear Support Partner" },
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
    initials: "CG",
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
  {
    id: "t5",
    quote:
      "Before AStechnix automated our deployment pipeline, releases were weekly manual fire drills. Now our team deploys multiple times a day with automated rollbacks if anything breaks.",
    author: "David Miller",
    role: "VP of Product",
    company: "Cloud Operations Software",
    initials: "DM",
    metric: { value: "75%", label: "Faster deployment times" },
  },
];

export const clientLogos: string[] = ["INCYT", "Renaissance Investments"];

export const techCategories: TechCategory[] = [
  {
    category: "Endpoint Management",
    items: ["Microsoft Intune", "Microsoft 365", "Azure AD", "Windows"] ,
  },
  {
    category: "Security and Monitoring",
    items: ["CrowdStrike", "Tenable", "Qualys", "ServiceNow"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS", "Azure", "CloudWatch", "Azure Monitor"],
  },
];
