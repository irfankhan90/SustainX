"use client";

import React from "react";

interface Partner {
  name: string;
  logoMark: React.ReactNode;
}

const PARTNERS: Partner[] = [
  {
    name: "IIT KANPUR",
    logoMark: (
      <svg className="w-5 h-5 text-[#4B5B55] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "KOC KUWAIT",
    logoMark: (
      <svg className="w-5 h-5 text-[#4B5B55] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "TENNESSEE TECH",
    logoMark: (
      <svg className="w-5 h-5 text-[#4B5B55] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 21L10 3h4l6 18M2 21h20M7 14h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "TAIBAH UNIVERSITY",
    logoMark: (
      <svg className="w-5 h-5 text-[#4B5B55] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6c-3 0-5.5-1.5-6-4m12 4c.5-2.5-2-4-6-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "SCHOON ENERGY",
    logoMark: (
      <svg className="w-5 h-5 text-[#4B5B55] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 12L3 9M12 12l6-7M12 12l3 9" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    )
  }
];

export const MarqueeSection: React.FC = () => {
  // Duplicate list to support a continuous seamless horizontal loop
  const displayPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <div className="py-8 border-t border-b border-[#E5ECE8] bg-[#F8FAF9] overflow-hidden select-none">
      <div className="text-center text-[10px] sm:text-[11px] font-bold text-[#66756F] tracking-[0.2em] uppercase mb-6">
        Trusted by Industry Leaders
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="flex w-max items-center gap-16 sm:gap-24 whitespace-nowrap animate-marquee">
          {displayPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 font-syne text-[14px] sm:text-[15px] font-extrabold text-[#4B5B55] tracking-widest transition-colors duration-300 hover:text-[#22A06B] cursor-pointer"
            >
              {partner.logoMark}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
