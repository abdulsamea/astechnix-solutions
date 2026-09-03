import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { commonEmailProviders } from "../data/constants";
import { FormSuccessState } from "./FormSuccessState";

declare global {
  interface Window {
    gtag?: (
      command: string,
      target: string,
      config?: Record<string, unknown>,
    ) => void;
  }
}

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [submitError, setSubmitError] = useState("");

  const formRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to top of form when returning to form from success state
  useEffect(() => {
    if (status === "idle" && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
  };

  const isBusinessEmail = (email: string): boolean => {
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) {
      return false;
    }
    return !commonEmailProviders.includes(domain);
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormState> = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (form.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters.";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!isValidEmail(form.email.trim())) {
      newErrors.email = "Please enter a valid work email address.";
    } else if (!isBusinessEmail(form.email.trim())) {
      newErrors.email =
        "Please use a work email address (e.g., name@company.com).";
    }

    // Company validation
    if (!form.company.trim()) {
      newErrors.company = "Please enter your company or organisation name.";
    } else if (form.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters.";
    } else if (form.company.trim().length > 150) {
      newErrors.company = "Company name must be less than 150 characters.";
    }

    // Scope validation
    if (!form.message.trim()) {
      newErrors.message =
        "Please describe your IT outsourcing or staffing needs.";
    } else if (form.message.trim().length < 10) {
      newErrors.message =
        "Please provide a few more details about your team size or tech stack.";
    } else if (form.message.trim().length > 5000) {
      newErrors.message = "Details must be less than 5000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [id]: value,
    }));

    if (errors[id as keyof ContactFormState]) {
      setErrors((previous) => ({
        ...previous,
        [id]: undefined,
      }));
    }

    if (submitError) {
      setSubmitError("");
    }

    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "submitting") {
      return;
    }

    setSubmitError("");

    if (!validate()) {
      setStatus("idle");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setSubmitError(
        "The inquiry form is temporarily unavailable. Please email us directly.",
      );
      return;
    }

    setStatus("submitting");

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
        },
        {
          publicKey,
        },
      );

      // Trigger Google Ads conversion tracking safely
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
      setErrors({});
      setSubmitError("");
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus("error");
      setSubmitError(
        "We couldn't submit your inquiry right now. Please try again or email us directly.",
      );
    }
  };

  const handleSendAnother = () => {
    setStatus("idle");
    setForm(initialState);
    setErrors({});
    setSubmitError("");
  };

  if (status === "success") {
    return <FormSuccessState onReset={handleSendAnother} />;
  }

  return (
    <div ref={formRef} className="scroll-mt-20">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
        noValidate
        aria-busy={status === "submitting"}
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-semibold text-ink"
          >
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="input-field !py-2 !text-sm"
            placeholder="e.g., Alex Morgan"
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />

          {errors.name && (
            <p id="name-error" className="mt-0.5 text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-semibold text-ink"
          >
            Work Email <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="input-field !py-2 !text-sm"
            placeholder="alex@company.com"
            autoComplete="email"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />

          {errors.email && (
            <p id="email-error" className="mt-0.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="company"
            className="mb-1 block text-xs font-semibold text-ink"
          >
            Company / Organisation Name <span className="text-red-500">*</span>
          </label>

          <input
            id="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="input-field !py-2 !text-sm"
            placeholder="e.g., Acme Technologies"
            autoComplete="organization"
            maxLength={150}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />

          {errors.company && (
            <p id="company-error" className="mt-0.5 text-xs text-red-500">
              {errors.company}
            </p>
          )}
        </div>

        {/* Outsourcing Scope & Requirements */}
        <div>
          <label
            htmlFor="message"
            className="mb-1 block text-xs font-semibold text-ink"
          >
            Outsourcing Requirements & Team Needs{" "}
            <span className="text-red-500">*</span>
          </label>

          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="input-field !py-1.5 !text-sm resize-y"
            placeholder="e.g., Need offshore software developers, DevOps support, or dedicated support team..."
            maxLength={5000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />

          {errors.message && (
            <p id="message-error" className="mt-0.5 text-xs text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submission error */}
        {status === "error" && submitError && (
          <div
            role="alert"
            className="rounded-md border border-red-200 bg-red-50 p-3"
          >
            <p className="text-xs text-red-600">{submitError}</p>
          </div>
        )}

        {/* CTA Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full !py-2.5 !text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? "Submitting Request..."
            : "Request Outsourcing Proposal"}
        </button>

        <p className="text-center text-[11px] text-ink-muted">
          Strict NDA policy. We respond within 1 business day.
        </p>
      </form>
    </div>
  );
}
