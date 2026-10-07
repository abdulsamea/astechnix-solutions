export const company = {
  name: "AStechnix",
  tagline: "Reliable IT Support and Infrastructure Management",
  description:
    "AStechnix provides dependable remote IT support, endpoint management, security monitoring, vulnerability checks, and helpdesk operations for growing organizations.",
  email: "contact@astechnix.com",
  emailHref: "mailto:contact@astechnix.com",
  phoneDisplay: "+91 90045 75425",
  phoneHref: "tel:+919004575425",
  headquarters: "Mumbai, India",
  founded: 2015,
  yearsExperience: 10,
  social: {
    linkedin: "https://www.linkedin.com/company/astechnix/",
    facebook: "https://www.facebook.com/people/AStechnix/61571877568172/",
    instagram: "https://www.instagram.com/astechnix_/",
  },
} as const;

export type CompanyInfo = typeof company;
