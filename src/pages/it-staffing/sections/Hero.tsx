import { ShieldCheck, Clock, ShieldOff } from "lucide-react";

const TAGS = [
  { icon: ShieldCheck, label: "Pre-Vetted Tech Experts" },
  { icon: Clock, label: "48-Hour Onboarding" },
  { icon: ShieldOff, label: "Zero Upfront Risk" },
];

type Props = {
  onFindSpecialists: () => void;
  onBrowseRoles: () => void;
};

export default function Hero({ onFindSpecialists, onBrowseRoles }: Props) {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-pacific-cyan/20 blur-3xl" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              {TAGS.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-pacific-cyan/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-pacific-cyan backdrop-blur-sm sm:text-sm"
                >
                  <t.icon className="h-3.5 w-3.5" />
                  {t.label}
                </span>
              ))}
            </div>

            <h1
              className="mt-5 font-heading font-bold text-white text-balance"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Deploy Vetted Offshore IT, Cloud, CRM, &amp; Cybersecurity Talent
              in 48 Hours.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Stop letting talent shortages stall your operational roadmap.
              Scale with experienced offshore Indian IT professionals—from Cloud
              Architects and Salesforce Admins to SOC Engineers and DevOps
              Leads—with guaranteed timezone overlap and 100% legal IP
              protection.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onFindSpecialists}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pacific-cyan to-sky-blue px-6 py-4 text-base font-heading font-semibold text-white shadow-lg shadow-pacific-cyan/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-pacific-cyan/40"
              >
                Find Available Specialists
              </button>
              <button
                onClick={onBrowseRoles}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all hover:border-pacific-cyan/50 hover:bg-white/10"
              >
                Browse Talent by Role
              </button>
            </div>

            <p className="mt-5 text-sm text-white/50">
              Trusted by 60+ enterprise clients across US, UK, EU &amp; Gulf.{" "}
              <span className="font-semibold text-white/80">
                ISO 27001 &amp; SOC 2 Certified.
              </span>
            </p>
          </div>

          {/* Right column: live profile card */}
          <div className="lg:col-span-5">
            <LiveProfileCard onFindSpecialists={onFindSpecialists} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveProfileCard({ onFindSpecialists }: Omit<Props, "onBrowseRoles">) {
  return (
    <div className="relative mx-auto max-w-md lg:mx-0">
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-pacific-cyan/20 to-emerald-400/10 blur-xl" />
      <div className="relative rounded-2xl border border-white/15 bg-deep-navy/80 p-5 shadow-xl backdrop-blur-md sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Live Bench
            </span>
          </div>
          <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-white/70">
            Talent #702
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pacific-cyan to-sky-blue text-base font-bold text-white">
            A
          </div>
          <div>
            <p className="text-base font-heading font-bold text-white">
              Anonymized Specialist
            </p>
            <p className="text-sm text-white/60">
              Senior Salesforce / HubSpot CRM Architect
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <Stat label="Experience" value="7 yrs" />
          <Stat label="Starting Rate" value="$22/hr" />
          <Stat label="Overlap" value="US EST" />
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Certifications
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Salesforce ADV-ADM", "HubSpot Solutions", "ServiceNow CSA"].map(
              (c) => (
                <span
                  key={c}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white/80"
                >
                  {c}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-emerald-500/10 px-3 py-2.5">
          <span className="text-sm font-semibold text-emerald-400">
            Available Immediately
          </span>
          <span className="text-xs font-medium text-emerald-400/70">
            Verified this week
          </span>
        </div>

        <button
          onClick={onFindSpecialists}
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-pacific-cyan to-sky-blue px-4 py-3.5 text-sm font-heading font-semibold text-white transition-all hover:shadow-lg hover:shadow-pacific-cyan/30"
        >
          Request Full Details
        </button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 px-2 py-2.5 text-center">
      <p className="text-sm font-bold text-white">{value}</p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/40">
        {label}
      </p>
    </div>
  );
}
