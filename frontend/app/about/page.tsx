import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavPageClient from "@/components/NavPageClient";

export const metadata: Metadata = {
  title: "About Us — Empowering Clean Energy transition | SustainX",
  description: "Discover SustainX, the clean energy execution partner bridging strategy and EPC turnkey solutions.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us — Empowering Clean Energy transition | SustainX",
    description: "Discover SustainX, the clean energy execution partner bridging strategy and EPC turnkey solutions.",
    type: "website",
    url: "https://frontend-gamma-blond-69.vercel.app/about",
  },
};

export default function AboutPage() {
  const page = NAVIGATION_PAGES["about"];
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
