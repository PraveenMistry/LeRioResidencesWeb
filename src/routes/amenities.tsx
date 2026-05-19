import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section } from "@/components/site/Section";
import { amenities } from "@/lib/site-data";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — LeRio Residences" },
      { name: "description", content: "24/7 water, parking, CCTV, WiFi, laundry, balcony hill views, rental shops, and more — every essential covered." },
    ],
  }),
  component: AmenitiesPage,
});

function AmenitiesPage() {
  return (
    <Section eyebrow="Amenities" title="Everything you need, thoughtfully provided" subtitle="From dependable essentials to the small luxuries — designed around how you actually live.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {amenities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
            className="group rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <a.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
