"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageData } from "@/lib/data/navigation_pages";

interface NavPageClientProps {
  page: PageData;
}

const renderIcon = (name: string, className = "w-5 h-5") => {
  switch (name) {
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
    case "energy-transition-planning":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "net-zero-consulting":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
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
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-none stroke-current stroke-[2.2]`} strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a8.5 8.5 0 0 1-9 10z" />
          <path d="M19 2L9 12" />
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

export const NavPageClient: React.FC<NavPageClientProps> = ({ page }) => {
  const [counts, setCounts] = useState<number[]>(page.stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parseNumber = (str: string) => {
      const match = str.match(/([0-9.,]+)/);
      if (!match) return 0;
      return parseFloat(match[1].replace(/,/g, ""));
    };

    const targetVals = page.stats.map((s) => parseNumber(s.value));
    const stepRatio = 0.08;
    let interval: NodeJS.Timeout;

    const startCounter = () => {
      interval = setInterval(() => {
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
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounter();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [page]);

  const displayTitle = page.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <>
      {/* --- BREADCRUMBS & HERO SECTION --- */}
      <section className="bg-white pt-8 pb-16 lg:pb-20 relative overflow-hidden select-none">
        <div className="container relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[11px] font-bold text-[#6B8C80] mb-8 select-none" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#1D9E75] transition-colors">Home</Link>
            <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
            <span className="hover:text-[#1D9E75] cursor-pointer">{page.category}</span>
            <span className="text-[#A8C4BA] text-[10px]">&gt;</span>
            <span className="text-[#1D9E75] font-bold">
              {displayTitle}
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
                  {page.badge}
                </span>
              </div>
              
              {/* Large Enterprise Heading */}
              <h1 className="font-syne text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-[1.12] tracking-tight text-[#0B1612] mb-6">
                {page.heroTitle} <br />
                <span className="text-[#1D9E75] font-extrabold">{page.heroHighlight}</span>
              </h1>
              
              {/* Brief Enterprise Description */}
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#3A5549] leading-relaxed font-normal mb-8 max-w-[550px]">
                {page.description}
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
                <Image
                  src={page.image || "/sustainx_landscape.png"}
                  alt={page.slug.replace("-", " ")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURE CARDS SECTION (Why Choose SustainX) --- */}
      {page.features && page.features.length > 0 && (
        <section className="bg-white pb-20 pt-4 border-b border-[#D0E8DE]/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {page.features.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#D0E8DE]/60 rounded-xl p-6 shadow-[0_2px_12px_rgba(11,22,18,0.015)] hover:border-[#1D9E75]/35 hover:-translate-y-1 hover:shadow-sh transition-all duration-300 flex flex-col group cursor-default"
                >
                  {/* Circular Green Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#1D9E75] text-white flex items-center justify-center mb-4 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {renderIcon(card.iconName, "w-4.5 h-4.5")}
                  </div>
                  
                  {/* Bold Title */}
                  <h3 className="font-syne text-[14.5px] font-bold text-[#0B1612] mb-1.5 transition-colors group-hover:text-[#1D9E75]">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[12.5px] text-[#6B8C80] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- OVERVIEW --- */}
      <section className="py-20 bg-surface-2 border-t border-[#D0E8DE]/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center select-none">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-[#0B1612] mb-6">
              Overview
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#3A5549] leading-relaxed font-light">
              {page.overview}
            </p>
          </div>
        </div>
      </section>

      {/* --- SUCCESS METRICS --- */}
      {page.stats && page.stats.length > 0 && (
        <section ref={statsRef} className="py-20 bg-[#085041] text-white relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(93,202,165,0.06)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="container relative z-10">
            <div className="flex flex-wrap gap-8 text-center justify-center">
              {page.stats.map((stat, idx) => {
                const baseValue = stat.value.replace(/[^0-9]/g, "");
                const isInt = baseValue !== "";
                const displayVal = isInt ? counts[idx] : stat.value;
                const unit = stat.value.replace(/[0-9.,]/g, "");
                
                return (
                  <div key={idx} className="flex flex-col items-center min-w-[120px] sm:min-w-[160px]">
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
      )}

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

export default NavPageClient;
