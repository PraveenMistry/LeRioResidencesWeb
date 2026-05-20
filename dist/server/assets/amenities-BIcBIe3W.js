import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { S as Section } from "./Section-BFZzZo7H.js";
import { a as amenities } from "./site-data-YlAq0VQi.js";
import "lucide-react";
function AmenitiesPage() {
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Amenities", title: "Everything you need, thoughtfully provided", subtitle: "From dependable essentials to the small luxuries — designed around how you actually live.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: amenities.map((a, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.45,
    delay: i * 0.04
  }, className: "group rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all", children: [
    /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(a.icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg", children: a.title }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: a.desc })
  ] }, a.title)) }) });
}
export {
  AmenitiesPage as component
};
