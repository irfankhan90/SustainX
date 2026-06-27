import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "@/lib/data/solutions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionDetailClient from "@/components/SolutionDetailClient";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];
  if (!solution) {
    return {};
  }

  return {
    title: solution.metaTitle,
    description: solution.metaDesc,
    keywords: solution.keywords,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
    openGraph: {
      title: solution.metaTitle,
      description: solution.metaDesc,
      type: "website",
      url: `https://frontend-gamma-blond-69.vercel.app/solutions/${slug}`,
    },
  };
}

export default async function SolutionPage({ params }: RouteParams) {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];
  if (!solution) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-[88px] sm:pt-[112px] bg-white min-h-screen" id="main-content">
        <SolutionDetailClient solution={solution} />
      </main>
      <Footer />
    </>
  );
}
