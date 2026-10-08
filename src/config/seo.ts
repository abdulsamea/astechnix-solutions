export interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

export const siteConfig = {
  url: "https://astechnix.com",
  defaultTitle: "AStechnix — Managed IT Support Services",
  defaultDescription:
    "AStechnix provides enterprise-grade managed IT outsourcing, endpoint security, automated patching, cloud backups, and IT helpdesk support for grwoing businesses, SMBs and Startups.",
  twitterHandle: "@astechnix",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AStechnix",
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
