import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Inquiry — LeRio Residences" },
      { name: "description", content: "Send an inquiry, book a visit, or reach us by phone, email, or WhatsApp. Quick response within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  flatType: z.string().max(40).optional(),
  moveIn: z.string().max(40).optional(),
  budget: z.string().max(40).optional(),
  message: z.string().trim().max(800).optional(),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((iss) => { errs[String(iss.path[0])] = iss.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: wire to backend. For now, simulate success.
    setSent(true);
  };

  return (
    <Section eyebrow="Contact" title="Send an inquiry — we'll respond within 24 hours" subtitle="Have a question or want to schedule a visit? Drop your details and we'll get back to you promptly.">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-10 shadow-soft">
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground"><CheckCircle2 className="h-8 w-8" /></div>
              <h3 className="mt-5 font-display text-2xl">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">Your inquiry has been received. We'll reach out within 24 hours.</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold">Send another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *" name="name" error={errors.name} />
              <Field label="Phone Number *" name="phone" type="tel" error={errors.phone} />
              <Field label="Email *" name="email" type="email" error={errors.email} className="sm:col-span-2" />
              <Field label="Preferred Flat Type" name="flatType" placeholder="1BHK / Shop" />
              <Field label="Move-in Date" name="moveIn" type="date" />
              <Field label="Budget" name="budget" placeholder="₹ per month" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea name="message" rows={4} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us what you're looking for..." />
              </div>
              <button type="submit" className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition">
                <Send className="h-4 w-4" /> Submit Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Side */}
        <div className="lg:col-span-2 grid gap-4 content-start">
          <ContactCard icon={Phone} title="Call us" value="+91 7877559977" href="tel:+7877559977" />
          <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat instantly" href="https://wa.me/7877559977" />
          <ContactCard icon={Mail} title="Email" value="leriojaswantpura@gmail.com" href="mailto:leriojaswantpura@gmail.com" />
          <ContactCard icon={MapPin} title="Address" value="LE-RIO, Jaswantpura, Jalore, India" />
          <ContactCard icon={Clock} title="Business Hours" value="Mon–Sun · 9:00 AM – 7:00 PM" />
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.4484231%2C24.8064046%2C72.4684231%2C24.8264046&layer=mapnik&marker=24.8164046%2C72.4584231"
              className="w-full h-56"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", placeholder, error, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${error ? "border-destructive" : "border-input"}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: React.ComponentType<{ className?: string }>; title: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-soft hover:border-primary/30 transition">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0"><Icon className="h-5 w-5"/></span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{Inner}</a> : Inner;
}
