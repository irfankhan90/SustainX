import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificatePrograms from "@/components/programs/CertificatePrograms";
import DiplomaPrograms from "@/components/programs/DiplomaPrograms";
import ExecutivePrograms from "@/components/programs/ExecutivePrograms";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

const VALID_SLUGS = ["certificate-programs", "diploma-programs", "executive-corporate-programs"];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) {
    return {};
  }
  const page = NAVIGATION_PAGES[slug];
  if (!page) {
    // Certificate-programs doesn't have a record in NAVIGATION_PAGES now, so we return general values
    if (slug === "certificate-programs") {
      return {
        title: "Renewable Energy Certificates — Upskilling | SustainX",
        description: "Boost your credentials with certified solar PV engineering and ESG reporting tracks from SustainX.",
        alternates: {
          canonical: "/capacity-building/certificate-programs",
        },
      };
    }
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDesc,
    keywords: page.keywords,
    alternates: {
      canonical: `/capacity-building/${slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      type: "website",
      url: `https://frontend-gamma-blond-69.vercel.app/capacity-building/${slug}`,
    },
  };
}

export default async function CapacityBuildingSubpage({ params }: RouteParams) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  if (slug === "certificate-programs") {
    return (
      <>
        <Navbar />
        <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
          <div className="container pt-8 select-none">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <Link href="/capacity-building" className="hover:text-[#1D9E75] transition-colors">Capacity Building</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="text-[#1D9E75] font-bold">Certificate Programs</span>
            </nav>
          </div>
          <CertificatePrograms />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "diploma-programs") {
    return (
      <>
        <Navbar />
        <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
          <div className="container pt-8 select-none">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <Link href="/capacity-building" className="hover:text-[#1D9E75] transition-colors">Capacity Building</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="text-[#1D9E75] font-bold">Diploma Programs</span>
            </nav>
          </div>
          <DiplomaPrograms />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "executive-corporate-programs") {
    return (
      <>
        <Navbar />
        <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
          <div className="container pt-8 select-none">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <Link href="/capacity-building" className="hover:text-[#1D9E75] transition-colors">Capacity Building</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="text-[#1D9E75] font-bold">Executive & Corporate Programs</span>
            </nav>
          </div>
          <ExecutivePrograms />
        </main>
        <Footer />
      </>
    );
  }

  notFound();
}
