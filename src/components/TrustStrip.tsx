import { motion } from "framer-motion";
import type { ProofPoint } from "../types";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface TrustStripProps {
  points: ProofPoint[];
}

export function TrustStrip({ points }: TrustStripProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="border-y border-ink/10 bg-white">
      <div className="container-content">
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-14">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="font-heading text-3xl font-extrabold text-brand-dark md:text-4xl">
                {point.value}
                {point.suffix && <span className="text-brand-accent">{point.suffix}</span>}
              </p>
              <p className="mt-1.5 text-sm text-ink-muted">{point.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
