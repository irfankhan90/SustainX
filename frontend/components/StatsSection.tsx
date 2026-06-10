"use client";

import React from "react";

export const StatsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F5F8F6] pb-8 lg:pb-10 pt-2 lg:pt-3 z-20">
      <div className="container">
        
        {/* Horizontal Stats Bar Card */}
        <div className="bg-white border border-[#E5ECE8] rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-5 lg:py-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center justify-between">
            
            {/* Stat 1: Experts & Consultants */}
            <div className="flex items-center gap-3.5 lg:px-6 border-[#E5ECE8] lg:border-r last:border-r-0">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EE] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#22A06B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="font-syne text-[22px] lg:text-[26px] font-extrabold text-[#22A06B] leading-none mb-0.5">
                  50+
                </div>
                <div className="font-sans text-[12px] lg:text-[13px] font-semibold text-[#4B5B55] leading-tight">
                  Experts & Consultants
                </div>
              </div>
            </div>

            {/* Stat 2: Projects Delivered */}
            <div className="flex items-center gap-3.5 lg:px-6 border-[#E5ECE8] lg:border-r last:border-r-0">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EE] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#22A06B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <div className="font-syne text-[22px] lg:text-[26px] font-extrabold text-[#22A06B] leading-none mb-0.5">
                  100+
                </div>
                <div className="font-sans text-[12px] lg:text-[13px] font-semibold text-[#4B5B55] leading-tight">
                  Projects Delivered
                </div>
              </div>
            </div>

            {/* Stat 3: Countries Impacted */}
            <div className="flex items-center gap-3.5 lg:px-6 border-[#E5ECE8] lg:border-r last:border-r-0">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EE] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#22A06B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v-7m0 0a5 5 0 015-5h1m-6 5a5 5 0 00-5-5H7m5 12a4 4 0 11-8 0 4 4 0 018 0zm0 0a4 4 0 108 0 4 4 0 00-8 0z" />
                </svg>
              </div>
              <div>
                <div className="font-syne text-[22px] lg:text-[26px] font-extrabold text-[#22A06B] leading-none mb-0.5">
                  25+
                </div>
                <div className="font-sans text-[12px] lg:text-[13px] font-semibold text-[#4B5B55] leading-tight">
                  Countries Impacted
                </div>
              </div>
            </div>

            {/* Stat 4: Years of Excellence */}
            <div className="flex items-center gap-3.5 lg:px-6 last:border-r-0">
              <div className="w-10 h-10 rounded-full bg-[#E6F3EE] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#22A06B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="font-syne text-[22px] lg:text-[26px] font-extrabold text-[#22A06B] leading-none mb-0.5">
                  10+
                </div>
                <div className="font-sans text-[12px] lg:text-[13px] font-semibold text-[#4B5B55] leading-tight">
                  Years of Excellence
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
