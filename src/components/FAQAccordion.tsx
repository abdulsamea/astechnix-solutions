import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FaqItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <div className="divide-y divide-border-default border-y border-border-default">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`transition-colors duration-300 ${isOpen ? "border-l-4 border-brand-dark pl-3" : "border-l-4 border-transparent pl-3"}`}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-heading font-semibold text-brand-dark">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-accent" : "text-ink-muted"}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-base text-ink-soft leading-[1.7]">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
