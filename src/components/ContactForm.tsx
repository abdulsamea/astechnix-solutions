import { useState, type FormEvent } from "react";
import { emailjsConfig } from "../config/emailjs";

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const initialState: ContactFormState = { name: "", email: "", company: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});

  const validate = (): boolean => {
    const e: Partial<ContactFormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.message.trim()) e.message = "Message is required";
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
          { from_name: form.name, from_email: form.email, company: form.company, message: form.message },
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
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-center">
        <h3 className="text-lg font-heading font-bold text-ink">Message sent</h3>
        <p className="mt-2 text-sm text-ink-soft">Thank you for reaching out. We'll respond within one business day.</p>
        <button onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold text-brand-accent hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">Full Name <span className="text-red-500">*</span></label>
        <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your name" aria-invalid={!!errors.name} />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email <span className="text-red-500">*</span></label>
        <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="you@company.com" aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">Company</label>
        <input id="company" type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input-field" placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">Message <span className="text-red-500">*</span></label>
        <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-y" placeholder="Tell us about your requirements..." aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      {status === "error" && <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>}
      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
