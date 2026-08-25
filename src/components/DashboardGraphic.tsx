import { motion } from "framer-motion";
import { Activity, ShieldCheck, TrendingUp } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function DashboardGraphic() {
  const reducedMotion = useReducedMotion();

  const bars = [68, 82, 74, 90, 78, 95];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent-light">AStechnix Outsourcing Hub</p>
          <p className="mt-1 font-heading text-lg font-bold text-white">Operational Business Metrics</p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            {!reducedMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-semibold text-emerald-300">All Systems Operational</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
        <StatCard icon={<Activity className="h-4 w-4" />} label="System Availability (SLA)" value="99.98%" subtext="Guaranteed" />
        <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Efficiency Improvement" value="45%" subtext="Avg Cost Reduction" />
        <StatCard icon={<ShieldCheck className="h-4 w-4" />} label="Staff Productivity Gain" value="32%" subtext="Reduced Internal To-Dos" />
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-brand-dark/40 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white/80">Turnkey Project Velocity</p>
          <p className="text-xs text-white/40">Delivery Sprints (Last 6 months)</p>
        </div>
        <div className="mt-4 flex h-24 items-end justify-between gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={reducedMotion ? false : { height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-1 rounded-t-sm ${h > 90 ? "bg-brand-accent" : "bg-brand-accent/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <IncidentRow label="Customer Support SLA" value="14 min" subtext="Avg Resolve Time" />
        <IncidentRow label="Service Level Performance" value="98%" subtext="Quarterly Compliance" />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, subtext }: { icon: React.ReactNode; label: string; value: string; subtext: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-brand-dark/40 p-4">
      <div className="flex items-center gap-2 text-brand-accent-light">{icon}</div>
      <p className="mt-2 font-heading text-2xl font-extrabold text-white">{value}</p>
      <p className="text-xs text-white/50">{label}</p>
      <p className="mt-0.5 text-[10px] font-medium text-brand-accent-light/70">{subtext}</p>
    </div>
  );
}

function IncidentRow({ label, value, subtext }: { label: string; value: string; subtext: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-brand-dark/30 px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs text-white/50">{label}</p>
        <p className="text-[10px] text-brand-accent-light/60">{subtext}</p>
      </div>
      <span className="shrink-0 text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
