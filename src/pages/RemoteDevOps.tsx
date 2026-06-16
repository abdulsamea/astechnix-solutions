import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Building2,
  Users,
  Cloud,
  Shield,
  Server,
  Container,
  GitBranch,
  Activity,
  AlertTriangle,
  ChevronRight,
  Loader2,
  MapPin,
  Phone,
  ChevronDown,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

interface Step1Data {
  fullName: string;
  corporateEmail: string;
  companyName: string;
  companySize: string;
  jobType: string;
  phoneCountry: string;
  phoneNumber: string;
}

interface Step2Data {
  cloudPlatform: string;
  engagementPriorities: string[];
  projectTimeline: string;
}

interface FormData {
  step1: Step1Data;
  step2: Step2Data;
  privacyConsent: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const FREE_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
];

const JOB_TYPE_OPTIONS = [
  "CTO / CIO / C-Suite",
  "VP / Director of Engineering",
  "Engineering Manager / Team Lead",
  "Product Manager / Owner",
  "Procurement / HR / Recruiter",
  "Other",
];

const COMPANY_SIZE_OPTIONS = [
  "1 - 10 employees",
  "11 - 50 employees",
  "51 - 200 employees",
  "201 - 500 employees",
  "500+ employees",
];

const DEVOPS_PLATFORM_OPTIONS = [
  "Single Cloud (AWS, Azure, or GCP)",
  "Multi-Cloud (Using multiple cloud vendors)",
  "Hybrid Cloud (Private Data Center + Public Cloud)",
  "On-Premises",
];

const ENGAGEMENT_PRIORITY_OPTIONS = [
  "Accelerate CI/CD & Deployment Speed",
  "Infrastructure Scaling & Kubernetes",
  "Cloud Cost Optimization",
  "Security Hardening & Compliance (SOC2)",
  "Ongoing DevOps & Infrastructure Management",
  "Not sure yet / Let's discuss on a call",
];

const COUNTRY_DIAL_CODES: { code: string; flag: string; dial: string }[] = [
  { code: "US", flag: "🇺🇸", dial: "+1" },
  { code: "GB", flag: "🇬🇧", dial: "+44" },
  { code: "CA", flag: "🇨🇦", dial: "+1" },
  { code: "AU", flag: "🇦🇺", dial: "+61" },
  { code: "DE", flag: "🇩🇪", dial: "+49" },
  { code: "FR", flag: "🇫🇷", dial: "+33" },
  { code: "NL", flag: "🇳🇱", dial: "+31" },
  { code: "SE", flag: "🇸🇪", dial: "+46" },
  { code: "NO", flag: "🇳🇴", dial: "+47" },
  { code: "DK", flag: "🇩🇰", dial: "+45" },
  { code: "CH", flag: "🇨🇭", dial: "+41" },
  { code: "SG", flag: "🇸🇬", dial: "+65" },
  { code: "IN", flag: "🇮🇳", dial: "+91" },
  { code: "JP", flag: "🇯🇵", dial: "+81" },
  { code: "KR", flag: "🇰🇷", dial: "+82" },
  { code: "AE", flag: "🇦🇪", dial: "+971" },
  { code: "IL", flag: "🇮🇱", dial: "+972" },
  { code: "BR", flag: "🇧🇷", dial: "+55" },
  { code: "MX", flag: "🇲🇽", dial: "+52" },
  { code: "ZA", flag: "🇿🇦", dial: "+27" },
];

const TRUST_METRICS = [
  {
    icon: Shield,
    label: "SOC 2 Compliant",
    detail: "Enterprise-grade security",
  },
  {
    icon: Server,
    label: "500+ Deployments",
    detail: "Production infrastructure",
  },
  {
    icon: Container,
    label: "K8s Certified",
    detail: "CNCF-recognized expertise",
  },
  {
    icon: GitBranch,
    label: "99.9% Uptime SLA",
    detail: "Reliability guaranteed",
  },
];

const SERVICE_CAPABILITIES = [
  "CI/CD Pipeline Automation",
  "Kubernetes Orchestration",
  "Infrastructure as Code",
  "Cloud Migration & Strategy",
  "Monitoring & Observability",
  "Security Hardening",
];

const isFreeEmailDomain = (email: string): boolean => {
  const domain = email.split("@")[1]?.toLowerCase();
  return FREE_EMAIL_DOMAINS.includes(domain);
};

const initialFormData: FormData = {
  step1: {
    fullName: "",
    corporateEmail: "",
    companyName: "",
    companySize: "",
    jobType: "",
    phoneCountry: "US",
    phoneNumber: "",
  },
  step2: {
    cloudPlatform: "",
    engagementPriorities: [],
    projectTimeline: "",
  },
  privacyConsent: false,
};

const RemoteDevOps = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [submitted]);

  // ─── Validation ──────────────────────────────────────────────────────────

  const validateStep1 = (): boolean => {
    const newErrors: ValidationErrors = {};
    const s1 = formData.step1;

    if (!s1.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!s1.corporateEmail.trim()) {
      newErrors.corporateEmail = "Corporate email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s1.corporateEmail)) {
      newErrors.corporateEmail = "Please enter a valid email address";
    } else if (isFreeEmailDomain(s1.corporateEmail)) {
      newErrors.corporateEmail =
        "Please enter your corporate/work email address to verify your business identity.";
    }
    if (!s1.companyName.trim())
      newErrors.companyName = "Company name is required";

    if (!s1.jobType) newErrors.jobType = "Job title is required";
    if (!s1.companySize) newErrors.companySize = "Company size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {};
    const s2 = formData.step2;

    if (!s2.cloudPlatform)
      newErrors.cloudPlatform = "Cloud platform is required";
    if (s2.engagementPriorities.length === 0)
      newErrors.engagementPriorities = "Please select at least one priority";

    if (!formData.privacyConsent) {
      newErrors.privacyConsent =
        "You must agree to the Privacy Policy to submit";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Handlers ───────────────────────────────────────────────────────────

  const updateStep1 = (field: keyof Step1Data, value: string) => {
    setFormData((prev) => ({
      ...prev,
      step1: { ...prev.step1, [field]: value },
    }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const updateStep2 = (field: keyof Step2Data, value: string) => {
    setFormData((prev) => ({
      ...prev,
      step2: { ...prev.step2, [field]: value },
    }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const toggleEngagementPriority = (option: string) => {
    setFormData((prev) => {
      const current = prev.step2.engagementPriorities;
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, step2: { ...prev.step2, engagementPriorities: updated } };
    });
    if (errors.engagementPriorities)
      setErrors((prev) => ({ ...prev, engagementPriorities: "" }));
  };

  const scrollToForm = () => {
    if (!formContainerRef.current) return;

    const y =
      formContainerRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);

      setTimeout(() => {
        scrollToForm();
      }, 50);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setErrors({});
      setCurrentStep(1);

      setTimeout(() => {
        scrollToForm();
      }, 50);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;

    setLoading(true);

    try {
      const templateParams = {
        user_name: formData.step1.fullName,
        user_email: formData.step1.corporateEmail,
        company_name: formData.step1.companyName,
        job_type: formData.step1.jobType,
        company_size: formData.step1.companySize,
        phone_number: formData.step1.phoneNumber
          ? `${COUNTRY_DIAL_CODES.find((c) => c.code === formData.step1.phoneCountry)?.dial ?? ""} ${formData.step1.phoneNumber}`
          : "Not provided",

        cloud_platform: formData.step2.cloudPlatform,
        engagement_model: formData.step2.engagementPriorities.join(", "),
        project_timeline: formData.step2.projectTimeline,

        service_type: "Remote DevOps COnsultation",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_DEVOPS_CONSULTATION_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      console.log("Email sent successfully:", result.text);

      setSubmitted(true);
    } catch (error) {
      console.error("Email failed to send:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setCurrentStep(1);
    setSubmitted(false);
  };

  // ─── Progress Bar ───────────────────────────────────────────────────────

  const progressPercent = currentStep === 1 ? 0 : 50;

  // ─── Render: Success State ──────────────────────────────────────────────

  if (submitted) {
    return (
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
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
                <li className="text-pacific-cyan">Remote DevOps</li>
              </ol>
            </nav>

            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 mb-8 shadow-lg shadow-emerald-500/30"
              >
                <CheckCircle2 className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">
                Consultation Request Received
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Thank you. Your request for a professional DevOps consultation
                has been recorded. A designated technical representative will be
                in touch with you shortly to evaluate your requirements.
              </p>
            </div>

            {/* Scheduler Card */}
            <div className="max-w-2xl mx-auto">
              <div className="mt-8 text-center">
                <button
                  onClick={handleReset}
                  className="text-white/50 hover:text-pacific-cyan text-sm font-medium transition-colors"
                >
                  Submit another request
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  // ─── Render: Form State ─────────────────────────────────────────────────

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Simulated URL Route */}
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
            <li className="text-pacific-cyan">Remote DevOps Contracting</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Scale Your Infrastructure with{" "}
              <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                On-Demand Remote DevOps Engineers
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
              US-based tech executives trust AStechnix for senior-level DevOps
              contracting. AWS, Kubernetes, CI/CD — deployed within days, not
              months.
            </p>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TRUST_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <metric.icon
                    className="w-6 h-6 text-pacific-cyan mb-2"
                    aria-label={metric.label}
                  />
                  <p className="font-heading font-semibold text-white text-sm">
                    {metric.label}
                  </p>
                  <p className="text-white/50 text-xs mt-1">{metric.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Main Grid: Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Card */}
          <section className="lg:col-span-2" aria-label="Lead generation form">
            <div
              ref={formContainerRef}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/50 text-sm font-medium">
                    Step {currentStep} of 2
                  </span>
                  <span className="text-pacific-cyan text-sm font-medium">
                    {progressPercent}% Complete
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pacific-cyan to-sky-blue"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                {/* Step Dots */}
                <div className="flex items-center justify-center space-x-4 mt-4">
                  <button
                    onClick={() => currentStep === 2 && handleBack()}
                    className={`flex items-center space-x-2 ${
                      currentStep === 1 ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                        currentStep === 1
                          ? "bg-pacific-cyan text-white"
                          : "bg-pacific-cyan/20 text-pacific-cyan"
                      }`}
                    >
                      1
                    </div>
                    <span
                      className={`text-sm font-medium hidden sm:inline ${
                        currentStep === 1 ? "text-white" : "text-white/50"
                      }`}
                    >
                      Corporate Identity
                    </span>
                  </button>
                  <div className="w-8 h-px bg-white/20" />
                  <button
                    onClick={handleNext}
                    disabled={currentStep === 1}
                    className={`flex items-center space-x-2 ${
                      currentStep === 2 ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                        currentStep === 2
                          ? "bg-pacific-cyan text-white"
                          : "bg-white/10 text-white/40"
                      }`}
                    >
                      2
                    </div>
                    <span
                      className={`text-sm font-medium hidden sm:inline ${
                        currentStep === 2 ? "text-white" : "text-white/40"
                      }`}
                    >
                      Infrastructure Scope
                    </span>
                  </button>
                </div>
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && (
                    <div>
                      <h2 className=" font-heading font-bold text-2xl text-white mb-2">
                        Corporate Identity &amp; Project Fit
                      </h2>
                      <p className="text-white/60 text-sm mb-8">
                        Tell us about your company to see if you qualify for an
                        expedited DevOps deployment.
                      </p>

                      <div className="space-y-5">
                        {/* Full Name */}
                        <div>
                          <label className="block" htmlFor="fullName">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Full Name *
                            </span>
                            <div className="relative">
                              <User
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <input
                                id="fullName"
                                type="text"
                                value={formData.step1.fullName}
                                onChange={(e) =>
                                  updateStep1("fullName", e.target.value)
                                }
                                placeholder="Your name"
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none transition-colors ${
                                  errors.fullName
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.fullName}
                              />
                            </div>
                          </label>
                          {errors.fullName && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.fullName}</span>
                            </p>
                          )}
                        </div>

                        {/* Corporate Email */}
                        <div>
                          <label className="block" htmlFor="corporateEmail">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Corporate Email Address *
                            </span>
                            <div className="relative">
                              <Mail
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <input
                                id="corporateEmail"
                                type="email"
                                value={formData.step1.corporateEmail}
                                onChange={(e) =>
                                  updateStep1("corporateEmail", e.target.value)
                                }
                                placeholder="you@company.com"
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none transition-colors ${
                                  errors.corporateEmail
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.corporateEmail}
                              />
                            </div>
                          </label>
                          {errors.corporateEmail && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.corporateEmail}</span>
                            </p>
                          )}
                        </div>

                        {/* Company Name */}
                        <div>
                          <label className="block" htmlFor="companyName">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Company Name *
                            </span>
                            <div className="relative">
                              <Building2
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <input
                                id="companyName"
                                type="text"
                                value={formData.step1.companyName}
                                onChange={(e) =>
                                  updateStep1("companyName", e.target.value)
                                }
                                placeholder="Your company name"
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none transition-colors ${
                                  errors.companyName
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.companyName}
                              />
                            </div>
                          </label>
                          {errors.companyName && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.companyName}</span>
                            </p>
                          )}
                        </div>

                        {/* Job Title / Role */}
                        <div>
                          <label className="block" htmlFor="jobType">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Job Title / Role *
                            </span>
                            <div className="relative">
                              <Users
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <select
                                id="jobType"
                                value={formData.step1.jobType}
                                onChange={(e) =>
                                  updateStep1("jobType", e.target.value)
                                }
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none transition-colors appearance-none ${
                                  errors.jobType
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.jobType}
                              >
                                <option
                                  value=""
                                  disabled
                                  className="bg-deep-navy"
                                >
                                  Select job title
                                </option>
                                {JOB_TYPE_OPTIONS.map((opt) => (
                                  <option
                                    key={opt}
                                    value={opt}
                                    className="bg-deep-navy"
                                  >
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </label>
                          {errors.jobType && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.jobType}</span>
                            </p>
                          )}
                        </div>

                        {/* Mobile Number */}
                        <div>
                          <label className="block" htmlFor="phoneNumber">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Mobile Number{" "}
                              <span className="text-white/40 font-normal">
                                (Optional — for urgent 6-hour response)
                              </span>
                            </span>
                            <div className="flex gap-2">
                              {/* Country dial-code picker */}
                              <div className="relative flex-shrink-0">
                                <select
                                  value={formData.step1.phoneCountry}
                                  onChange={(e) =>
                                    updateStep1("phoneCountry", e.target.value)
                                  }
                                  aria-label="Country dial code"
                                  className="h-full pl-3 pr-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-pacific-cyan focus:outline-none transition-colors appearance-none text-sm cursor-pointer"
                                >
                                  {COUNTRY_DIAL_CODES.map((c) => (
                                    <option
                                      key={c.code}
                                      value={c.code}
                                      className="bg-deep-navy"
                                    >
                                      {c.flag} {c.dial}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown
                                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40"
                                  aria-hidden="true"
                                />
                              </div>
                              {/* Phone number input */}
                              <div className="relative flex-1">
                                <Phone
                                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                  aria-hidden="true"
                                />
                                <input
                                  id="phoneNumber"
                                  type="tel"
                                  value={formData.step1.phoneNumber}
                                  onChange={(e) =>
                                    updateStep1(
                                      "phoneNumber",
                                      e.target.value.replace(/\D/g, ""),
                                    )
                                  }
                                  inputMode="numeric"
                                  placeholder="555 012 3456"
                                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors"
                                />
                              </div>
                            </div>
                          </label>
                        </div>

                        {/* Company Size */}
                        <div>
                          <label className="block" htmlFor="companySize">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Company Size *
                            </span>
                            <div className="relative">
                              <Users
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <select
                                id="companySize"
                                value={formData.step1.companySize}
                                onChange={(e) =>
                                  updateStep1("companySize", e.target.value)
                                }
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none transition-colors appearance-none ${
                                  errors.companySize
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.companySize}
                              >
                                <option
                                  value=""
                                  disabled
                                  className="bg-deep-navy"
                                >
                                  Select company size
                                </option>
                                {COMPANY_SIZE_OPTIONS.map((opt) => (
                                  <option
                                    key={opt}
                                    value={opt}
                                    className="bg-deep-navy"
                                  >
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </label>
                          {errors.companySize && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.companySize}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <h2 className="font-heading font-bold text-2xl text-white mb-2">
                        Infrastructure &amp; Engagement Scope
                      </h2>
                      <p className="text-white/60 text-sm mb-8">
                        Define your DevOps environment and how you'd like to
                        engage with our engineers.
                      </p>

                      <div className="space-y-5">
                        {/* Cloud Platform */}
                        <div>
                          <label className="block" htmlFor="cloudPlatform">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Primary DevOps Platform *
                            </span>
                            <div className="relative">
                              <Cloud
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <select
                                id="cloudPlatform"
                                value={formData.step2.cloudPlatform}
                                onChange={(e) =>
                                  updateStep2("cloudPlatform", e.target.value)
                                }
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none transition-colors appearance-none ${
                                  errors.cloudPlatform
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.cloudPlatform}
                              >
                                <option
                                  value=""
                                  disabled
                                  className="bg-deep-navy"
                                >
                                  Select DevOps platform
                                </option>
                                {DEVOPS_PLATFORM_OPTIONS.map((opt) => (
                                  <option
                                    key={opt}
                                    value={opt}
                                    className="bg-deep-navy"
                                  >
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </label>
                          {errors.cloudPlatform && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.cloudPlatform}</span>
                            </p>
                          )}
                        </div>

                        {/* Engagement Priorities Multiselect */}
                        <div>
                          <span className="text-white/70 text-sm font-medium mb-2 block">
                            <span className="flex items-center gap-2">
                              <Target
                                className="w-4 h-4 text-white/40 flex-shrink-0"
                                aria-hidden="true"
                              />
                              How can our engineers best support you?{" "}
                              <span className="text-white/40 font-normal">
                                (Select all that apply) *
                              </span>
                            </span>
                          </span>

                          {/* Selected tags preview */}
                          {formData.step2.engagementPriorities.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {formData.step2.engagementPriorities.map((p) => (
                                <span
                                  key={p}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pacific-cyan/20 border border-pacific-cyan/40 text-pacific-cyan text-xs font-medium"
                                >
                                  {p}
                                  <button
                                    type="button"
                                    onClick={() => toggleEngagementPriority(p)}
                                    aria-label={`Remove ${p}`}
                                    className="w-3.5 h-3.5 rounded-full hover:bg-pacific-cyan/30 flex items-center justify-center transition-colors text-pacific-cyan/70 hover:text-pacific-cyan"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Checkbox option list */}
                          <div
                            className={`rounded-lg border overflow-hidden ${
                              errors.engagementPriorities
                                ? "border-red-400"
                                : "border-white/10"
                            }`}
                            role="group"
                            aria-label="Engagement priorities"
                          >
                            {ENGAGEMENT_PRIORITY_OPTIONS.map((option, idx) => {
                              const checked =
                                formData.step2.engagementPriorities.includes(
                                  option
                                );
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() =>
                                    toggleEngagementPriority(option)
                                  }
                                  aria-pressed={checked}
                                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                                    idx !== 0 ? "border-t border-white/8" : ""
                                  } ${
                                    checked
                                      ? "bg-pacific-cyan/10"
                                      : "bg-white/5 hover:bg-white/8"
                                  }`}
                                >
                                  {/* Custom checkbox */}
                                  <span
                                    className={`flex-shrink-0 w-4 h-4 rounded border transition-all flex items-center justify-center ${
                                      checked
                                        ? "bg-pacific-cyan border-pacific-cyan"
                                        : "border-white/20 bg-transparent"
                                    }`}
                                  >
                                    {checked && (
                                      <svg
                                        className="w-2.5 h-2.5 text-white"
                                        viewBox="0 0 10 8"
                                        fill="none"
                                        aria-hidden="true"
                                      >
                                        <path
                                          d="M1 4l2.5 2.5L9 1"
                                          stroke="currentColor"
                                          strokeWidth="1.8"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    )}
                                  </span>
                                  <span
                                    className={`text-sm font-medium leading-snug ${
                                      checked ? "text-white" : "text-white/70"
                                    }`}
                                  >
                                    {option}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {errors.engagementPriorities && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.engagementPriorities}</span>
                            </p>
                          )}
                        </div>

                        {/* Project Timeline */}
                        <div>
                          <label className="block" htmlFor="projectTimeline">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Project Timeline &amp; Urgent Needs{" "}
                              <span className="text-white/40 font-normal">
                                (Optional)
                              </span>
                            </span>
                            <textarea
                              id="projectTimeline"
                              value={formData.step2.projectTimeline}
                              onChange={(e) =>
                                updateStep2("projectTimeline", e.target.value)
                              }
                              placeholder="Briefly describe your current CI/CD pipeline, Kubernetes, DevOps requirements or infrastructure bottlenecks..."
                              rows={4}
                              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none transition-colors resize-none"
                            />
                          </label>
                        </div>

                        {/* Privacy Consent */}
                        <div>
                          <label className="flex items-start space-x-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.privacyConsent}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  privacyConsent: e.target.checked,
                                }));
                                if (errors.privacyConsent)
                                  setErrors((prev) => ({
                                    ...prev,
                                    privacyConsent: "",
                                  }));
                              }}
                              className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-pacific-cyan focus:ring-pacific-cyan focus:ring-offset-0 focus:ring-offset-transparent"
                            />
                            <span className="text-white/70 text-sm leading-relaxed">
                              I agree to the{" "}
                              <Link
                                to="/privacy-policy"
                                target="_blank"
                                className="text-pacific-cyan hover:text-sky-blue underline underline-offset-2 transition-colors"
                              >
                                Privacy Policy
                              </Link>{" "}
                              and consent to AStechnix processing my data to
                              respond to this inquiry. *
                            </span>
                          </label>
                          {errors.privacyConsent && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.privacyConsent}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/5 text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>

                {currentStep === 1 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all duration-300"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit</span>
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6" aria-label="Service details sidebar">
            {/* Capabilities */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">
                Core Capabilities
              </h3>
              <ul className="space-y-3">
                {SERVICE_CAPABILITIES.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center space-x-3 text-white/80 text-sm"
                  >
                    <Activity className="w-4 h-4 text-pacific-cyan flex-shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 backdrop-blur-sm border border-pacific-cyan/30">
              <h3 className="font-heading font-semibold text-lg text-white mb-4">
                Why US Executives Choose Us
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>SOC 2 Type II compliant operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>US-timezone aligned engineering teams</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Clock className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Onboard within 48 hours of signing</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Activity className="w-4 h-4 text-pacific-cyan flex-shrink-0 mt-0.5" />
                  <span>Flexible hourly or retainer models</span>
                </li>
              </ul>
            </div>

            {/* Data Minimization Notice */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm mb-1">
                    Data Minimization
                  </h4>
                  <p className="text-white/50 text-xs leading-relaxed">
                    We only collect information essential to process your
                    inquiry. No marketing lists, no third-party sharing. Read
                    our{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-pacific-cyan hover:text-sky-blue transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default RemoteDevOps;
