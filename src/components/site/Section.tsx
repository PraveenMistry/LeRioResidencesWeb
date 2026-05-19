import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "center",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section className={`container-px mx-auto max-w-7xl py-20 md:py-28 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={`max-w-3xl mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground text-balance">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
