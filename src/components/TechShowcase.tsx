import type { TechCategory } from "../types";

interface TechShowcaseProps {
  categories: TechCategory[];
  variant?: "light" | "dark";
}

export function TechShowcase({ categories, variant = "light" }: TechShowcaseProps) {
  const isDark = variant === "dark";

  return (
    <div className={`rounded-lg border p-8 md:p-10 ${isDark ? "border-white/10 bg-white/5" : "border-ink/10 bg-canvas/50"}`}>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14">
        {categories.map((cat) => (
          <div key={cat.category} className="text-center">
            <h4 className={`text-sm font-heading font-bold mb-4 ${isDark ? "text-white" : "text-ink"}`}>
              {cat.category}
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${isDark ? "bg-white/10 text-white/70" : "bg-white text-ink-soft border border-ink/10"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
