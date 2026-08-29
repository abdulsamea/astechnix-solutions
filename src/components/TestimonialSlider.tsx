import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import type { Testimonial } from "../types";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="bg-canvas/50 py-section-sm md:py-section">
      <div className="container-content">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent mb-8">
            Testimonials
          </p>
          <h2 className="heading-2 text-center text-ink mb-12">
            What clients <span className="emphasis">think about us</span>
          </h2>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={reducedMotion ? false : { opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="card p-8 md:p-12"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-ink leading-relaxed font-medium">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent font-heading font-bold text-sm">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-ink text-sm">{t.author}</p>
                        <p className="text-sm text-ink-muted">{t.role}, {t.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 border-l-0 md:border-l border-ink/10 md:pl-8">
                    <p className="font-heading text-4xl font-extrabold text-brand-accent">{t.metric.value}</p>
                    <p className="mt-1 text-sm text-ink-muted max-w-[140px]">{t.metric.label}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-ink-muted font-medium">
                <span className="text-brand-accent font-heading font-bold">{String(index + 1).padStart(2, "0")}</span>
                {" "}/{" "}
                {String(testimonials.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 text-ink-soft transition-colors hover:border-brand-accent hover:text-brand-accent"
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 text-ink-soft transition-colors hover:border-brand-accent hover:text-brand-accent"
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
