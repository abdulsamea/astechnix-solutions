import { motion } from "framer-motion";
import { FileText, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-pacific-cyan" />
            <h1 className="font-heading font-bold text-5xl text-white">
              Terms of Service
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
            <div className="flex items-start space-x-4">
              <AlertCircle className="w-6 h-6 text-sky-blue flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-bold text-2xl text-white mb-2">
                  Please Read Carefully
                </h2>
                <p className="text-white/80">
                  These Terms of Service govern your use of the AStechnix website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                1. Use License
              </h3>
              <p className="text-white/80 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on AStechnix website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                2. Disclaimer
              </h3>
              <p className="text-white/80 leading-relaxed">
                The materials on AStechnix website are provided on an "as is" basis. AStechnix makes no warranties, expressed or implied.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                3. Limitations
              </h3>
              <p className="text-white/80 leading-relaxed">
                In no event shall AStechnix be liable for any damages arising out of the use or inability to use the materials on the website.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                4. Modifications
              </h3>
              <p className="text-white/80 leading-relaxed">
                AStechnix may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then current version.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                5. Governing Law
              </h3>
              <p className="text-white/80 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with applicable law.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/privacy-policy"
            className="px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 text-center"
          >
            Privacy Policy
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

export default TermsOfService;
