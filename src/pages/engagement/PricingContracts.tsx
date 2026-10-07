import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { ResponsiveTable } from "../../components/ResponsiveTable";
import { Button } from "../../components/Button";
import { ctaConfig } from "../../config/cta";
import { Check } from "lucide-react";

const crumbs: Crumb[] = [
  { label: "Home", path: "/" },
  { label: "Engagement", path: "/engagement" },
  { label: "Pricing & Contracts" },
];

const pricingModels = [
  {
    model: "Per-Device (Managed Endpoint)",
    structure: "Fixed monthly rate per device",
    best: "Comprehensive management for laptops, workstations, and mobile fleets",
    description:
      "Predictable monthly pricing based on the total active device count. Covers endpoint management, patch deployment, EDR security monitoring, and automated health checks.",
    features: [
      "Scaled pricing by device volume",
      "Automated patch management",
      "Endpoint security & EDR monitoring",
      "Hardware inventory tracking",
    ],
  },
  {
    model: "Tiered Helpdesk & Support",
    structure: "Monthly retainer by user tiers",
    best: "Ongoing end-user support and day-to-day IT ticketing",
    description:
      "Retainer-based helpdesk coverage scaled to your headcount. Includes multi-channel ticket triaging, user onboarding assistance, password resets, and software troubleshooting.",
    features: [
      "Defined SLA response times",
      "Email, portal, and chat ticket intake",
      "User onboarding & account provisioning",
      "Monthly ticket & satisfaction reporting",
    ],
  },
  {
    model: "Project & Audit-Based",
    structure: "Fixed price per scope",
    best: "One-off infrastructure audits, security hardening, or migrations",
    description:
      "Fixed-price engagement for specific milestones, such as initial cloud posture assessments, device baseline setup, or vulnerability remediation projects.",
    features: [
      "Milestone-based payment structure",
      "Comprehensive vulnerability assessment",
      "Detailed remediation roadmap",
      "Implementation and handoff",
    ],
  },
];

const contractTerms: string[][] = [
  ["Contract Duration", "Minimum 3 months, renewing quarterly"],
  ["Notice Period", "30 days for termination or scope adjustment"],
  [
    "Device Adjustments",
    "Scale up or down monthly based on active device counts",
  ],
  [
    "SLA Governance",
    "Monthly reviews with uptime and ticket resolution metrics",
  ],
  [
    "Security",
    "Strict NDA, least-privilege administrative access, and data privacy",
  ],
  ["Reporting", "Monthly operational dashboard and endpoint health summaries"],
  ["Change Management", "Defined process for adding new software or policies"],
  ["Trial Period", "30-day evaluation window with standard exit options"],
];

export default function PricingContracts() {
  return (
    <>
      <Seo
        meta={{
          title: "Pricing & Contracts | AStechnix",
          description:
            "Transparent IT support and endpoint management pricing based on device counts, helpdesk retainers, and fixed-scope security audits.",
        }}
      />
      <PageHeader
        breadcrumbs={crumbs}
        title="Pricing & Contracts"
        description="Flexible engagement models designed for IT support, endpoint management, and security monitoring. Every plan includes clear service level standards, responsive helpdesk coverage, and transparent monthly reporting."
      />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader
            eyebrow="Engagement Models"
            title="Choose the structure that fits your IT operations"
            description="Pricing is tailored to your device inventory, team size, and support window requirements. We provide transparent, predictable pricing models to match your operational scale."
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {pricingModels.map((m) => (
              <div
                key={m.model}
                className="flex flex-col rounded-lg border border-ink/10 bg-white p-6"
              >
                <div>
                  <h3 className="text-lg font-heading font-bold text-ink">
                    {m.model}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-accent">
                    {m.structure}
                  </p>
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{m.best}</p>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {m.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4">
                  {m.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink-soft"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader
            eyebrow="Contract Terms"
            title="Standard contract provisions"
            description="Every support engagement includes these foundational terms by default. Custom requirements can be aligned during onboarding."
            className="mb-8"
          />
          <ResponsiveTable
            headers={["Provision", "Standard Term"]}
            rows={contractTerms}
          />
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader
            eyebrow="Transparency"
            title="What we don't do"
            className="mb-6"
          />
          <ul className="space-y-3">
            {[
              "We don't use generic hidden rate cards — pricing scales directly with your device or user count",
              "We don't charge separate fees for initial device onboarding setup or agent deployment",
              "We don't bill extra for standard routine maintenance windows or scheduled patch updates",
              "We don't lock you into rigid long-term commitments beyond your initial agreement term",
              "We don't restrict your access to ticketing metrics or endpoint health scorecards",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-ink-soft"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Need a custom quote for your device fleet?"
        description="Share your endpoint count and support requirements. We'll provide a transparent pricing proposal with no obligation."
      >
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">
          {ctaConfig.primary.label}
        </Button>
      </CTASection>
    </>
  );
}
