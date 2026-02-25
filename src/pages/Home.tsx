import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cloud, Code, Layers, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable AWS, Azure, and GCP architectures engineered for high-availability.',
      link: '/cloud-services',
      gradient: 'from-pacific-cyan to-sky-blue',
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Modern web, mobile, and desktop applications built with cutting-edge frameworks.',
      link: '/full-stack',
      gradient: 'from-sky-blue to-pale-azure',
    },
    {
      icon: Layers,
      title: 'DevOps Solutions',
      description: 'CI/CD pipelines, containerization, and infrastructure automation for velocity.',
      link: '/devops',
      gradient: 'from-blue-green to-pacific-cyan',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centric interfaces crafted for intuitive experiences and conversion.',
      link: '/ui-ux',
      gradient: 'from-star-blue to-blue-green',
    },
  ];

  const partners = [
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'React', 'Node.js', 'TypeScript'
  ];

  const benefits = [
    'Scalable architecture from day one',
    'Security-first implementation',
    'Real-time performance monitoring',
    'Comprehensive documentation',
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-pacific-cyan/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sky-blue/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-pacific-cyan/30">
              <span className="text-pacific-cyan text-sm font-medium">
                Trusted by Forward-Thinking Enterprises
              </span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              We Engineer
              <br />
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                Scalable Digital
              </span>
              <br />
              Ecosystems
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your vision into production-grade solutions with modern architectures,
              seamless integrations, and enterprise-level security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg flex items-center space-x-2 hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-heading font-semibold rounded-lg border border-white/20 hover:bg-white/10 hover:border-pacific-cyan/50 transition-all duration-300"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-white/80 text-sm justify-center"
              >
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0" />
                <span className="text-left">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/50 text-sm font-medium mb-8">
            POWERED BY INDUSTRY-LEADING TECHNOLOGIES
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-16">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-2xl font-heading font-bold text-white/30 hover:text-pacific-cyan transition-colors duration-300"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Our Core <span className="text-pacific-cyan">Services</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              End-to-end solutions designed for performance, scalability, and maintainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="group block h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pacific-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pacific-cyan/20 hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-pacific-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex items-center text-pacific-cyan font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Transform Your Vision?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can architect a solution tailored to your business objectives.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
