import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Send, CheckCircle2 } from "lucide-react";

const DataRequest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    requestType: "access",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <CheckCircle2 className="w-16 h-16 text-pacific-cyan mx-auto mb-6" />
          <h1 className="text-3xl font-heading font-bold text-white mb-4">Request Received</h1>
          <p className="text-white/70">We will process your data request within 30 days as per GDPR requirements.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-pacific-cyan/20 flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-pacific-cyan" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-white">Data Access & Deletion</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Your Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-pacific-cyan focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Request Type</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-deep-navy border border-white/10 text-white focus:border-pacific-cyan focus:outline-none"
                value={formData.requestType}
                onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
              >
                <option value="access">Access My Data</option>
                <option value="delete">Delete My Data (Right to be Forgotten)</option>
                <option value="rectify">Correct My Data</option>
              </select>
            </div>

            <div>
              <label className="block text-white/70 text-sm font-medium mb-2">Additional Details</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-pacific-cyan focus:outline-none resize-none"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default DataRequest;
