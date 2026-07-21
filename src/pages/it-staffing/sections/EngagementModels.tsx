import { ENGAGEMENT_MODELS, COMPARISON_ROWS } from '../data';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EngagementModels() {
  return (
    <section id="engagement" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pacific-cyan">
            Engagement Models
          </p>
          <h2
            className="mt-2 font-heading font-bold text-white text-balance"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Flexible Delivery, Built Around Your Risk Profile
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Three ways to engage. Every model includes our 14-day risk-free trial and 48-hour
            replacement guarantee.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((m) => (
            <div
              key={m.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-pacific-cyan/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pacific-cyan/15">
                <m.icon className="h-5 w-5 text-pacific-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-heading font-bold text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{m.description}</p>
              <p className="mt-4 inline-flex items-start gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                {m.best}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3
            className="font-heading font-bold text-white"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight: 1.2 }}
          >
            Local Sourcing vs. Our Staffing Network
          </h3>

          {/* Desktop table */}
          <div className="mt-6 hidden overflow-hidden rounded-2xl border border-white/10 bg-deep-navy/60 md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white">Metric</th>
                  <th className="px-6 py-4 text-left text-sm font-heading font-bold text-white/50">
                    Local Sourcing
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-heading font-bold text-pacific-cyan">
                    Our Staffing Network
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/5'}>
                    <td className="px-6 py-4 text-sm font-semibold text-white">{row.metric}</td>
                    <td className="px-6 py-4 text-sm text-white/50">
                      <span className="inline-flex items-center gap-2">
                        <X className="h-4 w-4 text-red-400" />
                        {row.local}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-white">
                      <span className="inline-flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-400" />
                        {row.ours}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="mt-6 space-y-3 md:hidden">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.metric} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-heading font-bold text-white">{row.metric}</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                    <div>
                      <p className="text-xs text-white/40">Local Sourcing</p>
                      <p className="text-sm text-white/60">{row.local}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <p className="text-xs text-white/40">Our Network</p>
                      <p className="text-sm font-semibold text-white">{row.ours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl bg-gradient-to-r from-deep-navy to-royal-blue p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-heading font-bold text-white">Not sure which model fits?</p>
              <p className="mt-1 text-sm text-white/70">
                Book a 15-minute call. We will recommend the right structure for your scope.
              </p>
            </div>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue px-5 py-3.5 text-sm font-heading font-semibold text-white transition-all hover:shadow-lg hover:shadow-pacific-cyan/30"
            >
              Talk to a Specialist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
