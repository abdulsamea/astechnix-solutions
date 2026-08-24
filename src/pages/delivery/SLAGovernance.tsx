import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { SLAFeature } from "../../components/SLAFeature";
import { SLAComparison, type ComparisonRow } from "../../components/SLAComparison";
import { ResponsiveTable } from "../../components/ResponsiveTable";
import { Button } from "../../components/Button";
import { ctaConfig } from "../../config/cta";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Delivery Model", path: "/delivery-model" }, { label: "SLA Governance" }];

const priorityFramework: string[][] = [
  ["P1 — Critical", "Service unavailable or major function down", "Immediate escalation to service lead and client contact", "Defined per contract"],
  ["P2 — High", "Significant degradation, workaround exists", "Escalation to team lead within defined timeframe", "Defined per contract"],
  ["P3 — Medium", "Limited impact, non-critical function affected", "Standard handling within SLA window", "Defined per contract"],
  ["P4 — Low", "Minor issue, cosmetic, or enhancement request", "Scheduled handling", "Defined per contract"],
];

const reportingCadence: string[][] = [
  ["Monthly SLA Review", "Performance metrics, incident summary, action items", "Service lead + client stakeholder"],
  ["Quarterly Improvement Review", "Trend analysis, improvement targets, corrective actions", "Service lead + client management"],
  ["Annual Service Review", "Overall service assessment, contract renewal discussion", "AStechnix management + client management"],
  ["Real-time Dashboards", "Live operational metrics, ticket status, system health", "Available on-demand"],
];

const comparisonRows: ComparisonRow[] = [
  { metric: "SLA Definition", internal: "Informal or inconsistent", outsourced: "Contractually defined per service" },
  { metric: "Performance Reporting", internal: "Ad hoc, manually extracted", outsourced: "Monthly governance reports with metrics" },
  { metric: "Incident Accountability", internal: "Diffuse ownership", outsourced: "Single point of accountability" },
  { metric: "Improvement Loop", internal: "Reactive, no structure", outsourced: "Quarterly improvement plans with targets" },
  { metric: "Transparency", internal: "Limited visibility into operations", outsourced: "Full operational dashboards and reports" },
  { metric: "Escalation", internal: "Informal, person-dependent", outsourced: "Defined escalation matrix per severity" },
];

export default function SLAGovernance() {
  return (
    <>
      <Seo meta={{ title: "SLA Governance & Reporting | AStechnix", description: "How AStechnix governs managed service delivery through SLA frameworks, incident priority, escalation, reporting, and continuous improvement." }} />
      <PageHeader breadcrumbs={crumbs} title="SLA Governance & Reporting" description="SLA governance is the mechanism that converts a service contract into operational accountability. It's what differentiates managed delivery from staff augmentation." />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="Governance Framework" title="How we hold ourselves accountable" description="Every engagement defines service levels in the contract. Performance is measured against those levels and reviewed in structured sessions — not informal check-ins." className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            <SLAFeature title="Contractually defined service levels" description="Response times, resolution targets, quality metrics, and uptime commitments are written into the engagement contract — not informally agreed." />
            <SLAFeature title="Monthly SLA reviews" description="Structured monthly sessions with performance metrics, incident analysis, and documented action items. Both parties review and agree on corrective actions." />
            <SLAFeature title="Transparent reporting" description="Operational dashboards and monthly reports provide full visibility into performance against targets. No hidden metrics, no selective reporting." />
            <SLAFeature title="Continuous improvement" description="Quarterly improvement plans with measurable targets. If metrics slip, corrective actions are documented and tracked to completion." />
            <SLAFeature title="Defined escalation matrix" description="Incident escalation follows a defined matrix based on severity — not ad hoc phone calls. Each level has a defined response timeframe." />
            <SLAFeature title="Single point of accountability" description="AStechnix is the single accountable party for service performance. You don't chase individuals — you review metrics with our service lead." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Incident Priority" title="Incident priority and escalation framework" description="Incidents are classified by severity. Specific response and resolution targets are defined per engagement based on business criticality — not advertised generically." className="mb-8" />
          <ResponsiveTable headers={["Priority", "Definition", "Escalation", "Response Target"]} rows={priorityFramework} />
          <p className="mt-6 text-sm text-ink-muted">Note: Exact response and resolution times are contract-specific. They are agreed during engagement scoping based on your operational requirements.</p>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="Reporting" title="Governance and reporting cadence" description="Structured reviews at defined intervals ensure continuous visibility and improvement." className="mb-8" />
          <ResponsiveTable headers={["Review Type", "Content", "Participants"]} rows={reportingCadence} />
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Performance" title="What we measure" description="Metrics are defined per service line and agreed during scoping. These are the categories we track across all engagements." className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[{ title: "Response time", desc: "Time from incident detection to first response action." }, { title: "Resolution time", desc: "Time from incident to resolution, measured per priority tier." }, { title: "Uptime / availability", desc: "System or service availability against contracted target." }, { title: "Quality metrics", desc: "Defect rates, test coverage, code review compliance — per service." }, { title: "Ticket backlog", desc: "Open tickets by age and priority — indicates throughput health." }, { title: "CSAT / satisfaction", desc: "User or stakeholder satisfaction scores where applicable." }].map((m) => (
              <div key={m.title} className="rounded-lg border border-ink/10 bg-canvas p-5">
                <h3 className="text-sm font-heading font-semibold text-ink">{m.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="Comparison" title="In-house operations vs. AStechnix governed delivery" className="mb-8" />
          <SLAComparison rows={comparisonRows} leftHeader="In-House Team" rightHeader="AStechnix Governed" />
        </div>
      </section>

      <CTASection title="Want to understand how SLAs would work for your environment?" description="Book a consultation to discuss your requirements. We'll walk through the governance framework and how it applies to your specific context.">
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">{ctaConfig.contextual.slaAssessment.label}</Button>
        <Button to={ctaConfig.secondary.path} variant="secondary" size="lg" className="border-white/20 text-white hover:border-white hover:text-white bg-transparent">{ctaConfig.secondary.label}</Button>
      </CTASection>
    </>
  );
}
