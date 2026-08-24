import { Seo } from "../components/Seo";
import { PageHeader, type Crumb } from "../components/Breadcrumbs";
import { SectionHeader } from "../components/SectionHeader";
import { CTASection } from "../components/CTASection";
import { ContactForm } from "../components/ContactForm";
import { company } from "../config/company";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const crumbs: Crumb[] = [{ label: "Home", path: "/" }, { label: "Contact" }];

export default function Contact() {
  return (
    <>
      <Seo meta={{ title: "Contact AStechnix | Request a Consultation", description: "Contact AStechnix to discuss managed IT outsourcing, SLA governance, and engagement models. Email, phone, and inquiry form." }} />
      <PageHeader breadcrumbs={crumbs} title="Request a Consultation" description="Tell us about your requirements. We'll respond within one business day to schedule a consultation with our delivery team." />

      <section className="section-padding bg-canvas">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader eyebrow="Inquiry" title="Send us a message" className="mb-8" />
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Direct Contact" title="Other ways to reach us" className="mb-6" />
              <div className="space-y-4">
                <a href={company.emailHref} className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-4 transition-colors hover:border-brand-accent/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent"><Mail className="h-5 w-5" /></div>
                  <div><p className="text-sm font-medium text-ink">Email</p><p className="text-sm text-ink-soft">{company.email}</p></div>
                </a>
                <a href={company.phoneHref} className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-4 transition-colors hover:border-brand-accent/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent"><Phone className="h-5 w-5" /></div>
                  <div><p className="text-sm font-medium text-ink">Phone</p><p className="text-sm text-ink-soft">{company.phoneDisplay}</p></div>
                </a>
                <div className="flex items-start gap-4 rounded-lg border border-ink/10 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent"><MapPin className="h-5 w-5" /></div>
                  <div><p className="text-sm font-medium text-ink">Headquarters</p><p className="text-sm text-ink-soft">{company.headquarters}</p></div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-heading font-semibold text-ink mb-3">Connect on social</h3>
                <div className="flex gap-3">
                  <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 text-ink-soft transition-colors hover:border-brand-accent hover:text-brand-accent"><Linkedin className="h-4 w-4" /></a>
                  <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 text-ink-soft transition-colors hover:border-brand-accent hover:text-brand-accent"><Facebook className="h-4 w-4" /></a>
                  <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 text-ink-soft transition-colors hover:border-brand-accent hover:text-brand-accent"><Instagram className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Prefer a direct conversation?" description={`Call us at ${company.phoneDisplay} or email ${company.email}. We respond to all inquiries within one business day.`} />
    </>
  );
}
