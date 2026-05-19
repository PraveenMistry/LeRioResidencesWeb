import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { propertyDetails, stats } from "@/lib/site-data";
import livingImg from "@/assets/interior-living.jpg";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LeRio Residences" },
      { name: "description", content: "About LeRio: a peaceful hillside community of 30 premium 1BHK flats and rental shops with modern amenities." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section eyebrow="About Us" title="Modern hillside living, designed around real life" subtitle="LeRio Residences is a boutique 30-flat community offering thoughtfully built 1BHK homes, dependable utilities, and ground-floor shop spaces — all wrapped in serene hillside scenery.">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={livingImg} loading="lazy" alt="LeRio interior" className="rounded-3xl shadow-elegant w-full" />
          <div>
            <h3 className="font-display text-2xl mb-4">Our promise</h3>
            <ul className="space-y-3">
              {[
                "Honest, transparent rental terms",
                "Round-the-clock water & power reliability",
                "Quick, courteous maintenance support",
                "Safe, low-density family environment",
                "Walkable to schools, markets, and clinics",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shrink-0"><Check className="h-3.5 w-3.5"/></span><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-secondary/40">
        <Section eyebrow="At a Glance" title="Property details" align="center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card border border-border p-6 text-center">
                <div className="font-display text-3xl text-primary">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-3">
            {propertyDetails.map((d) => (
              <div key={d.label} className="flex justify-between gap-4 rounded-xl bg-card border border-border px-5 py-4">
                <span className="text-muted-foreground">{d.label}</span>
                <span className="font-semibold text-foreground">{d.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
              Schedule a visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
}
