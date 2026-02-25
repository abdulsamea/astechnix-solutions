import { motion } from "framer-motion";
import {
  GitBranch,
  Rocket,
  Container,
  Gauge,
  Shield,
  Repeat,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const DevOps = () => {
  const services = [
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description:
        "Automated build, test, and deployment workflows for rapid iteration.",
      features: [
        "GitHub Actions",
        "GitLab CI",
        "Jenkins",
        "CircleCI",
        "Azure DevOps",
      ],
    },
    {
      icon: Container,
      title: "Containerization",
      description: "Consistent environments from development to production.",
      features: [
        "Docker",
        "Kubernetes",
        "Docker Compose",
        "Helm Charts",
        "Container Registry",
      ],
    },
    {
      icon: Gauge,
      title: "Monitoring & Observability",
      description:
        "Real-time insights into system health and performance metrics.",
      features: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic"],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security scanning and compliance enforcement.",
      features: [
        "SAST/DAST",
        "Dependency Scanning",
        "Secret Management",
        "Policy as Code",
      ],
    },
    {
      icon: Repeat,
      title: "Infrastructure as Code",
      description:
        "Version-controlled, reproducible infrastructure provisioning.",
      features: ["Terraform", "CloudFormation", "Ansible", "Pulumi", "CDK"],
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous performance tuning and resource optimization.",
      features: [
        "Auto-scaling",
        "Load Balancing",
        "Caching Strategies",
        "CDN Integration",
      ],
    },
  ];

  const benefits = [
    {
      metric: "10x",
      label: "Faster Deployments",
      description: "Ship features from commit to production in minutes",
    },
    {
      metric: "99.9%",
      label: "Uptime SLA",
      description: "Automated failover and self-healing infrastructure",
    },
    {
      metric: "80%",
      label: "Cost Reduction",
      description: "Optimized resource utilization and auto-scaling",
    },
    {
      metric: "24/7",
      label: "Automated Monitoring",
      description: "Proactive issue detection and alerting",
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Code Commit",
      description: "Developers push code to repository",
    },
    {
      step: "2",
      title: "Automated Testing",
      description: "Unit, integration, and E2E tests run",
    },
    {
      step: "3",
      title: "Security Scanning",
      description: "Vulnerability and compliance checks",
    },
    {
      step: "4",
      title: "Build & Package",
      description: "Container images built and tagged",
    },
    {
      step: "5",
      title: "Deploy",
      description: "Automated deployment to staging/production",
    },
    {
      step: "6",
      title: "Monitor",
      description: "Real-time metrics and alerting",
    },
  ];

  return (
    <div className="overflow-hidden">
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
              <Rocket className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                DevOps Excellence
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Accelerate Your
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Speed-to-Market
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your deployment pipeline with automated workflows,
              containerization, and continuous delivery for maximum velocity.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Optimize Your Pipeline
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue mb-4">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="font-heading font-bold text-5xl text-white mb-2">
                  {benefit.metric}
                </div>
                <div className="font-heading font-semibold text-xl text-pacific-cyan mb-2">
                  {benefit.label}
                </div>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              DevOps <span className="text-pacific-cyan">Capabilities</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive solutions to streamline your development and
              operations workflows.
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
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Deployment <span className="text-pacific-cyan">Workflow</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From code commit to production deployment in minutes with
              automated quality gates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue flex items-center justify-center font-heading font-bold text-xl text-white shadow-lg shadow-pacific-cyan/30">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2 mt-4">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 backdrop-blur-sm border border-pacific-cyan/30">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                Why DevOps <span className="text-pacific-cyan">Matters</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                In today's fast-paced market, the ability to iterate quickly
                while maintaining quality is crucial. Our DevOps solutions
                enable your team to deliver features faster, reduce deployment
                risks, and respond to market demands with agility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">
                    Reduced Lead Time
                  </h4>
                  <p className="text-white/70 text-sm">
                    From idea to production in hours, not weeks
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">
                    Higher Quality
                  </h4>
                  <p className="text-white/70 text-sm">
                    Automated testing catches issues early
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <h4 className="font-heading font-semibold text-lg text-white mb-2">
                    Better Collaboration
                  </h4>
                  <p className="text-white/70 text-sm">
                    Dev and ops teams working seamlessly together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Accelerate Your Deployments?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's build a DevOps pipeline that delivers speed, reliability,
              and scalability.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Transform Your Pipeline
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;
