"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PILLARS as sharedPillars } from "@/lib/data/pillars";

interface Pillar {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const HERO_ICONS = [
  (
    <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  (
    <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
    </svg>
  ),
  (
    <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9 0 .46.04.92.1 1.36.09.61.58 1.09 1.19 1.14l1.37.11a22.39 22.39 0 0012.68 0l1.37-.11c.61-.05 1.1-.53 1.19-1.14.06-.44.1-.9.1-1.36 0-4.97-4.03-9-9-9zM12 3v3m-3.5 1.5l2 2m5-2l-2 2" />
    </svg>
  ),
  (
    <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6c-3 0-5.5-1.5-6-4m12 4c.5-2.5-2-4-6-4" />
    </svg>
  )
];

const PILLARS: Pillar[] = sharedPillars.map((p, idx) => ({
  title: p.name,
  description: p.heroDesc,
  image: p.image,
  icon: HERO_ICONS[idx]
}));

interface Slide {
  type: "overview" | "pillar";
  title: string;
  badge: string;
  headline: string;
  description: string;
  mobileHeadline?: string;
  mobileDescription?: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

const SLIDES: Slide[] = [
  {
    type: "overview",
    title: "Overview",
    badge: "WHO • WHAT • WHY SUSTAINX",
    headline: "GlobalPact SustainX: Bridging Strategy and Real-World Execution.",
    description: "GlobalPact SustainX is the clean energy transition execution partner. We bridge the strategy-execution gap by integrating Strategy, Project Management, Turnkey Solutions, and Capacity Building to deliver measurable, de-risked sustainability assets.",
    mobileHeadline: "GlobalPact SustainX: Bridging Strategy & Real-World Execution.",
    mobileDescription: "We connect strategy, execution, and capability building to deliver measurable sustainability outcomes.",
    ctaText: "Explore Ecosystem",
    ctaLink: "#pillars"
  },
  {
    type: "pillar",
    title: "Strategy",
    badge: "PILLAR 01 / 04 • STRATEGY",
    headline: "Strategy. From Vision to Roadmap.",
    description: "De-risk clean energy investments with robust feasibility models, solar/wind yield assessments, and Net-Zero strategy blueprints.",
    mobileHeadline: "Strategy. From Vision to Roadmap.",
    mobileDescription: "De-risk clean energy investments with robust feasibility models and Net-Zero blueprints.",
    image: PILLARS[0].image,
    ctaText: "Partner With Us",
    ctaLink: "#partnership-inquiry"
  },
  {
    type: "pillar",
    title: "Project Management",
    badge: "PILLAR 02 / 04 • PROJECT MANAGEMENT",
    headline: "Project Management. From Planning to Execution.",
    description: "Enforce project schedules, coordinate stakeholders, and monitor milestones through rigorous risk-mitigated PMC oversight.",
    mobileHeadline: "Project Management. Planning to Execution.",
    mobileDescription: "Enforce schedules, coordinate stakeholders, and monitor milestones through PMC oversight.",
    image: PILLARS[1].image,
    ctaText: "Build With Us",
    ctaLink: "#partnership-inquiry"
  },
  {
    type: "pillar",
    title: "Turnkey Solutions",
    badge: "PILLAR 03 / 04 • TURNKEY SOLUTIONS",
    headline: "Turnkey Solutions. From Engineering to Integration.",
    description: "Execute engineering specs, construct physical works, design electrical layouts, and audit grid synchronization safely.",
    mobileHeadline: "Turnkey Solutions. Engineering to Integration.",
    mobileDescription: "Execute engineering specs, construct physical works, and audit grid synchronization safely.",
    image: PILLARS[2].image,
    ctaText: "Build With Us",
    ctaLink: "#partnership-inquiry"
  },
  {
    type: "pillar",
    title: "Capacity Building",
    badge: "PILLAR 04 / 04 • CAPACITY BUILDING",
    headline: "Capacity Building. From Competency to Impact.",
    description: "Equip your engineering teams with verified certifications, VR training simulations, and advanced PVsyst design models.",
    mobileHeadline: "Capacity Building. Competency to Impact.",
    mobileDescription: "Equip engineering teams with verified certifications and PVsyst design models.",
    image: PILLARS[3].image,
    ctaText: "Join the Ecosystem",
    ctaLink: "/programs"
  }
];

const slideVariants = {
  enter: {
    opacity: 0
  },
  center: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.35 },
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.25 }
    }
  }
};

const childVariants = {
  enter: { y: 15, opacity: 0 },
  center: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 250, damping: 24 } },
  exit: { y: -15, opacity: 0 }
};

const imageVariants = {
  enter: {
    opacity: 0,
    scale: 0.98
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 }
    }
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 }
    }
  }
};

export const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const SLIDE_DURATION = 5500; // 5.5 seconds autoplay
  const lastActiveIndexRef = useRef(activeIndex);

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
      className="relative w-full lg:min-h-screen lg:max-h-[820px] flex flex-col justify-center pt-[90px] pb-[40px] lg:pt-[100px] lg:pb-[50px] bg-[#F4F8F6] overflow-hidden"
      style={{
        background: "radial-gradient(circle at 18% 35%, rgba(29, 158, 117, 0.045) 0%, rgba(244, 248, 246, 0.75) 45%, rgba(244, 248, 246, 1) 100%)"
      }}
      id="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Soft Green Radial Glow Elements */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-brand-g/5 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-brand-gxd/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Decorative Renewable Energy Hero Background Image (Bottom-Left) */}
      <div className="absolute bottom-0 left-0 w-[80%] sm:w-[65%] md:w-[50%] lg:w-[42%] h-[40%] sm:h-[45%] md:h-[50%] lg:h-[55%] pointer-events-none select-none z-0 overflow-hidden">
        <Image 
          src="/sustainx_hero_bg.png" 
          alt="SustainX Renewable Energy Grid" 
          fill
          priority
          sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, 42vw"
          className="object-cover object-left-bottom opacity-[0.36] md:opacity-[0.60] transition-opacity duration-500"
        />
        {/* Gradient masks to blend smoothly into the page background (#F4F8F6) */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F4F8F6]/20 to-[#F4F8F6] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F4F8F6]/20 to-[#F4F8F6] pointer-events-none" />
      </div>

      <div className="container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full">
          
          {/* LEFT COLUMN: HERO NARRATIVE (45% Width on Desktop) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center text-left lg:-translate-y-[10px]">
            <div 
              className="relative min-h-[200px] sm:min-h-[280px] w-full"
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
                  {/* Brand Logo & Pill Badge */}
                  <motion.div 
                    variants={childVariants} 
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 mb-6"
                  >
                    <Image 
                      src="/logo.jpg" 
                      alt="GlobalPact SustainX Logo" 
                      width={40}
                      height={40}
                      className="h-10 w-auto object-contain flex-shrink-0"
                    />
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-gxl/40 border border-brand-g/15 rounded-full text-[10px] sm:text-[10.5px] font-bold text-brand-gd tracking-wider shadow-sm select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-g animate-pulse" />
                      <span>{activeSlide.badge}</span>
                    </div>
                  </motion.div>
                  
                  {/* Premium Typography Heading */}
                  <motion.h1 
                    variants={childVariants} 
                    className="font-syne text-[30px] sm:text-[34px] lg:text-[38px] xl:text-[44px] font-extrabold leading-[1.12] tracking-tight text-t-DEFAULT mb-6"
                  >
                    <span className="hidden sm:inline">{activeSlide.headline}</span>
                    <span className="inline sm:hidden">{activeSlide.mobileHeadline || activeSlide.headline}</span>
                  </motion.h1>
                  
                  {/* High contrast paragraph */}
                  <motion.p 
                    variants={childVariants} 
                    className="font-sans text-[14px] sm:text-[15px] text-t-2 leading-[1.78] font-normal max-w-none sm:max-w-[580px] mb-8"
                  >
                    <span className="hidden sm:inline">{activeSlide.description}</span>
                    <span className="inline sm:hidden">{activeSlide.mobileDescription || activeSlide.description}</span>
                  </motion.p>
                  
                  {/* CTA button */}
                  <motion.div variants={childVariants}>
                    <a 
                      href={activeSlide.ctaLink} 
                      className="inline-flex items-center gap-4 bg-brand-gxd hover:bg-brand-gd text-white pl-6 pr-2.5 py-2.5 rounded-full font-bold text-[13.5px] tracking-wide transition-all duration-300 group shadow-[0_4px_14px_rgba(8,80,65,0.22)] hover:shadow-[0_8px_20px_rgba(8,80,65,0.32)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
                    >
                      <span>{activeSlide.ctaText}</span>
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <svg 
                          className="w-3.5 h-3.5 text-brand-gxd transition-transform duration-300 group-hover:translate-x-0.5" 
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

            {/* Static Slider Navigation Controls (Tablet/Desktop View) */}
            <div className="hidden sm:flex items-center gap-3.5 mt-8 select-none">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-xl border border-brand-g/20 hover:border-brand-g bg-white text-brand-g flex items-center justify-center transition-all cursor-pointer focus:outline-none hover:bg-brand-gxl/40 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g"
                  aria-label="Previous Slide"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-xl border border-brand-g/20 hover:border-brand-g bg-white text-brand-g flex items-center justify-center transition-all cursor-pointer focus:outline-none hover:bg-brand-gxl/40 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g"
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
                    className="relative py-2.5 bg-transparent cursor-pointer focus:outline-none group focus-visible:outline-none"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div className="h-1.5 bg-brand-g/15 group-hover:bg-brand-g/30 rounded-full overflow-hidden transition-all duration-300 w-10 sm:w-11 relative">
                      {activeIndex === idx && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 bg-brand-g"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                          transition={{ ease: "linear", duration: 0.05 }}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HERO VISUAL PANEL (55% Width on Desktop) */}
          <div className="w-full lg:w-[55%] pt-2 lg:pt-0">
            {/* Desktop/Tablet View Wrapper */}
            <div 
              className="hidden sm:block relative w-full sm:h-[420px] lg:h-[460px] rounded-[24px] overflow-hidden shadow-sh border border-bdr-DEFAULT"
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
                    <div className="grid grid-cols-2 gap-4 items-start w-full h-full p-4 bg-surface-2/30">
                      {/* Column 1: Cards 1 and 3 */}
                      <div className="flex flex-col gap-4">
                        {/* Card 1 */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(1);
                            setProgress(0);
                          }}
                          className="bg-white border border-bdr-DEFAULT rounded-[20px] overflow-hidden flex flex-col h-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-sh hover:border-brand-g/25 group cursor-pointer"
                        >
                          <div className="p-3.5 pb-0 flex-grow">
                            <div className="w-[28px] h-[28px] rounded-full bg-brand-gxl border border-brand-g/10 text-brand-g flex items-center justify-center mb-1.5 shadow-sm group-hover:bg-brand-g group-hover:text-white transition-all duration-300">
                              {PILLARS[0].icon}
                            </div>
                            <h3 className="font-syne text-[13.5px] font-bold text-t-DEFAULT mb-0.5 transition-colors group-hover:text-brand-g">
                              {PILLARS[0].title}
                            </h3>
                            <p className="font-sans text-[11px] leading-tight text-t-2">
                              {PILLARS[0].description}
                            </p>
                          </div>
                          <div className="w-full h-[84px] overflow-hidden rounded-b-2xl relative border-t border-bdr-DEFAULT mt-auto group-hover:border-brand-g/20 transition-colors duration-300">
                            <img 
                              src={PILLARS[0].image} 
                              alt={PILLARS[0].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Card 3 */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(3);
                            setProgress(0);
                          }}
                          className="bg-white border border-bdr-DEFAULT rounded-[20px] overflow-hidden flex flex-col h-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-sh hover:border-brand-g/25 group cursor-pointer"
                        >
                          <div className="p-3.5 pb-0 flex-grow">
                            <div className="w-[28px] h-[28px] rounded-full bg-brand-gxl border border-brand-g/10 text-brand-g flex items-center justify-center mb-1.5 shadow-sm group-hover:bg-brand-g group-hover:text-white transition-all duration-300">
                              {PILLARS[2].icon}
                            </div>
                            <h3 className="font-syne text-[13.5px] font-bold text-t-DEFAULT mb-0.5 transition-colors group-hover:text-brand-g">
                              {PILLARS[2].title}
                            </h3>
                            <p className="font-sans text-[11px] leading-tight text-t-2">
                              {PILLARS[2].description}
                            </p>
                          </div>
                          <div className="w-full h-[84px] overflow-hidden rounded-b-2xl relative border-t border-bdr-DEFAULT mt-auto group-hover:border-brand-g/20 transition-colors duration-300">
                            <img 
                              src={PILLARS[2].image} 
                              alt={PILLARS[2].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Cards 2 and 4 */}
                      <div className="flex flex-col gap-4">
                        {/* Card 2 */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(2);
                            setProgress(0);
                          }}
                          className="bg-white border border-bdr-DEFAULT rounded-[20px] overflow-hidden flex flex-col h-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-sh hover:border-brand-g/25 group cursor-pointer"
                        >
                          <div className="p-3.5 pb-0 flex-grow">
                            <div className="w-[28px] h-[28px] rounded-full bg-brand-gxl border border-brand-g/10 text-brand-g flex items-center justify-center mb-1.5 shadow-sm group-hover:bg-brand-g group-hover:text-white transition-all duration-300">
                              {PILLARS[1].icon}
                            </div>
                            <h3 className="font-syne text-[13.5px] font-bold text-t-DEFAULT mb-0.5 transition-colors group-hover:text-brand-g">
                              {PILLARS[1].title}
                            </h3>
                            <p className="font-sans text-[11px] leading-tight text-t-2">
                              {PILLARS[1].description}
                            </p>
                          </div>
                          <div className="w-full h-[84px] overflow-hidden rounded-b-2xl relative border-t border-bdr-DEFAULT mt-auto group-hover:border-brand-g/20 transition-colors duration-300">
                            <img 
                              src={PILLARS[1].image} 
                              alt={PILLARS[1].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Card 4 */}
                        <div 
                          onClick={() => {
                            setDirection(1);
                            setActiveIndex(4);
                            setProgress(0);
                          }}
                          className="bg-white border border-bdr-DEFAULT rounded-[20px] overflow-hidden flex flex-col h-[200px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-sh hover:border-brand-g/25 group cursor-pointer"
                        >
                          <div className="p-3.5 pb-0 flex-grow">
                            <div className="w-[28px] h-[28px] rounded-full bg-brand-gxl border border-brand-g/10 text-brand-g flex items-center justify-center mb-1.5 shadow-sm group-hover:bg-brand-g group-hover:text-white transition-all duration-300">
                              {PILLARS[3].icon}
                            </div>
                            <h3 className="font-syne text-[13.5px] font-bold text-t-DEFAULT mb-0.5 transition-colors group-hover:text-brand-g">
                              {PILLARS[3].title}
                            </h3>
                            <p className="font-sans text-[11px] leading-tight text-t-2">
                              {PILLARS[3].description}
                            </p>
                          </div>
                          <div className="w-full h-[84px] overflow-hidden rounded-b-2xl relative border-t border-bdr-DEFAULT mt-auto group-hover:border-brand-g/20 transition-colors duration-300">
                            <img 
                              src={PILLARS[3].image} 
                              alt={PILLARS[3].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-white border border-bdr-DEFAULT rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.035)] hover:shadow-sh2 hover:border-brand-g/20 transition-all duration-300 group cursor-grab active:cursor-grabbing">
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

            {/* Mobile View: Always show the 4 cards grid/carousel */}
            <div className="block sm:hidden w-full">
              <div className="grid grid-cols-2 gap-3 min-[375px]:grid-cols-2 max-[374px]:flex max-[374px]:overflow-x-auto max-[374px]:snap-x max-[374px]:snap-mandatory max-[374px]:scroll-smooth max-[374px]:pb-2 scrollbar-none w-full">
                {PILLARS.map((pillar, idx) => {
                  const isCurrentActive = activeIndex === idx + 1;
                  return (
                    <div
                      key={pillar.title}
                      onClick={() => {
                        setDirection(1);
                        setActiveIndex(idx + 1);
                        setProgress(0);
                      }}
                      className={`max-[374px]:w-[240px] max-[374px]:shrink-0 max-[374px]:snap-center bg-white border rounded-[20px] overflow-hidden flex flex-col h-[180px] transition-all duration-300 ${
                        isCurrentActive
                          ? "border-brand-g ring-2 ring-brand-g/20 shadow-md"
                          : "border-bdr-DEFAULT shadow-sm hover:border-brand-g/25"
                      } cursor-pointer`}
                    >
                      <div className="p-3.5 pb-0 flex-grow flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <div className={`w-[26px] h-[26px] rounded-full border flex items-center justify-center shadow-sm shrink-0 transition-colors ${
                            isCurrentActive
                              ? "bg-brand-g text-white border-brand-g"
                              : "bg-brand-gxl border-brand-g/10 text-brand-g"
                          }`}>
                            {pillar.icon}
                          </div>
                          <h3 className={`font-syne text-[12px] font-bold truncate transition-colors ${
                            isCurrentActive ? "text-brand-g" : "text-t-DEFAULT"
                          }`}>
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="font-sans text-[10.5px] leading-tight text-t-2 line-clamp-2">
                          {pillar.description}
                        </p>
                      </div>
                      <div className="w-full h-[64px] overflow-hidden rounded-b-2xl relative border-t border-bdr-DEFAULT mt-auto shrink-0">
                        <img 
                          src={pillar.image} 
                          alt={pillar.title} 
                          className="w-full h-full object-cover transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile View Navigation Controls */}
              <div className="flex items-center justify-between gap-3.5 mt-5 select-none w-full">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-lg border border-brand-g/20 bg-white text-brand-g flex items-center justify-center shadow-sm cursor-pointer active:scale-95 transition-all"
                    aria-label="Previous Slide"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-9 h-9 rounded-lg border border-brand-g/20 bg-white text-brand-g flex items-center justify-center shadow-sm cursor-pointer active:scale-95 transition-all"
                    aria-label="Next Slide"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Autoplay Progress Indicators */}
                <div className="flex items-center gap-2">
                  {SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > activeIndex ? 1 : -1);
                        setActiveIndex(idx);
                        setProgress(0);
                      }}
                      className="relative py-2 bg-transparent cursor-pointer focus:outline-none"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className="h-1 bg-brand-g/15 rounded-full overflow-hidden w-7 relative">
                        {activeIndex === idx && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 bg-brand-g"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.05 }}
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
