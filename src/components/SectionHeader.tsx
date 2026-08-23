import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = "left", className = "" }: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent mb-3">{eyebrow}</p>
      )}
      <h2 className="heading-2 text-ink">{title}</h2>
      {description && <p className="text-lead mt-4">{description}</p>}
    </motion.div>
  );
}
