import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PILLARS as sharedPillars } from "@/lib/data/pillars";

const PILLARS_ICONS = [
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-gl stroke-2 stroke-linecap-round stroke-linejoin-round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
];

const pillars = sharedPillars.map((p, idx) => ({
  ...p,
  icon: PILLARS_ICONS[idx],
}));

export const PillarsSection: React.FC = () => {
  return (
    <section id="pillars" className="bg-ink-3 text-white py-20 scroll-mt-[var(--navbar-height)]">
      <div className="container">
        <SectionHeader
          label="Our 4 Core Pillars"
          heading={
            <>
              Individually, each pillar solves a challenge.
              <br />
              <span className="text-brand-gl">Integrated, they guarantee asset maximization.</span>
            </>
          }
          variant="light"
          dot={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10 border border-white/10 rounded-[20px] overflow-hidden mt-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
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
              <p className="text-[13px] text-white/75 leading-relaxed">
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
