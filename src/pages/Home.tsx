import { Seo } from "../components/Seo";
import { HeroSection } from "../components/HeroSection";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { TrustStrip } from "../components/TrustStrip";
import { CTASection } from "../components/CTASection";
import { Button } from "../components/Button";
import { SLAComparison, type ComparisonRow } from "../components/SLAComparison";
import { ProcessTimeline, type TimelineStep } from "../components/ProcessTimeline";
import { FAQAccordion, type FaqItem } from "../components/FAQAccordion";
import { SLAFeature } from "../components/SLAFeature";
import { services, proofPoints, caseStudies } from "../data/content";
import { ctaConfig } from "../config/cta";
import { ArrowRight, ShieldCheck, FileText, Settings, BarChart3 } from "lucide-react";

const staffingVsManaged: ComparisonRow[] = [
  { metric: "Responsibility", internal: "You manage the individuals", outsourced: "We own the service outcome" },
  { metric: "Service Ownership", internal: "No single accountable party", outsourced: "ASTechnix is the single accountable party" },
  { metric: "Delivery", internal: "You coordinate and direct", outsourced: "We plan, execute, and report" },
  { metric: "Governance", internal: "You build and enforce", outsourced: "SLA framework is included" },
  { metric: "SLAs", internal: "Not defined", outsourced: "Contractually defined per service" },
  { metric: "Reporting", internal: "You extract from tools", outsourced: "Monthly governance reports included" },
];

const deliveryProcess: TimelineStep[] = [
  { step: "01", title: "Discovery", description: "Joint scoping of requirements, success criteria, current environment, and constraints." },
  { step: "02", title: "Transition", description: "Knowledge transfer, documentation, access provisioning, and runbook creation." },
  { step: "03", title: "Operate", description: "Day-to-day delivery under defined SLAs with monitoring, ticketing, and incident management." },
  { step: "04", title: "Govern", description: "Monthly SLA reviews with performance metrics, incident analysis, and action items." },
  { step: "05", title: "Improve", description: "Quarterly improvement plans with measurable targets and corrective action tracking." },
];

const techCapabilities = [
  { group: "Languages & Frameworks", items: ["React / TypeScript", "Node.js", "Python", "Java", ".NET", "Go"] },
  { group: "Cloud & Infrastructure", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"] },
  { group: "Data & Analytics", items: ["Snowflake", "BigQuery", "dbt", "Power BI", "Tableau", "Airflow"] },
  { group: "QA & Testing", items: ["Cypress", "Playwright", "Selenium", "Jest", "Postman", "k6"] },
];

const homeFaqs: FaqItem[] = [
  { question: "How is managed IT outsourcing different from staff augmentation?", answer: "Staff augmentation places individuals under your management — you coordinate, direct, and are responsible for outcomes. Managed outsourcing means ASTechnix contracts for service outcomes, governs delivery against SLAs, and reports transparently. We own the result, not just the headcount." },
  { question: "What SLA accountability do you provide?", answer: "Every engagement includes contractually defined service levels — response times, resolution targets, quality metrics, and uptime commitments. Performance is reviewed monthly with documented metrics. If targets are missed, corrective actions are tracked to completion." },
  { question: "How does the transition process work?", answer: "Transition follows a structured phase: discovery of your current environment, knowledge transfer sessions, documentation of procedures, access provisioning under least-privilege principles, and runbook creation. The transition timeline is defined per engagement based on complexity." },
  { question: "How do you handle security and IP protection?", answer: "All intellectual property is contractually transferred to you. Team members sign enforceable NDAs. Access is granted on a least-privilege basis and reviewed regularly. Data handling follows defined protocols. Specific security measures are aligned to your requirements." },
  { question: "What does governance and reporting look like?", answer: "Monthly SLA reviews with operational dashboards, performance metrics, incident analysis, and tracked action items. Quarterly improvement plans with measurable targets. You always have visibility into how the service is performing." },
  { question: "How is pricing structured?", answer: "We offer three engagement models: managed service (fixed monthly), dedicated team (monthly), and project-based (fixed scope). Pricing is defined per engagement based on scope, complexity, and SLA requirements. No hidden costs — everything is documented in the contract." },
  { question: "Who owns the code and deliverables?", answer: "You do. 100% IP ownership transfer is contractually guaranteed. All code, documentation, designs, and data produced during the engagement belong to your organization." },
  { question: "Can we scale the engagement up or down?", answer: "Yes. Engagement terms include flexible scaling clauses. You can adjust scope or team size with defined notice periods based on changing business needs." },
];

export default function Home() {
  return (
    <>
      <Seo meta={{ title: "ASTechnix — Managed IT Outsourcing & Technology Delivery", description: "End-to-end managed IT outsourcing: software engineering, managed infrastructure, QA, data engineering, and helpdesk support with SLA governance and operational accountability." }} />

      <HeroSection
        eyebrow="Managed IT Outsourcing"
        title={<>We own your technology operations,<br /><span className="text-brand-accent">end to end.</span></>}
        description={<>ASTechnix delivers managed software engineering, infrastructure, QA, data, and support under SLA governance — not staff augmentation, not recruitment, not body-shopping. We take operational accountability for outcomes.</>}
      >
        <Button to={ctaConfig.primary.path} size="lg">{ctaConfig.primary.label}<ArrowRight className="h-4 w-4" /></Button>
        <Button to={ctaConfig.contextual.exploreServices.path} variant="secondary" size="lg">{ctaConfig.contextual.exploreServices.label}</Button>
      </HeroSection>

      <TrustStrip points={proofPoints} />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="What We Do" title="Five managed service lines, one delivery framework." description="Every engagement operates under the same SLA governance, security protocols, and reporting discipline — regardless of which service line you engage." className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => <ServiceCard key={service.slug} service={service} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="The Difference" title="Managed outsourcing vs. staff augmentation" description="The distinction is accountability. Staff augmentation gives you people to manage. Managed outsourcing gives you a service outcome with governance." className="mb-10" />
          <SLAComparison rows={staffingVsManaged} leftHeader="Staff Augmentation" rightHeader="Managed Outsourcing" />
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="Why ASTechnix" title="What differentiates our delivery model" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            <SLAFeature icon={<ShieldCheck className="h-5 w-5" />} title="Contractual accountability" description="Service levels are defined in the contract, not informally agreed. Performance is measured and reviewed monthly." />
            <SLAFeature icon={<FileText className="h-5 w-5" />} title="Defined scope" description="Every engagement starts with a documented scope statement. Deliverables, boundaries, and responsibilities are explicit." />
            <SLAFeature icon={<Settings className="h-5 w-5" />} title="Transition management" description="Structured transition phases — discovery, knowledge transfer, documentation, and go-live — minimize disruption to ongoing operations." />
            <SLAFeature icon={<BarChart3 className="h-5 w-5" />} title="Governance and reporting" description="Monthly SLA reviews with operational dashboards, incident analysis, and tracked improvement actions." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Delivery Process" title="How we engage, from discovery to continuous improvement" className="mb-10" />
          <ProcessTimeline steps={deliveryProcess} />
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader eyebrow="SLA Governance" title="Service levels are contractual, not aspirational." description="Every engagement defines response times, resolution targets, quality metrics, and uptime commitments. These are reviewed monthly with documented metrics — not informal check-ins." />
              <div className="mt-6"><Button to="/delivery-model/sla-governance-reporting" variant="secondary">SLA Governance Framework</Button></div>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-6 md:p-8">
              <h3 className="heading-3 text-ink mb-4">Governance cadence</h3>
              <div className="space-y-4">
                {[{ label: "Monthly", desc: "SLA review with performance metrics, incident analysis, and action items" }, { label: "Quarterly", desc: "Improvement plan with measurable targets and corrective actions" }, { label: "Annually", desc: "Service review and contract renewal assessment" }].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="shrink-0"><span className="badge bg-brand-accent/10 text-brand-accent">{item.label}</span></div>
                    <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Technology" title="Capability areas we work across" description="We adapt to your existing technology stack. These are the primary areas we operate in — we are not limited to this list." className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techCapabilities.map((group) => (
              <div key={group.group} className="rounded-lg border border-ink/10 bg-canvas p-5">
                <h3 className="text-sm font-heading font-bold text-ink">{group.group}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-ink-soft"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader eyebrow="Security" title="Operational security built into the delivery model." description="Security is not a bolt-on. It's embedded in how we structure engagements, manage access, and handle data." />
              <div className="mt-6"><Button to="/delivery-model/security-compliance-ip-protection" variant="secondary">Security & IP Framework</Button></div>
            </div>
            <div className="space-y-4">
              {[{ title: "Least-privilege access", desc: "Access to your systems is granted on a need-to-know basis and reviewed regularly." }, { title: "IP ownership transfer", desc: "All intellectual property is contractually transferred to you — code, documentation, designs." }, { title: "Confidentiality", desc: "Enforceable NDAs signed by every team member assigned to your engagement." }, { title: "Data handling protocols", desc: "Defined procedures for data access, storage, and transmission aligned to your requirements." }].map((item) => (
                <div key={item.title} className="rounded-lg border border-ink/10 bg-white p-4">
                  <h3 className="text-sm font-heading font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Engagement Outcomes" title="Case studies" description="Detailed engagement summaries with documented outcomes will be published here as they become available." className="mb-8" />
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.slug} className="rounded-lg border border-ink/10 bg-canvas p-6">
                  <p className="text-sm font-semibold text-brand-accent">{study.sector}</p>
                  <h3 className="mt-2 text-lg font-heading font-bold text-ink">{study.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{study.summary}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-ink/20 bg-canvas/50 p-12 text-center">
              <p className="text-body text-ink-muted">Case studies with verified outcomes will be published here.</p>
              <Button to="/contact" variant="secondary" className="mt-4">Request engagement references</Button>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Questions we hear from executives" className="mb-8" />
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
