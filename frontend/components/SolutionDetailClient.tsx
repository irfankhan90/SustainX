"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SolutionData } from "@/lib/data/solutions";

interface SolutionDetailClientProps {
  solution: SolutionData;
}

const renderIcon = (name: string, className = "w-5 h-5") => {
  switch (name) {
    // Feature Icons
    case "strategic-insight":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "esg-excellence":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "decarbonization":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14A7 7 0 0 0 2.5 14c0 2.76 2.24 5 5 5h10z" />
          <path d="M8 13.5v1M12 13.5v1M16 13.5v1" />
        </svg>
      );
    case "risk-opportunity":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "global-expertise":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "sustainable-impact":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="20" y2="21" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <polygon points="12 2 2 10 22 10" />
          <line x1="6" y1="10" x2="6" y2="21" />
          <line x1="10" y1="10" x2="10" y2="21" />
          <line x1="14" y1="10" x2="14" y2="21" />
          <line x1="18" y1="10" x2="18" y2="21" />
        </svg>
      );

    // Services Icons
    case "sustainability-strategy":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "esg-advisory":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="5" y1="7" x2="19" y2="7" />
          <path d="M5 7c0 3 3 5 3 5s3-2 3-5M13 7c0 3 3 5 3 5s3-2 3-5" />
          <path d="M9 22h6" />
        </svg>
      );
    case "decarbonization-roadmap":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42 0-.83.05-1.22.14A7 7 0 0 0 2.5 14c0 2.76 2.24 5 5 5h10z" />
        </svg>
      );
    case "energy-transition-planning":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "climate-risk-assessment":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      );
    case "net-zero-consulting":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      );

    // Fallbacks & others
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a8.5 8.5 0 0 1-9 10z" />
          <path d="M19 2L9 12" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 15 9 18 3 15" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="15" />
        </svg>
      );
    case "adjustments":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="2" y1="14" x2="6" y2="14" />
          <line x1="10" y1="8" x2="14" y2="8" />
          <line x1="18" y1="16" x2="22" y2="16" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "check-circle":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "currency":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "trending-down":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
          <polyline points="17 18 23 18 23 12" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export const SolutionDetailClient: React.FC<SolutionDetailClientProps> = ({ solution }) => {
  const [counts, setCounts] = useState<number[]>(solution.stats.map(() => 0));

  useEffect(() => {
    const parseNumber = (str: string) => {
      const match = str.match(/([0-9.,]+)/);
      if (!match) return 0;
      return parseFloat(match[1].replace(/,/g, ""));
    };

    const targetVals = solution.stats.map((s) => parseNumber(s.value));
    const stepRatio = 0.08;
    const interval = setInterval(() => {
      setCounts((prev) => {
        const next = prev.map((curr, idx) => {
          const target = targetVals[idx];
          if (curr >= target) return target;
          const diff = target - curr;
          const step = Math.max(1, Math.round(diff * stepRatio));
          return Math.min(target, curr + step);
        });
        if (next.every((val, idx) => val === targetVals[idx])) {
          clearInterval(interval);
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [solution]);

  return (
    <>
      {/* --- BREADCRUMBS & HERO SECTION --- */}
      <section className="bg-white pt-8 pb-16 lg:pb-20 relative overflow-hidden select-none">
        <div className="container relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
            <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
            <span className="hover:text-[#1D9E75] cursor-pointer">Solutions</span>
            <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
            <span className="text-[#1D9E75] font-bold">
              {solution.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#1D9E75] flex items-center justify-center shrink-0">
                  {renderIcon("leaf", "w-4 h-4")}
                </span>
                <span className="text-[11px] font-bold text-[#1D9E75] tracking-widest uppercase">
                  {solution.badge}
                </span>
              </div>
              
              {/* Large Enterprise Heading */}
              <h1 className="font-syne text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-[1.12] tracking-tight text-[#0B1612] mb-6">
                {solution.heroTitle} <br />
                <span className="text-[#1D9E75] font-extrabold">{solution.heroHighlight}</span>
              </h1>
              
              {/* Brief Enterprise Description */}
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#3A5549] leading-relaxed font-normal mb-8 max-w-[550px]">
                {solution.description}
              </p>

              {/* Action Call buttons */}
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/#partnership-inquiry"
                  className="h-11 px-6 inline-flex items-center justify-center gap-2 text-xs font-bold text-white rounded-lg bg-[#1D9E75] hover:bg-[#0B6B53] shadow-[0_4px_12px_rgba(29,158,117,0.15)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300"
                >
                  <span>Partner With Us</span>
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                
                <Link
                  href="/#contact"
                  className="h-11 px-6 inline-flex items-center justify-center gap-2 text-xs font-bold text-[#1D9E75] border border-[#1D9E75]/30 rounded-lg hover:border-[#1D9E75] hover:bg-[#E1F5EE]/10 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                >
                  <span>Contact Our Experts</span>
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-6 flex items-center justify-end relative">
              <div className="w-full max-w-[500px] h-[340px] sm:h-[420px] lg:h-[480px] rounded-l-[320px] overflow-hidden relative shadow-lg bg-surface-2">
                <img
                  src={solution.image}
                  alt={solution.slug.replace("-", " ")}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/sustainx_landscape.png";
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS SECTION (Why Choose SustainX) --- */}
      <section className="bg-white pb-20 pt-4 border-b border-[#D0E8DE]/30">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {solution.whyChooseUs.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D0E8DE]/60 rounded-xl p-5 shadow-[0_2px_12px_rgba(11,22,18,0.015)] hover:border-[#1D9E75]/35 hover:-translate-y-1 hover:shadow-sh transition-all duration-300 flex flex-col group cursor-default"
              >
                {/* Circular Green Icon */}
                <div className="w-10 h-10 rounded-full bg-[#1D9E75] text-white flex items-center justify-center mb-4 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {renderIcon(card.iconName, "w-4.5 h-4.5")}
                </div>
                
                {/* Bold Title */}
                <h3 className="font-syne text-[13.5px] font-bold text-[#0B1612] mb-1.5 transition-colors group-hover:text-[#1D9E75]">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-[11.5px] text-[#3A5549] leading-tight">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container">
          
          {/* Services Headings */}
          <div className="text-center mb-16 select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-3">
              Our {solution.slug === "strategic-advisory" ? "Strategic Advisory" : solution.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} Services
            </h2>
            <p className="text-sm text-[#3A5549] max-w-xl mx-auto font-light">
              Comprehensive advisory solutions tailored to your sustainability goals
            </p>
          </div>

          {/* Services Grid (6 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D0E8DE]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#1D9E75]/40 hover:shadow-md transition-all duration-300 min-h-[220px] group relative cursor-default"
              >
                <div>
                  {/* Icon at top-left (Light green circle with dark green icon) */}
                  <div className="w-11 h-11 rounded-full bg-[#E1F5EE] text-[#0F6E56] flex items-center justify-center mb-5 border border-[#5DCAA5]/20 group-hover:bg-[#1D9E75] group-hover:text-white transition-all duration-300 shrink-0">
                    {renderIcon(svc.iconName, "w-5 h-5")}
                  </div>

                  {/* Title */}
                  <h3 className="font-syne text-base font-extrabold text-[#0B1612] mb-2.5 transition-colors group-hover:text-[#1D9E75]">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#3A5549] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow Icon at bottom-right */}
                <div className="absolute bottom-6 right-6 text-[#1D9E75] transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OVERVIEW --- */}
      <section className="py-20 bg-surface-2 border-t border-[#D0E8DE]/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-6">
              Overview
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#3A5549] leading-relaxed font-light">
              {solution.overview}
            </p>
          </div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE --- */}
      <section className="py-24 bg-white border-t border-[#D0E8DE]/30 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16 select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-3">
              Our Process Lifecycle
            </h2>
            <p className="text-sm text-[#3A5549] max-w-xl mx-auto font-light">
              Step-by-Step Delivery
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
            <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#D0E8DE] transform sm:-translate-x-1/2 rounded-full" />

            <div className="flex flex-col gap-12 sm:gap-16">
              {solution.process.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center w-full ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="absolute left-[3px] sm:left-1/2 w-9 h-9 rounded-full bg-[#1D9E75] border-[3px] border-white shadow-md transform -translate-x-1/2 z-10 flex items-center justify-center text-white text-xs font-extrabold select-none">
                      {idx + 1}
                    </div>

                    <div className={`w-full sm:w-[calc(50%-30px)] pl-8 sm:pl-0 ${
                      isEven ? "sm:pr-8 text-left sm:text-right" : "sm:pl-8 text-left"
                    }`}>
                      <div className="bg-white border border-[#D0E8DE]/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <span className="inline-block text-[9px] font-bold text-[#1D9E75] tracking-wider bg-[#E1F5EE] px-2.5 py-0.5 rounded-full mb-3 uppercase select-none">
                          {step.step}
                        </span>
                        <h3 className="font-syne text-[14.5px] font-extrabold text-[#0B1612] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[12px] text-[#3A5549] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES SERVED --- */}
      <section className="py-20 bg-surface-2 border-t border-b border-[#D0E8DE]/30">
        <div className="container">
          <div className="text-center mb-14 select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-3">
              Industries Served
            </h2>
            <p className="text-sm text-[#3A5549] max-w-xl mx-auto font-light">
              Strategic Market Focus
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {solution.industries.map((ind, idx) => (
              <div
                key={idx}
                className="px-5 py-3 rounded-full bg-white border border-[#D0E8DE]/60 text-xs sm:text-sm font-bold text-[#3A5549] hover:border-[#1D9E75] hover:text-[#1D9E75] hover:bg-[#E1F5EE]/10 transition-all duration-300 cursor-default select-none shadow-sm"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16 select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-3">
              Key Value & Benefits
            </h2>
            <p className="text-sm text-[#3A5549] max-w-xl mx-auto font-light">
              Business Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solution.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D0E8DE]/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-[#1D9E75]/35 hover:shadow-md transition-all duration-300 flex flex-col justify-start group cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-[#E1F5EE] text-[#1D9E75] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                  {renderIcon(benefit.iconName, "w-4.5 h-4.5")}
                </div>
                <h3 className="font-syne text-[14.5px] font-extrabold text-[#0B1612] mb-2 transition-colors group-hover:text-[#1D9E75]">
                  {benefit.title}
                </h3>
                <p className="text-[12px] text-[#3A5549] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUCCESS METRICS --- */}
      <section className="py-20 bg-[#085041] text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(93,202,165,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center justify-center">
            {solution.stats.map((stat, idx) => {
              const baseValue = stat.value.replace(/[^0-9]/g, "");
              const isInt = baseValue !== "";
              const displayVal = isInt ? counts[idx] : stat.value;
              const unit = stat.value.replace(/[0-9.,]/g, "");
              
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="font-syne text-[28px] sm:text-[36px] font-extrabold text-[#5DCAA5] tracking-tight">
                    {isInt ? `${displayVal.toLocaleString()}${unit}` : displayVal}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#E1F5EE]/70 font-semibold uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CASE STUDIES --- */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16 select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-3">
              Case Studies & Proof of Performance
            </h2>
            <p className="text-sm text-[#3A5549] max-w-xl mx-auto font-light">
              Real-World Outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solution.caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#1D9E75]/35 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div>
                  <span className="inline-block text-[9.5px] font-bold text-blue-600 tracking-wider bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full mb-4 uppercase">
                    {cs.industry}
                  </span>
                  <h3 className="font-syne text-base sm:text-lg font-extrabold text-[#0B1612] mb-4">
                    {cs.name}
                  </h3>
                  
                  <div className="flex flex-col gap-3">
                    <div className="text-[12.5px] text-[#3A5549]">
                      <strong className="text-[#0B1612]">Challenge:</strong> {cs.challenge}
                    </div>
                    <div className="text-[12.5px] text-[#3A5549]">
                      <strong className="text-[#0B1612]">Solution:</strong> {cs.solution}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#D0E8DE]/45 pt-4 mt-6">
                  <div className="text-[12.5px] font-bold text-[#0F6E56] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-ping" />
                    Outcome: {cs.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 bg-gradient-to-br from-[#085041] via-[#0F6E56] to-[#1D9E75] text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04)_0%,transparent_50%)]" />

        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Ready to Build a Sustainable Future?
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-[#E1F5EE]/80 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Reach out to our professional execution advisory team today. Let's design, plan, construct, or train your organization for the next generation of energy assets.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#partnership-inquiry"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-[#0F6E56] bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Partner With Us
            </Link>
            
            <Link
              href="/#contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionDetailClient;
