import { useState, useRef } from "react";
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
  Clock,
  Briefcase,
  Zap,
  DollarSign,
  HeartHandshake,
  Play,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

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
  projectDetails: string;
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

const BENEFITS_DATA = [
  {
    icon: Zap,
    headline: "Eliminate Deployment Bottlenecks",
    benefit: "Ship code daily with bulletproof CI/CD pipelines",
    feature: "Expert Terraform IaC and automated Kubernetes orchestration",
  },
  {
    icon: DollarSign,
    headline: "Slash Unnecessary Cloud Waste",
    benefit: "Instantly drop your infrastructure overhead by up to 40%",
    feature: "Proactive architecture audits and cost optimization mapping",
  },
  {
    icon: HeartHandshake,
    headline: "Zero HR Headaches",
    benefit: "Focus 100% on product delivery",
    feature:
      "Regional compliance, healthcare, and local payroll entirely managed on our end",
  },
];

const TESTIMONIALS_DATA = [
  {
    avatar: "JW",
    name: "James Whitfield",
    title: "CTO, Series A FinTech SaaS",
    review:
      "Hiring usually drags on for weeks, so I was prepared to wait. But they moved incredibly fast. We had an expert handling our cloud setup before the week was even out. They skipped the usual awkward ramp-up phase and just started delivering value on day one.",
    rating: 5,
  },
  {
    avatar: "SC",
    name: "Sandra Chen",
    title: "VP of Engineering, Healthcare Startup",
    review:
      "Our internal developers were constantly blocked waiting for infrastructure updates. Within days of joining, their DevOps engineer completely refactored our deployment pipelines and migrated us to Terraform. They didn't just take tasks off our plate, they actually accelerated our entire release cycle and made our release process completely predictable.",
    rating: 5,
  },
  {
    avatar: "MR",
    name: "Marcus Rodriguez",
    title: "Director of Platform, E-Commerce Platform",
    review:
      "First call to production-ready in under a week. Our AWS spend dropped by a third in the first quarter alone. I was genuinely surprised at how quickly they found savings we'd been missing.",
    rating: 5,
  },
];

const FAQ_DATA = [
  {
    question: "How do you handle timezone overlap with US teams?",
    answer:
      "Our engineers align their working schedules entirely with your core working hours (EST/PST), ensuring seamless participation in daily standups and Slack collaboration.",
  },
  {
    question: "Who legally employs the remote engineers?",
    answer:
      "AStechnix acts as the Employer of Record (EOR). We manage all regional labor laws, tax distributions, local payroll, and medical benefits, leaving you with zero legal or administrative liabilities.",
  },
  {
    question:
      "What happens if an engineer isn't a perfect cultural or technical fit?",
    answer:
      "Every engagement includes a flexible trial alignment phase. If an engineer doesn't meet your operational standards, we cycle in a replacement within 5 business days at no extra onboarding cost.",
  },
  {
    question: "Is our codebase and cloud data secure?",
    answer:
      "Absolutely. Our operations are fully SOC 2 Type II compliant. Engineers strictly adhere to your internal access management controls, IAM protocols, and data minimization practices.",
  },
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
    projectDetails: "",
  },
  privacyConsent: false,
};

const reportGoogleConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-18247449976/9pVzCMq16cAcEPj6h_1D",
    });
  }
};

// ─── Animated Infrastructure Visual Component ───────────────────────────────────

const InfrastructureVisual = () => {
  const nodes = [
    { id: "git", label: "Git", x: "10%", y: "30%" },
    { id: "ci", label: "CI/CD", x: "30%", y: "20%" },
    { id: "build", label: "Build", x: "50%", y: "15%" },
    { id: "test", label: "Test", x: "70%", y: "25%" },
    { id: "deploy", label: "Deploy", x: "85%", y: "40%" },
    { id: "k8s", label: "K8s", x: "65%", y: "55%" },
    { id: "monitor", label: "Monitor", x: "40%", y: "70%" },
    { id: "alert", label: "Alert", x: "15%", y: "65%" },
  ];

  const connections = [
    ["git", "ci"],
    ["ci", "build"],
    ["build", "test"],
    ["test", "deploy"],
    ["deploy", "k8s"],
    ["k8s", "monitor"],
    ["monitor", "alert"],
  ];

  const getNodePosition = (id: string) => {
    return nodes.find((n) => n.id === id) || { x: "0%", y: "0%" };
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent rounded-2xl border border-white/10 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-64 h-64 bg-pacific-cyan/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: "10%", top: "10%" }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-sky-blue/15 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ right: "20%", bottom: "20%" }}
      />

      {/* Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {connections.map(([from, to], idx) => {
          const fromNode = getNodePosition(from);
          const toNode = getNodePosition(to);
          return (
            <motion.line
              key={idx}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              strokeDasharray="1 1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.6)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <motion.div
          key={node.id}
          className="absolute flex items-center justify-center"
          style={{
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <motion.div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 border border-pacific-cyan/40 flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.1, borderColor: "rgba(6, 182, 212, 0.8)" }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(6, 182, 212, 0.3)",
                "0 0 20px rgba(6, 182, 212, 0.3)",
                "0 0 0 rgba(6, 182, 212, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.3,
            }}
          >
            <span className="text-[10px] sm:text-xs font-semibold text-white font-mono">
              {node.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Status Indicators */}
      <motion.div
        className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-green-400"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-xs text-green-300 font-medium">
          All Systems Operational
        </span>
      </motion.div>

      {/* Pipeline Flow Animation */}
      <motion.div
        className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-pacific-cyan/20 border border-pacific-cyan/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <Play className="w-3 h-3 text-pacific-cyan" />
        <span className="text-xs text-pacific-cyan font-medium">
          Pipeline Active
        </span>
      </motion.div>
    </div>
  );
};

// ─── FAQ Accordion Item Component ───────────────────────────────────

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-white group-hover:text-pacific-cyan transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 ${isOpen ? "text-pacific-cyan" : "text-white/40"}`}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-white/60 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const RemoteDevOps = () => {
  const navigate = useNavigate();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

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
      return {
        ...prev,
        step2: { ...prev.step2, engagementPriorities: updated },
      };
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
        requirements: formData.step2.engagementPriorities.join(", "),
        project_details: formData.step2.projectDetails,

        service_type: "Remote DevOps Consultation",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_DEVOPS_CONSULTATION_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      console.log("Email sent successfully:", result.text);
      reportGoogleConversion();

      navigate("/services/devops/success");
    } catch (error) {
      console.error("Email failed to send:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ─── Progress Bar ───────────────────────────────────────────────────────

  const progressPercent = currentStep === 1 ? 0 : 50;

  // ─── Render ─────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
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
            <li className="text-pacific-cyan">DevOps Consultation</li>
          </ol>
        </nav>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 1: HERO (Above the Fold)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-[1.15] tracking-tight">
                Scale Your Infrastructure.{" "}
                <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent">
                  Minus the Overhead.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
                We provide expert offshore DevOps teams for your business, while{" "}
                <span className="bg-gradient-to-r from-pacific-cyan via-sky-blue to-pale-azure bg-clip-text text-transparent font-bold">
                  completely handling international HR, payroll, compliance, and
                  employee benefits at fractional cost.
                </span>
              </p>

              {/* Primary CTA */}
              <motion.button
                onClick={scrollToForm}
                className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue text-white font-heading font-semibold text-lg hover:shadow-2xl hover:shadow-pacific-cyan/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Deploy Expert DevOps Talent</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right Column: Visual Placeholder - Same Level as Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full"
            >
              <InfrastructureVisual />
            </motion.div>
          </div>

          {/* Trust Metrics - Centered Full Width Below Both Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 max-w-3xl w-full">
              {TRUST_METRICS.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                  className="p-4 lg:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-pacific-cyan/40 transition-colors text-center"
                >
                  <metric.icon
                    className="w-6 h-6 text-pacific-cyan mb-2 mx-auto"
                    aria-label={metric.label}
                  />
                  <p className="font-heading font-semibold text-white text-sm lg:text-base">
                    {metric.label}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{metric.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 2: BENEFITS VS FEATURES
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Why Engineering Leaders Choose{" "}
              <span className="text-pacific-cyan">AStechnix</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real business outcomes powered by expert implementation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {BENEFITS_DATA.map((item, idx) => (
              <motion.div
                key={item.headline}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 hover:border-pacific-cyan/40 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pacific-cyan/20 to-sky-blue/20 border border-pacific-cyan/30 flex items-center justify-center mb-6 group-hover:border-pacific-cyan/60 transition-colors">
                  <item.icon className="w-7 h-7 text-pacific-cyan" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {item.headline}
                </h3>
                <p className="text-white font-medium mb-2">{item.benefit}</p>
                <p className="text-white/50 text-sm leading-relaxed">
                  Powered by {item.feature}.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 3: ADVANCED SOCIAL PROOF (TESTIMONIALS)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Trusted by{" "}
              <span className="text-pacific-cyan">US Engineering Leaders</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              See what executives are saying about their experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                {/* Avatar & Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-white/70 leading-relaxed text-sm lg:text-base mb-5">
                  "{testimonial.review}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 4: MULTI-STEP FORM (LEAD CAPTURE)
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-24" id="lead-form">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Let's Find the Right{" "}
              <span className="text-pacific-cyan">DevOps Engineers</span> for
              Your Team
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Tell us a bit about your infrastructure needs and we'll match you
              with senior engineers within 48 hours.
            </p>
          </motion.div>

          <div
            ref={formContainerRef}
            className="max-w-3xl mx-auto p-6 sm:p-8 lg:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 animate-border-glow"
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
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      Your Corporate Identity
                    </h3>
                    <p className="text-white/60 text-sm mb-8">
                      Tell us a bit about your organization so we can tailor the
                      perfect DevOps team for your needs.
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
                              className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none caret-white transition-colors ${
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
                              className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none caret-white transition-colors ${
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
                              className={`w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none caret-white transition-colors ${
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
                              (Optional — for urgent 2-hour response)
                            </span>
                          </span>
                          <div className="flex gap-2">
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
                                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none caret-white transition-colors"
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
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      Infrastructure & Engagement Scope
                    </h3>
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
                                option,
                              );
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleEngagementPriority(option)}
                                aria-pressed={checked}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                                  idx !== 0 ? "border-t border-white/8" : ""
                                } ${
                                  checked
                                    ? "bg-pacific-cyan/10"
                                    : "bg-white/5 hover:bg-white/8"
                                }`}
                              >
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

                      {/* Project Details */}
                      <div>
                        <label className="block" htmlFor="projectDetails">
                          <span className="text-white/70 text-sm font-medium mb-2 block">
                            Any specific goals or context you'd like to share?{" "}
                            <span className="text-white/40 font-normal">
                              (Optional)
                            </span>
                          </span>
                          <textarea
                            id="projectDetails"
                            value={formData.step2.projectDetails}
                            onChange={(e) =>
                              updateStep2("projectDetails", e.target.value)
                            }
                            placeholder="e.g., Looking to optimize AWS costs, transition to Kubernetes, or migrate infrastructure to IaC (Terraform). Feel free to leave blank!"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-pacific-cyan focus:outline-none caret-white transition-colors resize-none"
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

          {/* Data Minimization Notice Below Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 p-5 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-sky-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-heading font-semibold text-white text-sm mb-1">
                  Data Minimization Commitment
                </h4>
                <p className="text-white/50 text-xs leading-relaxed">
                  We only collect information essential to process your inquiry.
                  No marketing lists, no third-party sharing. Read our{" "}
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
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 5: OBJECTION-HANDLING FAQ
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
              Frequently Asked{" "}
              <span className="text-pacific-cyan">Questions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Clear answers to common concerns from engineering leaders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
          >
            {FAQ_DATA.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQIndex === idx}
                onToggle={() =>
                  setOpenFAQIndex(openFAQIndex === idx ? null : idx)
                }
                index={idx}
              />
            ))}
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SECTION 6: FINAL CALL TO ACTION
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pacific-cyan/20 via-sky-blue/10 to-pale-azure/20 border border-pacific-cyan/30 p-8 sm:p-12 lg:p-16 text-center"
          >
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-pacific-cyan/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-sky-blue/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Ready to stop fighting server downtime and focus on building
                features?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Get matched with senior DevOps engineers in 48 hours. Zero HR
                overhead. 100% US-timezone aligned.
              </p>
              <motion.button
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-deep-navy font-heading font-semibold text-lg hover:bg-pacific-cyan hover:text-white transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Request an Engineer Estimate</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            FOOTER SECTION
        ═══════════════════════════════════════════════════════════════════ */}
        <footer className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>
              &copy; {new Date().getFullYear()} AStechnix. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="hover:text-pacific-cyan transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-pacific-cyan transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-4 text-center sm:text-left">
            We practice strict data minimization. Your information is used
            solely to process your inquiry and is never sold or shared with
            third parties for marketing purposes.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default RemoteDevOps;
