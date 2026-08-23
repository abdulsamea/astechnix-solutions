import { type ReactNode } from "react";
import { Check } from "lucide-react";

interface SLAFeatureProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function SLAFeature({ title, description, icon }: SLAFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-accent/10 text-brand-accent">
        {icon ?? <Check className="h-5 w-5" />}
      </div>
      <div>
        <h3 className="text-base font-heading font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm text-ink-soft leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
