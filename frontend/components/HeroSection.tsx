"use client";

import React from "react";
import { Button } from "./ui/Button";
import { Chip } from "./ui/Chip";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-[100px] pb-[60px] overflow-hidden" id="home">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-bdr-DEFAULT) 1px, transparent 1px), linear-gradient(90deg, var(--color-bdr-DEFAULT) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Radial Orbs */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.12)_0%,transparent_70%)] -top-[100px] -right-[80px]" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.08)_0%,transparent_70%)] bottom-[80px] -left-[60px]" />
      </div>

      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          {/* CONTENT */}
          <div className="max-w-[680px]">
            <Chip className="anim-1 mb-3.5">
              2026 Training Programs Now Open
            </Chip>
            <h1 className="anim-2 font-syne text-[38px] sm:text-[4.5vw] md:text-[62px] font-extrabold leading-[1.07] tracking-[-0.03em] text-t-DEFAULT mt-5 mb-[22px]">
              Empowering the <span className="text-brand-g">Global Energy</span>
              <span className="block">Transition.</span>
            </h1>
            <p className="anim-3 text-[17px] text-t-2 leading-[1.68] font-light max-w-[500px] mb-9">
              GlobalPact SustainX is the AI-powered training & collaboration platform for clean energy — offering certified programs in Solar, Wind, EV, ESG, and Climate Finance. Strategy · Project Management · Turnkey Solutions · Capacity Building.
            </p>
            <div className="anim-4 flex items-center gap-3.5 flex-wrap mb-12">
              <Button variant="primary" size="lg" href="#training">
                Explore Programs
              </Button>
              <Button variant="outline" size="lg" href="#about">
                Our Approach
              </Button>
            </div>
            <div className="anim-5 flex items-center gap-3.5">
              <div className="flex">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-semibold text-white bg-brand-g">
                  GM
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[11px] font-semibold text-white bg-brand-gd">
                  IIT
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[11px] font-semibold text-white bg-brand-gxd">
                  KOC
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[11px] font-semibold text-brand-gd bg-[#5DCAA5]">
                  HK
                </div>
              </div>
              <div className="text-[13px] text-t-3">
                Trusted by <strong className="text-t-DEFAULT font-medium">GM, IIT Kanpur, KOC Kuwait</strong> & more
              </div>
            </div>
          </div>

          {/* VISUAL CARDS STACK */}
          <div className="relative z-1 hidden md:block">
            <div className="relative h-[420px]">
              {/* Card 1: Main Platform Overview */}
              <div className="absolute w-[280px] top-5 left-5 bg-white border border-bdr-DEFAULT rounded-[20px] p-6 shadow-sh2 animate-float-1">
                <div className="text-[11px] text-t-3 mb-3 font-medium uppercase tracking-[0.05em]">
                  Platform Overview
                </div>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5 p-2.5 bg-brand-gxl rounded-[10px]">
                    <div className="w-8 h-8 bg-brand-g rounded-lg flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2 stroke-linecap-round stroke-linejoin-round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-syne text-[17px] font-bold text-brand-gd leading-none">10 Programs</div>
                      <div className="text-[11px] text-t-3 mt-[1px]">A1–A5 + B1–B5 Tracks</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 bg-brand-gxl rounded-[10px]">
                    <div className="w-8 h-8 bg-brand-g rounded-lg flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2 stroke-linecap-round stroke-linejoin-round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-syne text-[17px] font-bold text-brand-gd leading-none">50+ Years</div>
                      <div className="text-[11px] text-t-3 mt-[1px]">Combined team expertise</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 bg-brand-gxl rounded-[10px]">
                    <div className="w-8 h-8 bg-brand-g rounded-lg flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2 stroke-linecap-round stroke-linejoin-round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-syne text-[17px] font-bold text-brand-gd leading-none">3 Global Hubs</div>
                      <div className="text-[11px] text-t-3 mt-[1px]">India · USA · Middle East</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end gap-1.25 h-11 mt-[18px]">
                  <div className="rounded-t bg-brand-gll w-[18px]" style={{ height: "30%" }} />
                  <div className="rounded-t bg-brand-gll w-[18px]" style={{ height: "50%" }} />
                  <div className="rounded-t bg-brand-gll w-[18px]" style={{ height: "40%" }} />
                  <div className="rounded-t bg-brand-g w-[18px]" style={{ height: "80%" }} />
                  <div className="rounded-t bg-brand-g w-[18px]" style={{ height: "95%" }} />
                  <div className="rounded-t bg-brand-g w-[18px]" style={{ height: "100%" }} />
                </div>
              </div>

              {/* Card 2: AI ESG Score */}
              <div className="absolute w-[210px] bottom-10 right-0 bg-white border border-bdr-DEFAULT rounded-[20px] p-6 shadow-sh2 animate-float-2">
                <div className="text-[11px] text-t-3 mb-1.5 font-medium">AI ESG Score</div>
                <div className="font-syne text-[28px] font-extrabold text-brand-g">
                  87<span className="text-[13px] text-t-3">/100</span>
                </div>
                <div className="bg-brand-gxl rounded-[4px] h-1 mt-2">
                  <div className="bg-brand-g h-full rounded-[4px]" style={{ width: "87%" }} />
                </div>
                <div className="text-[10px] text-t-3 mt-1.5">↑ 12% this quarter</div>
                <div className="text-[10px] text-t-3">CO₂ reduced: 2,450t</div>
              </div>

              {/* Card 3: A1 Completion */}
              <div className="absolute w-[190px] top-0 right-[30px] bg-white border border-bdr-DEFAULT rounded-[20px] p-6 shadow-sh2 animate-float-3">
                <div className="text-[10px] text-t-3 mb-[5px] font-medium">A1 Completion</div>
                <div className="font-syne text-[22px] font-extrabold text-t-DEFAULT">94%</div>
                <div className="bg-brand-gxl rounded-[4px] h-1 mt-1.5">
                  <div className="bg-brand-g h-full rounded-[4px]" style={{ width: "94%" }} />
                </div>
                <div className="text-[10px] text-t-3 mt-1">Certificate Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
