import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { company } from "../config/company";
import { footerServices, footerDeliveryModel, footerEngagement, footerCompany, footerLegal, type NavItem } from "../config/navigation";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-content py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="light" className="h-9 w-auto" />
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
              {company.tagline}. Headquartered in {company.headquarters}.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={company.emailHref} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-brand-accent" />
                {company.email}
              </a>
              <a href={company.phoneHref} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-accent" />
                {company.phoneDisplay}
              </a>
              <p className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4 text-brand-accent" />
                {company.headquarters}
              </p>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              <FooterColumn title="Services" items={footerServices} />
              <FooterColumn title="Delivery Model" items={footerDeliveryModel} />
              <FooterColumn title="Engagement" items={footerEngagement} />
              <FooterColumn title="Company" items={footerCompany} />
              <FooterColumn title="Legal" items={footerLegal} />
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <SocialLink href={company.social.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
            <SocialLink href={company.social.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
            <SocialLink href={company.social.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h3 className="text-sm font-heading font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="text-sm text-white/50 transition-colors hover:text-white">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/60 transition-all duration-300 hover:bg-brand-accent hover:text-white">
      {children}
    </a>
  );
}
