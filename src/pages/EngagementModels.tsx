import { motion } from "framer-motion";
import {
  Clock,
  Briefcase,
  FileText,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  CheckCircle2,
  Repeat,
  Calendar,
  Lock,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const EngagementModels = () => {
  const models = [
    {
      icon: Clock,
      title: "Hourly Consulting",
      tagline: "On-Demand Expertise",
      description:
        "Engage our senior engineers by the hour for ad-hoc cloud architecture reviews, infrastructure troubleshooting, DevOps audits, and urgent escalations.",
      bestFor: [
        "Spike workloads and urgent fixes",
        "Architecture reviews and code audits",
        "CI/CD pipeline troubleshooting",
        "Security assessments",
      ],
      pricing: "$75–$125 / hour",
      commitment: "No minimum commitment",
      response: "4–6 hour response time",
      gradient: "from-pacific-cyan to-sky-blue",
    },
    {
      icon: Briefcase,
      title: "Monthly Retainer",
      tagline: "Embedded Engineering Team",
      description:
        "A dedicated pod of senior engineers allocated to your organization each month. Ideal for ongoing infrastructure management, continuous optimization, and proactive monitoring.",
      bestFor: [
        "Ongoing DevOps & infrastructure ops",
        "24/7 monitoring and alerting",
        "Monthly cost optimization reviews",
        "Security patch management",
      ],
      pricing: "$8,000–$25,000 / month",
      commitment: "3-month minimum",
      response: "2-hour SLA response",
      gradient: "from-sky-blue to-pale-azure",
    },
    {
      icon: FileText,
      title: "Fixed Project",
      tagline: "Outcome-Based Delivery",
      description:
        "A scoped, milestone-driven engagement with fixed pricing and a defined deliverable. Perfect for cloud migrations, Kubernetes rollouts, and compliance implementations.",
      bestFor: [
        "Cloud migration (AWS/Azure/GCP)",
        "Kubernetes cluster design & rollout",
        "SOC 2 / GDPR compliance implementation",
        "Infrastructure-as-Code refactoring",
      ],
      pricing: "Custom project quote",
      commitment: "Milestone-based",
      response: "Dedicated PM assigned",
      gradient: "from-blue-green to-pacific-cyan",
    },
  ];

  const comparison = [
    {
      feature: "Response Time",
      hourly: "4–6 hours",
      retainer: "2 hours",
      fixed: "Dedicated PM",
    },
    {
      feature: "Engineering Access",
      hourly: "Shared pool",
      retainer: "Dedicated pod",
      fixed: "Project team",
    },
    {
      feature: "Time Zone Alignment",
      hourly: "US / UK / EU",
      retainer: "US / UK / EU",
      fixed: "US / UK / EU",
    },
    {
      feature: "Scalability",
      hourly: "Elastic",
      retainer: "Predictable",
      fixed: "Scoped",
    },
    {
      feature: "Billing",
      hourly: "Weekly",
      retainer: "Monthly",
      fixed: "Milestone",
    },
    {
      feature: "Security & Compliance",
      hourly: "Standard",
      retainer: "Enhanced",
      fixed: "Enterprise",
    },
  ];

  const trustSignals = [
    {
      icon: Shield,
      label: "SOC 2 Ready",
      detail: "Enterprise security posture",
    },
    {
      icon: Globe,
      label: "US/UK Timezone",
      detail: "Real-time collaboration",
    },
    {
      icon: Lock,
      label: "NDA Standard",
      detail: "Signed before every call",
    },
    {
      icon: TrendingUp,
      label: "Cost Transparent",
      detail: "No hidden fees ever",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery Call",
      description: "30-min alignment on goals, stack, and constraints",
      duration: "Day 1",
    },
    {
      step: "2",
      title: "Scope & Proposal",
      description: "Detailed SOW with pricing, timeline, and deliverables",
      duration: "Day 2–3",
    },
    {
      step: "3",
      title: "Contract & Onboarding",
      description: "NDA, contract, and access provisioning",
      duration: "Day 4–5",
    },
    {
      step: "4",
      title: "Engineers Deployed",
      description: "Senior engineers begin delivery within 48 hours",
      duration: "Day 6–7",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-pacific-cyan/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sky-blue/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-pacific-cyan/30">
              <Repeat className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                Engagement Frameworks
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Flexible B2B
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Engagement Models
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Built for US and UK tech executives who need senior engineers on
              their terms — hourly, monthly, or project-based.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://wa.me/919004575425"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-heading font-semibold rounded-lg border border-white/20 hover:bg-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-3">
                  <signal.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-heading font-semibold text-white text-sm">
                  {signal.label}
                </p>
                <p className="text-white/50 text-xs mt-1">{signal.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Choose Your <span className="text-pacific-cyan">Model</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Three engagement structures designed for how modern tech
              leadership actually works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pacific-cyan/20 hover:-translate-y-2 flex flex-col"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${model.gradient} mb-6`}
                >
                  <model.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-1">
                  {model.title}
                </h3>
                <p className="text-pacific-cyan text-sm font-medium mb-4">
                  {model.tagline}
                </p>
                <p className="text-white/70 leading-relaxed mb-6 text-sm">
                  {model.description}
                </p>

                <div className="space-y-3 mb-6 flex-grow">
                  {model.bestFor.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Pricing</span>
                    <span className="text-white font-semibold text-sm">
                      {model.pricing}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Commitment</span>
                    <span className="text-white font-semibold text-sm">
                      {model.commitment}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Response</span>
                    <span className="text-white font-semibold text-sm">
                      {model.response}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              At a <span className="text-pacific-cyan">Glance</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Compare key dimensions across all three engagement models.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 pr-4 text-white/50 text-sm font-medium">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-pacific-cyan text-sm font-semibold">
                    Hourly
                  </th>
                  <th className="py-4 px-4 text-sky-blue text-sm font-semibold">
                    Retainer
                  </th>
                  <th className="py-4 px-4 text-pale-azure text-sm font-semibold">
                    Fixed Project
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 pr-4 text-white font-medium text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-white/70 text-sm">
                      {row.hourly}
                    </td>
                    <td className="py-4 px-4 text-white/70 text-sm">
                      {row.retainer}
                    </td>
                    <td className="py-4 px-4 text-white/70 text-sm">
                      {row.fixed}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              How It <span className="text-pacific-cyan">Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From first call to deployed engineers in under a week.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 backdrop-blur-sm border border-pacific-cyan/30 h-full">
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-bold text-sm">
                    {step.duration}
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-white mb-3 mt-4">
                    {step.step}
                  </h3>
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Zap className="w-6 h-6 text-pacific-cyan" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Common Questions from{" "}
              <span className="text-pacific-cyan">CTOs</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Can we switch models mid-engagement?",
                a: "Yes. Many clients start hourly, then transition to a retainer once trust is established.",
              },
              {
                q: "What timezone do your engineers work in?",
                a: "Our teams are aligned to US Eastern and UK GMT hours for real-time collaboration.",
              },
              {
                q: "Is an NDA required before we share details?",
                a: "Absolutely. We sign a mutual NDA before any discovery call or architecture review.",
              },
              {
                q: "How do you bill for fractional hours?",
                a: "Hourly engagements are billed in 15-minute increments with detailed time logs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-pacific-cyan/30 transition-all"
              >
                <h4 className="font-heading font-semibold text-white mb-2 flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-1" />
                  {faq.q}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Engage Senior Engineers?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss which model fits your current roadmap and team
              structure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule a Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/why-choose-us"
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-heading font-semibold rounded-lg border border-white/20 hover:bg-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Why AStechnix
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EngagementModels;
