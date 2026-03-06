import { motion } from "framer-motion";
import { FileText, ShieldAlert, Scale } from "lucide-react";

const TermsOfService = () => {
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
              <FileText className="w-6 h-6 text-pacific-cyan" />
            </div>
            <h1 className="text-4xl font-heading font-bold text-white">Terms of Service</h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing AStechnix, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on AStechnix's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-white mb-4">3. Disclaimer</h2>
              <p>The materials on AStechnix's website are provided on an 'as is' basis. AStechnix makes no warranties, expressed or implied.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
