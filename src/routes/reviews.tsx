import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Section } from "@/components/site/Section";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — LeRio Residences" },
      { name: "description", content: "Read what our residents and shop owners say about life at LeRio Residences." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <Section eyebrow="Reviews" title="Loved by our residents">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <div className="font-display text-6xl text-primary">5.0</div>
        <div className="mt-2 flex justify-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
          ))}
        </div>
        <p className="mt-3 text-muted-foreground">Based on 50+ Google reviews from verified residents.</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90">
          View on Google <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl bg-card border border-border p-7 shadow-soft hover:shadow-elegant transition"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <p className="mt-4 text-foreground/85 leading-relaxed">“{t.text}”</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">{t.avatar}</div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
