"use client";

import React from "react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-block px-3.5 py-1 bg-brand-gxl text-brand-gd rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5">
              The execution gap
            </div>
            <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-t-DEFAULT mb-3.5 max-w-[480px]">
              Bridging Global Visions with Ground Realities
            </h2>
            <p className="text-[15px] text-t-2 font-light leading-[1.65] mb-7">
              The world is racing toward Net-Zero — but execution on the ground is lagging. SustainX bridges this gap through structured training, AI-enabled platforms, and hands-on industry collaboration.
            </p>
            <ul className="list-none m-0 p-0">
              <li className="flex gap-3.5 py-4 border-b border-bdr-DEFAULT">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#FEF3E2]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#B45309] stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-[15px] font-bold text-t-DEFAULT mb-[3px]">Scale & Speed</h4>
                  <p className="text-sm text-t-3 leading-[1.55]">
                    Gigaprojects require military-grade precision and complex supply chain logistics that outpace traditional advisory firms.
                  </p>
                </div>
              </li>

              <li className="flex gap-3.5 py-4 border-b border-bdr-DEFAULT">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#FEE2E2]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#DC2626] stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-[15px] font-bold text-t-DEFAULT mb-[3px]">Environmental Extremes</h4>
                  <p className="text-sm text-t-3 leading-[1.55]">
                    High solar irradiation coupled with dust soiling, heat degradation, and grid intermittency demands specialized skills.
                  </p>
                </div>
              </li>

              <li className="flex gap-3.5 py-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-brand-gxl">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-brand-gd stroke-2 stroke-linecap-round stroke-linejoin-round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-[15px] font-bold text-t-DEFAULT mb-[3px]">Human Capital Shortage</h4>
                  <p className="text-sm text-t-3 leading-[1.55]">
                    An urgent, critical shortage of localized technical skills necessary to build and maintain next-generation energy assets.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-[#EEF4F1] border border-bdr-DEFAULT rounded-[20px] p-8 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:height-[4px] before:bg-gradient-to-r before:from-brand-g before:to-brand-gl">
              <div className="text-[11px] font-semibold text-t-3 uppercase tracking-[0.07em] mb-4">
                Traditional Advisory vs GlobalPact SustainX
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                <div className="bg-white border border-bdr-DEFAULT rounded-xl p-3.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-t-3 mb-2">Traditional</div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-[#E24B4A] shrink-0">✗</span> Paper-based roadmaps & theory
                  </div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-[#E24B4A] shrink-0">✗</span> Surface-level ESG greenwashing
                  </div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-[#E24B4A] shrink-0">✗</span> Imported talent, no local transfer
                  </div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-[#E24B4A] shrink-0">✗</span> Retrospective classroom training
                  </div>
                </div>

                <div className="bg-brand-gxl border border-brand-g rounded-xl p-3.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-gd mb-2">GlobalPact SustainX</div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-brand-gl shrink-0">→</span> Execute (PMC) & build capacity
                  </div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-brand-gl shrink-0">→</span> True asset optimization & resilience
                  </div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-brand-gl shrink-0">→</span> International standards + local knowledge
                  </div>
                  <div className="text-xs text-t-2 py-[3px] flex items-start gap-1.5 leading-tight">
                    <span className="text-brand-gl shrink-0">→</span> AI + VR workforce readiness
                  </div>
                </div>
              </div>

              <div className="bg-white border border-bdr-DEFAULT rounded-xl p-3.5 mt-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-t-3 mb-2.5">
                  The GlobalPact Synthesis
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-t-2">
                  <div>📐 <strong>Strategy</strong> — De-risks Capital</div>
                  <div>📋 <strong>Project Mgmt</strong> — Accelerates Timeline</div>
                  <div>🔧 <strong>Turnkey Solutions</strong> — Guarantees Execution</div>
                  <div>🎓 <strong>Capacity Building</strong> — Sustains Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProblemSection;
