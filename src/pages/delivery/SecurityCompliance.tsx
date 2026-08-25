import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { SLAFeature } from "../../components/SLAFeature";
import { Button } from "../../components/Button";
import { ctaConfig } from "../../config/cta";

const crumbs: Crumb[] = [
  { label: "Home", path: "/" },
  { label: "Delivery Model", path: "/delivery-model" },
  { label: "Security & Compliance" },
];

export default function SecurityCompliance() {
  return (
    <>
      <Seo
        meta={{
          title: "Security, Compliance & IP Protection | AStechnix",
          description:
            "AStechnix security framework: access controls, least-privilege principles, IP ownership transfer, data handling protocols, and contractual confidentiality controls.",
        }}
      />
      <PageHeader
        breadcrumbs={crumbs}
        title="Security, Compliance & IP Protection"
        description="Security is not a feature — it's the baseline. Every engagement includes IP ownership transfer, access controls, and defined data handling protocols."
      />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader
            eyebrow="Security Framework"
            title="Protection built into the delivery model"
            description="These principles are applied to every engagement. Specific security measures are aligned to your requirements during scoping."
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <SLAFeature
              title="100% IP ownership transfer"
              description="All intellectual property — code, designs, documentation, data — is owned by you. IP transfer is contractually guaranteed and enforced."
            />
            <SLAFeature
              title="Enforceable NDAs"
              description="Non-disclosure agreements signed by every team member before assignment. Client-confidential information is handled under defined access controls."
            />
            <SLAFeature
              title="Least-privilege access"
              description="Access to your systems, data, and infrastructure is granted on a need-to-know basis. Access is reviewed and revoked when no longer needed."
            />
            <SLAFeature
              title="Secure transition procedures"
              description="Access provisioning during transition follows defined procedures. Credentials are managed through secrets vaults, not shared informally."
            />
            <SLAFeature
              title="Data handling protocols"
              description="Defined procedures for data access, storage, transmission, and disposal. Data classification requirements are aligned to your policies."
            />
            <SLAFeature
              title="Audit logging"
              description="Administrative actions are logged and auditable. Access reviews are conducted regularly to verify continued appropriateness."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content max-w-3xl">
          <SectionHeader
            eyebrow="Contractual Controls"
            title="What's written into every engagement"
            className="mb-6"
          />
          <ul className="space-y-4">
            {[
              "IP ownership clause — all deliverables belong to your organization",
              "Non-disclosure agreements — signed by every assigned team member",
              "Access control policy — least-privilege with regular access reviews",
              "Data handling requirements — aligned to your data classification",
              "Incident notification — defined procedures for security incident communication",
              "Offboarding procedure — access revoked and knowledge transferred on engagement end",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base text-ink-soft"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader
            eyebrow="Operational Practices"
            title="How security is applied day to day"
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Secrets management",
                desc: "Credentials, API keys, and certificates managed through defined vaults — never hardcoded.",
              },
              {
                title: "Background verification",
                desc: "Personnel undergo background verification before assignment to client engagements.",
              },
              {
                title: "Access reviews",
                desc: "Regular access audits to verify that permissions remain appropriate and unnecessary access is revoked.",
              },
              {
                title: "Secure communication",
                desc: "Client communications conducted through approved channels. No sensitive data over unsecured messaging.",
              },
              {
                title: "Incident response",
                desc: "Defined procedures for security incidents — detection, containment, notification, and remediation.",
              },
              {
                title: "Documentation",
                desc: "Security procedures, access logs, and audit trails maintained as part of the engagement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-ink/10 bg-white p-5"
              >
                <h3 className="text-sm font-heading font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content max-w-3xl">
          <div className="rounded-lg border border-ink/10 bg-canvas p-6 md:p-8">
            <h3 className="heading-3 text-ink">
              On certifications and compliance standards
            </h3>
            <p className="mt-3 text-body">
              Our security practices are designed to align with internationally
              recognized standards. For specific certification or compliance
              framework requirements (such as ISO 27001, SOC 2, GDPR, or HIPAA),
              please discuss your needs during the consultation. We will confirm
              what we can support and how our practices map to your compliance
              requirements.
            </p>
            <p className="mt-3 text-body">
              We do not advertise certifications we have not formally achieved.
              We will be transparent about our current status and what we can
              contractually commit to.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have specific security or compliance requirements?"
        description="Book a consultation to discuss your security needs. We'll confirm what we can support and how our practices align to your requirements."
      >
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">
          {ctaConfig.primary.label}
        </Button>
      </CTASection>
    </>
  );
}
