import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavPageClient from "@/components/NavPageClient";
import PartnershipSection from "@/components/PartnershipSection";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

const VALID_SLUGS = ["our-partners", "for-partners"];

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
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDesc,
    keywords: page.keywords,
    alternates: {
      canonical: `/partnerships/${slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      type: "website",
      url: `https://frontend-gamma-blond-69.vercel.app/partnerships/${slug}`,
    },
  };
}

export default async function PartnershipsSubpage({ params }: RouteParams) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  if (slug === "for-partners") {
    return (
      <>
        <Navbar />
        <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
          <div className="container pt-8 select-none">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="hover:text-[#1D9E75] cursor-pointer">Partnerships</span>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="text-[#1D9E75] font-bold">For Partners</span>
            </nav>
          </div>
          <PartnershipSection />
        </main>
        <Footer />
      </>
    );
  }

  const page = NAVIGATION_PAGES[slug];
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
