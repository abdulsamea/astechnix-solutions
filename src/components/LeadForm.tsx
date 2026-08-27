import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageSquare, Phone } from "lucide-react";
import { commonEmailProviders } from "../data/constants";

declare global {
  interface Window {
    gtag?: (
      command: string,
      target: string,
      config?: Record<string, unknown>,
    ) => void;
  }
}

interface LeadFormState {
  name: string;
  email: string;
  phone: string;
  details: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialState: LeadFormState = {
  name: "",
  email: "",
  phone: "",
  details: "",
};

interface LeadFormProps {
  pageSource?: string;
  formName?: string;
  userIntent?: string;
}

export function LeadForm({
  pageSource = "/it-outsourcing",
  formName = "Google Ads IT Outsourcing Landing Page Lead",
  userIntent = "Google Ads Direct Lead",
}: LeadFormProps) {
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<LeadFormState>>({});

  const validate = (): boolean => {
    const e: Partial<LeadFormState> = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    const emailTrimmed = form.email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailTrimmed)) {
      e.email = "Valid work email is required";
    } else {
      const domain = emailTrimmed.split("@")[1];
      if (commonEmailProviders.includes(domain)) {
        e.email =
          "Please use a corporate email address (e.g., name@company.com)";
      }
    }

    if (!form.details.trim()) {
      e.details = "Please describe your project scope";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_IT_OUTSOURCING_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: form.name,
            email: form.email,
            phoneNumber: form.phone || "N/A",
            projectDetails: form.details,
            page_source: pageSource,
            form_name: formName,
            user_intent: userIntent,
          },
          publicKey,
        );
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }

      // Guarantee gtag tracking even if window.gtag isn't defined as a direct function yet
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-18247449976/ru9CCNK_n-gcEPj6h_1D",
          value: 1.0,
          currency: "INR",
        });
      } else if (
        Array.isArray((window as unknown as { dataLayer: unknown[] }).dataLayer)
      ) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
          event: "conversion",
          send_to: "AW-18247449976/ru9CCNK_n-gcEPj6h_1D",
          value: 1.0,
          currency: "INR",
        });
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-2 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        <h3 className="mt-3 text-xl font-bold text-ink">Request Received!</h3>

        <p className="mt-1 text-xs text-ink-soft leading-relaxed">
          We’re reviewing your requirements and will deliver your custom
          proposal within 1–3 business hours.
        </p>

        <div className="mt-4 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
          <p className="text-xs font-semibold text-ink">
            Need an urgent response? Skip the wait:
          </p>

          <div className="mt-2.5 flex flex-col gap-2">
            <a
              href="https://wa.me/919004575425"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+919004575425"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-slate-100"
            >
              <Phone className="h-3.5 w-3.5 text-ink-soft" />
              +91 90045 75425
            </a>

            <a
              href="mailto:contact@astechnix.com"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:bg-slate-100"
            >
              <Mail className="h-3.5 w-3.5 text-ink-soft" />
              contact@astechnix.com
            </a>
          </div>
        </div>

        <button
          onClick={() => setStatus("idle")}
          className="mt-3 text-xs font-semibold text-brand-accent hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-ink">
        Request an Outsourcing Estimate
      </h2>
      <p className="mt-1 text-xs text-ink-soft leading-snug">
        Share your IT requirements to receive a custom proposal within 1–3
        business hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-3.5 space-y-2.5" noValidate>
        <div>
          <label
            htmlFor="lead-name"
            className="block text-xs font-semibold text-ink mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="input-field !py-2 !text-sm"
            placeholder="Your name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-0.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lead-email"
            className="block text-xs font-semibold text-ink mb-1"
          >
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-field !py-2 !text-sm"
            placeholder="you@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-0.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lead-phone"
            className="block text-xs font-semibold text-ink mb-1"
          >
            Phone Number{" "}
            <span className="text-[11px] font-normal text-ink-muted">
              (Optional)
            </span>
          </label>
          <input
            id="lead-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="input-field !py-2 !text-sm"
            placeholder="+1 555 123 4567"
          />
        </div>

        <div>
          <label
            htmlFor="lead-scope"
            className="block text-xs font-semibold text-ink mb-1"
          >
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="lead-scope"
            rows={2}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="input-field !py-1.5 !text-sm resize-y"
            placeholder="Briefly describe your IT outsourcing requirements..."
            aria-invalid={!!errors.details}
          />
          {errors.details && (
            <p className="mt-0.5 text-xs text-red-500">{errors.details}</p>
          )}
        </div>

        {status === "error" && (
          <p className="text-xs text-red-500">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full !py-2.5 !text-sm font-semibold disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Get My Free Estimate"}
        </button>

        <p className="text-center text-[11px] text-ink-muted">
          No spam. We respond within 1-3 business hours.
        </p>
      </form>
    </div>
  );
}
