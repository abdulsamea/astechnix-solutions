import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-accent text-sm font-heading font-bold text-white">{s.step}</span>
            {i < steps.length - 1 && <span className="hidden h-px flex-1 bg-ink/15 lg:block" />}
          </div>
          <h3 className="mt-4 text-base font-heading font-bold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
