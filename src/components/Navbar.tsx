import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cloud Services", path: "/cloud-services" },
    { name: "Full Stack", path: "/full-stack" },
    { name: "DevOps", path: "/devops" },
    { name: "UI/UX", path: "/ui-ux" },
    { name: "Contact", path: "/contact" },
    { name: "Cloud Consultation", path: "/cloud-consultation" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-navy/90 backdrop-blur-xl shadow-lg border-b border-pacific-cyan/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Code2 className="w-8 h-8 text-pacific-cyan transition-all duration-300 group-hover:text-sky-blue" />
              <div className="absolute inset-0 bg-pacific-cyan/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-heading font-bold text-2xl text-white">
              AS<span className="text-pacific-cyan">technix</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-pacific-cyan"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pacific-cyan to-sky-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
              className="relative px-6 py-2.5 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium rounded-lg overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-blue to-pacific-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-deep-navy/95 backdrop-blur-xl border-t border-pacific-cyan/20"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-pacific-cyan/20 text-pacific-cyan"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/contact"
                className="block px-4 py-3 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium rounded-lg text-center"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
