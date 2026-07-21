import { COMPLIANCE_BADGES } from '../data';
import { ShieldCheck, FileLock2, Globe2, HeartPulse, Star } from 'lucide-react';

const ICONS = [ShieldCheck, FileLock2, Globe2, HeartPulse, Star];

export default function ComplianceBar() {
  return (
    <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/40">
          Enterprise Compliance &amp; Global Trust
        </p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {COMPLIANCE_BADGES.map((b, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-heading font-bold text-white">{b.label}</p>
                  <p className="truncate text-xs text-white/50">{b.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
