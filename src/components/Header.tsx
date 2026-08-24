import { useState, useEffect, useRef, type KeyboardEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navigation } from "../config/navigation";
import { ctaConfig } from "../config/cta";
import { company } from "../config/company";
import { Logo } from "./Logo";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) setMobileOpen(false);
        else if (openMenu) setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen, openMenu]);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${scrolled ? "border-ink/10 shadow-sm" : "border-transparent"}`}>
        <div className="container-content">
          <div className="flex h-16 items-center justify-between md:h-[72px]">
            <Link to="/" className="flex items-center" aria-label="ASTechnix home">
              <Logo className="h-8 w-auto md:h-9" />
            </Link>
            <DesktopNavigation openMenu={openMenu} setOpenMenu={setOpenMenu} currentPath={location.pathname} reducedMotion={reducedMotion} />
            <div className="hidden md:flex items-center gap-3">
              <Link to={ctaConfig.primary.path} className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
                Contact Us
              </Link>
              <Link
                to={ctaConfig.primary.path}
                className="btn-primary"
              >
                {ctaConfig.primary.label}
              </Link>
            </div>
            <button onClick={() => setMobileOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface md:hidden" aria-label="Open menu" aria-expanded={mobileOpen}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} currentPath={location.pathname} reducedMotion={reducedMotion} />
    </>
  );
}

interface DesktopNavProps {
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
  currentPath: string;
  reducedMotion: boolean;
}

function DesktopNavigation({ openMenu, setOpenMenu, currentPath, reducedMotion }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
      {navigation.map((group) => {
        const hasChildren = !!group.children?.length;
        const isOpen = openMenu === group.label;
        const isActive = currentPath === group.path || (hasChildren && group.children!.some((c) => currentPath === c.path));

        return (
          <div key={group.label} className="relative" onMouseEnter={() => hasChildren && setOpenMenu(group.label)} onMouseLeave={() => hasChildren && setOpenMenu(null)}>
            {hasChildren ? (
              <button
                onClick={() => setOpenMenu(isOpen ? null : group.label)}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-brand-accent" : "text-ink-soft hover:text-brand-dark"}`}
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <Link to={group.path} className={`px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-brand-accent" : "text-ink-soft hover:text-brand-dark"}`}>{group.label}</Link>
            )}
            <AnimatePresence>
              {hasChildren && isOpen && (
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full z-50 min-w-[300px] pt-3"
                  role="menu"
                >
                  <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-card-hover">
                    {group.children!.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`group flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-canvas/60 ${currentPath === child.path ? "font-semibold text-brand-accent" : "text-ink-soft"}`}
                        role="menuitem"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                        <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 text-brand-accent" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  currentPath: string;
  reducedMotion: boolean;
}

function MobileNavigation({ open, onClose, currentPath, reducedMotion }: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && drawerRef.current) {
      const focusable = drawerRef.current.querySelector<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])");
      focusable?.focus();
    }
  }, [open]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-brand-dark/50 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={drawerRef}
            initial={reducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reducedMotion ? undefined : { x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 h-full w-[340px] max-w-[88vw] overflow-y-auto bg-white shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onKeyDown={handleKeyDown}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <Logo className="h-7 w-auto" />
              <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-surface" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-3 py-4">
              {navigation.map((group) => (
                <div key={group.label} className="mb-4">
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">{group.label}</p>
                  {group.children ? (
                    <div className="space-y-0.5">
                      {group.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${currentPath === child.path ? "bg-brand-accent/10 font-semibold text-brand-accent" : "text-ink-soft hover:bg-canvas/60"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link to={group.path} className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${currentPath === group.path ? "bg-brand-accent/10 font-semibold text-brand-accent" : "text-ink-soft hover:bg-canvas/60"}`}>
                      {group.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 border-t border-ink/10 pt-4">
                <Link to={ctaConfig.primary.path} className="btn-primary w-full">{ctaConfig.primary.label}</Link>
                <div className="mt-4 space-y-2 text-sm">
                  <a href={company.phoneHref} className="block text-ink-soft hover:text-brand-accent transition-colors">{company.phoneDisplay}</a>
                  <a href={company.emailHref} className="block text-ink-soft hover:text-brand-accent transition-colors">{company.email}</a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
