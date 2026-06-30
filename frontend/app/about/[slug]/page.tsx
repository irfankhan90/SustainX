import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavPageClient from "@/components/NavPageClient";
import FeaturesSection from "@/components/FeaturesSection";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

const VALID_SLUGS = ["about-us", "vision", "mission", "platform-features", "delivery-model"];

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
      canonical: `/about/${slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      type: "website",
      url: `https://frontend-gamma-blond-69.vercel.app/about/${slug}`,
    },
  };
}

export default async function AboutSubpage({ params }: RouteParams) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  if (slug === "platform-features") {
    return (
      <>
        <Navbar />
        <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
          <div className="container pt-8 select-none">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="hover:text-[#1D9E75] cursor-pointer">About</span>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="text-[#1D9E75] font-bold">Platform Features</span>
            </nav>
          </div>
          <FeaturesSection showOnly="features" />
        </main>
        <Footer />
      </>
    );
  }

  if (slug === "delivery-model") {
    return (
      <>
        <Navbar />
        <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
          <div className="container pt-8 select-none">
            <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="hover:text-[#1D9E75] cursor-pointer">About</span>
              <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
              <span className="text-[#1D9E75] font-bold">Delivery Model</span>
            </nav>
          </div>
          <FeaturesSection showOnly="delivery-model" />
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
