import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceSummary } from "../types";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface ServiceCardProps {
  service: ServiceSummary;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const reducedMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={service.path}
        className="group block h-full rounded-lg border border-ink/10 bg-white p-6 transition-all duration-200 hover:border-brand-accent/30 hover:shadow-md"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-lg font-heading font-bold text-ink">{service.title}</h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{service.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
