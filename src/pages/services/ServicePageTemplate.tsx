import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { SLAFeature } from "../../components/SLAFeature";
import { ProcessTimeline, type TimelineStep } from "../../components/ProcessTimeline";
import { FAQAccordion, type FaqItem } from "../../components/FAQAccordion";
import { ServiceCard } from "../../components/ServiceCard";
import { Button } from "../../components/Button";
import { services } from "../../data/content";
import { ctaConfig } from "../../config/cta";
import { Check } from "lucide-react";

export interface ServicePageData {
  slug: string;
  title: string;
  shortTitle: string;
  heroDescription: string;
  businessProblem: string;
  whatWeOwn: { title: string; description: string }[];
  capabilities: { title: string; description: string }[];
  scope: string[];
  technology: string[];
  process: TimelineStep[];
  securityPrinciples: { title: string; description: string }[];
  faqs: FaqItem[];
  seoDescription: string;
  contextualCtaLabel: string;
}

export function ServicePageTemplate({
  slug, title, shortTitle, heroDescription, businessProblem, whatWeOwn,
  capabilities, scope, technology, process, securityPrinciples, faqs, seoDescription, contextualCtaLabel,
}: ServicePageData) {
  const crumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: shortTitle },
  ];

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo meta={{ title: `${title} | ASTechnix`, description: seoDescription }} />
      <PageHeader breadcrumbs={crumbs} title={title} description={heroDescription} />

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="The Problem" title="The operational challenge" className="mb-6" />
          <p className="text-body">{businessProblem}</p>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Our Responsibility" title="What ASTechnix takes ownership of" description="These are the outcomes we contract for — not tasks we assist with." className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {whatWeOwn.map((item) => <SLAFeature key={item.title} title={item.title} description={item.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="Capabilities" title="Service capabilities" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => <SLAFeature key={cap.title} title={cap.title} description={cap.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="Scope" title="What's included in the engagement" className="mb-6" />
          <ul className="space-y-3">
            {scope.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-ink-soft">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader eyebrow="Governance" title="SLA governance for this service" description="Specific SLA targets — response times, resolution times, quality metrics — are defined per engagement based on your business criticality." className="mb-6" />
              <Button to="/delivery-model/sla-governance-reporting" variant="secondary">SLA Governance Framework</Button>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="heading-3 text-ink mb-4">Governance cadence</h3>
              <div className="space-y-3">
                {[{ label: "Monthly", desc: "SLA review with performance metrics and incident analysis" }, { label: "Quarterly", desc: "Improvement plan with measurable targets" }, { label: "Continuous", desc: "Operational dashboards and ticketing transparency" }].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="badge bg-brand-accent/10 text-brand-accent shrink-0">{item.label}</span>
                    <p className="text-sm text-ink-soft">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="Technology" title="Technologies we work with" description="We adapt to your existing stack. These are the primary technologies we operate across." className="mb-6" />
          <div className="flex flex-wrap gap-2">
            {technology.map((tech) => (
              <span key={tech} className="rounded-md border border-ink/15 bg-canvas px-3 py-2 text-sm font-medium text-ink-soft">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <SectionHeader eyebrow="Delivery Process" title="How we engage" className="mb-10" />
          <ProcessTimeline steps={process} />
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Security" title="How this service is secured" description="Security principles applied to every engagement." className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {securityPrinciples.map((item) => <SLAFeature key={item.title} title={item.title} description={item.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Common questions" className="mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-padding bg-white border-t border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Related" title="Other service lines" className="mb-8" />
          <div className="grid gap-5 sm:grid-cols-3">
            {relatedServices.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to discuss ${shortTitle.toLowerCase()}?`} description="Book a consultation with our delivery team to explore how this service can be structured for your environment.">
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">{contextualCtaLabel}</Button>
        <Button to={ctaConfig.secondary.path} variant="secondary" size="lg" className="border-white/20 text-white hover:border-white hover:text-white">{ctaConfig.secondary.label}</Button>
      </CTASection>
    </>
  );
}
