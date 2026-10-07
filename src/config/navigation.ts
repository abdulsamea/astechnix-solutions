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
      {
        label: "Endpoint Management",
        path: "/services/endpoint-management",
      },
      {
        label: "Endpoint Security",
        path: "/services/endpoint-security",
      },
      {
        label: "Vulnerability Management",
        path: "/services/vulnerability-management",
      },
      {
        label: "IT Helpdesk & Support",
        path: "/services/helpdesk-support",
      },
    ],
  },
  // {
  //   label: "Delivery Model",
  //   path: "/delivery-model",
  //   children: [
  //     {
  //       label: "SLA Governance & Reporting",
  //       path: "/delivery-model/sla-governance-reporting",
  //     },
  //     {
  //       label: "Security, Compliance & IP Protection",
  //       path: "/delivery-model/security-compliance-ip-protection",
  //     },
  //   ],
  // },
  {
    label: "Engagement",
    path: "/engagement",
    children: [
      {
        label: "Pricing & Contracts",
        path: "/engagement/pricing-and-contracts",
      },
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
  {
    label: "Endpoint Management",
    path: "/services/endpoint-management",
  },
  {
    label: "Endpoint Security",
    path: "/services/endpoint-security",
  },
  {
    label: "Vulnerability Management",
    path: "/services/vulnerability-management",
  },
  {
    label: "IT Helpdesk & Support",
    path: "/services/helpdesk-support",
  },
];

export const footerDeliveryModel: NavItem[] = [
  {
    label: "SLA Governance & Reporting",
    path: "/delivery-model/sla-governance-reporting",
  },
  {
    label: "Security, Compliance & IP Protection",
    path: "/delivery-model/security-compliance-ip-protection",
  },
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
