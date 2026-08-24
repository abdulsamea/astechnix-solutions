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
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-dark text-sm font-heading font-bold text-white">{s.step}</span>
          {i < steps.length - 1 && <span className="hidden h-px w-full bg-ink/10 lg:block mt-5 absolute top-5 left-10 right-0" />}
          <h3 className="mt-5 text-base font-heading font-bold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm text-ink-soft leading-[1.7]">{s.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
