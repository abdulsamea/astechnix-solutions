import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingDown,
  BarChart3,
  Search,
  Zap,
  ArrowRight,
  CheckCircle2,
  Shield,
  Activity,
  Wallet,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const CostOptimization = () => {
  const providers = [
    {
      name: "AWS",
      icon: "🟠",
      savings: "Up to 40%",
      focus: [
        "Reserved Instance & Savings Plans analysis",
        "Idle EC2 & RDS right-sizing",
        "S3 storage tier optimization",
        "Lambda concurrency & memory tuning",
      ],
    },
    {
      name: "Azure",
      icon: "🔵",
      savings: "Up to 35%",
      focus: [
        "Reserved VM Instances & Hybrid Benefits",
        "App Service plan consolidation",
        "Storage account tier optimization",
        "Virtual Network gateway right-sizing",
      ],
    },
    {
      name: "GCP",
      icon: "🔴",
      savings: "Up to 45%",
      focus: [
        "Committed Use Discounts (CUDs)",
        "Preemptible VM integration",
        "BigQuery slot & storage optimization",
        "Cloud SQL instance right-sizing",
      ],
    },
  ];

  const services = [
    {
      icon: Search,
      title: "Spend Audit",
      description:
        "Deep analysis of your cloud billing data to identify hidden waste, orphaned resources, and underutilized services.",
    },
    {
      icon: BarChart3,
      title: "FinOps Reporting",
      description:
        "Executive-grade dashboards showing cost per team, per environment, and per service with actionable breakdowns.",
    },
    {
      icon: TrendingDown,
      title: "Waste Elimination",
      description:
        "Systematic removal of unused resources, stale snapshots, detached volumes, and over-provisioned instances.",
    },
    {
      icon: Wallet,
      title: "Commitment Optimization",
      description:
        "Model and purchase the right Reserved Instances, Savings Plans, or CUDs for your workload patterns.",
    },
    {
      icon: Activity,
      title: "Real-Time Alerts",
      description:
        "Anomaly detection and budget threshold alerts pushed to Slack, email, or your existing alerting stack.",
    },
    {
      icon: Shield,
      title: "Governance & Tagging",
      description:
        "Implement cost-allocation tagging, budget policies, and IaC-level controls to prevent future drift.",
    },
  ];

  const results = [
    {
      metric: "$2.4M",
      label: "Annual Savings Delivered",
      description: "Across 40+ enterprise cloud accounts",
    },
    {
      metric: "38%",
      label: "Average Cost Reduction",
      description: "Within 90 days of engagement",
    },
    {
      metric: "72h",
      label: "Audit Turnaround",
      description: "From data access to executive report",
    },
    {
      metric: "99.7%",
      label: "Accuracy Rate",
      description: "Forecasted vs. actual savings",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Access & Discovery",
      description: "Read-only billing and resource access granted",
      duration: "Day 1",
    },
    {
      step: "2",
      title: "Audit & Analysis",
      description: "Automated scan + manual review of all spend",
      duration: "Day 2–3",
    },
    {
      step: "3",
      title: "Executive Report",
      description: "Prioritized recommendations with ROI estimates",
      duration: "Day 4",
    },
    {
      step: "4",
      title: "Implementation",
      description: "Engineers execute changes with zero downtime",
      duration: "Week 2–4",
    },
  ];

  const redFlags = [
    "EC2 instances running 24/7 with < 10% CPU utilization",
    "Unattached EBS volumes and stale snapshots accumulating",
    "Over-provisioned RDS instances with no load testing",
    "Missing Reserved Instances or CUDs on predictable workloads",
    "S3 buckets in Standard storage with infrequent access patterns",
    "No cost tagging strategy — spend is a black box",
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
              <DollarSign className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                FinOps & Cloud Economics
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Cut Cloud Costs
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Without Cutting Corners
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              FinOps-led audits, waste elimination, and commitment optimization
              across AWS, Azure, and GCP — delivering measurable savings within
              weeks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Request a Free Spend Audit
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

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-bold text-4xl md:text-5xl text-pacific-cyan mb-2">
                  {result.metric}
                </div>
                <div className="font-heading font-semibold text-white text-sm mb-1">
                  {result.label}
                </div>
                <div className="text-white/50 text-xs">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              FinOps <span className="text-pacific-cyan">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              End-to-end cost management for engineering teams who treat cloud
              spend as a first-class metric.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300 group"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Focus */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Platform-Specific{" "}
              <span className="text-pacific-cyan">Optimization</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Deep expertise in each major cloud provider's pricing models and
              savings mechanisms.
            </p>
          </motion.div>

          <div className="space-y-12">
            {providers.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{provider.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {provider.name}
                      </h3>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-bold text-sm">
                    {provider.savings} savings
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {provider.focus.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Common <span className="text-pacific-cyan">Red Flags</span> We Fix
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              If any of these sound familiar, you are likely overpaying by
              30–50%.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {redFlags.map((flag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/50 transition-all"
              >
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{flag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Our <span className="text-pacific-cyan">Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From billing access to measurable savings in under 30 days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
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
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Zap className="w-6 h-6 text-pacific-cyan" />
                  </div>
                )}
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
              Stop Overpaying for Cloud
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's run a free audit on your current cloud spend and show you
              exactly where the waste is.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                Book a Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/engagement-models"
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-heading font-semibold rounded-lg border border-white/20 hover:bg-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing Models
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CostOptimization;
