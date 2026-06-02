"use client";

import React from "react";

const advisors = [
  {
    name: "Reji Kumar Pillai",
    org: "President, India Smart Grid Forum · Chairman, Global Smart Energy Federation",
  },
  {
    name: "Prof. Somitra Sanadhya",
    org: "Wadhwani School of AI, IIT Kanpur",
  },
  {
    name: "Dr. Ali T Alouani",
    org: "Tennessee Tech University, USA",
  },
  {
    name: "Simon Kehimkar",
    org: "Manager, General Motors, USA",
  },
  {
    name: "Dr. Aqueel Ahmad",
    org: "Manager, Switch Mobility",
  },
  {
    name: "Ali Al Duaij",
    org: "Manager, KOC, Kuwait",
  },
  {
    name: "Dr. Samir Al-Shariff",
    org: "Taibah University, Saudi Arabia",
  },
  {
    name: "Dr. Rakan Chabaan",
    org: "Senior Manager, Hyundai Kia, USA",
  },
];

export const AdvisorySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#EEF4F1] border-t border-b border-bdr-DEFAULT">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 bg-brand-gxl text-brand-gd rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 border border-bdr-2">
            Global Advisory Board
          </div>
          <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-t-DEFAULT mb-3.5">
            Supported by industry pioneers worldwide
          </h2>
          <p className="text-[17px] text-t-2 font-light leading-[1.65] max-w-[540px] mx-auto">
            Our advisory board brings together global leaders from automotive, energy, academia, and policy sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {advisors.map((advisor, idx) => (
            <div
              key={idx}
              className="bg-white border border-bdr-DEFAULT rounded-xl p-[18px] transition-all duration-200 hover:shadow-sh2 hover:-translate-y-0.5"
            >
              <h3 className="font-syne text-sm font-bold text-t-DEFAULT mb-[3px]">
                {advisor.name}
              </h3>
              <div className="text-xs text-brand-g font-semibold">
                {advisor.org}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AdvisorySection;
