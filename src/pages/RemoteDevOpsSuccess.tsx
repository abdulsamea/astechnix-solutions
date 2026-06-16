import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const RemoteDevOpsSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-white/50">
              <li>
                <Link
                  to="/"
                  className="hover:text-pacific-cyan transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li>
                <Link
                  to="/devops"
                  className="hover:text-pacific-cyan transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li>
                <Link
                  to="/services/devops-consultation"
                  className="hover:text-pacific-cyan transition-colors"
                >
                  DevOps Consultation
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-pacific-cyan">Submitted</li>
            </ol>
          </nav>

          {/* Success Card */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 mb-8 shadow-lg shadow-emerald-500/30"
            >
              <CheckCircle2 className="w-10 h-10 text-white" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6"
            >
              Awesome! We've received your details
            </motion.h1>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-8"
            >
              We're already looking over your setup. You can expect a
              personalized response from one of our DevOps engineers within the
              next few business hours.
            </motion.p>

            {/* Quick-contact strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="rounded-xl bg-white/5 border border-white/10 p-6 max-w-md mx-auto mb-8"
            >
              <p className="text-white/60 text-sm mb-4">
                In a rush or want to skip the wait?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/919004575425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/25 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  +91 90045 75425
                </a>
                <a
                  href="mailto:contact@astechnix.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-pacific-cyan/15 border border-pacific-cyan/30 text-pacific-cyan text-sm font-medium hover:bg-pacific-cyan/25 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@astechnix.com
                </a>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="text-white/50 text-sm"
            >
              Let's get things moving!
            </motion.p>

            {/* Submit another request */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <Link
                to="/services/devops-consultation"
                className="inline-flex items-center gap-2 text-white/50 hover:text-pacific-cyan text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Submit another request
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default RemoteDevOpsSuccess;
