import React from "react";
import Image from "next/image";

export const BannerSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[280px] sm:min-h-[350px] lg:min-h-[380px] xl:min-h-[420px] py-12 flex items-center bg-ink-DEFAULT overflow-hidden">
      {/* Cinematic Panoramic Background Image */}
      <Image 
        src="/sustainx_landscape.png" 
        alt="SustainX Real-World Renewable Energy Impact Solar Farm and Wind Turbines" 
        fill
        priority
        sizes="100vw"
        className="object-cover object-center select-none pointer-events-none transform scale-102"
      />
      
      {/* Dark Overlay Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25 lg:from-black/70 lg:via-black/40 lg:to-black/20 z-0" />
      
      {/* Subtle bottom border highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-g/20" />

      {/* Content Overlay */}
      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-[620px] text-white pr-4">
          
          {/* Section Indicator Label */}
          <span className="font-syne text-[11px] lg:text-[12px] font-bold text-brand-g tracking-widest uppercase mb-3.5 block">
            Real-World Renewable Energy Impact
          </span>
          
          {/* Main Cinematic Text Overlay */}
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[38px] xl:text-[44px] font-extrabold leading-[1.18] text-white tracking-tight">
            Driving Renewable Energy Projects from <span className="text-brand-g">Strategy</span> to <span className="text-brand-g">Execution.</span>
          </h2>
          
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
