import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Shield,
  Zap,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  Server,
  Lock,
  Eye,
  FileText,
  MessageCircle,
  TrendingUp,
  Code,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Users,
      title: "Senior-Level Talent Only",
      description:
        "Every engineer we deploy has 8+ years of production experience. No juniors, no trainees. You work directly with architects who have built systems at scale.",
      highlights: [
        "8+ years average experience",
        "Cloud-certified architects",
        "Kubernetes & DevOps specialists",
        "Full-stack generalists when needed",
      ],
      gradient: "from-pacific-cyan to-sky-blue",
    },
    {
      icon: Globe,
      title: "US & UK Timezone Aligned",
      description:
        "Our engineers work in US Eastern and UK GMT hours. Daily standups, Slack threads, and escalations happen in real time — no 12-hour delay cycles.",
      highlights: [
        "US Eastern (EST/EDT) overlap",
        "UK GMT/BST overlap",
        "Daily standup participation",
        "Slack/Teams real-time availability",
      ],
      gradient: "from-sky-blue to-pale-azure",
    },
    {
      icon: Shield,
      title: "Compliance & Security First",
      description:
        "We treat your infrastructure as our own. SOC 2-aligned processes, encrypted communication, and strict access controls are standard on every engagement.",
      highlights: [
        "SOC 2 Type II aligned",
        "End-to-end encrypted communication",
        "MFA + least-privilege access",
        "Regular security audits",
      ],
      gradient: "from-blue-green to-pacific-cyan",
    },
    {
      icon: Eye,
      title: "Data Minimization Standards",
      description:
        "We collect only what is operationally necessary. No marketing tracking, no data resale, no third-party sharing. Your data stays in your control.",
      highlights: [
        "No unnecessary data collection",
        "GDPR-compliant handling",
        "Zero third-party data sharing",
        "Right to deletion on request",
      ],
      gradient: "from-star-blue to-blue-green",
    },
  ];

  const stats = [
    {
      metric: "12+",
      label: "Years Average Experience",
      icon: Code,
    },
    {
      metric: "100%",
      label: "Senior Engineers",
      icon: Users,
    },
    {
      metric: "8hr",
      label: "US Timezone Overlap",
      icon: Clock,
    },
    {
      metric: "48hr",
      label: "Onboarding to Delivery",
      icon: Zap,
    },
  ];

  const certifications = [
    "AWS Solutions Architect Professional",
    "Azure Solutions Architect Expert",
    "Google Cloud Professional Architect",
    "Certified Kubernetes Administrator (CKA)",
    "Certified Kubernetes Application Developer (CKAD)",
    "Terraform Associate",
    "AWS Security Specialty",
    "Azure Security Engineer",
  ];

  const trustDetails = [
    {
      icon: Lock,
      title: "NDA Before Every Call",
      description:
        "We sign a mutual NDA before any discovery discussion. Your intellectual property and architecture details are protected from the first interaction.",
    },
    {
      icon: FileText,
      title: "Clear Contracts & SOWs",
      description:
        "Every engagement begins with a detailed Statement of Work. Milestones, deliverables, and exit clauses are documented upfront.",
    },
    {
      icon: Server,
      title: "Infrastructure Transparency",
      description:
        "All changes are tracked via IaC, version control, and audit logs. You retain full visibility into what we build and how we access it.",
    },
    {
      icon: TrendingUp,
      title: "Performance Accountability",
      description:
        "We commit to measurable outcomes. Uptime SLAs, cost-reduction targets, and deployment velocity are tracked and reported monthly.",
    },
  ];

  const clientTypes = [
    {
      role: "CTOs",
      need: "Need a reliable architecture partner without the overhead of full-time hires.",
    },
    {
      role: "VP Engineering",
      need: "Need to scale teams fast without sacrificing code quality or security posture.",
    },
    {
      role: "Engineering Managers",
      need: "Need DevOps and cloud specialists who can own infrastructure without hand-holding.",
    },
    {
      role: "Startup Founders",
      need: "Need enterprise-grade infrastructure from day one without enterprise-grade burn rate.",
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
              <Award className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                Why AStechnix
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Engineering Excellence
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Built on Trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Senior talent. US/UK timezone alignment. Compliance-first security.
              We are the remote engineering partner tech executives rely on.
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

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-3">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="font-heading font-bold text-4xl text-white mb-1">
                  {stat.metric}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              The Four <span className="text-pacific-cyan">Pillars</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              What makes AStechnix different from typical offshore dev shops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pacific-cyan/20 hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6`}
                >
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6 text-sm">
                  {pillar.description}
                </p>
                <div className="space-y-2">
                  {pillar.highlights.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Certified <span className="text-pacific-cyan">Expertise</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our engineers hold top-tier cloud and DevOps certifications.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <Cpu className="w-4 h-4 text-pacific-cyan flex-shrink-0" />
                <span className="text-white font-medium text-sm">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Details */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Trust & <span className="text-pacific-cyan">Governance</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We operate with the transparency and discipline that enterprise
              leadership expects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-4">
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {detail.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {detail.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Who We <span className="text-pacific-cyan">Serve</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We are built for leaders who need senior talent without the overhead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300 text-center"
              >
                <div className="font-heading font-bold text-xl text-white mb-3">
                  {client.role}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {client.need}
                </p>
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
              Partner with Engineers Who Get It
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss how senior-level, timezone-aligned, and
              compliance-first engineering can accelerate your roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start the Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/engagement-models"
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-heading font-semibold rounded-lg border border-white/20 hover:bg-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Engagement Models
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
