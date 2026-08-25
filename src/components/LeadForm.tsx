import { useState, type FormEvent } from "react";
import { emailjsConfig } from "../config/emailjs";

interface LeadFormState {
  name: string;
  email: string;
  phone: string;
  scope: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialState: LeadFormState = { name: "", email: "", phone: "", scope: "" };

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
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid work email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.scope.trim()) e.scope = "Please describe your project scope";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      if (emailjsConfig.serviceId && emailjsConfig.templateId) {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            from_name: form.name,
            from_email: form.email,
            phone: form.phone,
            project_scope: form.scope,
            page_source: pageSource,
            form_name: formName,
            user_intent: userIntent,
          },
          emailjsConfig.publicKey
        );
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-lg font-heading font-bold text-ink">Request received</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thank you. Our team will reach out within one business hour to schedule your SLA audit.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-brand-accent hover:underline">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="lead-name" className="block text-sm font-medium text-ink mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-field"
          placeholder="Your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="lead-email" className="block text-sm font-medium text-ink mb-1.5">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="lead-phone" className="block text-sm font-medium text-ink mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input-field"
          placeholder="+91 90000 00000"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="lead-scope" className="block text-sm font-medium text-ink mb-1.5">
          Project Scope <span className="text-red-500">*</span>
        </label>
        <textarea
          id="lead-scope"
          rows={3}
          value={form.scope}
          onChange={(e) => setForm({ ...form, scope: e.target.value })}
          className="input-field resize-y"
          placeholder="Briefly describe your IT outsourcing requirements..."
          aria-invalid={!!errors.scope}
        />
        {errors.scope && <p className="mt-1 text-sm text-red-500">{errors.scope}</p>}
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again or call us directly.</p>
      )}
      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Get My Free SLA Audit"}
      </button>
      <p className="text-center text-xs text-ink-muted">
        No spam. We respond within 1 business hour during IST working hours.
      </p>
    </form>
  );
}
