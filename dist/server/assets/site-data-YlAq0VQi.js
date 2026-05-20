import { Droplets, Car, Mountain, Shield, ShoppingBag, Wifi, Users, Store, Sun, Shirt, MapPin, Trees } from "lucide-react";
const amenities = [
  { icon: Droplets, title: "24/7 Water Supply", desc: "Round-the-clock fresh water arrangement." },
  { icon: Car, title: "Parking Facility", desc: "Dedicated covered parking for residents." },
  { icon: Mountain, title: "Hill View", desc: "Panoramic mountain vistas from every flat." },
  { icon: Shield, title: "CCTV Security", desc: "24-hour surveillance and gated access." },
  { icon: ShoppingBag, title: "Nearby Market", desc: "Daily essentials within walking distance." },
  { icon: Wifi, title: "WiFi Available", desc: "High-speed internet across the property." },
  { icon: Users, title: "Family-Friendly", desc: "Safe, peaceful community environment." },
  { icon: Store, title: "Rental Shops", desc: "Commercial shop spaces on the ground floor." },
  { icon: Sun, title: "Balcony View", desc: "Spacious balconies opening to fresh air." },
  { icon: Shirt, title: "Laundry Area", desc: "Common laundry & drying facilities." },
  { icon: MapPin, title: "Premium Location", desc: "Connected, calm, and elevated setting." },
  { icon: Trees, title: "Green Surroundings", desc: "Lush landscaping and nature trails." }
];
const stats = [
  { label: "Flats Available", value: "30" },
  { label: "Water Supply", value: "24/7" },
  { label: "Parking", value: "Covered" },
  { label: "Hill View", value: "All Rooms" }
];
const testimonials = [
  { name: "Ananya Sharma", role: "Tenant since 2023", text: "The hill view from my balcony is unreal. Mornings here feel like a holiday every day.", rating: 5, avatar: "A" },
  { name: "Rohit Mehta", role: "Family of 3", text: "Safe, calm, and beautifully maintained. The management is responsive and genuinely caring.", rating: 5, avatar: "R" },
  { name: "Priya Nair", role: "Remote professional", text: "Reliable water, fast WiFi, and a peaceful workspace by the window. Couldn't ask for more.", rating: 5, avatar: "P" },
  { name: "Karthik Iyer", role: "Shop owner", text: "Took a ground-floor shop here. Good footfall, friendly residents, fair rent. Highly recommend.", rating: 5, avatar: "K" },
  { name: "Meera Joshi", role: "Tenant since 2024", text: "Loved the spacious balcony and quiet neighbourhood. Truly a luxury-feel 1BHK at honest pricing.", rating: 5, avatar: "M" }
];
const propertyDetails = [
  { label: "Total Flats", value: "30 × 1BHK" },
  { label: "Flat Size", value: "550 – 620 sq ft" },
  { label: "Monthly Rent", value: "₹12,000 onwards" },
  { label: "Security Deposit", value: "2 months rent" },
  { label: "Shops Available", value: "6 ground-floor units" },
  { label: "Parking", value: "1 covered slot / flat" },
  { label: "Water", value: "24/7 borewell + municipal" },
  { label: "Electricity", value: "Individual sub-meters" }
];
const whyUs = [
  { title: "Affordable Rent", desc: "Honest, transparent pricing with no hidden charges." },
  { title: "Prime Location", desc: "Elevated hillside spot with city accessibility." },
  { title: "Peaceful Lifestyle", desc: "Low-density living surrounded by greenery." },
  { title: "Secure Environment", desc: "Gated community with 24×7 CCTV and guards." },
  { title: "Modern Facilities", desc: "Contemporary fittings and reliable utilities." },
  { title: "Hill View Experience", desc: "Wake up to misty mountains every single day." }
];
export {
  amenities as a,
  propertyDetails as p,
  stats as s,
  testimonials as t,
  whyUs as w
};
