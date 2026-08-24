import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { ArrowRight } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
}

interface TabbedContentProps {
  eyebrow?: string;
  heading: React.ReactNode;
  tabs: TabItem[];
}

export function TabbedContent({ eyebrow, heading, tabs }: TabbedContentProps) {
  const [active, setActive] = useState(tabs[0].id);
  const reducedMotion = useReducedMotion();
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="bg-white py-section-sm md:py-section border-y border-ink/10">
      <div className="container-content">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-accent mb-4 text-center">
            {eyebrow}
          </p>
        )}
        <h2 className="heading-2 text-center text-ink mb-12">{heading}</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                active === tab.id
                  ? "bg-brand-dark text-white"
                  : "bg-surface text-ink-soft hover:bg-ink/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h3 className="heading-3 text-ink mb-4">{activeTab.title}</h3>
            <p className="text-body max-w-2xl mx-auto">{activeTab.description}</p>
            {activeTab.linkLabel && activeTab.linkHref && (
              <a
                href={activeTab.linkHref}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
              >
                {activeTab.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
