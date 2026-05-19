import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, Maximize, Phone } from "lucide-react";
import { Section } from "@/components/site/Section";
import living from "@/assets/interior-living.jpg";
import bedroom from "@/assets/interior-bedroom.jpg";
import balcony from "@/assets/interior-balcony.jpg";

export const Route = createFileRoute("/virtual-tour")({
  head: () => ({
    meta: [
      { title: "Virtual Tour — LeRio Residences" },
      { name: "description", content: "Explore our 1BHK flats virtually — 360° room tours and video walkthroughs from your device." },
    ],
  }),
  component: VirtualTourPage,
});

const rooms = [
  { img: living, title: "Living Room", duration: "1:24" },
  { img: bedroom, title: "Bedroom Suite", duration: "0:58" },
  { img: balcony, title: "Hill-View Balcony", duration: "1:12" },
];

function VirtualTourPage() {
  return (
    <>
      <Section eyebrow="Virtual Tour" title="Explore the apartment from anywhere" subtitle="Walk through every room before you visit — at your own pace, on any device.">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-elegant aspect-video">
          <iframe
            title="Virtual walkthrough"
            src="https://www.youtube.com/embed/k0XWLCpdARw"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#rooms" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90"><PlayCircle className="h-4 w-4"/> Explore Rooms</a>
          <a href="tel:+7877559977" className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary"><Phone className="h-4 w-4"/> Book In-Person Visit</a>
        </div>
      </Section>

      <div id="rooms" className="bg-secondary/40">
        <Section eyebrow="Room Tours" title="Step inside each space">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((r) => (
              <div key={r.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-elegant transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <button className="absolute inset-0 grid place-items-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-background/90 text-primary group-hover:scale-110 transition">
                      <PlayCircle className="h-7 w-7" />
                    </span>
                  </button>
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium"><Maximize className="h-3 w-3" /> 360°</span>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-display text-lg">{r.title}</h3>
                  <span className="text-sm text-muted-foreground">{r.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
