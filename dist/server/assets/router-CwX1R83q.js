import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Home, X, Menu, Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
const appCss = "/assets/styles-7fnvwoYX.css";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/amenities", label: "Amenities" },
  { to: "/virtual-tour", label: "Virtual Tour" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxs("span", { className: "font-display text-lg font-semibold tracking-tight", children: [
              "LeRio ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Residences" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
            links.map((l) => /* @__PURE__ */ jsx(
              Link,
              {
                to: l.to,
                activeOptions: { exact: l.to === "/" },
                className: "relative px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors",
                activeProps: { className: "text-primary" },
                children: l.label
              },
              l.to
            )),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/contact",
                className: "ml-3 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition",
                children: "Book Visit"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen((s) => !s),
              className: "lg:hidden grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-secondary",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "lg:hidden border-t border-border bg-background",
            children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-3 flex flex-col", children: [
              links.map((l) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  activeOptions: { exact: l.to === "/" },
                  className: "py-2.5 text-sm font-medium text-foreground/80",
                  activeProps: { className: "text-primary" },
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground",
                  children: "Book Visit"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-24 bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg bg-primary-foreground/10", children: /* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold", children: "LeRio Residences" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-primary-foreground/75 leading-relaxed", children: "Premium 1BHK flats with panoramic hill views. A peaceful, family-friendly community designed for modern comfort." }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex gap-3", children: [
          { Icon: Facebook, href: "https://facebook.com/le-rio", label: "Facebook" },
          { Icon: Instagram, href: "https://instagram.com/le-rio", label: "Instagram" },
          { Icon: Twitter, href: "https://twitter.com/le-rio", label: "Twitter" }
        ].map(({ Icon, href, label }) => /* @__PURE__ */ jsx("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, className: "grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-2 text-sm text-primary-foreground/75", children: [
          ["/about", "About"],
          ["/gallery", "Gallery"],
          ["/amenities", "Amenities"],
          ["/virtual-tour", "Virtual Tour"],
          ["/reviews", "Reviews"],
          ["/contact", "Contact"]
        ].map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to, className: "hover:text-primary-foreground transition", children: label }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold", children: "Get in Touch" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-3 text-sm text-primary-foreground/75", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "LeRio Residences, Jaswantpura, Jalore, India" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "+91 7877559977" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "leriojaswantpura@gmail.com" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-display text-base font-semibold", children: "Visit Us" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 overflow-hidden rounded-xl border border-primary-foreground/15", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Location",
            src: "https://www.openstreetmap.org/export/embed.html?bbox=72.4484231%2C24.8064046%2C72.4684231%2C24.8264046&layer=mapnik&marker=24.8164046%2C72.4584231",
            className: "w-full h-36",
            loading: "lazy"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-primary-foreground/70", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " LeRio Residences. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-foreground", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary-foreground", children: "Terms & Conditions" })
      ] })
    ] }) })
  ] });
}
function FloatingActions() {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: "https://wa.me/7877559977?text=Hi%2C%20I%27m%20interested%20in%20your%201BHK%20flat",
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-elegant hover:scale-105 transition-transform",
      children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }),
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full animate-ping bg-[oklch(0.65_0.18_150)]/40" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx("a", { href: "/", className: "rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent", children: "Go home" })
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LeRio Residences — Premium 1BHK Flats with Hill View" },
      { name: "description", content: "Rent premium 1BHK flats and shops at LeRio Residences. Hill view, 24/7 water, parking, CCTV, family-friendly community." },
      { name: "author", content: "LeRio Residences" },
      { property: "og:title", content: "LeRio Residences — Premium 1BHK Flats with Hill View" },
      { property: "og:description", content: "Comfortable living with modern amenities, hill view, and a peaceful family-friendly community." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-16 md:pt-20", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {})
  ] });
}
const $$splitComponentImporter$6 = () => import("./virtual-tour-B9yGhiB1.js");
const Route$7 = createFileRoute("/virtual-tour")({
  head: () => ({
    meta: [{
      title: "Virtual Tour — LeRio Residences"
    }, {
      name: "description",
      content: "Explore our 1BHK flats virtually — 360° room tours and video walkthroughs from your device."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const BASE_URL = "";
const Route$6 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/about", "/gallery", "/amenities", "/virtual-tour", "/reviews", "/contact"];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$5 = () => import("./reviews-BmbUzukR.js");
const Route$5 = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Reviews — LeRio Residences"
    }, {
      name: "description",
      content: "Read what our residents and shop owners say about life at LeRio Residences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./gallery-BMnOG4Cs.js");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — LeRio Residences"
    }, {
      name: "description",
      content: "Browse photos of our 1BHK flats: living room, bedroom, kitchen, bathroom, balcony hill views, and rental shops."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-Cm4YTaPo.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Inquiry — LeRio Residences"
    }, {
      name: "description",
      content: "Send an inquiry, book a visit, or reach us by phone, email, or WhatsApp. Quick response within 24 hours."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./amenities-BIcBIe3W.js");
const Route$2 = createFileRoute("/amenities")({
  head: () => ({
    meta: [{
      title: "Amenities — LeRio Residences"
    }, {
      name: "description",
      content: "24/7 water, parking, CCTV, WiFi, laundry, balcony hill views, rental shops, and more — every essential covered."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-j4nex4j4.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — LeRio Residences"
    }, {
      name: "description",
      content: "About LeRio: a peaceful hillside community of 30 premium 1BHK flats and rental shops with modern amenities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CN9XstRa.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "LeRio Residences — Premium 1BHK Flats with Hill View"
    }, {
      name: "description",
      content: "30 premium 1BHK flats with hill view, 24/7 water, parking, CCTV, and a peaceful family-friendly community. Shops available for rent."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const VirtualTourRoute = Route$7.update({
  id: "/virtual-tour",
  path: "/virtual-tour",
  getParentRoute: () => Route$8
});
const SitemapDotxmlRoute = Route$6.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$8
});
const ReviewsRoute = Route$5.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$8
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AmenitiesRoute = Route$2.update({
  id: "/amenities",
  path: "/amenities",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AmenitiesRoute,
  ContactRoute,
  GalleryRoute,
  ReviewsRoute,
  SitemapDotxmlRoute,
  VirtualTourRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
