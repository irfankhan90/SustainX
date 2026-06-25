import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BannerSection from "@/components/BannerSection";
import MarqueeSection from "@/components/MarqueeSection";
import PillarsSection from "@/components/PillarsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PartnershipSection from "@/components/PartnershipSection";
import CapacityBuildingOverview from "@/components/CapacityBuildingOverview";
import AISection from "@/components/AISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import AdvisorySection from "@/components/AdvisorySection";
import InquirySection from "@/components/InquirySection";
import ContactSection from "@/components/ContactSection";
import OfficesSection from "@/components/OfficesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <StatsSection />
        <BannerSection />
        <MarqueeSection />
        <PillarsSection />
        <FeaturesSection />
        <PartnershipSection />
        <CapacityBuildingOverview />
        <AISection />
        <TestimonialsSection />
        <TeamSection />
        <AdvisorySection />
        <InquirySection />
        <ContactSection />
        <OfficesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
