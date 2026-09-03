import { Seo } from "../components/Seo";
import { HeroSection } from "../components/HeroSection";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { StatsBar } from "../components/StatsBar";
import { ClientLogos } from "../components/ClientLogos";
import { CTASection } from "../components/CTASection";
import { Button } from "../components/Button";
import { SLAComparison, type ComparisonRow } from "../components/SLAComparison";
import {
  ProcessTimeline,
  type TimelineStep,
} from "../components/ProcessTimeline";
import { FAQAccordion, type FaqItem } from "../components/FAQAccordion";
import { SLAFeature } from "../components/SLAFeature";
import { TestimonialSlider } from "../components/TestimonialSlider";
import { TechShowcase } from "../components/TechShowcase";
import { ImageContentSection } from "../components/ImageContentSection";
import { TabbedContent, type TabItem } from "../components/TabbedContent";
import {
  services,
  proofPoints,
  testimonials,
  clientLogos,
  techCategories,
  // caseStudies,
} from "../data/content";
import { ctaConfig } from "../config/cta";
import { heroImages, sectionImages } from "../config/images";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Settings,
  BarChart3,
  Check,
} from "lucide-react";

const staffingVsManaged: ComparisonRow[] = [
  {
    metric: "Responsibility",
    internal: "You manage the individuals",
    outsourced: "We own the service outcome",
  },
  {
    metric: "Service Ownership",
    internal: "No single accountable party",
    outsourced: "AStechnix is the single accountable party",
  },
  {
    metric: "Delivery",
    internal: "You coordinate and direct",
    outsourced: "We plan, execute, and report",
  },
  {
    metric: "Governance",
    internal: "You build and enforce",
    outsourced: "SLA framework is included",
  },
  {
    metric: "SLAs",
    internal: "Not defined",
    outsourced: "Contractually defined per service",
  },
  {
    metric: "Reporting",
    internal: "You extract from tools",
    outsourced: "Monthly governance reports included",
  },
];

const deliveryProcess: TimelineStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Joint scoping of requirements, success criteria, current environment, and constraints.",
  },
  {
    step: "02",
    title: "Transition",
    description:
      "Knowledge transfer, documentation, access provisioning, and runbook creation.",
  },
  {
    step: "03",
    title: "Operate",
    description:
      "Day-to-day delivery under defined SLAs with monitoring, ticketing, and incident management.",
  },
  {
    step: "04",
    title: "Govern",
    description:
      "Monthly SLA reviews with performance metrics, incident analysis, and action items.",
  },
  {
    step: "05",
    title: "Improve",
    description:
      "Quarterly improvement plans with measurable targets and corrective action tracking.",
  },
];

const approachTabs: TabItem[] = [
  {
    id: "ownership",
    label: "Ownership",
    title: "Operational accountability, not headcount",
    description:
      "We contract for outcomes — working software, infrastructure uptime, quality metrics — not hours billed or seats filled. You review performance with our service lead, not manage our team's daily tasks.",
    linkLabel: "About AStechnix",
    linkHref: "/company/about-us",
  },
  {
    id: "governance",
    label: "Governance",
    title: "SLA-governed from day one",
    description:
      "Defined service levels, monthly reviews, and documented action items replace informal check-ins and person-dependent coordination. You always have visibility into how the service is performing.",
    linkLabel: "SLA Governance",
    linkHref: "/delivery-model/sla-governance-reporting",
  },
  {
    id: "transparency",
    label: "Transparency",
    title: "Full visibility into performance",
    description:
      "Operational dashboards and monthly reports give you complete transparency into service performance. No selective metrics, no hidden issues — just factual reporting with improvement plans.",
    linkLabel: "Explore services",
    linkHref: "/services/software-engineering-outsourcing",
  },
  {
    id: "integrity",
    label: "Integrity",
    title: "Factual integrity over marketing",
    description:
      "We don't invent proof points. If we don't have a certification, we say so. If case studies aren't verified, we don't publish them. What you see is what you get — no embellishment.",
    linkLabel: "Contact us",
    linkHref: "/contact",
  },
];

const homeFaqs: FaqItem[] = [
  {
    question:
      "How is managed IT outsourcing different from staff augmentation?",
    answer:
      "Staff augmentation places individuals under your management — you coordinate, direct, and are responsible for outcomes. Managed outsourcing means AStechnix contracts for service outcomes, governs delivery against SLAs, and reports transparently. We own the result, not just the headcount.",
  },
  {
    question: "What SLA accountability do you provide?",
    answer:
      "Every engagement includes contractually defined service levels — response times, resolution targets, quality metrics, and uptime commitments. Performance is reviewed monthly with documented metrics. If targets are missed, corrective actions are tracked to completion.",
  },
  {
    question: "How does the transition process work?",
    answer:
      "Transition follows a structured phase: discovery of your current environment, knowledge transfer sessions, documentation of procedures, access provisioning under least-privilege principles, and runbook creation. The transition timeline is defined per engagement based on complexity.",
  },
  {
    question: "How do you handle security and IP protection?",
    answer:
      "All intellectual property is contractually transferred to you. Team members sign enforceable NDAs. Access is granted on a least-privilege basis and reviewed regularly. Data handling follows defined protocols. Specific security measures are aligned to your requirements.",
  },
  {
    question: "What does governance and reporting look like?",
    answer:
      "Monthly SLA reviews with operational dashboards, performance metrics, incident analysis, and tracked action items. Quarterly improvement plans with measurable targets. You always have visibility into how the service is performing.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "We offer three engagement models: managed service (fixed monthly), dedicated team (monthly), and project-based (fixed scope). Pricing is defined per engagement based on scope, complexity, and SLA requirements. No hidden costs — everything is documented in the contract.",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        meta={{
          title: "AStechnix — Managed IT Outsourcing & Technology Delivery",
          description:
            "End-to-end managed IT outsourcing: software engineering, managed infrastructure, QA, data engineering, and helpdesk support with SLA governance and operational accountability.",
        }}
      />

      <HeroSection
        variant="dark"
        backgroundImage={heroImages.home}
        eyebrow="Managed IT Outsourcing"
        title={
          <>
            We own your technology operations,{" "}
            <span className="text-brand-accent">end to end.</span>
          </>
        }
        description="AStechnix delivers managed software engineering, infrastructure, QA, data, and support under SLA governance — not staff augmentation, not recruitment, not body-shopping. We take operational accountability for outcomes."
      >
        <Button to={ctaConfig.primary.path} size="lg">
          {ctaConfig.primary.label}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button
          to={ctaConfig.contextual.exploreServices.path}
          variant="outline-white"
          size="lg"
        >
          {ctaConfig.contextual.exploreServices.label}
        </Button>
      </HeroSection>

      <ClientLogos logos={clientLogos} />

      <StatsBar points={proofPoints} variant="tainted" />

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            eyebrow="What We Do"
            title={
              <>
                Eight managed service lines,{" "}
                <span className="emphasis">one delivery framework.</span>
              </>
            }
            description="Every engagement operates under the same SLA governance, security protocols, and reporting discipline — regardless of which service line you engage."
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ImageContentSection
        image={sectionImages.teamCollaboration}
        imageAlt="Engineering team collaborating in a modern office"
        eyebrow="The Difference"
        title={
          <>
            Managed outsourcing vs.{" "}
            <span className="emphasis">staff augmentation</span>
          </>
        }
        variant="tinted"
      >
        <p className="text-body">
          The distinction is accountability. Staff augmentation gives you people
          to manage. Managed outsourcing gives you a service outcome with
          governance.
        </p>
        <div className="space-y-3 pt-2">
          {[
            "We own the service outcome — not just the headcount",
            "SLA framework is included, not an extra",
            "Monthly governance reports, not informal check-ins",
            "Single point of accountability — AStechnix",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
              <p className="text-body-sm">{point}</p>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <Button
            to="/delivery-model/sla-governance-reporting"
            variant="secondary"
          >
            See the full comparison
          </Button>
        </div>
      </ImageContentSection>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader
            eyebrow="The Difference"
            title="Managed outsourcing vs. staff augmentation"
            description="The distinction is accountability. Staff augmentation gives you people to manage. Managed outsourcing gives you a service outcome with governance."
            align="center"
            className="mb-10"
          />
          <SLAComparison
            rows={staffingVsManaged}
            leftHeader="Staff Augmentation"
            rightHeader="Managed Outsourcing"
          />
        </div>
      </section>

      {/* <TestimonialSlider testimonials={testimonials} /> */}

      <ImageContentSection
        variant="tinted"
        image={sectionImages.codingWorkstation}
        imageAlt="Developer working on code at a modern workstation"
        eyebrow="Why AStechnix"
        title={
          <>
            What differentiates{" "}
            <span className="emphasis">our delivery model</span>
          </>
        }
        reverse
      >
        <div className="space-y-5">
          <SLAFeature
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Contractual accountability"
            description="Service levels are defined in the contract, not informally agreed. Performance is measured and reviewed monthly."
          />
          <SLAFeature
            icon={<FileText className="h-5 w-5" />}
            title="Defined scope"
            description="Every engagement starts with a documented scope statement. Deliverables, boundaries, and responsibilities are explicit."
          />
          <SLAFeature
            icon={<Settings className="h-5 w-5" />}
            title="Transition management"
            description="Structured transition phases — discovery, knowledge transfer, documentation, and go-live — minimize disruption to ongoing operations."
          />
          <SLAFeature
            icon={<BarChart3 className="h-5 w-5" />}
            title="Governance and reporting"
            description="Monthly SLA reviews with operational dashboards, incident analysis, and tracked improvement actions."
          />
        </div>
      </ImageContentSection>

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content">
          <SectionHeader
            eyebrow="Delivery Process"
            title="How we engage, from discovery to continuous improvement"
            align="center"
            className="mb-12"
          />
          <ProcessTimeline steps={deliveryProcess} />
        </div>
      </section>

      <TabbedContent
        variant="tinted"
        eyebrow="How We Work"
        heading={
          <>
            How do we do it? The <span className="emphasis">AStechnix way</span>
          </>
        }
        tabs={approachTabs}
      />

      <ImageContentSection
        image={sectionImages.securityConcept}
        imageAlt="Cybersecurity concept with digital protection elements"
        eyebrow="Security"
        title={
          <>
            Operational security built into{" "}
            <span className="emphasis">the delivery model</span>
          </>
        }
      >
        <p className="text-body">
          Security is not a bolt-on. It's embedded in how we structure
          engagements, manage access, and handle data throughout the entire
          delivery lifecycle.
        </p>
        <div className="space-y-3 pt-2">
          {[
            "Least-privilege access to your systems",
            "100% IP ownership transfer — contractually guaranteed",
            "Enforceable NDAs signed by every team member",
            "Defined data handling protocols aligned to your requirements",
          ].map((point) => (
            <div key={point} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
              <p className="text-body-sm">{point}</p>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <Button
            to="/delivery-model/security-compliance-ip-protection"
            variant="secondary"
          >
            Security & IP Framework
          </Button>
        </div>
      </ImageContentSection>

      <section className="section-padding bg-canvas/35 border-y border-ink/10">
        <div className="container-content">
          <SectionHeader
            eyebrow="Technology"
            title={
              <>
                Capability areas we{" "}
                <span className="emphasis">work across</span>
              </>
            }
            description="We adapt to your existing technology stack. These are the primary areas we operate in — we are not limited to this list."
            align="center"
            className="mb-10"
          />
          <TechShowcase categories={techCategories} variant="light" />
        </div>
      </section>

      {/* <section className="section-padding bg-canvas/50">
        <div className="container-content">
          <SectionHeader
            eyebrow="Engagement Outcomes"
            title="Case studies"
            description="Detailed engagement summaries with documented outcomes will be published here as they become available."
            className="mb-8"
          />
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.slug} className="card-hover p-6">
                  <p className="text-sm font-semibold text-brand-accent">{study.sector}</p>
                  <h3 className="mt-2 text-lg font-heading font-bold text-ink">{study.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{study.summary}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-ink/20 bg-white/50 p-12 text-center">
              <p className="text-body text-ink-muted">Case studies with verified outcomes will be published here.</p>
              <Button to="/contact" variant="secondary" className="mt-4">Request engagement references</Button>
            </div>
          )}
        </div>
      </section> */}

      <section className="section-padding bg-white border-y border-ink/10">
        <div className="container-content max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions we hear from executives"
            align="center"
            className="mb-8"
          />
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
