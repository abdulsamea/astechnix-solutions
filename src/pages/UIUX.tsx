import { motion } from "framer-motion";
import {
  Palette,
  Users,
  Sparkles,
  Eye,
  Target,
  Heart,
  Layers,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const UIUX = () => {
  const services = [
    {
      icon: Eye,
      title: "User Research",
      description:
        "Deep insights into user behavior, needs, and pain points through data-driven analysis.",
    },
    {
      icon: Sparkles,
      title: "Interface Design",
      description:
        "Pixel-perfect interfaces that balance aesthetics with usability and accessibility.",
    },
    {
      icon: Target,
      title: "Interaction Design",
      description:
        "Intuitive micro-interactions and animations that guide users effortlessly.",
    },
    {
      icon: Users,
      title: "Usability Testing",
      description:
        "Iterative testing with real users to validate design decisions and optimize flows.",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description:
        "Scalable component libraries ensuring consistency across your product ecosystem.",
    },
    {
      icon: Heart,
      title: "Brand Identity",
      description:
        "Cohesive visual language that resonates with your target audience.",
    },
  ];

  const principles = [
    {
      title: "User-Centric Empathy",
      description:
        "Every design decision starts with understanding your users deeply.",
      icon: "🎯",
    },
    {
      title: "Accessibility First",
      description:
        "WCAG 2.1 compliant designs that work for everyone, everywhere.",
      icon: "♿",
    },
    {
      title: "Data-Driven Iteration",
      description:
        "Continuous improvement based on analytics and user feedback.",
      icon: "📊",
    },
    {
      title: "Conversion Optimization",
      description:
        "Strategic design patterns that guide users toward desired actions.",
      icon: "💰",
    },
  ];

  const process = [
    {
      phase: "Discover",
      description: "Research, competitive analysis, and user personas",
      duration: "Week 1-2",
    },
    {
      phase: "Define",
      description: "Information architecture and user flow mapping",
      duration: "Week 2-3",
    },
    {
      phase: "Design",
      description: "Wireframes, prototypes, and high-fidelity mockups",
      duration: "Week 3-5",
    },
    {
      phase: "Deliver",
      description: "Design handoff, component library, and documentation",
      duration: "Week 5-6",
    },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "Principle",
    "Framer",
    "Maze",
    "Hotjar",
    "Optimal Workshop",
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
              <Palette className="w-4 h-4 text-pacific-cyan" />
              <span className="text-pacific-cyan text-sm font-medium">
                UI/UX Design
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Design Experiences
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Users Love
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Craft intuitive, conversion-focused interfaces rooted in
              user-centric empathy and backed by data-driven insights.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Design Project
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
              Our Design <span className="text-pacific-cyan">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              End-to-end design solutions from research to implementation.
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Design <span className="text-pacific-cyan">Principles</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The foundation of every exceptional user experience we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {principle.description}
                </p>
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
              Our Design <span className="text-pacific-cyan">Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A structured approach to creating user-centered design solutions.
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
                    {step.phase}
                  </h3>
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

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Design <span className="text-pacific-cyan">Tools</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Industry-leading tools for prototyping, testing, and
              collaboration.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{tool}</span>
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
                Why Great Design{" "}
                <span className="text-pacific-cyan">Matters</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                First impressions are formed in 50 milliseconds. Your interface
                is often the first interaction users have with your brand. We
                ensure it's memorable for the right reasons.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-4xl font-heading font-bold text-pacific-cyan mb-2">
                    400%
                  </div>
                  <p className="text-white/70 text-sm">
                    ROI increase with better UX design
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-4xl font-heading font-bold text-pacific-cyan mb-2">
                    200%
                  </div>
                  <p className="text-white/70 text-sm">
                    Conversion rate improvement
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-4xl font-heading font-bold text-pacific-cyan mb-2">
                    90%
                  </div>
                  <p className="text-white/70 text-sm">
                    Users judge credibility by design
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
              Ready to Create Exceptional Experiences?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's design an interface that delights users and drives business
              results.
            </p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Begin Your Design Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UIUX;
