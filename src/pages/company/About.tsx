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

const crumbs: Crumb[] = [
  { label: "Home", path: "/" },
  { label: "Company", path: "/company" },
  { label: "About" },
];

export default function About() {
  return (
    <>
      <Seo meta={{ title: "About AStechnix | IT Infrastructure Support", description: "AStechnix helps organizations manage endpoints, protect devices, check cloud environments, and support remote teams." }} />
      <PageHeader breadcrumbs={crumbs} title="About AStechnix" description={`${company.name} helps organizations keep their devices, cloud environments, and everyday IT support in good shape.`} />
      <TrustStrip points={proofPoints} />

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="Who We Are" title="A practical IT support partner for growing teams." className="mb-6" />
          <p className="text-body">AStechnix was founded in {company.founded} to help teams manage the work that keeps their technology running. Our focus is straightforward: endpoint management, device security, vulnerability checks, cloud care, and reliable remote helpdesk support.</p>
          <p className="text-body mt-4">We work with your people and your existing tools. We can look after a defined part of your environment or provide broader day-to-day support, with clear responsibilities and a direct route for escalation.</p>
          <p className="text-body mt-4">Headquartered in {company.headquarters}, we support organizations across time zones and can provide coverage that fits your working hours and operational needs.</p>
        </div>
      </section>

      <section className="section-padding border-y border-ink/10 bg-white">
        <div className="container-content">
          <SectionHeader eyebrow="Our Focus" title="The areas we help with most" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            <SLAFeature title="Endpoint management" description="We help keep remote laptops and workstations updated, supported, and ready for daily work." />
            <SLAFeature title="Device security" description="We monitor endpoint security signals and help your team respond to suspicious activity quickly." />
            <SLAFeature title="Vulnerability checks" description="We look for common security gaps across cloud and endpoint environments and help plan the fixes." />
            <SLAFeature title="Remote helpdesk support" description="We handle everyday computer, software, access, and user support requests through a clear process." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-content max-w-3xl">
          <SectionHeader eyebrow="How We Work" title="Clear communication and useful support." className="mb-6" />
          <p className="text-body">We start by understanding your users, devices, tools, and recurring problems. From there, we agree the support scope, response expectations, and escalation path. We keep the conversation practical and share what needs attention without making the process harder than it needs to be.</p>
          <p className="text-body mt-4">For teams that want ongoing help after the initial support process is working well, a maintenance agreement can be added as a natural next step.</p>
        </div>
      </section>

      <CTASection title="Want to talk through your IT support needs?" description="Tell us what your team is managing today and where support would make the biggest difference.">
        <Button to={ctaConfig.primary.path} variant="primary" size="lg">Get in Touch</Button>
      </CTASection>
    </>
  );
}
