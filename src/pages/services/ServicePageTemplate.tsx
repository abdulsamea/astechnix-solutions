import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { SLAFeature } from "../../components/SLAFeature";
import { ProcessTimeline, type TimelineStep } from "../../components/ProcessTimeline";
import { FAQAccordion, type FaqItem } from "../../components/FAQAccordion";
import { ServiceCard } from "../../components/ServiceCard";
import { Button } from "../../components/Button";
import { ImageContentSection } from "../../components/ImageContentSection";
import { TechShowcase } from "../../components/TechShowcase";
import { services } from "../../data/content";
import { ctaConfig } from "../../config/cta";
import { Check } from "lucide-react";

export interface ServicePageData {
  slug: string;
  title: string;
  shortTitle: string;
  heroDescription: string;
  heroImage: string;
  sectionImage: string;
  sectionImageAlt: string;
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
  slug, title, shortTitle, heroDescription, heroImage, sectionImage, sectionImageAlt,
  businessProblem, whatWeOwn, capabilities, scope, technology, process, securityPrinciples,
  faqs, seoDescription, contextualCtaLabel,
}: ServicePageData) {
  const crumbs: Crumb[] = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: shortTitle },
  ];

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const techCategory = [{ category: "Technologies", items: technology }];

  return (
    <>
      <Seo meta={{ title: `${title} | AStechnix`, description: seoDescription }} />
      <PageHeader breadcrumbs={crumbs} title={title} description={heroDescription} backgroundImage={heroImage} />

      <ImageContentSection
        image={sectionImage}
        imageAlt={sectionImageAlt}
        eyebrow="The Problem"
        title="The operational challenge"
      >
        <p className="text-body">{businessProblem}</p>
      </ImageContentSection>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Our Responsibility" title={<>What AStechnix takes <span className="emphasis">ownership of</span></>} description="These are the outcomes we contract for — not tasks we assist with." className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {whatWeOwn.map((item) => <SLAFeature key={item.title} title={item.title} description={item.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas/50">
        <div className="container-content">
          <SectionHeader eyebrow="Capabilities" title={<>Service <span className="emphasis">capabilities</span></>} className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap) => <SLAFeature key={cap.title} title={cap.title} description={cap.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="Scope" title={<>What's included in <span className="emphasis">the engagement</span></>} className="mb-6" />
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

      <section className="section-padding bg-canvas/50">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader eyebrow="Governance" title={<>SLA governance for <span className="emphasis">this service</span></>} description="Specific SLA targets — response times, resolution times, quality metrics — are defined per engagement based on your business criticality." className="mb-6" />
              <Button to="/delivery-model/sla-governance-reporting" variant="secondary">SLA Governance Framework</Button>
            </div>
            <div className="card p-6 md:p-8">
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
        <div className="container-content">
          <SectionHeader eyebrow="Technology" title={<>Technologies we <span className="emphasis">work with</span></>} description="We adapt to your existing stack. These are the primary technologies we operate across." className="mb-8" />
          <TechShowcase categories={techCategory} />
        </div>
      </section>

      <section className="section-padding bg-canvas/50">
        <div className="container-content">
          <SectionHeader eyebrow="Delivery Process" title={<>How we <span className="emphasis">engage</span></>} align="center" className="mb-12" />
          <ProcessTimeline steps={process} />
        </div>
      </section>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Security" title={<>How this service is <span className="emphasis">secured</span></>} description="Security principles applied to every engagement." className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {securityPrinciples.map((item) => <SLAFeature key={item.title} title={item.title} description={item.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas/50">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="FAQ" title={<>Common <span className="emphasis">questions</span></>} align="center" className="mb-8" />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-padding bg-white border-t border-ink/10">
        <div className="container-content">
          <SectionHeader eyebrow="Related" title={<>Other <span className="emphasis">service lines</span></>} className="mb-8" />
          <div className="grid gap-5 sm:grid-cols-3">
            {relatedServices.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to discuss ${shortTitle.toLowerCase()}?`} description="Book a consultation with our delivery team to explore how this service can be structured for your environment.">
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">{contextualCtaLabel}</Button>
        <Button to={ctaConfig.secondary.path} variant="outline-white" size="lg">{ctaConfig.secondary.label}</Button>
      </CTASection>
    </>
  );
}
