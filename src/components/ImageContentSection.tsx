import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface ImageContentSectionProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
  variant?: "light" | "tinted";
}

export function ImageContentSection({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse = false,
  variant = "light",
}: ImageContentSectionProps) {
  const reducedMotion = useReducedMotion();
  const isTinted = variant === "tinted";

  return (
    <section className={isTinted ? "bg-canvas/50" : "bg-white"}>
      <div className="container-content py-section-sm md:py-section">
        <div className={`grid items-center gap-10 lg:gap-16 lg:grid-cols-2 ${reverse ? "lg:grid-flow-dense" : ""}`}>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:col-start-2" : ""}
          >
            <div className="relative overflow-hidden rounded-xl shadow-card-hover">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-accent mb-4">{eyebrow}</p>
            )}
            <h2 className="heading-2 text-ink">{title}</h2>
            <div className="mt-5 space-y-4">{children}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
