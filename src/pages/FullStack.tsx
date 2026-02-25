import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Monitor,
  Layers,
  Package,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const FullStack = () => {
  const platforms = [
    {
      icon: Monitor,
      title: "Web Applications",
      description:
        "Modern, responsive web experiences built for performance and scalability.",
      technologies: [
        {
          name: "React",
          category: "Frontend",
          color: "from-sky-blue to-pale-azure",
        },
        {
          name: "Next.js",
          category: "Framework",
          color: "from-pacific-cyan to-sky-blue",
        },
        {
          name: "Vue.js",
          category: "Frontend",
          color: "from-blue-green to-pacific-cyan",
        },
        {
          name: "TypeScript",
          category: "Language",
          color: "from-star-blue to-blue-green",
        },
        {
          name: "Node.js",
          category: "Backend",
          color: "from-pacific-cyan to-sky-blue",
        },
        {
          name: "Express",
          category: "Backend",
          color: "from-sky-blue to-pale-azure",
        },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Cross-platform and native mobile apps for iOS and Android.",
      technologies: [
        {
          name: "React Native",
          category: "Cross-Platform",
          color: "from-sky-blue to-pale-azure",
        },
        {
          name: "Flutter",
          category: "Cross-Platform",
          color: "from-pacific-cyan to-sky-blue",
        },
        {
          name: "Swift",
          category: "iOS Native",
          color: "from-blue-green to-pacific-cyan",
        },
        {
          name: "Kotlin",
          category: "Android Native",
          color: "from-star-blue to-blue-green",
        },
        {
          name: "Expo",
          category: "Framework",
          color: "from-pacific-cyan to-sky-blue",
        },
        {
          name: "Firebase",
          category: "Backend",
          color: "from-sky-blue to-pale-azure",
        },
      ],
    },
    {
      icon: Package,
      title: "Desktop Applications",
      description:
        "High-performance desktop applications for Windows, macOS, and Linux.",
      technologies: [
        {
          name: "Electron",
          category: "Cross-Platform",
          color: "from-sky-blue to-pale-azure",
        },
        {
          name: "Tauri",
          category: "Cross-Platform",
          color: "from-pacific-cyan to-sky-blue",
        },
        {
          name: ".NET",
          category: "Framework",
          color: "from-blue-green to-pacific-cyan",
        },
        {
          name: "Qt",
          category: "Framework",
          color: "from-star-blue to-blue-green",
        },
      ],
    },
  ];

  const backends = [
    {
      name: "Node.js",
      description:
        "Event-driven JavaScript runtime for scalable network applications",
      icon: "🟢",
    },
    {
      name: "Python",
      description:
        "Versatile language for APIs, ML, and data-intensive applications",
      icon: "🐍",
    },
    {
      name: "Go",
      description: "High-performance concurrent systems for microservices",
      icon: "🔷",
    },
    {
      name: "Rust",
      description: "Memory-safe systems programming for maximum performance",
      icon: "🦀",
    },
    {
      name: "Java/Kotlin",
      description: "Enterprise-grade applications with robust ecosystem",
      icon: "☕",
    },
    {
      name: ".NET",
      description: "Cross-platform framework for modern cloud applications",
      icon: "💜",
    },
  ];

  const databases = [
    { name: "PostgreSQL", type: "Relational" },
    { name: "MySQL", type: "Relational" },
    { name: "MongoDB", type: "NoSQL" },
    { name: "Redis", type: "Cache" },
    { name: "Elasticsearch", type: "Search" },
    { name: "DynamoDB", type: "NoSQL" },
  ];

  const features = [
    "RESTful & GraphQL API design",
    "Real-time capabilities with WebSockets",
    "Microservices architecture",
    "Authentication & authorization",
    "Payment gateway integration",
    "Third-party API integrations",
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
              <Code className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                Full Stack Development
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Modern Applications
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Built for Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              From web to mobile to desktop, we craft production-ready
              applications with modern frameworks and industry best practices.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Building Your Application
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
              Platform <span className="text-pacific-cyan">Expertise</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We build applications that work seamlessly across all platforms
              and devices.
            </p>
          </motion.div>

          <div className="space-y-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-8">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue mb-4 md:mb-0">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-3xl text-white mb-2">
                      {platform.title}
                    </h3>
                    <p className="text-white/70">{platform.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {platform.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300 text-center"
                    >
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}
                      >
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-heading font-semibold text-white mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-white/50 text-xs">{tech.category}</p>
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
              Backend <span className="text-pacific-cyan">Powerhouse</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              High-performance backends engineered with the right tool for the
              right job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backends.map((backend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{backend.icon}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {backend.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {backend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                Database <span className="text-pacific-cyan">Architecture</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Strategic data modeling and optimization for performance at
                scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {databases.map((db, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
                  >
                    <h4 className="font-heading font-semibold text-white mb-1">
                      {db.name}
                    </h4>
                    <p className="text-white/50 text-sm">{db.type}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                Core <span className="text-pacific-cyan">Capabilities</span>
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Comprehensive features that power modern applications.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Rocket className="w-5 h-5 text-pacific-cyan flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's transform your idea into a production-ready application with
              modern tech stack.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FullStack;
