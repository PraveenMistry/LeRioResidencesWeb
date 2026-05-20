import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { PlayCircle, Phone, Maximize } from "lucide-react";
import { S as Section } from "./Section-BFZzZo7H.js";
import { l as livingImg } from "./interior-living-Bvzw9Ivr.js";
import { b as bedroom } from "./interior-bedroom-CF5nA0Wb.js";
import { b as balconyImg } from "./interior-balcony-BbUBLL25.js";
import "framer-motion";
const rooms = [{
  img: livingImg,
  title: "Living Room",
  duration: "1:24"
}, {
  img: bedroom,
  title: "Bedroom Suite",
  duration: "0:58"
}, {
  img: balconyImg,
  title: "Hill-View Balcony",
  duration: "1:12"
}];
function VirtualTourPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Section, { eyebrow: "Virtual Tour", title: "Explore the apartment from anywhere", subtitle: "Walk through every room before you visit — at your own pace, on any device.", children: [
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant aspect-video", children: /* @__PURE__ */ jsx("iframe", { title: "Virtual walkthrough", src: "https://www.youtube.com/embed/k0XWLCpdARw", className: "absolute inset-0 h-full w-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs("a", { href: "#rooms", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90", children: [
          /* @__PURE__ */ jsx(PlayCircle, { className: "h-4 w-4" }),
          " Explore Rooms"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "tel:+7877559977", className: "inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
          " Book In-Person Visit"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "rooms", className: "bg-secondary/40", children: /* @__PURE__ */ jsx(Section, { eyebrow: "Room Tours", title: "Step inside each space", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: rooms.map((r) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elegant transition", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: r.img, alt: r.title, loading: "lazy", className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" }),
        /* @__PURE__ */ jsx("button", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsx("span", { className: "grid h-16 w-16 place-items-center rounded-full bg-background/90 text-primary group-hover:scale-110 transition", children: /* @__PURE__ */ jsx(PlayCircle, { className: "h-7 w-7" }) }) }),
        /* @__PURE__ */ jsxs("span", { className: "absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium", children: [
          /* @__PURE__ */ jsx(Maximize, { className: "h-3 w-3" }),
          " 360°"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg", children: r.title }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: r.duration })
      ] })
    ] }, r.title)) }) }) })
  ] });
}
export {
  VirtualTourPage as component
};
