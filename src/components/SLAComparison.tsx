import { Check, X } from "lucide-react";

export interface ComparisonRow {
  metric: string;
  internal: string;
  outsourced: string;
}

interface SLAComparisonProps {
  rows: ComparisonRow[];
  leftHeader?: string;
  rightHeader?: string;
}

export function SLAComparison({ rows, leftHeader = "In-House Team", rightHeader = "AStechnix Managed" }: SLAComparisonProps) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-ink/10 md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-ink/10 bg-surface">
              <th className="px-6 py-4 text-left text-sm font-heading font-bold text-ink">Dimension</th>
              <th className="px-6 py-4 text-left text-sm font-heading font-bold text-ink-muted">{leftHeader}</th>
              <th className="px-6 py-4 text-left text-sm font-heading font-bold text-brand-accent">{rightHeader}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}>
                <td className="px-6 py-4 text-sm font-medium text-ink">{row.metric}</td>
                <td className="px-6 py-4 text-sm text-ink-muted">
                  <span className="inline-flex items-center gap-2">
                    <X className="h-4 w-4 shrink-0 text-ink-muted/50" />
                    {row.internal}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-ink">
                  <span className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-brand-accent" />
                    {row.outsourced}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {rows.map((row) => (
          <div key={row.metric} className="rounded-lg border border-ink/10 bg-white p-4">
            <p className="text-sm font-heading font-bold text-ink">{row.metric}</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted/50" />
                <div>
                  <p className="text-xs text-ink-muted">{leftHeader}</p>
                  <p className="text-sm text-ink-soft">{row.internal}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <div>
                  <p className="text-xs text-brand-accent">{rightHeader}</p>
                  <p className="text-sm font-medium text-ink">{row.outsourced}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
