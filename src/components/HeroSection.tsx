import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface HeroSectionProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}

export function HeroSection({ eyebrow, title, description, children }: HeroSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="container-content py-16 md:py-24 lg:py-28">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-4">{eyebrow}</p>
          )}
          <h1 className="heading-1 text-ink">{title}</h1>
          <p className="text-lead mt-6">{description}</p>
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
