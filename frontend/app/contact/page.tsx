import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavPageClient from "@/components/NavPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Customer & Project Support | SustainX",
  description: "Get in touch with SustainX. Connect with our engineering, advisory, or partner desks.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us — Customer & Project Support | SustainX",
    description: "Get in touch with SustainX. Connect with our engineering, advisory, or partner desks.",
    type: "website",
    url: "https://frontend-gamma-blond-69.vercel.app/contact",
  },
};

export default function ContactPage() {
  const page = NAVIGATION_PAGES["contact"];
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
