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
    model: "Managed Service",
    structure: "Fixed monthly fee",
    best: "Ongoing operations with defined scope",
    description:
      "Fixed monthly fee for a defined service scope with SLA governance. Includes team, infrastructure, management, and reporting.",
    features: [
      "SLA governance included",
      "Monthly performance reporting",
      "Team management",
      "Infrastructure and tooling",
    ],
  },
  {
    model: "Dedicated Team",
    structure: "Monthly rate per pod",
    best: "Long-term engineering capacity",
    description:
      "Monthly rate for a dedicated pod — leads, engineers, QA — operating as an extension of your delivery organization.",
    features: [
      "Dedicated resources",
      "Sprint-based delivery",
      "Weekly demos",
      "Flexible scaling",
    ],
  },
  {
    model: "Project-Based",
    structure: "Fixed price per scope",
    best: "Defined deliverables and timelines",
    description:
      "Fixed-price engagement for a scoped project with defined milestones, deliverables, and acceptance criteria.",
    features: [
      "Milestone-based payments",
      "Defined scope statement",
      "Acceptance criteria",
      "Change management process",
    ],
  },
];

const contractTerms: string[][] = [
  ["Contract Duration", "Minimum 3 months, renewing quarterly"],
  ["Notice Period", "30 days for termination or scope adjustment"],
  ["IP Ownership", "100% transfer to client — contractually guaranteed"],
  ["SLA Governance", "Monthly reviews with performance metrics"],
  ["Security", "NDA, least-privilege access, background verification"],
  ["Reporting", "Monthly operational dashboard and SLA scorecard"],
  ["Change Management", "Defined process for scope changes and adjustments"],
  ["Trial Period", "30-day evaluation with exit option"],
];

export default function PricingContracts() {
  return (
    <>
      <Seo
        meta={{
          title: "Pricing & Contracts | AStechnix",
          description:
            "AStechnix engagement models: managed service, dedicated team, and project-based pricing with transparent contract terms and SLA governance.",
        }}
      />
      <PageHeader
        breadcrumbs={crumbs}
        title="Pricing & Contracts"
        description="Three engagement models with flexible contract terms. Every model includes SLA governance, IP ownership transfer, and transparent reporting. Pricing is defined per engagement based on scope and complexity."
      />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader
            eyebrow="Engagement Models"
            title="Choose the structure that fits your needs"
            description="Pricing is defined per engagement based on scope, complexity, SLA requirements, and team composition. We don't publish generic rate cards — every proposal is specific to your context."
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
            description="Every engagement includes these provisions by default. Custom terms can be negotiated based on your requirements."
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
              "We don't publish generic rate cards — pricing is specific to your scope",
              "We don't charge for onboarding or transition separately — it's part of the engagement",
              "We don't bill for idle time in managed service or project-based models",
              "We don't impose long lock-in periods beyond the initial minimum term",
              "We don't hide SLA metrics behind paywalls or premium reporting tiers",
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
        title="Need a custom pricing structure?"
        description="Book a consultation to discuss your scope. We'll propose an engagement model with transparent pricing — no obligation."
      >
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">
          {ctaConfig.primary.label}
        </Button>
      </CTASection>
    </>
  );
}
