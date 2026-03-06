import { motion } from "framer-motion";
import { Shield, Lock, Eye, Trash2 } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-pacific-cyan/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-pacific-cyan" />
            </div>
            <h1 className="text-4xl font-heading font-bold text-white">Privacy Policy</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">1. Introduction</h2>
              <p>Welcome to AStechnix. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">2. Data We Collect</h2>
              <p>We collect information you provide directly to us via our contact forms and lead generation tools, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Business details and project requirements</li>
                <li>Email address and phone number</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Cookie Usage</h2>
              <p>We use cookies to analyze website traffic and optimize your experience. We also use third-party tracking (like Facebook Pixel) for marketing purposes, but only with your explicit consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">4. Your Rights (GDPR)</h2>
              <p>Under GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to access your data</li>
                <li>Right to rectification</li>
                <li>Right to erasure ("Right to be Forgotten")</li>
                <li>Right to data portability</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
