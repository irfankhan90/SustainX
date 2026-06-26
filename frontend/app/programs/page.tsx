import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TrainingSection from "@/components/TrainingSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SustainX Training Programs — Clean Energy & Decarbonization Certified Tracks",
  description: "Accelerate your career in the clean energy transition. Certified programs in Solar, Wind engineering, EV integration, ESG compliance, Carbon markets, and Sustainable finance.",
  keywords: "Solar system design, PVsyst simulation training, HOMER energy modeling, carbon offsetting, ESG compliance reporting, green finance courses",
  alternates: {
    canonical: "/programs",
  },
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "A1 — Certificate in Renewable Energy Fundamentals",
      "description": "Demonstrate a comprehensive understanding of core renewable energy technologies, evaluate basic project feasibility, and interpret energy policies.",
      "provider": {
        "@type": "Organization",
        "name": "GlobalPact SustainX"
      }
    },
    {
      "@type": "Course",
      "name": "A2 — Advanced Certificate in Solar & Wind Project Engineering",
      "description": "Design utility-scale and rooftop solar energy systems, conduct wind feasibility studies, and optimize systems using PVsyst and HOMER.",
      "provider": {
        "@type": "Organization",
        "name": "GlobalPact SustainX"
      }
    },
    {
      "@type": "Course",
      "name": "A3 — Diploma in Renewable Energy Project Management",
      "description": "Manage large-scale renewable energy projects from inception to commissioning, align deliverables with ESG and sustainability goals.",
      "provider": {
        "@type": "Organization",
        "name": "GlobalPact SustainX"
      }
    },
    {
      "@type": "Course",
      "name": "A4 — Executive Program in Energy Transition & Sustainability Leadership",
      "description": "Lead organizational energy transition strategies with confidence, integrate sustainability into core business models.",
      "provider": {
        "@type": "Organization",
        "name": "GlobalPact SustainX"
      }
    }
  ]
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <Navbar />
      <main className="pt-[112px] bg-white min-h-screen" id="main-content">
        <TrainingSection />
      </main>
      <Footer />
    </>
  );
}

