"use client";

import React from "react";

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
    image: "/sustainx_advisory.png",
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Project Management",
    description: "Project scheduling, stakeholder coordination, milestone tracking, and execution oversight.",
    image: "/sustainx_pm.png",
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  },
  {
    title: "EPC Solutions",
    description: "Engineering, procurement, construction, commissioning, and deployment support.",
    image: "/sustainx_epc.png",
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9 0 .46.04.92.1 1.36.09.61.58 1.09 1.19 1.14l1.37.11a22.39 22.39 0 0012.68 0l1.37-.11c.61-.05 1.1-.53 1.19-1.14.06-.44.1-.9.1-1.36 0-4.97-4.03-9-9-9zM12 3v3m-3.5 1.5l2 2m5-2l-2 2" />
      </svg>
    )
  },
  {
    title: "Capacity Building",
    description: "Training, certification, workforce development, and operational readiness.",
    image: "/sustainx_training.png",
    icon: (
      <svg className="w-3.5 h-3.5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6c-3 0-5.5-1.5-6-4m12 4c.5-2.5-2-4-6-4" />
      </svg>
    )
  }
];

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative w-full lg:min-h-screen lg:max-h-[880px] flex flex-col justify-center pt-[100px] pb-[40px] lg:pt-[110px] lg:pb-[50px] bg-[#F4F8F6] overflow-hidden"
      style={{
        background: "radial-gradient(circle at 18% 35%, rgba(34, 160, 107, 0.045) 0%, rgba(244, 248, 246, 0.75) 45%, rgba(244, 248, 246, 1) 100%)"
      }}
      id="home"
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
          
          {/* LEFT COLUMN: HERO NARRATIVE (Shifted upward to balance cards height) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full py-4 lg:py-6 lg:-translate-y-[70px] relative">
            
            {/* Subtle renewable energy visual backdrop (watermark/texture) */}
            <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none select-none z-0 opacity-[0.05] flex items-center justify-start pl-2">
              <svg 
                className="w-[90%] h-[90%] text-[#16A34A]" 
                viewBox="0 0 300 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Wind Turbine 1 */}
                <line x1="80" y1="210" x2="80" y2="80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="80" cy="80" r="2.5" fill="currentColor" />
                {/* Blades */}
                <line x1="80" y1="80" x2="60" y2="62" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="80" y1="80" x2="100" y2="62" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="80" y1="80" x2="80" y2="105" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

                {/* Wind Turbine 2 */}
                <line x1="150" y1="210" x2="150" y2="110" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="150" cy="110" r="2" fill="currentColor" />
                {/* Blades */}
                <line x1="150" y1="110" x2="135" y2="97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <line x1="150" y1="110" x2="165" y2="97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <line x1="150" y1="110" x2="150" y2="130" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />

                {/* Solar Panel Grid Rows (Perspective Lines) */}
                <path d="M30 220 L110 220 L100 245 L20 245 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                <line x1="50" y1="220" x2="40" y2="245" stroke="currentColor" strokeWidth="1" />
                <line x1="70" y1="220" x2="60" y2="245" stroke="currentColor" strokeWidth="1" />
                <line x1="90" y1="220" x2="80" y2="245" stroke="currentColor" strokeWidth="1" />
                <line x1="25" y1="232" x2="105" y2="232" stroke="currentColor" strokeWidth="0.8" />

                <path d="M130 215 L210 215 L200 238 L120 238 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                <line x1="150" y1="215" x2="140" y2="238" stroke="currentColor" strokeWidth="1" />
                <line x1="170" y1="215" x2="160" y2="238" stroke="currentColor" strokeWidth="1" />
                <line x1="190" y1="215" x2="180" y2="238" stroke="currentColor" strokeWidth="1" />
                <line x1="125" y1="226" x2="205" y2="226" stroke="currentColor" strokeWidth="0.8" />

                {/* Abstract Sustainability Nodes & Power Lines */}
                <path d="M80 210 C90 220, 110 220, 120 225" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                <path d="M150 210 C170 210, 180 215, 200 225" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                <circle cx="80" cy="210" r="1.5" fill="currentColor" />
                <circle cx="150" cy="210" r="1.5" fill="currentColor" />
              </svg>
            </div>
            
            {/* Pill Badge - Subtle Green Accent styling */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E6F3EE]/40 border border-[#22A06B]/15 rounded-full text-[10px] sm:text-[10.5px] font-bold text-[#006B4F] tracking-wider mb-4.5 self-start shadow-sm select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22A06B] animate-pulse" />
              <span>KNOWLEDGE • INTELLIGENCE • EXECUTION • IMPACT</span>
            </div>
            
            {/* Premium Typography Heading */}
            <h1 className="font-syne text-[30px] sm:text-[34px] lg:text-[36px] xl:text-[40px] font-extrabold leading-[1.12] tracking-tight text-[#0B1612] mb-4.5">
              From Strategy<br />
              to <span className="text-[#22A06B]">Execution.</span><br />
              From Vision<br />
              to <span className="text-[#22A06B]">Impact.</span>
            </h1>
            
            {/* High contrast paragraph - max-width 540px, line-height 1.78 */}
            <p className="font-sans text-[14px] sm:text-[14.5px] text-[#4B5B55] leading-[1.78] font-normal max-w-[540px] mb-7">
              Empowering organizations to accelerate the global energy transition through strategic leadership, execution excellence, and measurable real-world impact.
            </p>
            
            {/* Enhanced Explore Solutions Action Link */}
            <a 
              href="#pillars" 
              className="inline-flex items-center gap-4 bg-[#006B4F] hover:bg-[#00523C] text-white pl-6 pr-2.5 py-2.5 rounded-full font-bold text-[13.5px] tracking-wide transition-all duration-300 group shadow-[0_4px_14px_rgba(0,107,79,0.22)] hover:shadow-[0_8px_20px_rgba(0,107,79,0.32)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer self-start"
            >
              <span>Explore Solutions</span>
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

          </div>

          {/* RIGHT COLUMN: 2x2 CARD GRID */}
          <div className="lg:col-span-7 pt-2 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              
              {/* Column 1: Cards 1 and 3 */}
              <div className="flex flex-col gap-4">
                
                {/* Pillar Card 01: Strategic Advisory */}
                <div 
                  className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[208px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
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
                  <div className="w-full h-[72px] overflow-hidden relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                    <img 
                      src={PILLARS[0].image} 
                      alt={PILLARS[0].title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Pillar Card 03: EPC Solutions */}
                <div 
                  className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[208px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
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
                  <div className="w-full h-[72px] overflow-hidden relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                    <img 
                      src={PILLARS[2].image} 
                      alt={PILLARS[2].title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Column 2: Cards 2 and 4 (Aligned on desktop) */}
              <div className="flex flex-col gap-4">
                
                {/* Pillar Card 02: Project Management */}
                <div 
                  className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[208px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
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
                  <div className="w-full h-[72px] overflow-hidden relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                    <img 
                      src={PILLARS[1].image} 
                      alt={PILLARS[1].title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Pillar Card 04: Capacity Building */}
                <div 
                  className="bg-white border border-[rgba(22,163,74,0.08)] rounded-[24px] overflow-hidden flex flex-col lg:h-[208px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.065)] hover:border-[#22A06B]/35 group cursor-pointer"
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
                  <div className="w-full h-[72px] overflow-hidden relative border-t border-[#22A06B]/12 mt-auto group-hover:border-[#22A06B]/25 transition-colors duration-300">
                    <img 
                      src={PILLARS[3].image} 
                      alt={PILLARS[3].title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
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
