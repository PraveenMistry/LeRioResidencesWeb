import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "@/components/site/Section";
import living from "@/assets/interior-living.jpg";
import bedroom from "@/assets/interior-bedroom.jpg";
import kitchen from "@/assets/interior-kitchen.jpg";
import bathroom from "@/assets/interior-bathroom.jpg";
import balcony from "@/assets/interior-balcony.jpg";
import hero from "@/assets/hero-hills.jpg";
import shops from "@/assets/shops.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — LeRio Residences" },
      { name: "description", content: "Browse photos of our 1BHK flats: living room, bedroom, kitchen, bathroom, balcony hill views, and rental shops." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: living, cat: "Living", alt: "Living room" },
  { src: bedroom, cat: "Bedroom", alt: "Bedroom with hill view" },
  { src: kitchen, cat: "Kitchen", alt: "Modern kitchen" },
  { src: balcony, cat: "Balcony", alt: "Balcony hill view" },
  { src: bathroom, cat: "Bathroom", alt: "Modern bathroom" },
  { src: hero, cat: "Exterior", alt: "Exterior with hills" },
  { src: shops, cat: "Shops", alt: "Ground-floor shops" },
  { src: balcony, cat: "Balcony", alt: "Sunrise balcony" },
];

const cats = ["All", "Living", "Bedroom", "Kitchen", "Bathroom", "Balcony", "Exterior", "Shops"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = useMemo(() => filter === "All" ? items : items.filter(i => i.cat === filter), [filter]);

  return (
    <Section eyebrow="Gallery" title="Take a closer look" subtitle="Spaces designed with light, calm, and the hill view at the centre.">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium border transition ${filter === c ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border text-foreground/75 hover:border-primary/40"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((it, i) => (
          <motion.button
            key={`${it.src}-${i}`}
            onClick={() => setLightbox(it.src)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="mb-4 block w-full overflow-hidden rounded-2xl border border-border bg-card group"
          >
            <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur p-4 grid place-items-center"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X className="h-5 w-5"/></button>
            <motion.img initial={{ scale: 0.95 }} animate={{ scale: 1 }} src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-elegant" />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
