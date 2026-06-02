import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ProblemSection from "@/components/ProblemSection";
import PillarsSection from "@/components/PillarsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrainingSection from "@/components/TrainingSection";
import AISection from "@/components/AISection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import AdvisorySection from "@/components/AdvisorySection";
import OfficesSection from "@/components/OfficesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProblemSection />
        <PillarsSection />
        <FeaturesSection />
        <TrainingSection />
        <AISection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <TeamSection />
        <AdvisorySection />
        <OfficesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
