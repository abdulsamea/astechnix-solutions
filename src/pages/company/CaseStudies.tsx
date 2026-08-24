import { Seo } from "../../components/Seo";
import { PageHeader, type Crumb } from "../../components/Breadcrumbs";
import { SectionHeader } from "../../components/SectionHeader";
import { CTASection } from "../../components/CTASection";
import { Button } from "../../components/Button";
import { ctaConfig } from "../../config/cta";
import { caseStudies } from "../../data/content";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Company", path: "/company" }, { label: "Case Studies" }];

export default function CaseStudies() {
  return (
    <>
      <Seo meta={{ title: "Case Studies | AStechnix", description: "Engagement summaries with verified outcomes from AStechnix managed IT outsourcing engagements." }} />
      <PageHeader breadcrumbs={crumbs} title="Case Studies" description="Documented engagement outcomes with verified metrics. We publish case studies only when results have been confirmed — not as marketing material." />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.slug} className="rounded-lg border border-ink/10 bg-white p-6">
                  <p className="text-sm font-semibold text-brand-accent">{study.sector}</p>
                  <h3 className="mt-2 text-lg font-heading font-bold text-ink">{study.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{study.summary}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-heading text-xl font-bold text-brand-dark">{m.value}</p>
                        <p className="text-xs text-ink-muted">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl">
              <SectionHeader eyebrow="In Progress" title="Verified case studies will be published here." description="We publish engagement summaries only when outcomes have been documented and verified. We don't fabricate proof points or inflate metrics for marketing purposes." />
              <div className="mt-8 rounded-lg border border-dashed border-ink/20 bg-white/50 p-8">
                <p className="text-body text-ink-soft">If you'd like to understand how we've delivered in environments similar to yours, we can discuss relevant engagement references during a consultation — subject to client confidentiality agreements.</p>
                <Button to={ctaConfig.primary.path} variant="secondary" className="mt-4">Request engagement references</Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Want to discuss references relevant to your context?" description="Book a consultation. We'll share what we can within confidentiality constraints and explore whether our delivery model fits your needs.">
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">{ctaConfig.primary.label}</Button>
        <Button to={ctaConfig.secondary.path} variant="secondary" size="lg" className="border-white/20 text-white hover:border-white hover:text-white bg-transparent">{ctaConfig.secondary.label}</Button>
      </CTASection>
    </>
  );
}
