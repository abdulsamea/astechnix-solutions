export interface NavItem {
  label: string;
  path: string;
}

export interface NavGroup {
  label: string;
  path: string;
  children?: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Software Engineering Outsourcing", path: "/services/software-engineering-outsourcing" },
      { label: "Managed IT Infrastructure", path: "/services/managed-it-infrastructure" },
      { label: "QA & Testing", path: "/services/quality-assurance-testing" },
      { label: "Data Engineering & Analytics", path: "/services/data-engineering-analytics" },
      { label: "Helpdesk & End-User Support", path: "/services/helpdesk-end-user-support" },
      { label: "CRM Solutions", path: "/services/crm-solutions" },
      { label: "ERP Solutions", path: "/services/erp-solutions" },
    ],
  },
  {
    label: "Delivery Model",
    path: "/delivery-model",
    children: [
      { label: "SLA Governance & Reporting", path: "/delivery-model/sla-governance-reporting" },
      { label: "Security, Compliance & IP Protection", path: "/delivery-model/security-compliance-ip-protection" },
    ],
  },
  {
    label: "Engagement",
    path: "/engagement",
    children: [
      { label: "Pricing & Contracts", path: "/engagement/pricing-and-contracts" },
    ],
  },
  {
    label: "Company",
    path: "/company",
    children: [
      { label: "About", path: "/company/about" },
      { label: "Case Studies", path: "/company/case-studies" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

export const footerServices: NavItem[] = [
  { label: "Software Engineering Outsourcing", path: "/services/software-engineering-outsourcing" },
  { label: "Managed IT Infrastructure", path: "/services/managed-it-infrastructure" },
  { label: "QA & Testing", path: "/services/quality-assurance-testing" },
  { label: "Data Engineering & Analytics", path: "/services/data-engineering-analytics" },
  { label: "Helpdesk & End-User Support", path: "/services/helpdesk-end-user-support" },
  { label: "CRM Solutions", path: "/services/crm-solutions" },
  { label: "ERP Solutions", path: "/services/erp-solutions" },
];

export const footerDeliveryModel: NavItem[] = [
  { label: "SLA Governance & Reporting", path: "/delivery-model/sla-governance-reporting" },
  { label: "Security, Compliance & IP Protection", path: "/delivery-model/security-compliance-ip-protection" },
];

export const footerEngagement: NavItem[] = [
  { label: "Pricing & Contracts", path: "/engagement/pricing-and-contracts" },
];

export const footerCompany: NavItem[] = [
  { label: "About", path: "/company/about" },
  { label: "Case Studies", path: "/company/case-studies" },
  { label: "Contact", path: "/contact" },
];

export const footerLegal: NavItem[] = [
  { label: "Privacy", path: "/privacy" },
  { label: "Cookies", path: "/cookies" },
  { label: "Terms", path: "/terms" },
];
