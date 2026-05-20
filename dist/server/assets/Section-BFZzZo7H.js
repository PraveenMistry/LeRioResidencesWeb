import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  align = "center"
}) {
  return /* @__PURE__ */ jsxs("section", { className: `container-px mx-auto max-w-7xl py-20 md:py-28 ${className}`, children: [
    (eyebrow || title || subtitle) && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: `max-w-3xl mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`,
        children: [
          eyebrow && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            " ",
            eyebrow
          ] }),
          title && /* @__PURE__ */ jsx("h2", { className: "mt-4 text-3xl md:text-5xl font-semibold text-foreground text-balance", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed", children: subtitle })
        ]
      }
    ),
    children
  ] });
}
export {
  Section as S
};
