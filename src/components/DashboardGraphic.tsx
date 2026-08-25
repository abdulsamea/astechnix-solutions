import { motion } from "framer-motion";
import { Activity, ShieldCheck, Server } from "lucide-react";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function DashboardGraphic() {
  const reducedMotion = useReducedMotion();

  const bars = [68, 82, 74, 90, 78, 95, 85, 88, 72, 93, 80, 96];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent-light">NOC Dashboard</p>
          <p className="mt-1 font-heading text-lg font-bold text-white">Live System Monitoring</p>
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
        <StatCard icon={<Activity className="h-4 w-4" />} label="SLA Uptime" value="99.98%" />
        <StatCard icon={<Server className="h-4 w-4" />} label="Active Nodes" value="247" />
        <StatCard icon={<ShieldCheck className="h-4 w-4" />} label="Threats Blocked" value="1.4k" />
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-brand-dark/40 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white/80">Response Time (ms)</p>
          <p className="text-xs text-white/40">Last 12 hours</p>
        </div>
        <div className="mt-4 flex h-24 items-end justify-between gap-1.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={reducedMotion ? false : { height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`flex-1 rounded-t-sm ${h > 90 ? "bg-brand-accent" : "bg-brand-accent/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <IncidentRow label="Avg Escalation Response" value="14 min" />
        <IncidentRow label="Open Critical Alerts" value="0" />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-brand-dark/40 p-4">
      <div className="flex items-center gap-2 text-brand-accent-light">{icon}</div>
      <p className="mt-2 font-heading text-2xl font-extrabold text-white">{value}</p>
      <p className="text-xs text-white/50">{label}</p>
    </div>
  );
}

function IncidentRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-brand-dark/30 px-4 py-3">
      <span className="text-xs text-white/50">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
