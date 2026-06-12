"use client";

import React, { useState, useEffect, useRef } from "react";

interface CapabilitySlide {
  id: string;
  number: string;
  category: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const CAROUSEL_SLIDES: CapabilitySlide[] = [
  {
    id: "advisory",
    number: "01",
    category: "Strategic Advisory",
    description: "Bankable feasibility models, solar/wind yield assessments, and Net-Zero strategy blueprints to de-risk clean energy investments.",
    image: "/sustainx_advisory.png",
    ctaText: "Schedule Consultation",
    ctaLink: "#contact"
  },
  {
    id: "pm",
    number: "02",
    category: "Project Management",
    description: "Rigorous timeline coordination, risk analytics, and PMC milestone audits ensuring seamless project execution.",
    image: "/sustainx_pm.png",
    ctaText: "Request PMC Review",
    ctaLink: "#contact"
  },
  {
    id: "epc",
    number: "03",
    category: "EPC Solutions",
    description: "Engineering schematics, procurement oversight, civil works construction, and safe grid synchronisation audits.",
    image: "/sustainx_epc.png",
    ctaText: "Review EPC Specs",
    ctaLink: "#contact"
  },
  {
    id: "capacity",
    number: "04",
    category: "Capacity Building",
    description: "Upskilling engineering workforces through certified safety drills and HOMER/PVsyst simulation modeling tracks.",
    image: "/sustainx_training.png",
    ctaText: "Register Cohort Team",
    ctaLink: "#training"
  },
  {
    id: "ai",
    number: "05",
    category: "AI-Powered Insights",
    description: "Predictive load-shedding models, battery storage balancing, carbon tracking, and automated compliance reports.",
    image: "/sustainx_landscape.png",
    ctaText: "Access Analytics Portal",
    ctaLink: "/login"
  }
];

export const ShowcaseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 5000; // 5 seconds autoplay

  // Handle Autoplay
  useEffect(() => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);

    if (isPlaying) {
      autoPlayTimer.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_SLIDES.length);
      }, SLIDE_DURATION);
    }

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [activeIndex, isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const activeSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <section 
      className="w-full bg-[#F5F8F6] py-10 sm:py-12 border-b border-[#E5ECE8] relative z-20 flex flex-col justify-center h-[520px] sm:h-[480px]"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="container max-w-4xl w-full flex flex-col justify-between h-full">
        
        {/* Section Mini Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-[#E6F3EE] border border-[#0B8F62]/10 rounded-full text-[10px] font-bold text-[#0B8F62] tracking-wider uppercase mb-1.5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34C38F] animate-pulse" />
            <span>Core Solutions</span>
          </div>
          <h2 className="font-syne text-[20px] sm:text-[24px] font-extrabold text-[#111827]">
            SustainX Execution Ecosystem
          </h2>
        </div>

        {/* Compact Horizontal Slider Card */}
        <div className="relative flex-1 flex items-center justify-center">
          
          {/* Main Slider Card */}
          <div className="w-full h-[320px] sm:h-[260px] bg-white border border-[#E5ECE8] rounded-[20px] shadow-[0_10px_35px_rgba(0,0,0,0.025)] overflow-hidden flex flex-col sm:flex-row relative transition-all duration-300">
            
            {/* Left Side: Cropped Slide Image */}
            <div className="w-full sm:w-[38%] h-[120px] sm:h-full relative shrink-0 overflow-hidden bg-gray-100">
              <img
                src={activeSlide.image}
                alt={activeSlide.category}
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/sustainx_landscape.png";
                }}
              />
              {/* Overlay shadow for image border depth */}
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* Right Side: Slide Details */}
            <div className="w-full sm:w-[62%] p-6 sm:px-8 sm:py-6 flex flex-col justify-between text-left">
              
              {/* Label and Number */}
              <div className="flex items-center justify-between border-b border-[#F5F8F6] pb-2 mb-2">
                <span className="text-[10px] font-bold text-[#0B8F62] tracking-widest uppercase">
                  {activeSlide.number} / {activeSlide.category}
                </span>
                <span className="text-[10px] font-bold text-[#4B5B55]/40 font-mono">
                  SustainX System
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-syne text-[18px] sm:text-[21px] font-extrabold text-[#111827] mb-2 leading-tight">
                  {activeSlide.category}
                </h3>
                <p className="font-sans text-[13px] sm:text-[13.5px] text-[#4B5B55] leading-relaxed font-light line-clamp-2 max-w-lg mb-4">
                  {activeSlide.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-[#F5F8F6] flex items-center justify-between">
                <a
                  href={activeSlide.ctaLink}
                  className="inline-flex items-center gap-2 bg-[#0B8F62] hover:bg-[#086E4B] text-white px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide transition-all duration-200 shadow-sm"
                >
                  <span>{activeSlide.ctaText}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                {/* Arrow navigation inside the card footer */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    className="w-7 h-7 rounded-lg border border-[#E5ECE8] hover:border-[#0B8F62] bg-white text-[#0B8F62] flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    aria-label="Previous Slide"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-7 h-7 rounded-lg border border-[#E5ECE8] hover:border-[#0B8F62] bg-white text-[#0B8F62] flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    aria-label="Next Slide"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Carousel Bottom Pagination dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {CAROUSEL_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                activeIndex === idx ? "w-6 bg-[#0B8F62]" : "w-2 bg-[#0B8F62]/20 hover:bg-[#0B8F62]/45"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShowcaseSection;
