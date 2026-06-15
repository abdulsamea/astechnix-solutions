import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const CloudServices = () => {
  const providers = [
    {
      name: "Amazon Web Services",
      icon: "🟠",
      description:
        "Industry-leading cloud infrastructure with unmatched service breadth.",
      services: [
        {
          name: "Lambda",
          description: "Serverless compute for event-driven applications",
        },
        {
          name: "S3",
          description: "Scalable object storage with 99.999999999% durability",
        },
        {
          name: "EC2",
          description:
            "Flexible virtual servers with auto-scaling capabilities",
        },
        {
          name: "RDS",
          description: "Managed relational databases with automated backups",
        },
        {
          name: "CloudFront",
          description: "Global CDN for low-latency content delivery",
        },
        {
          name: "EKS",
          description: "Managed Kubernetes for container orchestration",
        },
      ],
    },
    {
      name: "Microsoft Azure",
      icon: "🔵",
      description:
        "Enterprise-grade cloud platform with seamless Microsoft integration.",
      services: [
        {
          name: "Functions",
          description: "Serverless compute with multi-language support",
        },
        {
          name: "Blob Storage",
          description: "Massively scalable object storage solution",
        },
        {
          name: "Azure DevOps",
          description: "Complete CI/CD pipeline automation platform",
        },
        {
          name: "Cosmos DB",
          description: "Globally distributed multi-model database",
        },
        {
          name: "AKS",
          description: "Managed Kubernetes with integrated monitoring",
        },
        {
          name: "App Service",
          description: "Fully managed platform for web applications",
        },
      ],
    },
    {
      name: "Google Cloud Platform",
      icon: "🔴",
      description:
        "Advanced analytics and ML capabilities with Google-scale infrastructure.",
      services: [
        {
          name: "Cloud Functions",
          description: "Event-driven serverless functions",
        },
        {
          name: "Cloud Storage",
          description: "Unified object storage for any data type",
        },
        {
          name: "App Engine",
          description: "Fully managed serverless application platform",
        },
        {
          name: "BigQuery",
          description: "Serverless data warehouse for analytics at scale",
        },
        {
          name: "GKE",
          description: "Automated Kubernetes with Google SRE expertise",
        },
        { name: "Cloud Run", description: "Fully managed container platform" },
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Optimized architectures delivering sub-second response times globally.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Multi-layered security with encryption, IAM, and compliance certifications.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description:
        "Deploy across multiple regions with automatic failover and load balancing.",
    },
    {
      icon: Server,
      title: "Cost Optimization",
      description:
        "Right-sized infrastructure with reserved instances and spot pricing strategies.",
    },
  ];

  const features = [
    "Infrastructure as Code (Terraform, CloudFormation)",
    "Multi-cloud and hybrid cloud strategies",
    "Automated backup and disaster recovery",
    "Real-time monitoring and alerting",
    "Auto-scaling and load balancing",
    "24/7 managed services and support",
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
              <Cloud className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                Cloud Infrastructure
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Cloud-Native
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Architecture Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Build resilient, scalable infrastructure on AWS, Azure, and GCP
              with enterprise-grade security and performance optimization.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discuss Your Cloud Strategy
            </Link>
          </motion.div>
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
              Why Choose <span className="text-pacific-cyan">Cloud-Native</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Leverage the power of modern cloud platforms to accelerate
              innovation and reduce operational overhead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

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
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl">{provider.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-3xl text-white">
                      {provider.name}
                    </h3>
                    <p className="text-white/70 mt-2">{provider.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {provider.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
                    >
                      <h4 className="font-heading font-semibold text-lg text-white mb-2">
                        {service.name}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {service.description}
                      </p>
                    </div>
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
              Our Cloud <span className="text-pacific-cyan">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <Check className="w-6 h-6 text-pacific-cyan flex-shrink-0" />
                <span className="text-white font-medium">{feature}</span>
              </motion.div>
            ))}
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
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's architect a cloud solution that scales with your business
              and optimizes your infrastructure costs.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Cloud Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;
