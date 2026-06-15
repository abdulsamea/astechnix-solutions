import { motion } from "framer-motion";
import { Shield, Check, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-pacific-cyan" />
            <h1 className="font-heading font-bold text-5xl text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-white/70">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">
              Overview
            </h2>
            <p className="text-white/80 leading-relaxed">
              AStechnix ("Company," "we," "us," or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                1. Information Collection and Use
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-lg text-pacific-cyan">
                  Types of Data Collected:
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Personal Information:</strong> Name, email address, phone number, company name</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Cookies:</strong> Session identifiers, consent preferences, analytics tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                2. Use of Data
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                AStechnix uses the collected data for various purposes including providing and maintaining our Service, notifying you about changes, and gathering analysis for improvement.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                3. Cookies and Tracking
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                We use a Cookie Consent Banner to obtain explicit consent before tracking your activity. Analytics and marketing cookies are only enabled with your consent.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                4. Your Rights
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Under GDPR, you have the right to access, rectify, or delete your personal data. You can exercise these rights through our Data Request form.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                5. Contact Us
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pacific-cyan" />
                  <a
                    href="mailto:privacy@astechnix.com"
                    className="text-pacific-cyan hover:text-sky-blue font-medium"
                  >
                    privacy@astechnix.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/terms-of-service"
            className="px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 text-center"
          >
            Terms of Service
          </Link>
          <Link
            to="/data-request"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium hover:shadow-lg hover:shadow-pacific-cyan/30 transition-all text-center"
          >
            Request Data Deletion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
