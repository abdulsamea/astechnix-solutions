export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export const siteConfig = {
  url: "https://astechnix.com",
  defaultTitle: "ASTechnix — Managed IT Outsourcing & Technology Delivery",
  defaultDescription:
    "ASTechnix is an end-to-end managed IT outsourcing and technology delivery company. Software engineering, managed infrastructure, QA, data engineering, and helpdesk support.",
  twitterHandle: "@astechnix",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ASTechnix",
  url: "https://astechnix.com",
  email: "contact@astechnix.com",
  telephone: "+91 90045 75425",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/astechnix/",
    "https://www.facebook.com/people/AStechnix/61571877568172/",
    "https://www.instagram.com/astechnix_/",
  ],
};
