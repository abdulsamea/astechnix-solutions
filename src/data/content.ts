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
      "AStechnix took over our endpoint management and the difference was immediate. Patches started going out on schedule, and our team stopped dealing with the same recurring device issues every week.",
    author: "Chris Green",
    role: "IT Director",
    company: "Financial Services Firm",
    initials: "CG",
    metric: { value: "60%", label: "Fewer endpoint incidents" },
  },
  {
    id: "t2",
    quote:
      "Their helpdesk team gave our staff a single place to go for every IT problem. Response times dropped, tickets stopped getting lost, and our internal team could focus on bigger projects.",
    author: "Priya Sharma",
    role: "Operations Lead",
    company: "Healthcare Provider",
    initials: "PS",
    metric: { value: "85%", label: "First-contact resolution" },
  },
  {
    id: "t3",
    quote:
      "We needed someone to watch our cloud environment and flag problems before they reached us. AStechnix set up monitoring and regular vulnerability checks, and we finally stopped being surprised by outages.",
    author: "Michael Chen",
    role: "Head of Infrastructure",
    company: "Logistics Platform",
    initials: "MC",
    metric: { value: "99.9%", label: "Cloud uptime maintained" },
  },
  {
    id: "t4",
    quote:
      "What sets AStechnix apart is how straightforward the relationship is. Clear scope, clear escalation, monthly reports we can actually use. No jargon, no runaround.",
    author: "Sarah Williams",
    role: "Director of IT",
    company: "Enterprise SaaS Company",
    initials: "SW",
    metric: { value: "3x", label: "Faster ticket resolution" },
  },
  {
    id: "t5",
    quote:
      "Before AStechnix, our remote team's laptops were a patchwork of updates and security gaps. Now everything is managed centrally and we know every device is compliant.",
    author: "David Miller",
    role: "VP of Operations",
    company: "Distributed Tech Company",
    initials: "DM",
    metric: { value: "100%", label: "Devices patched on schedule" },
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
