import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  Cpu,
  Lock,
  RefreshCw,
  DollarSign,
  Clock,
} from "lucide-react";

const CloudConsultation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    cloudProvider: "",
    serviceExpertise: [] as string[],
    budgetRange: "",
    projectType: "",
    urgency: "",
    fullName: "",
    businessEmail: "",
    phoneNumber: "",
    companyName: "",
    projectBrief: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;

  const cloudProviders = [
    { name: "AWS", icon: "🟠", description: "Amazon Web Services" },
    { name: "Azure", icon: "🔵", description: "Microsoft Azure" },
    { name: "GCP", icon: "🔴", description: "Google Cloud Platform" },
    { name: "Multi-Cloud", icon: "🌐", description: "Multiple Providers" },
    { name: "Others", icon: "❓", description: "Other Solutions" },
  ];

  const serviceExpertiseOptions = [
    { name: "Cloud Architecture", icon: Cloud },
    { name: "Security & Compliance", icon: Shield },
    { name: "Scalability", icon: TrendingUp },
    { name: "DevOps Automation", icon: Cpu },
    { name: "Cloud Migration", icon: RefreshCw },
    { name: "Cost Optimization", icon: DollarSign },
    { name: "Managed Services", icon: Lock },
  ];

  const budgetRanges = ["<$5k", "$5k–$20k", "$20k–$50k", "$50k+"];
  const projectTypes = ["Hourly-based", "Fixed-price"];
  const urgencies = ["Within this week", "Within a month", "Flexible/Exploring"];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleServiceExpertise = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceExpertise: prev.serviceExpertise.includes(service)
        ? prev.serviceExpertise.filter((s) => s !== service)
        : [...prev.serviceExpertise, service],
    }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.cloudProvider.length > 0;
      case 2:
        return formData.serviceExpertise.length > 0;
      case 3:
        return (
          formData.budgetRange.length > 0 &&
          formData.projectType.length > 0 &&
          formData.urgency.length > 0
        );
      case 4:
        return (
          formData.fullName.trim().length > 0 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail) &&
          formData.phoneNumber.trim().length > 0 &&
          formData.companyName.trim().length > 0 &&
          formData.projectBrief.trim().length > 0
        );
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: formData.fullName,
          email: formData.businessEmail,
          phone: formData.phoneNumber,
          company: formData.companyName,
          cloudProvider: formData.cloudProvider,
          serviceExpertise: formData.serviceExpertise.join(", "),
          budgetRange: formData.budgetRange,
          projectType: formData.projectType,
          urgency: formData.urgency,
          projectBrief: formData.projectBrief,
          serviceType: "Cloud Consultation",
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      setSubmitted(true);
    } catch (error) {
      console.error("Email failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-white/70 text-sm font-medium mb-6">
              Which cloud provider are you primarily working with?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cloudProviders.map((provider) => (
                <button
                  key={provider.name}
                  onClick={() =>
                    handleInputChange("cloudProvider", provider.name)
                  }
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    formData.cloudProvider === provider.name
                      ? "border-pacific-cyan bg-pacific-cyan/20 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                  }`}
                >
                  <div className="text-3xl mb-2">{provider.icon}</div>
                  <div className="font-heading font-semibold">
                    {provider.name}
                  </div>
                  <div className="text-xs text-white/50 mt-1">
                    {provider.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-white/70 text-sm font-medium mb-6">
              Select the services you need expertise in
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceExpertiseOptions.map((service) => {
                const IconComponent = service.icon;
                const isSelected = formData.serviceExpertise.includes(
                  service.name
                );
                return (
                  <button
                    key={service.name}
                    onClick={() => toggleServiceExpertise(service.name)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? "border-pacific-cyan bg-pacific-cyan/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{service.name}</span>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 ml-auto text-pacific-cyan" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <p className="text-white/70 text-sm font-medium mb-3">
                What's your estimated budget?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => handleInputChange("budgetRange", range)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      formData.budgetRange === range
                        ? "border-pacific-cyan bg-pacific-cyan/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <span className="text-sm font-medium">{range}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/70 text-sm font-medium mb-3">
                Project type preference?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange("projectType", type)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      formData.projectType === type
                        ? "border-pacific-cyan bg-pacific-cyan/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <span className="text-sm font-medium">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/70 text-sm font-medium mb-3">
                How soon do you need to start?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {urgencies.map((urgency) => (
                  <button
                    key={urgency}
                    onClick={() => handleInputChange("urgency", urgency)}
                    className={`p-3 rounded-lg border-2 transition-all text-center ${
                      formData.urgency === urgency
                        ? "border-pacific-cyan bg-pacific-cyan/20 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <span className="text-sm font-medium">{urgency}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Full Name *
                </span>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Business Email *
                </span>
                <input
                  type="email"
                  value={formData.businessEmail}
                  onChange={(e) =>
                    handleInputChange("businessEmail", e.target.value)
                  }
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Phone Number *
                </span>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Company Name *
                </span>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                />
              </label>
            </div>

            <div>
              <label className="block">
                <span className="text-white/70 text-sm font-medium mb-2 block">
                  Project Brief *
                </span>
                <textarea
                  value={formData.projectBrief}
                  onChange={(e) =>
                    handleInputChange("projectBrief", e.target.value)
                  }
                  placeholder="Describe your cloud requirements, current infrastructure, and goals..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors resize-none"
                />
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-white/70 mb-2">
            Your cloud consultation request has been received.
          </p>
          <p className="text-lg text-white/60 mb-8">
            Our cloud experts will reach out to you{" "}
            <span className="text-pacific-cyan font-semibold">
              {formData.urgency}
            </span>{" "}
            to discuss your requirements.
          </p>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <h3 className="font-heading font-semibold text-white mb-4">
              What's Next?
            </h3>
            <ul className="text-left space-y-3 text-white/80 text-sm">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>
                  Our cloud specialists will review your requirements
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>Schedule an initial consultation call</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-pacific-cyan flex-shrink-0 mt-0.5" />
                <span>Receive a customized cloud strategy proposal</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
              setFormData({
                cloudProvider: "",
                serviceExpertise: [],
                budgetRange: "",
                projectType: "",
                urgency: "",
                fullName: "",
                businessEmail: "",
                phoneNumber: "",
                companyName: "",
                projectBrief: "",
              });
            }}
            className="px-8 py-4 bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold rounded-lg hover:shadow-2xl hover:shadow-pacific-cyan/40 transition-all duration-300"
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
            Cloud Consultation
            <br />
            <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
              Fast-Track Assessment
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get expert guidance on your cloud infrastructure, architecture, and
            migration strategy in just 4 steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/50 text-sm font-medium">
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span className="text-pacific-cyan text-sm font-medium">
                    {Math.round((currentStep / totalSteps) * 100)}% Complete
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pacific-cyan to-sky-blue"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(currentStep / totalSteps) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="mb-2">
                <h2 className="font-heading font-bold text-2xl text-white mb-2">
                  {currentStep === 1 && "Select Your Cloud Provider"}
                  {currentStep === 2 && "Choose Your Service Needs"}
                  {currentStep === 3 && "Project Details"}
                  {currentStep === 4 && "Contact Information"}
                </h2>
                <p className="text-white/60 text-sm">
                  {currentStep === 1 &&
                    "Which cloud platform are you using or considering?"}
                  {currentStep === 2 &&
                    "What expertise areas interest you most?"}
                  {currentStep === 3 && "Help us understand your project scope"}
                  {currentStep === 4 &&
                    "How can our team reach you with the consultation?"}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={() =>
                    setCurrentStep((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>

                {currentStep < totalSteps ? (
                  <button
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={!canProceed()}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || loading}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all"
                  >
                    <span>{loading ? "Sending..." : "Submit"}</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">
                Consultation Details
              </h3>
              <div className="space-y-4 text-sm text-white/80">
                <div>
                  <p className="text-white/50 text-xs mb-1">
                    Current Selection
                  </p>
                  <p className="text-white font-medium">
                    {formData.cloudProvider || "Not selected"}
                  </p>
                </div>
                {formData.serviceExpertise.length > 0 && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">Services</p>
                    <div className="space-y-1">
                      {formData.serviceExpertise.map((service) => (
                        <p key={service} className="text-white text-xs">
                          • {service}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {formData.budgetRange && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">Budget</p>
                    <p className="text-white font-medium">
                      {formData.budgetRange}
                    </p>
                  </div>
                )}
                {formData.projectType && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">Project Type</p>
                    <p className="text-white font-medium">
                      {formData.projectType}
                    </p>
                  </div>
                )}
                {formData.urgency && (
                  <div>
                    <p className="text-white/50 text-xs mb-1">Timeline</p>
                    <p className="text-white font-medium">{formData.urgency}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 backdrop-blur-sm border border-pacific-cyan/30">
              <h3 className="font-heading font-semibold text-lg text-white mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start space-x-2">
                  <Cloud className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Multi-cloud expertise</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Zap className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Fast implementation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Security-first approach</span>
                </li>
                <li className="flex items-start space-x-2">
                  <DollarSign className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Cost optimization focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudConsultation;
