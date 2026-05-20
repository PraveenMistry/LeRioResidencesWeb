import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { S as Section } from "./Section-BFZzZo7H.js";
import "framer-motion";
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(120),
  flatType: z.string().max(40).optional(),
  moveIn: z.string().max(40).optional(),
  budget: z.string().max(40).optional(),
  message: z.string().trim().max(800).optional()
});
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs = {};
      r.error.issues.forEach((iss) => {
        errs[String(iss.path[0])] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };
  return /* @__PURE__ */ jsx(Section, { eyebrow: "Contact", title: "Send an inquiry — we'll respond within 24 hours", subtitle: "Have a question or want to schedule a visit? Drop your details and we'll get back to you promptly.", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-5", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 rounded-3xl border border-border bg-card p-7 md:p-10 shadow-soft", children: sent ? /* @__PURE__ */ jsxs("div", { className: "py-12 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl", children: "Thank you!" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Your inquiry has been received. We'll reach out within 24 hours." }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSent(false), className: "mt-6 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold", children: "Send another" })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Field, { label: "Full Name *", name: "name", error: errors.name }),
      /* @__PURE__ */ jsx(Field, { label: "Phone Number *", name: "phone", type: "tel", error: errors.phone }),
      /* @__PURE__ */ jsx(Field, { label: "Email *", name: "email", type: "email", error: errors.email, className: "sm:col-span-2" }),
      /* @__PURE__ */ jsx(Field, { label: "Preferred Flat Type", name: "flatType", placeholder: "1BHK / Shop" }),
      /* @__PURE__ */ jsx(Field, { label: "Move-in Date", name: "moveIn", type: "date" }),
      /* @__PURE__ */ jsx(Field, { label: "Budget", name: "budget", placeholder: "₹ per month", className: "sm:col-span-2" }),
      /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Message" }),
        /* @__PURE__ */ jsx("textarea", { name: "message", rows: 4, className: "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Tell us what you're looking for..." })
      ] }),
      /* @__PURE__ */ jsxs("button", { type: "submit", className: "sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition", children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" }),
        " Submit Inquiry"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 grid gap-4 content-start", children: [
      /* @__PURE__ */ jsx(ContactCard, { icon: Phone, title: "Call us", value: "+91 7877559977", href: "tel:+7877559977" }),
      /* @__PURE__ */ jsx(ContactCard, { icon: MessageCircle, title: "WhatsApp", value: "Chat instantly", href: "https://wa.me/7877559977" }),
      /* @__PURE__ */ jsx(ContactCard, { icon: Mail, title: "Email", value: "leriojaswantpura@gmail.com", href: "mailto:leriojaswantpura@gmail.com" }),
      /* @__PURE__ */ jsx(ContactCard, { icon: MapPin, title: "Address", value: "LE-RIO, Jaswantpura, Jalore, India" }),
      /* @__PURE__ */ jsx(ContactCard, { icon: Clock, title: "Business Hours", value: "Mon–Sun · 9:00 AM – 7:00 PM" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsx("iframe", { title: "Map", src: "https://www.openstreetmap.org/export/embed.html?bbox=72.4484231%2C24.8064046%2C72.4684231%2C24.8264046&layer=mapnik&marker=24.8164046%2C72.4584231", className: "w-full h-56", loading: "lazy" }) })
    ] })
  ] }) });
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  className = ""
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: label }),
    /* @__PURE__ */ jsx("input", { name, type, placeholder, className: `w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${error ? "border-destructive" : "border-input"}` }),
    error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-destructive", children: error })
  ] });
}
function ContactCard({
  icon: Icon,
  title,
  value,
  href
}) {
  const Inner = /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-soft hover:border-primary/30 transition", children: [
    /* @__PURE__ */ jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: title }),
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 font-semibold text-foreground", children: value })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsx("a", { href, target: href.startsWith("http") ? "_blank" : void 0, rel: "noreferrer", children: Inner }) : Inner;
}
export {
  ContactPage as component
};
