import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { S as Section } from "./Section-BFZzZo7H.js";
import { t as testimonials } from "./site-data-YlAq0VQi.js";
function ReviewsPage() {
  return /* @__PURE__ */ jsxs(Section, { eyebrow: "Reviews", title: "Loved by our residents", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-6xl text-primary", children: "5.0" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 flex justify-center gap-0.5", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 fill-[var(--color-gold)] text-[var(--color-gold)]" }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Based on 50+ Google reviews from verified residents." }),
      /* @__PURE__ */ jsxs("a", { href: "https://www.google.com/maps", target: "_blank", rel: "noreferrer", className: "mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90", children: [
        "View on Google ",
        /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.5,
      delay: i * 0.05
    }, className: "rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elegant transition", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: Array.from({
        length: t.rating
      }).map((_, k) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" }, k)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-foreground/85 leading-relaxed", children: [
        "“",
        t.text,
        "”"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-semibold", children: t.avatar }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-semibold text-sm", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] });
}
export {
  ReviewsPage as component
};
