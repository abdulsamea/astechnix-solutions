import { Calendar, ShieldCheck, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { TalentCategoriesProps } from "../data";

export default function FinalCta({ onFindSpecialists }: TalentCategoriesProps) {
  return (
    <section
      id="final-cta"
      className="scroll-mt-24 relative overflow-hidden bg-gradient-to-br from-deep-navy via-royal-blue to-deep-navy"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-pacific-cyan/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-pacific-cyan/30 bg-white/5 px-4 py-2 text-xs font-semibold text-pacific-cyan backdrop-blur-sm">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/30" />
          Specialists available now
        </div>

        <h2
          className="mt-5 font-heading font-bold text-white text-balance"
          style={{
            fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Need Enterprise-Grade IT Talent Ready to Deploy This Week?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Talk with an IT staffing specialist today. Get matched with certified
          CRM, Cloud, Security, or Development experts within 24 hours.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            // to="/contact"
            onClick={onFindSpecialists}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue px-7 py-4 text-base font-heading font-semibold text-white shadow-lg shadow-pacific-cyan/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-pacific-cyan/40 sm:w-auto"
          >
            <Calendar className="h-5 w-5" />
            Schedule 15-Min Discovery Call
          </button>
          {/* <a
            href="#talent"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all hover:border-pacific-cyan/50 hover:bg-white/10 sm:w-auto"
          >
            Browse Talent
          </a> */}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/50">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-emerald-400" />
            48-hour deployment
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            14-day risk-free trial
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            4.9/5 on Clutch
          </span>
        </div>
      </div>
    </section>
  );
}
