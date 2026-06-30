import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NAVIGATION_PAGES } from "@/lib/data/navigation_pages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavPageClient from "@/components/NavPageClient";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

const VALID_SLUGS = ["diploma-programs", "executive-corporate-programs"];

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
