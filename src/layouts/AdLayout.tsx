import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Logo } from "../components/Logo";
import { ScrollToTop } from "./ScrollToTop";
import { company } from "../config/company";

interface AdLayoutProps {
  children: ReactNode;
}

export function AdLayout({ children }: AdLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-white/95 backdrop-blur-md">
        <div className="container-content">
          <div className="flex h-16 items-center justify-between md:h-[72px]">
            <Link to="/" className="flex items-center" aria-label="AStechnix home">
              <Logo className="h-8 w-auto md:h-9" />
            </Link>
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href={company.phoneHref}
                className="hidden items-center gap-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand-accent sm:flex"
              >
                <Phone className="h-4 w-4 text-brand-accent" />
                {company.phoneDisplay}
              </a>
              <a
                href={company.phoneHref}
                className="btn-primary !px-4 !py-2.5 text-sm sm:hidden"
                aria-label={`Call ${company.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" />
              </a>
              <a href="#lead-form" className="btn-primary !px-5 !py-2.5 text-sm">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-ink/10 bg-canvas">
        <div className="container-content">
          <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <Link to="/" className="flex items-center" aria-label="AStechnix home">
              <Logo className="h-7 w-auto" />
            </Link>
            <div className="flex flex-col items-center gap-2 text-sm text-ink-muted sm:flex-row sm:gap-6">
              <a href={company.phoneHref} className="font-semibold text-brand-dark transition-colors hover:text-brand-accent">
                {company.phoneDisplay}
              </a>
              <a href={company.emailHref} className="transition-colors hover:text-brand-accent">
                {company.email}
              </a>
              <span>&copy; {new Date().getFullYear()} {company.name}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
