"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import advisoryImage from "../public/sustainx_advisory.png";
import pmImage from "../public/sustainx_pm.png";
import epcImage from "../public/sustainx_epc.png";
import trainingImage from "../public/sustainx_training.png";

interface Pillar {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const PILLARS: Pillar[] = [
  {
    title: "Strategic Advisory",
    description: "Feasibility studies, roadmap development, sustainability strategy, and execution planning.",
    image: advisoryImage.src,
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Project Management",
    description: "Project scheduling, stakeholder coordination, milestone tracking, and execution oversight.",
    image: pmImage.src,
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "EPC Solutions",
    description: "Engineering, procurement, construction, commissioning, and deployment support.",
    image: epcImage.src,
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9 0 .46.04.92.1 1.36.09.61.58 1.09 1.19 1.14l1.37.11a22.39 22.39 0 0012.68 0l1.37-.11c.61-.05 1.1-.53 1.19-1.14.06-.44.1-.9.1-1.36 0-4.97-4.03-9-9-9zM12 3v3m-3.5 1.5l2 2m5-2l-2 2" />
      </svg>
    )
  },
  {
    title: "Capacity Building",
    description: "Training, certification, workforce development, and operational readiness.",
    image: trainingImage.src,
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6c-3 0-5.5-1.5-6-4m12 4c.5-2.5-2-4-6-4" />
      </svg>
    )
  }
];

interface Slide {
  type: "overview" | "pillar";
  title: string;
  badge: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const SLIDES: Slide[] = [
  {
    type: "overview",
    title: "Overview",
    badge: "KNOWLEDGE • INTELLIGENCE • EXECUTION • IMPACT",
    headline: "From Strategy to Execution. From Vision to Impact.",
    description: "Empowering organizations to accelerate the global energy transition through strategic leadership, execution excellence, and measurable real-world impact.",
    ctaText: "Explore Solutions",
    ctaLink: "#pillars"
  },
  {
    type: "pillar",
    title: "Strategic Advisory",
    badge: "PILLAR 01 / 04 • STRATEGIC ADVISORY",
    headline: "Strategic Advisory. From Vision to Roadmap.",
    description: "De-risk clean energy investments with robust feasibility models, solar/wind yield assessments, and Net-Zero strategy blueprints.",
    image: advisoryImage.src,
    ctaText: "Schedule Consultation",
    ctaLink: "#contact"
  },
  {
    type: "pillar",
    title: "Project Management",
    badge: "PILLAR 02 / 04 • PROJECT MANAGEMENT",
    headline: "Project Management. From Planning to Execution.",
    description: "Enforce project schedules, coordinate stakeholders, and monitor milestones through rigorous risk-mitigated PMC oversight.",
    image: pmImage.src,
    ctaText: "Request PMC Review",
    ctaLink: "#contact"
  },
  {
    type: "pillar",
    title: "EPC Solutions",
    badge: "PILLAR 03 / 04 • EPC SOLUTIONS",
    headline: "EPC Solutions. From Engineering to Integration.",
    description: "Execute engineering specs, construct physical works, design electrical layouts, and audit grid synchronization safely.",
    image: epcImage.src,
    ctaText: "Review EPC Specs",
    ctaLink: "#contact"
  },
  {
    type: "pillar",
    title: "Capacity Building",
    badge: "PILLAR 04 / 04 • CAPACITY BUILDING",
    headline: "Capacity Building. From Competency to Impact.",
    description: "Equip your engineering teams with verified certifications, VR training simulations, and advanced PVsyst design models.",
    image: trainingImage.src,
    ctaText: "Register Cohort Team",
    ctaLink: "#training"
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 220, damping: 24 },
      opacity: { duration: 0.25 },
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 220, damping: 24 },
      opacity: { duration: 0.2 }
    }
  })
};

const childVariants = {
  enter: { y: 15, opacity: 0 },
  center: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 250, damping: 24 } },
  exit: { y: -15, opacity: 0 }
};

const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 200, damping: 22 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring" as const, stiffness: 200, damping: 22 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 }
    }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const SLIDE_DURATION = 5000; // 5 seconds autoplay
  const lastActiveIndexRef = React.useRef(activeIndex);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Swipe left (next) or right (prev) with 50px threshold
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  // Unified autoplay logic with ref checks to prevent asynchronous state races
  useEffect(() => {
    if (!isPlaying) return;

    let currentProgress = progress;
    if (lastActiveIndexRef.current !== activeIndex) {
      currentProgress = 0;
      setProgress(0);
      lastActiveIndexRef.current = activeIndex;
    }

    const startTime = Date.now() - (currentProgress / 100) * SLIDE_DURATION;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);

      if (newProgress >= 100) {
        setProgress(0);
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % SLIDES.length);
      } else {
        setProgress(newProgress);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  const activeSlide = SLIDES[activeIndex];

  return (
    <section 
      className="relative w-full lg:min-h-screen lg:max-h-[880px] flex flex-col justify-center pt-[100px] pb-[40px] lg:pt-[110px] lg:pb-[50px] bg-[#F4F8F6] overflow-hidden"
      style={{
        background: "radial-gradient(circle at 18% 35%, rgba(34, 160, 107, 0.045) 0%, rgba(244, 248, 246, 0.75) 45%, rgba(244, 248, 246, 1) 100%)"
      }}
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Soft Green Radial Glow Elements */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#22A06B]/4 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-[#006B4F]/4 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Decorative Renewable Energy Hero Background Image (Bottom-Left) */}
      <div className="absolute bottom-0 left-0 w-[80%] sm:w-[65%] md:w-[50%] lg:w-[42%] h-[40%] sm:h-[45%] md:h-[50%] lg:h-[55%] pointer-events-none select-none z-0 overflow-hidden">
        <img 
          src="/sustainx_hero_bg.png" 
          alt="SustainX Renewable Energy Grid" 
          className="w-full h-full object-cover object-left-bottom opacity-[0.36] md:opacity-[0.60] transition-opacity duration-500"
        />
        {/* Gradient masks to blend smoothly into the page background (#F4F8F6) */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F4F8F6]/20 to-[#F4F8F6] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4F8F6]/20 to-[#F4F8F6] pointer-events-none" />
      </div>

      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: HERO NARRATIVE */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left lg:-translate-y-[20px]">
            <div 
              className="relative min-h-[380px] xs:min-h-[340px] md:min-h-[310px] w-full"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col items-start"
                >
                  {/* Pill Badge */}
                  <motion.div 
                    variants={childVariants} 
                    className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E6F3EE]/40 border border-[#22A06B]/15 rounded-full text-[10px] sm:text-[10.5px] font-bold text-[#006B4F] tracking-wider mb-4.5 self-start shadow-sm select-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22A06B] animate-pulse" />
                    <span>{activeSlide.badge}</span>
                  </motion.div>
                  
                  {/* Premium Typography Heading */}
                  <motion.h1 
                    variants={childVariants} 
                    className="font-syne text-[30px] sm:text-[34px] lg:text-[36px] xl:text-[40px] font-extrabold leading-[1.12] tracking-tight text-[#0B1612] mb-4.5"
                  >
                    {activeSlide.headline}
                  </motion.h1>
                  
                  {/* High contrast paragraph */}
                  <motion.p 
                    variants={childVariants} 
                    className="font-sans text-[14px] sm:text-[14.5px] text-[#4B5B55] leading-[1.78] font-normal max-w-[540px] mb-7"
                  >
                    {activeSlide.description}
                  </motion.p>
                  
                  {/* CTA button */}
                  <motion.div variants={childVariants}>
                    <a 
                      href={activeSlide.ctaLink} 
                      className="inline-flex items-center gap-4 bg-[#006B4F] hover:bg-[#00523C] text-white pl-6 pr-2.5 py-2.5 rounded-full font-bold text-[13.5px] tracking-wide transition-all duration-300 group shadow-[0_4px_14px_rgba(0,107,79,0.22)] hover:shadow-[0_8px_20px_rgba(0,107,79,0.32)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    >
                      <span>{activeSlide.ctaText}</span>
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <svg 
                          className="w-3.5 h-3.5 text-[#006B4F] transition-transform duration-300 group-hover:translate-x-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor" 
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static Slider Navigation Controls (Outside AnimatePresence) */}
            <div className="flex items-center gap-3.5 mt-8 select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl border border-[#22A06B]/20 hover:border-[#22A06B] bg-white text-[#22A06B] flex items-center justify-center transition-all cursor-pointer focus:outline-none hover:bg-[#E6F3EE]/40 shadow-sm"
                  aria-label="Previous Slide"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl border border-[#22A06B]/20 hover:border-[#22A06B] bg-white text-[#22A06B] flex items-center justify-center transition-all cursor-pointer focus:outline-none hover:bg-[#E6F3EE]/40 shadow-sm"
                  aria-label="Next Slide"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Autoplay Progress Indicators */}
              <div className="flex items-center gap-2.5 ml-4">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                      setProgress(0);
                    }}
                    className="relative h-1.5 bg-[#22A06B]/15 hover:bg-[#22A06B]/30 rounded-full overflow-hidden transition-all duration-300 w-10 sm:w-11 cursor-pointer focus:outline-none"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {activeIndex === idx && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 bg-[#22A06B]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.05 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 pt-2 lg:pt-0">
            <div 
              className="relative w-full min-h-[520px] sm:min-h-[480px] lg:min-h-[600px] overflow-hidden"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  {activeSlide.type === "overview" ? (
                    /* Original 2x2 static card grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start w-full h-full pt-2 lg:pt-0">
                      
                      {/* Column 1: Cards 1 and 3 */}
                      <div className="flex flex-col gap-4">
                        
                        {/* Pillar Card 01: Strategic Advisory */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(1);
                            setProgress(0);
                          }}
                          className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[290px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
                        >
                          <div className="p-4 pb-0 flex-grow">
                            <div className="w-[30px] h-[30px] rounded-full bg-[#E6F3EE] border border-[#22A06B]/10 text-[#22A06B] flex items-center justify-center mb-2 shadow-sm group-hover:bg-[#22A06B] group-hover:text-white group-hover:border-[#22A06B] transition-all duration-300">
                              {PILLARS[0].icon}
                            </div>
                            <h3 className="font-syne text-[15px] lg:text-[16px] font-bold text-[#0B1612] mb-1 transition-colors group-hover:text-[#22A06B]">
                              {PILLARS[0].title}
                            </h3>
                            <p className="font-sans text-[12px] leading-normal text-[#4B5B55]">
                              {PILLARS[0].description}
                            </p>
                          </div>
                          <div className="w-full h-32 md:h-40 overflow-hidden rounded-b-3xl relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                            <img 
                              src={PILLARS[0].image} 
                              alt={PILLARS[0].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/sustainx_landscape.png";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                          </div>
                        </div>

                        {/* Pillar Card 03: EPC Solutions */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(3);
                            setProgress(0);
                          }}
                          className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[290px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
                        >
                          <div className="p-4 pb-0 flex-grow">
                            <div className="w-[30px] h-[30px] rounded-full bg-[#E6F3EE] border border-[#22A06B]/10 text-[#22A06B] flex items-center justify-center mb-2 shadow-sm group-hover:bg-[#22A06B] group-hover:text-white group-hover:border-[#22A06B] transition-all duration-300">
                              {PILLARS[2].icon}
                            </div>
                            <h3 className="font-syne text-[15px] lg:text-[16px] font-bold text-[#0B1612] mb-1 transition-colors group-hover:text-[#22A06B]">
                              {PILLARS[2].title}
                            </h3>
                            <p className="font-sans text-[12px] leading-normal text-[#4B5B55]">
                              {PILLARS[2].description}
                            </p>
                          </div>
                          <div className="w-full h-32 md:h-40 overflow-hidden rounded-b-3xl relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                            <img 
                              src={PILLARS[2].image} 
                              alt={PILLARS[2].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/sustainx_landscape.png";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                          </div>
                        </div>

                      </div>

                      {/* Column 2: Cards 2 and 4 */}
                      <div className="flex flex-col gap-4">
                        
                        {/* Pillar Card 02: Project Management */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(2);
                            setProgress(0);
                          }}
                          className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[290px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
                        >
                          <div className="p-4 pb-0 flex-grow">
                            <div className="w-[30px] h-[30px] rounded-full bg-[#E6F3EE] border border-[#22A06B]/10 text-[#22A06B] flex items-center justify-center mb-2 shadow-sm group-hover:bg-[#22A06B] group-hover:text-white group-hover:border-[#22A06B] transition-all duration-300">
                              {PILLARS[1].icon}
                            </div>
                            <h3 className="font-syne text-[15px] lg:text-[16px] font-bold text-[#0B1612] mb-1 transition-colors group-hover:text-[#22A06B]">
                              {PILLARS[1].title}
                            </h3>
                            <p className="font-sans text-[12px] leading-normal text-[#4B5B55]">
                              {PILLARS[1].description}
                            </p>
                          </div>
                          <div className="w-full h-32 md:h-40 overflow-hidden rounded-b-3xl relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                            <img 
                              src={PILLARS[1].image} 
                              alt={PILLARS[1].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/sustainx_landscape.png";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                          </div>
                        </div>

                        {/* Pillar Card 04: Capacity Building */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(4);
                            setProgress(0);
                          }}
                          className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[290px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
                        >
                          <div className="p-4 pb-0 flex-grow">
                            <div className="w-[30px] h-[30px] rounded-full bg-[#E6F3EE] border border-[#22A06B]/10 text-[#22A06B] flex items-center justify-center mb-2 shadow-sm group-hover:bg-[#22A06B] group-hover:text-white group-hover:border-[#22A06B] transition-all duration-300">
                              {PILLARS[3].icon}
                            </div>
                            <h3 className="font-syne text-[15px] lg:text-[16px] font-bold text-[#0B1612] mb-1 transition-colors group-hover:text-[#22A06B]">
                              {PILLARS[3].title}
                            </h3>
                            <p className="font-sans text-[12px] leading-normal text-[#4B5B55]">
                              {PILLARS[3].description}
                            </p>
                          </div>
                          <div className="w-full h-32 md:h-40 overflow-hidden rounded-b-3xl relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                            <img 
                              src={PILLARS[3].image} 
                              alt={PILLARS[3].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = "/sustainx_landscape.png";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                          </div>
                        </div>

                      </div>

                    </div>
                  ) : (
                    /* Large detailed image */
                    <div className="w-full h-full bg-white border border-[#E6F3EE] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.035)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.07)] hover:border-[#22A06B]/20 transition-all duration-300 group cursor-grab active:cursor-grabbing">
                      <img
                        src={activeSlide.image}
                        alt={activeSlide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="eager"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/sustainx_landscape.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
