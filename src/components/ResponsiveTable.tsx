interface ResponsiveTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export function ResponsiveTable({ headers, rows, caption }: ResponsiveTableProps) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-lg border border-ink/10 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            {caption && <caption className="px-6 py-3 text-left text-sm text-ink-muted">{caption}</caption>}
            <thead>
              <tr className="border-b border-ink/10 bg-surface">
                {headers.map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-sm font-heading font-bold text-ink">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-6 py-4 text-sm ${j === 0 ? "font-medium text-ink" : "text-ink-soft"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        {rows.map((row, i) => (
          <div key={i} className="rounded-lg border border-ink/10 bg-white p-4">
            {headers.map((h, j) => (
              <div key={h} className={j > 0 ? "mt-2 border-t border-ink/5 pt-2" : ""}>
                <p className="text-xs text-ink-muted">{h}</p>
                <p className={`text-sm ${j === 0 ? "font-heading font-bold text-ink" : "text-ink-soft"}`}>{row[j]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
