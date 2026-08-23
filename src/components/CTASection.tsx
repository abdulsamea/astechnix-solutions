import { type ReactNode } from "react";
import { Button } from "./Button";
import { ctaConfig } from "../config/cta";

interface CTASectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function CTASection({
  title = "Ready to discuss your requirements?",
  description = "Book a consultation with our delivery team. We'll assess your needs and propose a managed engagement structure with clear SLAs.",
  children,
}: CTASectionProps) {
  return (
    <section className="section-padding bg-brand-dark">
      <div className="container-content">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="heading-2 text-white">{title}</h2>
            <p className="mt-3 text-lg text-white/70 leading-relaxed">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {children ?? (
              <>
                <Button to={ctaConfig.primary.path} variant="primary" size="lg">
                  {ctaConfig.primary.label}
                </Button>
                <Button to={ctaConfig.secondary.path} variant="secondary" size="lg" className="border-white/20 text-white hover:border-white hover:text-white">
                  {ctaConfig.secondary.label}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
