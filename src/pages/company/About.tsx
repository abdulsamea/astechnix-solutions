import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { TrustStrip } from "../../components/TrustStrip";
import { SLAFeature } from "../../components/SLAFeature";
import { Button } from "../../components/Button";
import { ctaConfig } from "../../config/cta";
import { company } from "../../config/company";
import { proofPoints } from "../../data/content";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Company", path: "/company" }, { label: "About" }];

export default function About() {
  return (
    <>
      <Seo meta={{ title: "About AStechnix | Managed IT Outsourcing Company", description: "AStechnix is an end-to-end managed IT outsourcing and technology delivery company headquartered in Mumbai, India." }} />
      <PageHeader breadcrumbs={crumbs} title="About AStechnix" description={`${company.name} is an end-to-end managed IT outsourcing and technology delivery company. We are not a staffing agency, not a recruitment consultancy, and not a freelancer marketplace. We own service outcomes.`} />

      <TrustStrip points={proofPoints} />

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="Who We Are" title="Operational accountability, not headcount." className="mb-6" />
          <p className="text-body">AStechnix was founded in {company.founded} with a clear thesis: organizations need managed technology delivery with operational accountability, not more people to manage. Staff augmentation places individuals under your direction. Recruitment consultancies fill seats. Freelancer marketplaces offer transactional access to talent. None of these models own the outcome.</p>
          <p className="text-body mt-4">We do. Every engagement is structured as a managed service with defined scope, contractually committed SLAs, transparent reporting, and a single point of accountability. You review performance metrics with our service lead — you don't manage our team's daily tasks.</p>
          <p className="text-body mt-4">Headquartered in {company.headquarters}, we deliver across global time zones with 24/7 operational coverage for infrastructure and support engagements.</p>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Our Positioning" title="What we are — and what we are not" className="mb-10" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-ink/10 bg-canvas p-6">
              <h3 className="text-base font-heading font-bold text-ink mb-4">What we are</h3>
              <ul className="space-y-3">
                {["Managed IT outsourcing company", "Service delivery organization", "SLA-governed engagement model", "Single point of operational accountability", "Technology delivery partner"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-ink/10 bg-canvas p-6">
              <h3 className="text-base font-heading font-bold text-ink mb-4">What we are not</h3>
              <ul className="space-y-3">
                {["IT staffing agency", "IT recruitment consultancy", "Freelancer marketplace", "Body-shopping company", "Staff augmentation provider"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-muted"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted/40" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="How We Work" title="Principles that guide every engagement" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            <SLAFeature title="Ownership over placement" description="We contract for outcomes — working software, infrastructure uptime, quality metrics — not hours billed or seats filled." />
            <SLAFeature title="Governance over ad hoc" description="Defined SLAs, monthly reviews, and documented action items replace informal check-ins and person-dependent coordination." />
            <SLAFeature title="Transparency over opacity" description="Operational dashboards and monthly reports give you full visibility into performance. No selective metrics." />
            <SLAFeature title="Factual integrity over marketing" description="We don't invent proof points. If we don't have a certification, we say so. If case studies aren't verified, we don't publish them." />
          </div>
        </div>
      </section>

      <CTASection title="Want to learn more about working with us?" description="Book a consultation to discuss your requirements and explore whether a managed engagement is the right fit.">
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">{ctaConfig.primary.label}</Button>
        <Button to={ctaConfig.secondary.path} variant="secondary" size="lg" className="border-white/20 text-white hover:border-white hover:text-white bg-transparent">{ctaConfig.secondary.label}</Button>
      </CTASection>
    </>
  );
}
