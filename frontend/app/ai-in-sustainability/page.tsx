import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AISection from "@/components/AISection";
import Link from "next/link";

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
  return (
    <>
      <Navbar />
      <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
        <div className="container pt-8 select-none">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
            <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
            <span className="text-[#1D9E75] font-bold">AI in Sustainability</span>
          </nav>
        </div>
        <AISection />
      </main>
      <Footer />
    </>
  );
}
