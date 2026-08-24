import { type ReactNode } from "react";
import { Check } from "lucide-react";

interface SLAFeatureProps {
  title: string;
  description: string;
  icon?: ReactNode;
  variant?: "light" | "dark";
}

export function SLAFeature({ title, description, icon, variant = "light" }: SLAFeatureProps) {
  const isDark = variant === "dark";
  return (
    <div className="flex gap-4">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${isDark ? "bg-brand-accent/20 text-brand-accent-light" : "bg-brand-accent/10 text-brand-accent"}`}>
        {icon ?? <Check className="h-5 w-5" />}
      </div>
      <div>
        <h3 className={`text-base font-heading font-semibold ${isDark ? "text-white" : "text-ink"}`}>{title}</h3>
        <p className={`mt-1.5 text-sm leading-[1.7] ${isDark ? "text-white/60" : "text-ink-soft"}`}>{description}</p>
      </div>
    </div>
  );
}
