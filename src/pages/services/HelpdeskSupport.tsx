import { ServicePageTemplate } from "./ServicePageTemplate";

export default function HelpdeskSupport() {
  return (
    <ServicePageTemplate
      slug="helpdesk-end-user-support"
      title="Helpdesk & End-User Support"
      shortTitle="Helpdesk & Support"
      heroDescription="A managed helpdesk operation that handles end-user issues with tiered support, resolution SLAs, and satisfaction tracking — available across global time zones."
      businessProblem="End-user support is operationally demanding — it requires consistent ticket handling, knowledge base maintenance, escalation discipline, and coverage across time zones. Internal helpdesks struggle with peak load spikes, knowledge gaps at L1, and the overhead of maintaining documentation. Staff augmentation places agents but doesn't provide the governance structure — escalation matrix, resolution SLAs, or satisfaction measurement — that makes support reliable."
      whatWeOwn={[
        { title: "Resolution SLAs", description: "We contract for response and resolution times per severity tier. Performance is measured and reviewed monthly." },
        { title: "User satisfaction", description: "CSAT scores and feedback are tracked as part of the service — not as an afterthought." },
        { title: "Knowledge base", description: "We create and maintain knowledge articles that reduce repeat tickets over time — not just answer them." },
        { title: "Ticket discipline", description: "Categorization, prioritization, and routing are managed under defined workflows, not ad hoc." },
      ]}
      capabilities={[
        { title: "L1 — First-line support", description: "Initial triage, common issue resolution, password resets, access requests, and basic troubleshooting." },
        { title: "L2 — Escalation support", description: "Complex issue diagnosis, configuration changes, application-level troubleshooting, and system access management." },
        { title: "L3 — Specialist support", description: "Advanced troubleshooting, engineering escalation, root cause analysis, and infrastructure-level intervention." },
        { title: "Incident management", description: "Major incident coordination, communication, and post-incident review with corrective action tracking." },
        { title: "Knowledge base management", description: "Article creation, maintenance, and self-service enablement to reduce ticket volume over time." },
        { title: "Onboarding and offboarding", description: "User account provisioning, access management, and offboarding workflows integrated with your identity systems." },
      ]}
      scope={[
        "Tiered support team — L1, L2, and L3 escalation",
        "Ticketing workflow management in your system",
        "Coverage model defined per engagement (business hours to 24/7)",
        "Knowledge base creation and maintenance",
        "User provisioning and deprovisioning workflows",
        "Monthly SLA review with ticket metrics",
        "Satisfaction surveys and feedback tracking",
        "Escalation matrix with defined response times",
      ]}
      technology={["ServiceNow", "Jira Service Management", "Zendesk", "Freshdesk", "Active Directory", "Okta", "Azure AD", "Microsoft 365", "Google Workspace", "Slack", "Teams"]}
      process={[
        { step: "01", title: "Discovery", description: "Assessment of ticket volumes, resolution times, common issues, coverage gaps, and current tooling." },
        { step: "02", title: "Transition", description: "SLA definition, escalation matrix design, tool integration, and knowledge base setup." },
        { step: "03", title: "Operate", description: "Ticket handling, resolution, escalation, and knowledge management under defined SLAs." },
        { step: "04", title: "Govern", description: "Monthly review with ticket metrics, CSAT scores, resolution times, and backlog analysis." },
        { step: "05", title: "Improve", description: "Quarterly initiatives — knowledge base expansion, training, and proactive ticket reduction." },
      ]}
      securityPrinciples={[
        { title: "Access management controls", description: "Support agents granted least-privilege access to user management and system administration tools." },
        { title: "Identity verification", description: "Defined procedures for verifying user identity before performing account changes or access resets." },
        { title: "Audit logging", description: "All administrative actions — password resets, access changes, provisioning — are logged and auditable." },
        { title: "Confidentiality", description: "Support agents handle sensitive information under NDA with defined data handling protocols." },
      ]}
      faqs={[
        { question: "What ticketing systems do you support?", answer: "We work with ServiceNow, Jira Service Management, Zendesk, Freshdesk, and custom systems. We integrate into your existing platform — we don't require you to switch tools." },
        { question: "Can you provide coverage outside our business hours?", answer: "Yes. We offer business hours, extended hours, and 24/7 coverage models. Coverage is defined per engagement based on your user base and operational needs." },
        { question: "How do you measure support quality?", answer: "We track first response time, resolution time, first contact resolution rate, CSAT scores, and ticket backlog. These metrics are reported monthly under SLA governance." },
        { question: "How is this different from staffing support agents?", answer: "We own the support outcome — resolution SLAs, satisfaction scores, and knowledge base quality. You don't manage individual agents; you review support metrics and hold us accountable to the SLA." },
        { question: "Do you handle onboarding and offboarding?", answer: "Yes. Account provisioning, access management, and offboarding workflows are part of the service, integrated with your identity systems like Active Directory, Okta, or Azure AD." },
      ]}
      seoDescription="Managed helpdesk and end-user support: tiered L1–L3 support, ticketing discipline, incident management, knowledge base, and resolution SLAs."
      contextualCtaLabel="Discuss Managed IT"
    />
  );
}
