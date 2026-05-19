import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone, PlayCircle, Star, Check } from "lucide-react";
import heroImg from "@/assets/hero-hills.jpg";
import livingImg from "@/assets/interior-living.jpg";
import balconyImg from "@/assets/interior-balcony.jpg";
import { Section } from "@/components/site/Section";
import { amenities, stats, testimonials, whyUs } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeRio Residences — Premium 1BHK Flats with Hill View" },
      { name: "description", content: "30 premium 1BHK flats with hill view, 24/7 water, parking, CCTV, and a peaceful family-friendly community. Shops available for rent." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury apartments with hill view at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/55 to-primary/30" />
        <div className="relative container-px mx-auto max-w-7xl flex min-h-[100svh] flex-col justify-center pt-24 pb-16 text-primary-foreground">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            Now Renting · 30 Available
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]"
          >
            Premium 1BHK Flats with a Beautiful Hill View
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed"
          >
            Comfortable, modern living surrounded by misty mountains, fresh air, and a calm family-friendly community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3 text-sm font-semibold shadow-elegant hover:scale-[1.02] transition">
              Book Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+7877559977" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              <Phone className="h-4 w-4" /> Contact Now
            </a>
            <Link to="/virtual-tour" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-sky)] text-[var(--color-sky-foreground)] px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
              <PlayCircle className="h-4 w-4" /> Virtual Tour
            </Link>
          </motion.div>

          {/* stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14 grid w-full grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur p-4">
                <div className="font-display text-2xl md:text-3xl">{s.value}</div>
                <div className="text-xs md:text-sm text-primary-foreground/75 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        eyebrow="About LeRio"
        title="A calm hillside address designed for everyday comfort"
        subtitle="LeRio Residences brings together thoughtful 1BHK homes, dependable amenities, and the serenity of a green hillside — just minutes from everything that matters."
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <img src={livingImg} alt="Bright modern 1BHK living room with hill view" loading="lazy" width={1280} height={896} className="rounded-3xl shadow-elegant w-full object-cover" />
            <div className="absolute -bottom-6 -right-4 md:right-6 hidden sm:block rounded-2xl bg-background border border-border shadow-soft p-5 w-56">
              <div className="font-display text-3xl text-primary">5.0</div>
              <div className="flex gap-0.5 mt-1">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]"/>)}</div>
              <p className="text-xs text-muted-foreground mt-2">Loved by 50+ happy tenants</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <ul className="space-y-4">
              {[
                "Peaceful, low-density family environment",
                "Reliable 24/7 water and power infrastructure",
                "Walkable distance to markets, schools, and clinics",
                "On-site management with prompt maintenance",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-foreground/85">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* AMENITIES */}
      <div className="bg-secondary/40">
        <Section eyebrow="Amenities" title="Everything you need, right where you live" subtitle="Modern conveniences and reliable essentials, designed around real family life.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {amenities.slice(0, 8).map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
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
          <div className="mt-10 text-center">
            <Link to="/amenities" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
              See all amenities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>

      {/* WHY US */}
      <Section eyebrow="Why Choose LeRio" title="Built on trust, comfort, and care" align="center">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl p-7 bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-elegant transition"
            >
              <div className="font-display text-4xl text-primary-foreground/30">0{i+1}</div>
              <h3 className="mt-3 font-display text-xl">{w.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <div className="bg-secondary/40">
        <Section eyebrow="Testimonials" title="What our residents say">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl bg-card border border-border p-7 shadow-soft"
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
          <div className="mt-10 text-center">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      </div>

      {/* CTA */}
      <Section className="!py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 md:p-16 text-primary-foreground">
          <img src={balconyImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-3xl md:text-5xl font-semibold text-balance">
              Find your peaceful hillside home today.
            </h3>
            <p className="mt-4 text-primary-foreground/85 leading-relaxed">
              Limited 1BHK flats remaining. Schedule a visit or send an inquiry — we'll get back within 24 hours.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3 text-sm font-semibold hover:scale-[1.02] transition">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+7877559977" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
