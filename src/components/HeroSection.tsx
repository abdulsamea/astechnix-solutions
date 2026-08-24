import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface HeroSectionProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  variant?: "light" | "dark";
}

export function HeroSection({ eyebrow, title, description, children, variant = "light" }: HeroSectionProps) {
  const reducedMotion = useReducedMotion();
  const isDark = variant === "dark";

  return (
    <section className={`relative overflow-hidden ${isDark ? "bg-brand-dark text-white" : "bg-white"}`}>
      {isDark && <div className="absolute inset-0 grid-pattern-dark opacity-50" />}
      <div className="container-content relative">
        <div className="py-16 md:py-24 lg:py-32 max-w-4xl">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && (
              <p className={`text-sm font-semibold uppercase tracking-[0.15em] mb-5 ${isDark ? "text-brand-accent-light" : "text-brand-accent"}`}>
                {eyebrow}
              </p>
            )}
            <h1 className={`heading-display ${isDark ? "text-white" : "text-ink"}`}>
              {title}
            </h1>
            <p className={`text-lead mt-6 max-w-2xl ${isDark ? "text-white/70" : ""}`}>
              {description}
            </p>
            {children && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
