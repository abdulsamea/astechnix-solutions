import { motion } from "framer-motion";
import {
  ShieldCheck,
  Check,
  Gem,
  HandshakeIcon,
  Code2,
  Server,
  TestTube,
  Database,
  Headphones,
  Lock,
  Phone,
  Mail,
  FileText,
  Scale,
  Clock,
  ArrowUp,
  TrendingDown,
} from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { LeadForm } from "../components/LeadForm";
import { DashboardGraphic } from "../components/DashboardGraphic";
import { SLAComparison, type ComparisonRow } from "../components/SLAComparison";
import {
  ProcessTimeline,
  type TimelineStep,
} from "../components/ProcessTimeline";
import { FAQAccordion, type FaqItem } from "../components/FAQAccordion";
import { company } from "../config/company";
import { useReducedMotion } from "../hooks/useReducedMotion";

const trustBadges = [
  { label: "24/7 Support", icon: Clock },
  { label: "Total IT Solutions", icon: HandshakeIcon },
  { label: "6+ Years of Outsourcing Excellence", icon: Gem },
];

const stats = [
  { value: "99.98", suffix: "%", label: "SLA Compliance" },
  { value: "15", suffix: " min", label: "Avg Escalation Response" },
  { value: "100", suffix: "%", label: "Client IP Transfer" },
  { value: "24/7", suffix: "/365", label: "NOC Coverage" },
];

const clientLogos = ["INCYT", "Renaissance Investments"];

const comparisonRows: ComparisonRow[] = [
  {
    metric: "Downtime & Availability",
    internal: "Unpredictable outages, reactive fixes",
    outsourced: "Contract-backed 99.98% uptime SLAs",
  },
  {
    metric: "Cost Structure",
    internal: "Variable overhead, hidden costs",
    outsourced: "Fixed monthly billing, no surprises",
  },
  {
    metric: "Talent Retention",
    internal: "High turnover, knowledge loss",
    outsourced: "Dedicated senior engineering pods",
  },
  {
    metric: "Coverage Hours",
    internal: "Business hours only, on-call gaps",
    outsourced: "24/7/365 NOC with follow-the-sun",
  },
  {
    metric: "Accountability",
    internal: "Diffuse ownership, finger-pointing",
    outsourced: "Single point of accountability",
  },
  {
    metric: "Intellectual Property",
    internal: "Ambiguous ownership clauses",
    outsourced: "100% IP transfer from Day 1",
  },
];

interface Capability {
  icon: typeof Code2;
  title: string;
  benefit: string;
}

const capabilities: Capability[] = [
  {
    icon: Code2,
    title: "Custom Software Engineering",
    benefit: "Turnkey delivery under fixed scope",
  },
  {
    icon: Server,
    title: "Managed Infrastructure & NOC",
    benefit: "24/7 proactive monitoring & zero unplanned downtime",
  },
  {
    icon: TestTube,
    title: "Quality Assurance & Testing",
    benefit: "Automated regression & bug-free releases",
  },
  {
    icon: Database,
    title: "Data Engineering & BI",
    benefit: "SLA-backed pipeline maintenance",
  },
  {
    icon: Headphones,
    title: "Helpdesk & End-User Support",
    benefit: "Tier 1–3 L2/L3 multi-channel coverage",
  },
  {
    icon: ShieldCheck,
    title: "Managed Cybersecurity & SOC",
    benefit: "Continuous threat detection & compliance",
  },
];

const techStack = [
  { category: "Cloud", items: ["AWS", "Azure"] },
  { category: "Containers", items: ["Docker", "Kubernetes"] },
  { category: "Infrastructure", items: ["Terraform"] },
  { category: "Service Management", items: ["ServiceNow", "Jira"] },
];

const timelineSteps: TimelineStep[] = [
  {
    step: "1",
    title: "Discovery & SLA Audit",
    description:
      "We assess your current environment, map critical systems, and benchmark existing SLAs against industry standards.",
  },
  {
    step: "2",
    title: "Zero-Downtime Transition",
    description:
      "Parallel-run knowledge transfer with shadow operations. Cutover happens only after full validation with zero end-user disruption.",
  },
  {
    step: "3",
    title: "Managed Execution",
    description:
      "Dedicated engineering pods take operational ownership. NOC monitoring, incident response, and proactive maintenance go live.",
  },
  {
    step: "4",
    title: "Governance & Reporting",
    description:
      "Monthly executive dashboard reviews with SLA attestation, performance metrics, and continuous improvement roadmaps.",
  },
];

const guarantees = [
  {
    icon: FileText,
    title: "100% IP Transfer on Day 1",
    description:
      "All source code, documentation, and artifacts are yours from the first day of engagement — contractually guaranteed.",
  },
  {
    icon: Lock,
    title: "Strict NDAs",
    description:
      "Every team member signs binding non-disclosure agreements. Data residency and confidentiality terms are enforced per client.",
  },
  {
    icon: Scale,
    title: "Flexible Contracts",
    description:
      "Choose Fixed-Price, Managed SLA, or Dedicated Pods. No hidden lock-in, no exit penalties, no auto-renewal traps.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How quickly can AStechnix transition our IT operations?",
    answer:
      "Most transitions complete in 2–4 weeks depending on environment complexity. We run a parallel phase with shadow operations so cutover happens with zero downtime and zero end-user disruption. Your existing team is never left in the dark.",
  },
  {
    question: "How are SLAs calculated, monitored, and contractually enforced?",
    answer:
      "SLAs are measured against agreed-upon service levels using our NOC monitoring platform. Every incident is logged with timestamps, and compliance is reported in a monthly executive dashboard. Penalties for SLA breaches are built directly into the contract — not optional.",
  },
  {
    question: "Who owns the intellectual property and source code?",
    answer:
      "You do. 100% IP transfer is contractually guaranteed from Day 1. All source code, documentation, infrastructure configurations, and operational artifacts belong to your organization. There are no shared-ownership clauses or hidden retained rights.",
  },
  {
    question:
      "How does AStechnix handle 24/7 support across different time zones?",
    answer:
      "Our follow-the-sun model stations NOC and support pods across India and global delivery centers so your environment is always covered by a live, senior team — not an after-hours answering service. Tier 1–3 escalation is available around the clock, every day of the year.",
  },
];

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

export default function ItOutsourcing() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* 1. HERO SECTION — Dark bg, two columns: content left, lead form right */}
      <section
        id="lead-form"
        className="relative scroll-mt-20 overflow-hidden bg-brand-dark"
      >
        <div className="absolute inset-0 grid-pattern-dark opacity-40" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="container-content relative py-14 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left column: headline, subheadline, trust badges, phone, email */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="badge bg-brand-accent/15 text-brand-accent-light">
                <ShieldCheck className="h-3.5 w-3.5" />
                Managed IT Outsourcing
              </span>
              <h1 className="heading-display mt-5 text-white">
                Outsource With Confidence: Cut IT Costs by{" "}
                <span className="text-brand-accent">45%</span>
              </h1>
              <p className="text-lead mt-6 text-white/70">
                Stop overpaying for domestic software development without
                compromising on quality. We deliver custom IT outsourcing
                solutions backed by real-time US shift overlap.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-white/60"
                  >
                    <badge.icon className="h-4 w-4 text-brand-accent-light" />
                    {badge.label}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
                <a
                  href={company.phoneHref}
                  className="btn !px-4 sm:!px-6 !py-3 !text-sm sm:!text-base border border-white/25 text-white hover:bg-white/10 hover:border-white/50 inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                  <span>{company.phoneDisplay}</span>
                </a>
                <a
                  href={company.emailHref}
                  className="btn !px-4 sm:!px-6 !py-3 !text-sm sm:!text-base border border-white/25 text-white hover:bg-white/10 hover:border-white/50 inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-accent" />
                  <span>{company.email}</span>
                </a>
              </div>
            </motion.div>

            {/* Right column: embedded lead form card above the fold */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="rounded-2xl bg-white p-5 shadow-2xl xl:p-6">
                <LeadForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-10 md:py-12">
        <div className="container-content">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted mb-6">
            Trusted by enterprise and startup teams across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-heading text-lg font-bold tracking-tight text-ink-muted/50 transition-colors duration-300 hover:text-ink"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. QUANTITATIVE PROOF, DASHBOARD GRAPHIC & CLIENT LOGOS — White bg */}
      <section className="border-y border-surface bg-white py-14 md:py-20">
        <div className="container-content">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-lg border border-surface bg-white p-4 sm:p-6 text-center shadow-card md:text-left min-w-0"
              >
                <p className="font-heading text-3xl sm:text-4xl xl:text-5xl font-extrabold text-brand-dark tracking-tight leading-none break-words">
                  <span>{stat.value}</span>
                  <span className="text-brand-accent inline-block">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <DashboardGraphic />
          </motion.div>
        </div>
      </section>

      {/* 3. PROBLEM VS. SOLUTION MATRIX — White bg */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-content">
          <SectionHeader
            align="center"
            className="mx-auto"
            eyebrow="The Difference"
            title="Internal IT Friction vs. AStechnix Managed Outsourcing"
            description="See exactly what changes when operational accountability sits with one dedicated partner."
          />
          <div className="mt-12">
            <SLAComparison
              rows={comparisonRows}
              leftHeader="In-House IT"
              rightHeader="AStechnix Managed"
            />
          </div>
        </div>
      </section>

      {/* 4. SERVICE CAPABILITIES GRID — Canvas bg */}
      <section className="bg-canvas py-14 md:py-20">
        <div className="container-content">
          <SectionHeader
            align="center"
            className="mx-auto"
            eyebrow="Capabilities"
            title="Full-Stack IT Delivery, One Accountable Partner"
            description="Every capability maps to a measurable business outcome — not a headcount."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-lg border border-surface bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-ink/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-heading font-bold text-ink">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-[1.7]">
                  <span className="font-semibold text-brand-accent">
                    Benefit:{" "}
                  </span>
                  {cap.benefit}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted mb-6">
              Technology Stack &amp; Tooling
            </p>
            <div className="rounded-lg border border-surface bg-white p-6 md:p-8">
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12">
                {techStack.map((cat) => (
                  <div key={cat.category} className="text-center">
                    <h4 className="mb-3 text-sm font-heading font-bold text-ink">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-surface bg-white px-3 py-1.5 text-sm font-medium text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DELIVERY FRAMEWORK & TRANSITION TIMELINE — White bg */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-content">
          <SectionHeader
            align="center"
            className="mx-auto"
            eyebrow="Delivery Framework"
            title="From Discovery to Governance in 4 Steps"
            description="A proven transition methodology that eliminates downtime and gets you to managed operations fast."
          />
          <div className="mt-12">
            <ProcessTimeline steps={timelineSteps} />
          </div>
        </div>
      </section>

      {/* 6. RISK REVERSAL & LEGAL GUARANTEES — Dark bg */}
      <section className="relative overflow-hidden bg-brand-dark py-14 md:py-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" />
        <div className="container-content relative">
          <SectionHeader
            align="center"
            className="mx-auto"
            variant="dark"
            eyebrow="Risk Reversal"
            title="Legal Guarantees That Remove the Risk"
            description="We put our commitments in writing. No ambiguity, no fine print."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-lg border border-white/10 bg-white/5 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accent-light">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-heading font-bold text-white">
                  {g.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-[1.7]">
                  {g.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={scrollToForm}
              className="btn-primary !px-7 !py-3.5 !text-base"
            >
              Start With Zero Risk
            </button>
            <a
              href={company.phoneHref}
              className="btn border border-white/25 !px-7 !py-3.5 !text-base text-white hover:bg-white/10 hover:border-white/50"
            >
              <Phone className="h-4 w-4" />
              Call {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-content">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-2xl border border-surface bg-canvas shadow-card"
          >
            <div className="grid lg:grid-cols-5">
              <div className="bg-brand-dark p-8 md:p-10 lg:col-span-2">
                <span className="badge bg-brand-accent/15 text-brand-accent-light">
                  <TrendingDown className="h-3.5 w-3.5" />
                  Guaranteed Cost Reduction
                </span>
                <h3 className="heading-3 mt-5 text-white">
                  38% Reduction in Annual{" "}
                  <span className="text-brand-accent">
                    IT Operational Costs
                  </span>
                </h3>
                <p className="mt-4 text-sm text-white/60 leading-[1.7]">
                  AStechnix reduces annual IT operational costs by at least 38%
                  for enterprise clients while maintaining 99.99% core system
                  uptime.
                </p>
                <button
                  onClick={scrollToForm}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent-light hover:underline"
                >
                  Get the same results
                </button>
              </div>
              <div className="grid grid-cols-3 items-center gap-3 p-4 sm:gap-6 sm:p-6 md:p-10 lg:col-span-3">
                <CaseStudyMetric
                  value="38%"
                  label="Annual Cost Reduction"
                  icon={TrendingDown}
                />
                <CaseStudyMetric
                  value="99.99%"
                  label="Core System Uptime"
                  icon={Server}
                />
                <CaseStudyMetric
                  value="14 min"
                  label="Avg Incident Response"
                  icon={Clock}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION — Canvas bg */}
      <section className="bg-canvas py-14 md:py-20">
        <div className="container-content">
          <SectionHeader
            align="center"
            className="mx-auto"
            eyebrow="FAQ on outsourcing"
            title="Answers to Your Key Questions"
            description="Straight answers on transition speed, SLA enforcement, IP ownership, and global coverage."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 9. TERMINAL STICKY CTA BANNER — Dark bg */}
      <section className="relative overflow-hidden bg-brand-dark/80 py-14 md:py-20">
        <div className="absolute inset-0 grid-pattern-dark opacity-40" />
        <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="container-content relative text-center">
          <h2 className="heading-2 mx-auto max-w-3xl text-white">
            Ready to Eliminate IT Downtime and Cut Operational Overhead?
          </h2>
          <p className="text-lead mx-auto mt-5 max-w-xl text-white/60">
            Book your free 24-hour SLA audit or call us directly. We respond
            within one business hour.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={scrollToForm}
              className="btn-primary !px-7 !py-3.5 !text-base"
            >
              Request Outsourcing Details
            </button>
            <a
              href={company.phoneHref}
              className="btn border border-white/25 !px-7 !py-3.5 !text-base text-white hover:bg-white/10 hover:border-white/50"
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <a
              href={company.emailHref}
              className="btn border border-white/25 !px-7 !py-3.5 !text-base text-white hover:bg-white/10 hover:border-white/50"
            >
              <Mail className="h-4 w-4" />
              {company.email}
            </a>
          </div>
        </div>
      </section>

      <FloatingAuditButton />
    </>
  );
}

import { type LucideIcon } from "lucide-react";

function CaseStudyMetric({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      {/* Icon: 16px on mobile, 24px on desktop */}
      <Icon className="h-4 w-4 shrink-0 text-brand-accent md:h-6 md:w-6" />

      {/* Metric Value: 18px on mobile, 30px on desktop */}
      <p className="mt-1.5 font-heading text-lg font-extrabold tracking-tight text-brand-dark sm:text-2xl md:mt-3 md:text-3xl">
        {value}
      </p>

      {/* Metric Label: 10px tight on mobile, 12px on desktop */}
      <p className="mt-0.5 text-[10px] leading-tight text-ink-muted sm:text-xs md:mt-1">
        {label}
      </p>
    </div>
  );
}

function FloatingAuditButton() {
  return (
    <motion.button
      onClick={scrollToForm}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 lg:hidden"
      aria-label="Scroll to lead form"
    >
      <span className="btn-primary !px-6 !py-3 shadow-card-hover">
        <ArrowUp className="h-4 w-4" />
        Request a Quote
      </span>
    </motion.button>
  );
}
