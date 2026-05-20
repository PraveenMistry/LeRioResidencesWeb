import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, PlayCircle, Star, Check } from "lucide-react";
import { h as heroImg } from "./hero-hills-VKuzEypQ.js";
import { l as livingImg } from "./interior-living-Bvzw9Ivr.js";
import { b as balconyImg } from "./interior-balcony-BbUBLL25.js";
import { S as Section } from "./Section-BFZzZo7H.js";
import { s as stats, a as amenities, w as whyUs, t as testimonials } from "./site-data-YlAq0VQi.js";
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative -mt-16 md:-mt-20 min-h-[100svh] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Luxury apartments with hill view at golden hour", className: "absolute inset-0 h-full w-full object-cover", width: 1920, height: 1080 }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/55 to-primary/30" }),
      /* @__PURE__ */ jsxs("div", { className: "relative container-px mx-auto max-w-7xl flex min-h-[100svh] flex-col justify-center pt-24 pb-16 text-primary-foreground", children: [
        /* @__PURE__ */ jsxs(motion.span, { initial: {
          opacity: 0,
          y: 14
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, className: "inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" }),
          "Now Renting · 30 Available"
        ] }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, className: "mt-5 max-w-3xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]", children: "Premium 1BHK Flats with a Beautiful Hill View" }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.2
        }, className: "mt-5 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed", children: "Comfortable, modern living surrounded by misty mountains, fresh air, and a calm family-friendly community." }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.3
        }, className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3 text-sm font-semibold shadow-elegant hover:scale-[1.02] transition", children: [
            "Book Visit ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "tel:+7877559977", className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            " Contact Now"
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/virtual-tour", className: "inline-flex items-center gap-2 rounded-full bg-[var(--color-sky)] text-[var(--color-sky-foreground)] px-6 py-3 text-sm font-semibold hover:opacity-90 transition", children: [
            /* @__PURE__ */ jsx(PlayCircle, { className: "h-4 w-4" }),
            " Virtual Tour"
          ] })
        ] }),
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.8,
          delay: 0.45
        }, className: "mt-14 grid w-full grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl md:text-3xl", children: s.value }),
          /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm text-primary-foreground/75 mt-1", children: s.label })
        ] }, s.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "About LeRio", title: "A calm hillside address designed for everyday comfort", subtitle: "LeRio Residences brings together thoughtful 1BHK homes, dependable amenities, and the serenity of a green hillside — just minutes from everything that matters.", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7
      }, className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: livingImg, alt: "Bright modern 1BHK living room with hill view", loading: "lazy", width: 1280, height: 896, className: "rounded-3xl shadow-elegant w-full object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -right-4 md:right-6 hidden sm:block rounded-2xl bg-background border border-border shadow-soft p-5 w-56", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-primary", children: "5.0" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 mt-1", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]" }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Loved by 50+ happy tenants" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: 30
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.7
      }, children: [
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: ["Peaceful, low-density family environment", "Reliable 24/7 water and power infrastructure", "Walkable distance to markets, schools, and clinics", "On-site management with prompt maintenance"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3 text-foreground/85", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsx("span", { className: "leading-relaxed", children: t })
        ] }, t)) }),
        /* @__PURE__ */ jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all", children: [
          "Learn more about us ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxs(Section, { eyebrow: "Amenities", title: "Everything you need, right where you live", subtitle: "Modern conveniences and reliable essentials, designed around real family life.", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: amenities.slice(0, 8).map((a, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.04
      }, className: "group rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(a.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg", children: a.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: a.desc })
      ] }, a.title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/amenities", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition", children: [
        "See all amenities ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Why Choose LeRio", title: "Built on trust, comfort, and care", align: "center", children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: whyUs.map((w, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
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
    }, className: "rounded-2xl p-7 bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-elegant transition", children: [
      /* @__PURE__ */ jsxs("div", { className: "font-display text-4xl text-primary-foreground/30", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl", children: w.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-primary-foreground/80 leading-relaxed", children: w.desc })
    ] }, w.title)) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-secondary/40", children: /* @__PURE__ */ jsxs(Section, { eyebrow: "Testimonials", title: "What our residents say", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: testimonials.slice(0, 3).map((t, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.07
      }, className: "rounded-2xl bg-card border border-border p-7 shadow-soft", children: [
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
      ] }, t.name)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/reviews", className: "inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all", children: [
        "View all reviews ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { className: "!py-24", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-primary-foreground", children: [
      /* @__PURE__ */ jsx("img", { src: balconyImg, alt: "", loading: "lazy", className: "absolute inset-0 h-full w-full object-cover opacity-20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-5xl font-semibold text-balance", children: "Find your peaceful hillside home today." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-primary-foreground/85 leading-relaxed", children: "Limited 1BHK flats remaining. Schedule a visit or send an inquiry — we'll get back within 24 hours." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3 text-sm font-semibold hover:scale-[1.02] transition", children: [
            "Send Inquiry ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "tel:+7877559977", className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            " Call Now"
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
