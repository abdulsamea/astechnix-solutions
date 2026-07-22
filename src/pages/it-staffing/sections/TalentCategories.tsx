import { useState } from "react";
import { ROLE_CATEGORIES, TalentCategoriesProps } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export default function TalentCategories({
  onFindSpecialists,
}: TalentCategoriesProps) {
  const [active, setActive] = useState(ROLE_CATEGORIES[0].id);
  const current = ROLE_CATEGORIES.find((c) => c.id === active)!;

  return (
    <section id="talent" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pacific-cyan">
            Talent Directory
          </p>
          <h2
            className="mt-2 font-heading font-bold text-white text-balance"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            On-Demand IT Talent Across Every Discipline
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Pre-screened, English-fluent specialists ready to integrate directly
            into your workflow.
          </p>
        </div>

        {/* Tabs — horizontally scrollable on mobile */}
        <div className="no-scrollbar mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-2 sm:flex-wrap">
            {ROLE_CATEGORIES.map((cat) => {
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActive(cat.id);
                  }}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-heading font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-pacific-cyan to-sky-blue text-white shadow-lg shadow-pacific-cyan/30"
                      : "border border-white/15 bg-white/5 text-white/80 hover:border-pacific-cyan/50 hover:bg-white/10"
                  }`}
                >
                  <cat.icon className="h-4 w-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <p className="text-base text-white/70">{current.blurb}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {current.roles.map((r) => (
                <div
                  onClick={onFindSpecialists}
                  key={r.title}
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-pacific-cyan/50 hover:bg-white/10"
                >
                  <p className="text-base font-heading font-bold text-white">
                    {r.title}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-white/80">
                      {r.exp}
                    </span>
                    <span className="text-sm font-bold text-pacific-cyan">
                      {r.rate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
