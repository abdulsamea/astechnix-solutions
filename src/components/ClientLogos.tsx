interface ClientLogosProps {
  logos: string[];
  variant?: "light" | "dark";
}

export function ClientLogos({ logos, variant = "light" }: ClientLogosProps) {
  const isDark = variant === "dark";

  return (
    <section className={`${isDark ? "bg-brand-dark" : "bg-white border-y border-ink/10"}`}>
      <div className="container-content">
        <div className="py-8 md:py-10">
          <p className={`text-center text-xs font-semibold uppercase tracking-[0.2em] mb-6 ${isDark ? "text-white/40" : "text-ink-muted"}`}>
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {logos.map((logo) => (
              <span
                key={logo}
                className={`font-heading text-lg font-bold tracking-tight transition-opacity duration-300 ${isDark ? "text-white/50 hover:text-white/80" : "text-ink-muted/60 hover:text-ink"}`}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
