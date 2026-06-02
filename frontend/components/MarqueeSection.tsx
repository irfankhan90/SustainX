"use client";

import React from "react";

const partners = [
  "Adani Green Energy",
  "Mahindra IT Centre",
  "Fujitsu India",
  "General Motors USA",
  "Hyundai Kia USA",
  "IIT Kanpur",
  "KOC Kuwait",
  "Tennessee Tech USA",
  "Switch Mobility",
  "Taibah University",
  "Schoon Energy",
  "Universal Studios",
  "Shapoorji Pallonji",
];

export const MarqueeSection: React.FC = () => {
  // Duplicate for seamless loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="py-[22px] border-t border-b border-bdr-DEFAULT bg-white overflow-hidden">
      <div className="text-center text-[11px] text-t-3 tracking-widest uppercase mb-3.5">
        Trusted by professionals from
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="flex w-max items-center gap-12 whitespace-nowrap animate-marquee">
          {displayPartners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 font-syne text-xs font-semibold text-t-3 uppercase tracking-wider"
            >
              <span>{partner}</span>
              <span className="text-brand-gll">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MarqueeSection;
