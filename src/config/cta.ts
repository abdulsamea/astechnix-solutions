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
    softwareDelivery: { label: "Discuss IT Support", path: "/contact" },
    technicalConsultation: { label: "Request Technical Consultation", path: "/contact" },
    exploreServices: { label: "Explore Our Services", path: "/services/managed-it-infrastructure" }
  },
} as const;
