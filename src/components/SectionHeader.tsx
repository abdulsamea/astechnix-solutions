import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "left", variant = "light", className = "" }: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();
  const isDark = variant === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-[0.15em] mb-4 ${isDark ? "text-brand-accent-light" : "text-brand-accent"}`}>{eyebrow}</p>
      )}
      <h2 className={`heading-2 ${isDark ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`text-lead mt-5 ${isDark ? "text-white/70" : ""}`}>{description}</p>}
    </motion.div>
  );
}
