import { TIMELINE_STEPS } from '../data';

export default function OnboardingTimeline() {
  return (
    <section id="process" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pacific-cyan">
            Onboarding Timeline
          </p>
          <h2
            className="mt-2 font-heading font-bold text-white text-balance"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Frictionless Onboarding in 4 Steps
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            From first call to a working specialist in under two weeks—no agency runaround.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIMELINE_STEPS.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pacific-cyan to-sky-blue text-base font-heading font-bold text-white">
                {s.step}
              </div>
              {i < TIMELINE_STEPS.length - 1 && (
                <div className="absolute left-6 top-12 hidden h-[calc(100%-3rem)] w-px bg-white/15 lg:block" />
              )}
              <h3 className="mt-4 text-base font-heading font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
