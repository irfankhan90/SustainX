"use client";

import React from "react";

const pillars = [
  {
    name: "Strategy",
    tagline: "Blueprinting the future",
    desc: "Macro-planning, feasibility mapping, and grid integration design. De-risks the capital.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    name: "Project Management",
    tagline: "Orchestrating execution",
    desc: "Capital deployment, timeline enforcement, and multi-stakeholder alignment. Accelerates the timeline.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Turnkey Solutions",
    tagline: "Delivering ready-to-operate assets",
    desc: "End-to-end design, construction, and physical handover. Guarantees the execution.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    name: "Capacity Building",
    tagline: "Sustaining the legacy",
    desc: "Workforce upskilling, operational readiness, and community impact. Sustains the operation.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export const PillarsSection: React.FC = () => {
  return (
    <section className="bg-ink-3 text-white py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-[7px] px-3.5 py-[5px] border border-brand-gl/30 rounded-full text-xs font-semibold text-brand-gl bg-brand-g/15 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gl animate-pulse-slow" />
            Our 4 Core Pillars
          </div>
          <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-white mt-3.5">
            Individually, each pillar solves a challenge.
            <br />
            <span className="text-brand-gl">Integrated, they guarantee asset maximization.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 rounded-[20px] overflow-hidden mt-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-ink-3 p-8 text-center transition-colors duration-300 hover:bg-brand-g/15"
            >
              <div className="w-[52px] h-[52px] rounded-[14px] bg-brand-g/15 border border-brand-gl/25 flex items-center justify-center mx-auto mb-[18px]">
                {pillar.icon}
              </div>
              <h3 className="font-syne text-[17px] font-bold text-white mb-1.5">
                {pillar.name}
              </h3>
              <div className="text-xs text-brand-gl font-medium mb-2.5">
                {pillar.tagline}
              </div>
              <p className="text-[13px] text-white/50 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PillarsSection;
