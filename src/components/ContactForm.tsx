import { useState, type ChangeEvent, type FormEvent } from "react";
import { commonEmailProviders } from "../data/constants";

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
      newErrors.email = "Please enter your business email.";
    } else if (!isValidEmail(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    } else if (!isBusinessEmail(form.email.trim())) {
      newErrors.email =
        "Please use your company email address instead of Gmail, Yahoo, Outlook, or another personal email.";
    }

    // Company validation
    if (!form.company.trim()) {
      newErrors.company = "Please enter your company name.";
    } else if (form.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters.";
    } else if (form.company.trim().length > 150) {
      newErrors.company = "Company name must be less than 150 characters.";
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Please tell us a little about your requirements.";
    } else if (form.message.trim().length < 10) {
      newErrors.message =
        "Please provide a little more detail about your requirements.";
    } else if (form.message.trim().length > 5000) {
      newErrors.message = "Message must be less than 5000 characters.";
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

    // Clear field error while user is correcting the field
    if (errors[id as keyof ContactFormState]) {
      setErrors((previous) => ({
        ...previous,
        [id]: undefined,
      }));
    }

    // Clear submission error when user edits the form
    if (submitError) {
      setSubmitError("");
    }

    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === "submitting") {
      return;
    }

    setSubmitError("");

    // Validate form
    if (!validate()) {
      setStatus("idle");
      return;
    }

    // Get EmailJS credentials directly from Vite
    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    // Check EmailJS configuration
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration is missing.", {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      });

      setStatus("error");
      setSubmitError(
        "The contact form is temporarily unavailable. Please email us directly.",
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

      setStatus("success");
      setForm(initialState);
      setErrors({});
      setSubmitError("");
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus("error");
      setSubmitError(
        "We couldn't send your message right now. Please try again in a moment or email us directly.",
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
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
        <h3 className="text-lg font-heading font-bold text-ink">
          Message sent
        </h3>

        <p className="mt-2 text-sm text-ink-soft">
          Thank you for reaching out. A member of our team will review your
          requirements and get back to you within one business day.
        </p>

        <button
          type="button"
          onClick={handleSendAnother}
          className="mt-4 text-sm font-semibold text-brand-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-busy={status === "submitting"}
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Full Name <span className="text-red-500">*</span>
        </label>

        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Your name"
          autoComplete="name"
          maxLength={100}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />

        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Business Email <span className="text-red-500">*</span>
        </label>

        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="input-field"
          placeholder="you@company.com"
          autoComplete="email"
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />

        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Company <span className="text-red-500">*</span>
        </label>

        <input
          id="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className="input-field"
          placeholder="Company name"
          autoComplete="organization"
          maxLength={150}
          aria-invalid={Boolean(errors.company)}
          aria-describedby={errors.company ? "company-error" : undefined}
        />

        {errors.company && (
          <p id="company-error" className="mt-1 text-sm text-red-500">
            {errors.company}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-ink"
        >
          Message <span className="text-red-500">*</span>
        </label>

        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="input-field resize-y"
          placeholder="Tell us about your requirements..."
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />

        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500">
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
          <p className="text-sm text-red-600">{submitError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
