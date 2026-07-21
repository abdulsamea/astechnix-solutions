import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Calendar, ShieldCheck } from 'lucide-react';
import { ROLE_CATEGORIES } from '../data';

const TEAM_SIZES = ['1–2 Specialists', '3–5 Team', '5+ Pod'];
const OVERLAPS = ['US EST', 'US PST', 'UK GMT', 'AEST', 'Gulf GST'];

export default function Estimator() {
  const [step, setStep] = useState(0);
  const [roleFamily, setRoleFamily] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [overlap, setOverlap] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateStep = (): boolean => {
    const e: Record<string, string> = {};
    if (step === 0 && !roleFamily) e.roleFamily = 'Select a role family to continue.';
    if (step === 1 && !teamSize) e.teamSize = 'Select a team size.';
    if (step === 1 && !overlap) e.overlap = 'Select your timezone overlap.';
    if (step === 2) {
      if (!name.trim()) e.name = 'Name is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid business email.';
      if (!timeline) e.timeline = 'Select a timeline.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, 2));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = () => {
    if (!validateStep()) return;
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setStep(0);
    setRoleFamily('');
    setTeamSize('');
    setOverlap('');
    setName('');
    setEmail('');
    setTimeline('');
    setErrors({});
  };

  return (
    <section id="estimator" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white/5 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-pacific-cyan">
            IT Staffing &amp; Rate Estimator
          </p>
          <h2
            className="mt-2 font-heading font-bold text-white text-balance"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Calculate Hiring Velocity &amp; Get Profile Matches
          </h2>
          <p className="mt-3 text-base text-white/70">
            Three quick inputs. We will send 3–5 matched, anonymized resumes within 24 hours.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/15 bg-deep-navy/80 p-5 shadow-2xl backdrop-blur-md sm:p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="mt-4 text-xl font-heading font-bold text-white sm:text-2xl">
                  Request Received
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-white/70">
                  We are matching your requirements now. Expect 3–5 anonymized resumes within 24
                  hours. Book a 15-minute discovery call to accelerate the process.
                </p>
                <a
                  href="#final-cta"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue px-6 py-3.5 text-sm font-heading font-semibold text-white transition-all hover:shadow-lg hover:shadow-pacific-cyan/30"
                >
                  <Calendar className="h-4 w-4" />
                  Schedule 15-Min Discovery Call
                </a>
                <button
                  onClick={reset}
                  className="mt-3 block w-full text-sm font-medium text-white/50 hover:text-white"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        i <= step ? 'bg-pacific-cyan' : 'bg-white/15'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                  Step {step + 1} of 3
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                    className="mt-5"
                  >
                    {step === 0 && (
                      <div>
                        <label className="block text-sm font-heading font-semibold text-white">
                          Select Role Family
                        </label>
                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {ROLE_CATEGORIES.map((c) => (
                            <button
                              key={c.id}
                              onClick={() => {
                                setRoleFamily(c.label);
                                setErrors((e) => ({ ...e, roleFamily: '' }));
                              }}
                              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                                roleFamily === c.label
                                  ? 'border-pacific-cyan bg-pacific-cyan/10 ring-1 ring-pacific-cyan'
                                  : 'border-white/15 hover:border-pacific-cyan/50 hover:bg-white/5'
                              }`}
                            >
                              <c.icon className="h-5 w-5 shrink-0 text-pacific-cyan" />
                              <span className="text-sm font-heading font-semibold text-white">
                                {c.label}
                              </span>
                            </button>
                          ))}
                        </div>
                        {errors.roleFamily && (
                          <p className="mt-2 text-sm text-red-400">{errors.roleFamily}</p>
                        )}
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <label className="block text-sm font-heading font-semibold text-white">
                            Team Size
                          </label>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {TEAM_SIZES.map((t) => (
                              <button
                                key={t}
                                onClick={() => {
                                  setTeamSize(t);
                                  setErrors((e) => ({ ...e, teamSize: '' }));
                                }}
                                className={`rounded-lg px-4 py-2.5 text-sm font-heading font-semibold transition-all ${
                                  teamSize === t
                                    ? 'bg-gradient-to-r from-pacific-cyan to-sky-blue text-white'
                                    : 'border border-white/15 text-white/80 hover:bg-white/5'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                          {errors.teamSize && (
                            <p className="mt-2 text-sm text-red-400">{errors.teamSize}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-heading font-semibold text-white">
                            Preferred Timezone Overlap
                          </label>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {OVERLAPS.map((o) => (
                              <button
                                key={o}
                                onClick={() => {
                                  setOverlap(o);
                                  setErrors((e) => ({ ...e, overlap: '' }));
                                }}
                                className={`rounded-lg px-4 py-2.5 text-sm font-heading font-semibold transition-all ${
                                  overlap === o
                                    ? 'bg-gradient-to-r from-pacific-cyan to-sky-blue text-white'
                                    : 'border border-white/15 text-white/80 hover:bg-white/5'
                                }`}
                              >
                                {o}
                              </button>
                            ))}
                          </div>
                          {errors.overlap && (
                            <p className="mt-2 text-sm text-red-400">{errors.overlap}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-4">
                        <Field
                          label="Full Name"
                          value={name}
                          onChange={setName}
                          placeholder="Jane Doe"
                          error={errors.name}
                        />
                        <Field
                          label="Business Email"
                          type="email"
                          value={email}
                          onChange={setEmail}
                          placeholder="jane@company.com"
                          error={errors.email}
                        />
                        <div>
                          <label className="block text-sm font-heading font-semibold text-white">
                            Timeline to Hire
                          </label>
                          <select
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-pacific-cyan focus:ring-2 focus:ring-pacific-cyan/30"
                          >
                            <option value="" className="bg-deep-navy">Select timeline</option>
                            <option className="bg-deep-navy">Immediate (this week)</option>
                            <option className="bg-deep-navy">1–2 weeks</option>
                            <option className="bg-deep-navy">3–4 weeks</option>
                            <option className="bg-deep-navy">Exploring options</option>
                          </select>
                          {errors.timeline && (
                            <p className="mt-1 text-sm text-red-400">{errors.timeline}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between gap-3">
                  {step > 0 ? (
                    <button
                      onClick={back}
                      className="rounded-xl border border-white/20 px-5 py-3 text-sm font-heading font-semibold text-white transition-colors hover:bg-white/5"
                    >
                      Back
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < 2 ? (
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue px-6 py-3.5 text-sm font-heading font-semibold text-white transition-all hover:shadow-lg hover:shadow-pacific-cyan/30"
                    >
                      Continue
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-heading font-semibold text-white transition-all hover:bg-emerald-600"
                    >
                      <ShieldCheck className="h-4 w-4" />
                      Get Profile Matches
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-heading font-semibold text-white">{label}</label>
      <input
        type={type}
        inputMode={type === 'email' ? 'email' : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-pacific-cyan focus:ring-2 focus:ring-pacific-cyan/30"
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
