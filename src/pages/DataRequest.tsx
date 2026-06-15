import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Trash2, AlertCircle, Mail } from "lucide-react";
// import { supabase } from "../lib/supabaseClient";
import { Link } from "react-router-dom";

const DataRequest = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    requestType: "deletion",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      //TODO: re-add this on fixing supabase connection
      // const { error: insertError } = await supabase
      //   .from("data_deletion_requests")
      //   .insert({
      //     email: formData.email,
      //     first_name: formData.firstName,
      //     request_type: formData.requestType,
      //     request_reason: formData.reason,
      //     status: "pending",
      //   });

      // if (insertError) {
      //   throw insertError;
      // }

      setSubmitted(true);
    } catch (err: any) {
      setError(
        err.message || "Failed to submit request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
              Request Received
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Thank you for submitting your data {formData.requestType} request.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="font-heading font-semibold text-xl text-white mb-4">
              What Happens Next
            </h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>We'll verify your request within 3-5 business days</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>A confirmation email will be sent to {formData.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>Your {formData.requestType} request will be processed within 30 days</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex-1 px-6 py-3 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 text-center"
            >
              Return Home
            </Link>
            <Link
              to="/privacy-policy"
              className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium hover:shadow-lg hover:shadow-pacific-cyan/30 transition-all text-center"
            >
              View Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Trash2 className="w-8 h-8 text-pacific-cyan" />
            <h1 className="font-heading font-bold text-5xl text-white">
              Data Request
            </h1>
          </div>
          <p className="text-xl text-white/70">
            Exercise your GDPR rights by requesting access to, correction of, or deletion of your personal data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Your Rights Under GDPR
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p className="flex items-start space-x-3">
                <span className="text-pacific-cyan font-bold">•</span>
                <span><strong>Right to Access:</strong> Request all personal data we hold about you</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-pacific-cyan font-bold">•</span>
                <span><strong>Right to be Forgotten:</strong> Request deletion of all your personal data</span>
              </p>
              <p className="flex items-start space-x-3">
                <span className="text-pacific-cyan font-bold">•</span>
                <span><strong>Right to Rectification:</strong> Update inaccurate information we hold</span>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  First Name *
                </span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Email Address *
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                />
              </label>
              <p className="text-xs text-white/50 mt-2">
                We'll send confirmation to this email
              </p>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Request Type *
                </span>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-pacific-cyan focus:outline-none transition-colors"
                >
                  <option value="deletion">Delete All My Data (Right to be Forgotten)</option>
                  <option value="access">Access My Data</option>
                  <option value="rectification">Correct My Data</option>
                  <option value="export">Export My Data</option>
                </select>
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Reason for Request (Optional)
                </span>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please let us know why you're making this request..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors resize-none"
                />
              </label>
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-red-300 text-sm">{error}</span>
              </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-xs text-white/60">
                By submitting this request, you confirm that you are the person whose data is being requested and that the email provided is current and accurate.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{loading ? "Submitting..." : "Submit Request"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-8 p-6 rounded-lg bg-white/5 border border-white/10">
            <h4 className="font-heading font-semibold text-white mb-3">
              Questions?
            </h4>
            <p className="text-white/70 text-sm mb-4">
              For any questions about our privacy practices, please contact our privacy team:
            </p>
            <a
              href="mailto:privacy@astechnix.com"
              className="inline-flex items-center space-x-2 text-pacific-cyan hover:text-sky-blue font-medium text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>privacy@astechnix.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataRequest;
