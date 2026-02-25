import { Link } from "react-router-dom";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

const serviceMap = {
  "Cloud Services": "cloud-services",
  "Full Stack Development": "full-stack",
  "DevOps Solutions": "devops",
  "UI/UX Design": "ui-ux",
};

const Footer = () => {
  return (
    <footer className="bg-deep-navy border-t border-royal-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Code2 className="w-8 h-8 text-pacific-cyan" />
              <span className="font-heading font-bold text-xl text-white">
                AS<span className="text-pacific-cyan">technix</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Engineering scalable digital ecosystems for forward-thinking
              enterprises.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/astechnix/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-pacific-cyan/20 flex items-center justify-center text-white/70 hover:text-pacific-cyan transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-pacific-cyan/20 flex items-center justify-center text-white/70 hover:text-pacific-cyan transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a> */}
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-pacific-cyan/20 flex items-center justify-center text-white/70 hover:text-pacific-cyan transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Cloud Services",
                "Full Stack Development",
                "DevOps Solutions",
                "UI/UX Design",
              ].map((service) => (
                <li key={service as keyof typeof serviceMap}>
                  <Link
                    to={`/${serviceMap[service]}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-white/70 hover:text-pacific-cyan text-sm transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {["About Us", "Our Work", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-pacific-cyan text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>contact@astechnixsolutions.com</span>
              </li>
              <li className="flex items-start space-x-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>+91 90045 75425</span>
              </li>
              <li className="flex items-start space-x-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-blue/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} AStechnix. All rights reserved.
            </p>
            <div className="flex space-x-6"></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-pacific-cyan/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
