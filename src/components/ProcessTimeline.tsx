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

  // Dynamically balance grid columns based on number of steps (max 4 columns for 4 items)
  const gridColsClass =
    steps.length === 4
      ? "lg:grid-cols-4"
      : steps.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-5";

  return (
    <div className={`grid gap-8 sm:grid-cols-2 ${gridColsClass} w-full`}>
      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Badge */}
          <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-dark text-sm font-heading font-bold text-white">
            {s.step}
          </span>

          {/* Connector Line */}
          {i < steps.length - 1 && (
            <span className="absolute top-5 left-[calc(50%+20px)] z-0 hidden h-px w-[calc(100%-20px)] bg-ink/10 lg:block" />
          )}

          {/* Text Content */}
          <h3 className="mt-5 text-base font-heading font-bold text-ink">
            {s.title}
          </h3>
          <p className="mt-2 text-sm text-ink-soft leading-[1.7]">
            {s.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
