import { TALENT_CARDS, TalentCategoriesProps } from "../data";
import { Clock, Globe2, BadgeCheck, FileText } from "lucide-react";

export default function TalentPreview({
  onFindSpecialists,
}: TalentCategoriesProps) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pacific-cyan">
            Active Bench
          </p>
          <h2
            className="mt-2 font-heading font-bold text-white text-balance"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Anonymized Talent Preview Cards
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Real bench samples. Names are masked until you request a full resume
            under NDA.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TALENT_CARDS.map((t) => (
            <article
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-pacific-cyan/50 hover:bg-white/10 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                  {t.available}
                </span>
                <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-white/70">
                  {t.id}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue text-base font-bold text-white">
                  {t.id.replace("#", "")}
                </div>
                <div className="min-w-0">
                  <p className="text-base font-heading font-bold text-white">
                    {t.role}
                  </p>
                  <p className="text-sm text-white/60">{t.category}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Meta icon={Clock} label={`${t.exp} experience`} />
                <Meta icon={Globe2} label={t.overlap} />
                <Meta icon={BadgeCheck} label="Certified" />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Certifications
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {t.certifications.map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Stack &amp; Tools
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {t.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-pacific-cyan/15 px-2 py-1 text-xs font-medium text-pacific-cyan"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <p className="text-xs text-white/40">Starting rate</p>
                  <p className="text-lg font-heading font-bold text-white">
                    {t.rate}
                  </p>
                </div>
                <button
                  onClick={onFindSpecialists}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue px-4 py-3 text-sm font-heading font-semibold text-white transition-all hover:shadow-lg hover:shadow-pacific-cyan/30"
                >
                  <FileText className="h-4 w-4" />
                  Request Profile
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meta({ icon: Icon, label }: { icon: typeof Clock; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/80">
      <Icon className="h-3.5 w-3.5 text-pacific-cyan" />
      {label}
    </span>
  );
}
