import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { S as Section } from "./Section-BFZzZo7H.js";
import { l as livingImg } from "./interior-living-Bvzw9Ivr.js";
import { b as bedroom } from "./interior-bedroom-CF5nA0Wb.js";
import { b as balconyImg } from "./interior-balcony-BbUBLL25.js";
import { h as heroImg } from "./hero-hills-VKuzEypQ.js";
const kitchen = "/assets/interior-kitchen-BDUW7u0X.jpg";
const bathroom = "/assets/interior-bathroom-CvuyJbu5.jpg";
const shops = "/assets/shops-DUwKspIW.jpg";
const items = [{
  src: livingImg,
  cat: "Living",
  alt: "Living room"
}, {
  src: bedroom,
  cat: "Bedroom",
  alt: "Bedroom with hill view"
}, {
  src: kitchen,
  cat: "Kitchen",
  alt: "Modern kitchen"
}, {
  src: balconyImg,
  cat: "Balcony",
  alt: "Balcony hill view"
}, {
  src: bathroom,
  cat: "Bathroom",
  alt: "Modern bathroom"
}, {
  src: heroImg,
  cat: "Exterior",
  alt: "Exterior with hills"
}, {
  src: shops,
  cat: "Shops",
  alt: "Ground-floor shops"
}, {
  src: balconyImg,
  cat: "Balcony",
  alt: "Sunrise balcony"
}];
const cats = ["All", "Living", "Bedroom", "Kitchen", "Bathroom", "Balcony", "Exterior", "Shops"];
function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const filtered = useMemo(() => filter === "All" ? items : items.filter((i) => i.cat === filter), [filter]);
  return /* @__PURE__ */ jsxs(Section, { eyebrow: "Gallery", title: "Take a closer look", subtitle: "Spaces designed with light, calm, and the hill view at the centre.", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-10", children: cats.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(c), className: `rounded-full px-4 py-2 text-sm font-medium border transition ${filter === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground/75 hover:border-primary/40"}`, children: c }, c)) }),
    /* @__PURE__ */ jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]", children: filtered.map((it, i) => /* @__PURE__ */ jsx(motion.button, { onClick: () => setLightbox(it.src), initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.4,
      delay: i * 0.04
    }, className: "mb-4 block w-full overflow-hidden rounded-2xl border border-border bg-card group", children: /* @__PURE__ */ jsx("img", { src: it.src, alt: it.alt, loading: "lazy", className: "w-full h-auto group-hover:scale-105 transition-transform duration-500" }) }, `${it.src}-${i}`)) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: lightbox && /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[60] bg-black/85 backdrop-blur p-4 grid place-items-center", onClick: () => setLightbox(null), children: [
      /* @__PURE__ */ jsx("button", { className: "absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx(motion.img, { initial: {
        scale: 0.95
      }, animate: {
        scale: 1
      }, src: lightbox, alt: "", className: "max-h-[90vh] max-w-[95vw] rounded-2xl shadow-elegant" })
    ] }) })
  ] });
}
export {
  GalleryPage as component
};
