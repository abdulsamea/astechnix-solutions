export const ctaConfig = {
  primary: {
    label: "Request a Consultation",
    path: "/contact",
  },
  secondary: {
    label: "Discuss Your IT Requirements",
    path: "/contact",
  },
  contextual: {
    slaAssessment: { label: "Request SLA Assessment", path: "/contact" },
    managedIT: { label: "Discuss Managed IT", path: "/contact" },
    softwareDelivery: { label: "Discuss Software Delivery", path: "/contact" },
    technicalConsultation: { label: "Request Technical Consultation", path: "/contact" },
    exploreServices: { label: "Explore Our Services", path: "/services/software-engineering-outsourcing" },
  },
} as const;
