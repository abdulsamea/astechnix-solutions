import { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pacific-cyan">
            Frequently Asked Questions
          </p>
          <h2
            className="mt-2 font-heading font-bold text-white text-balance"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Answers to Common Client Concerns
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-heading font-semibold text-white sm:text-lg">
                    {item.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/70 sm:px-6 sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
