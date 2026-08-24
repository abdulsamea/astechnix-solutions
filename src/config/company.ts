export const company = {
  name: "AStechnix",
  tagline: "Managed IT Outsourcing & Technology Delivery",
  description:
    "AStechnix is an end-to-end managed IT outsourcing and technology delivery company. We own service outcomes with operational accountability — not staff augmentation, not recruitment, not body-shopping.",
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
