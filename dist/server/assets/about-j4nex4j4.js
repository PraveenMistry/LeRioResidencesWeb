import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as Section } from "./Section-BFZzZo7H.js";
import { s as stats, p as propertyDetails } from "./site-data-YlAq0VQi.js";
import { l as livingImg } from "./interior-living-Bvzw9Ivr.js";
import { Check, ArrowRight } from "lucide-react";
import "framer-motion";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Section, { eyebrow: "About Us", title: "Modern hillside living, designed around real life", subtitle: "LeRio Residences is a boutique 30-flat community offering thoughtfully built 1BHK homes, dependable utilities, and ground-floor shop spaces — all wrapped in serene hillside scenery.", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsx("img", { src: livingImg, loading: "lazy", alt: "LeRio interior", className: "rounded-3xl shadow-elegant w-full" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mb-4", children: "Our promise" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["Honest, transparent rental terms", "Round-the-clock water & power reliability", "Quick, courteous maintenance support", "Safe, low-density family environment", "Walkable to schools, markets, and clinics"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsx("span", { children: t })
        ] }, t)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxs(Section, { eyebrow: "At a Glance", title: "Property details", align: "center", children: [
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-primary", children: s.value }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-3", children: propertyDetails.map((d) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between gap-4 rounded-xl bg-card border border-border px-5 py-4", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: d.label }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: d.value })
      ] }, d.label)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition", children: [
        "Schedule a visit ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
