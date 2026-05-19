import { MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <a
      href="https://wa.me/7877559977?text=Hi%2C%20I%27m%20interested%20in%20your%201BHK%20flat"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-elegant hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[oklch(0.65_0.18_150)]/40" />
    </a>
  );
}
