import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavPageClient from "@/components/NavPageClient";

export const metadata: Metadata = {
  title: "AI in Sustainability — Automated Decarbonization | SustainX",
  description: "Discover the SustainX AI platform: automated carbon accounting, smart grid load planning, and solar output simulations.",
  alternates: {
    canonical: "/ai-in-sustainability",
  },
  openGraph: {
    title: "AI in Sustainability — Automated Decarbonization | SustainX",
    description: "Discover the SustainX AI platform: automated carbon accounting, smart grid load planning, and solar output simulations.",
    type: "website",
    url: "https://frontend-gamma-blond-69.vercel.app/ai-in-sustainability",
  },
};

export default function AiInSustainabilityPage() {
  const page = NAVIGATION_PAGES["ai-in-sustainability"];
  if (!page) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
        <NavPageClient page={page} />
      </main>
      <Footer />
    </>
  );
}
