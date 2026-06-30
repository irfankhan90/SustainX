import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapacityBuildingOverview from "@/components/CapacityBuildingOverview";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Upskilling & Capacity Building — Clean Energy Training | SustainX",
  description: "Empower your engineering teams with verified certifications, simulation modeling tools, and advanced design models.",
  alternates: {
    canonical: "/capacity-building",
  },
  openGraph: {
    title: "Upskilling & Capacity Building — Clean Energy Training | SustainX",
    description: "Empower your engineering teams with verified certifications, simulation modeling tools, and advanced design models.",
    type: "website",
    url: "https://frontend-gamma-blond-69.vercel.app/capacity-building",
  },
};

export default function CapacityBuildingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
        <div className="container pt-8 select-none">
          <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
            <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
            <span className="text-[#1D9E75] font-bold">Capacity Building</span>
          </nav>
        </div>
        <CapacityBuildingOverview />
      </main>
      <Footer />
    </>
  );
}
