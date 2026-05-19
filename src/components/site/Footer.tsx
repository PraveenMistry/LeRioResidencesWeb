import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Home } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10">
              <Home className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">LeRio Residences</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75 leading-relaxed">
            Premium 1BHK flats with panoramic hill views. A peaceful, family-friendly community designed for modern comfort.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, href: "https://facebook.com/le-rio", label: "Facebook" },
              { Icon: Instagram, href: "https://instagram.com/le-rio", label: "Instagram" },
              { Icon: Twitter, href: "https://twitter.com/le-rio", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {[
              ["/about", "About"],
              ["/gallery", "Gallery"],
              ["/amenities", "Amenities"],
              ["/virtual-tour", "Virtual Tour"],
              ["/reviews", "Reviews"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary-foreground transition">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span>LeRio Residences, Jaswantpura, Jalore, India</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /><span>+91 7877559977</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /><span>leriojaswantpura@gmail.com</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Visit Us</h4>
          <div className="mt-4 overflow-hidden rounded-xl border border-primary-foreground/15">
            <iframe
              title="Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.4484231%2C24.8064046%2C72.4684231%2C24.8264046&layer=mapnik&marker=24.8164046%2C72.4584231"
              className="w-full h-36"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/70">
          <p>© {new Date().getFullYear()} LeRio Residences. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
