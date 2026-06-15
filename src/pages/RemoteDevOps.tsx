/**
 * SEO Metadata - Remote DevOps Contracting Landing Page
 *
 * Title: "On-Demand DevOps Contracting & Cloud Architecture Services | AStechnix"
 * Description: "Scale your US tech infrastructure with premium, highly qualified remote DevOps engineers. Flexible hourly contracting specializing in AWS, Kubernetes, and CI/CD automation."
 * Keywords: "remote devops engineer, cloud consulting, US devops contracting, hourly devops agency"
 * Canonical: "https://astechnix.com/services/remote-devops-contracting"
 * OpenGraph:
 *   og:title: "On-Demand DevOps Contracting & Cloud Architecture Services | AStechnix"
 *   og:description: "Scale your US tech infrastructure with premium, highly qualified remote DevOps engineers."
 *   og:url: "https://astechnix.com/services/remote-devops-contracting"
 *   og:type: "website"
 */

import { useState, useEffect } from "react";
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
  Clock,
  Shield,
  Server,
  Container,
  GitBranch,
  Activity,
  AlertTriangle,
  ChevronRight,
  Globe,
  Loader2,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── TypeScript Interfaces ───────────────────────────────────────────────────

interface Step1Data {
  fullName: string;
  corporateEmail: string;
  companyName: string;
  companySize: string;
}

interface Step2Data {
  cloudPlatform: string;
  engagementModel: string;
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

const COMPANY_SIZE_OPTIONS = [
  "1 - 10 employees",
  "11 - 50 employees",
  "51 - 200 employees",
  "201 - 500 employees",
  "500+ employees",
];

const CLOUD_PLATFORM_OPTIONS = [
  "Amazon Web Services (AWS)",
  "Microsoft Azure",
  "Google Cloud Platform (GCP)",
  "Hybrid / Multi-Cloud",
  "On-Premises Migration",
];

const ENGAGEMENT_MODEL_OPTIONS = [
  "Dedicated Hourly Contracting",
  "Monthly Dedicated Pod / Team",
  "Fixed-Scope Project Retainer",
  "Unsure / Need Consulting",
];

const TRUST_METRICS = [
  { icon: Shield, label: "SOC 2 Compliant", detail: "Enterprise-grade security" },
  { icon: Server, label: "500+ Deployments", detail: "Production infrastructure" },
  { icon: Container, label: "K8s Certified", detail: "CNCF-recognized expertise" },
  { icon: GitBranch, label: "99.9% Uptime SLA", detail: "Reliability guaranteed" },
];

const SERVICE_CAPABILITIES = [
  "CI/CD Pipeline Automation",
  "Kubernetes Orchestration",
  "Infrastructure as Code",
  "Cloud Migration & Strategy",
  "Monitoring & Observability",
  "Security Hardening",
];

const SCHEDULER_SLOTS = [
  { day: "Mon", date: "Jun 16", times: ["9:00 AM", "11:30 AM", "2:00 PM"] },
  { day: "Tue", date: "Jun 17", times: ["10:00 AM", "1:00 PM", "3:30 PM"] },
  { day: "Wed", date: "Jun 18", times: ["9:30 AM", "12:00 PM", "4:00 PM"] },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

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
  },
  step2: {
    cloudPlatform: "",
    engagementModel: "",
    projectTimeline: "",
  },
  privacyConsent: false,
};

// ─── Component ───────────────────────────────────────────────────────────────

const RemoteDevOps = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep, submitted]);

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
    if (!s1.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!s1.companySize) newErrors.companySize = "Company size is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {};
    const s2 = formData.step2;

    if (!s2.cloudPlatform) newErrors.cloudPlatform = "Cloud platform is required";
    if (!s2.engagementModel) newErrors.engagementModel = "Engagement model is required";

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

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setErrors({});
      setCurrentStep(1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
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
                <li><Link to="/" className="hover:text-pacific-cyan transition-colors">Home</Link></li>
                <li><ChevronRight className="w-4 h-4" /></li>
                <li><Link to="/devops" className="hover:text-pacific-cyan transition-colors">Services</Link></li>
                <li><ChevronRight className="w-4 h-4" /></li>
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
                Corporate Gateway Authenticated
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Thank you. Your business domain has been verified. To bypass
                back-and-forth emails, please lock in a direct technical
                discovery slot with our Solutions Architect below.
              </p>
            </div>

            {/* Scheduler Card */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/20">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6 text-pacific-cyan" />
                  <h2 className="font-heading font-bold text-2xl text-white">
                    Schedule Your Architecture Sync
                  </h2>
                </div>
                <p className="text-white/60 text-sm mb-8">
                  Select an available time slot for your complimentary 15-minute infrastructure assessment.
                </p>

                <div className="space-y-4 mb-8">
                  {SCHEDULER_SLOTS.map((slot) => (
                    <div
                      key={slot.day}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="font-heading font-semibold text-white text-sm">
                          {slot.day}
                        </span>
                        <span className="text-white/50 text-xs">
                          {slot.date}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {slot.times.map((time) => (
                          <button
                            key={time}
                            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:border-pacific-cyan hover:bg-pacific-cyan/10 hover:text-pacific-cyan transition-all duration-200"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold hover:shadow-lg hover:shadow-pacific-cyan/40 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Confirm 15-Min Architecture Sync</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

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
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Simulated URL Route */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-white/50">
            <li><Link to="/" className="hover:text-pacific-cyan transition-colors">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li><Link to="/devops" className="hover:text-pacific-cyan transition-colors">Services</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-pacific-cyan">Remote DevOps Contracting</li>
          </ol>
        </nav>

        {/* Simulated Address Bar */}
        <div className="mb-12 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center space-x-3 max-w-2xl">
          <Globe className="w-4 h-4 text-pacific-cyan flex-shrink-0" aria-label="URL indicator" />
          <span className="text-white/50 text-sm font-mono truncate">
            https://astechnix.com/services/remote-devops-contracting
          </span>
        </div>

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
              contracting. AWS, Kubernetes, CI/CD — deployed within days, not months.
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
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
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
                      <h2 className="font-heading font-bold text-2xl text-white mb-2">
                        Corporate Identity &amp; Project Fit
                      </h2>
                      <p className="text-white/60 text-sm mb-8">
                        Tell us about your organization so we can tailor our
                        engagement to your needs.
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
                                placeholder="John Doe"
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
                                placeholder="Acme Corp"
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
                                <option value="" disabled className="bg-deep-navy">
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
                        Define your cloud environment and how you'd like to
                        engage with our engineers.
                      </p>

                      <div className="space-y-5">
                        {/* Cloud Platform */}
                        <div>
                          <label className="block" htmlFor="cloudPlatform">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Primary Cloud Platform *
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
                                <option value="" disabled className="bg-deep-navy">
                                  Select cloud platform
                                </option>
                                {CLOUD_PLATFORM_OPTIONS.map((opt) => (
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

                        {/* Engagement Model */}
                        <div>
                          <label className="block" htmlFor="engagementModel">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Preferred Engagement Model *
                            </span>
                            <div className="relative">
                              <Clock
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
                                aria-hidden="true"
                              />
                              <select
                                id="engagementModel"
                                value={formData.step2.engagementModel}
                                onChange={(e) =>
                                  updateStep2("engagementModel", e.target.value)
                                }
                                className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white focus:outline-none transition-colors appearance-none ${
                                  errors.engagementModel
                                    ? "border-red-400 focus:border-red-400"
                                    : "border-white/10 focus:border-pacific-cyan"
                                }`}
                                aria-required="true"
                                aria-invalid={!!errors.engagementModel}
                              >
                                <option value="" disabled className="bg-deep-navy">
                                  Select engagement model
                                </option>
                                {ENGAGEMENT_MODEL_OPTIONS.map((opt) => (
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
                          {errors.engagementModel && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center space-x-1">
                              <AlertTriangle className="w-3 h-3 flex-shrink-0" />
                              <span>{errors.engagementModel}</span>
                            </p>
                          )}
                        </div>

                        {/* Project Timeline */}
                        <div>
                          <label className="block" htmlFor="projectTimeline">
                            <span className="text-white/70 text-sm font-medium mb-2 block">
                              Project Timeline &amp; Urgent Needs
                            </span>
                            <textarea
                              id="projectTimeline"
                              value={formData.step2.projectTimeline}
                              onChange={(e) =>
                                updateStep2("projectTimeline", e.target.value)
                              }
                              placeholder="Briefly describe your current CI/CD pipeline, Kubernetes, or infrastructure bottlenecks..."
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
                        <span>Securing infrastructure gateway...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
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
