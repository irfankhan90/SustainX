"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const ExecutivePrograms: React.FC = () => {
  return (
    <div className="bg-white text-t-DEFAULT font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-brand-gxl border-b border-bdr-DEFAULT overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,158,117,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-g/10 text-brand-gd rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
            Part B • Executive Intensives & Corporate Programs
          </span>
          <h1 className="font-syne text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-t-DEFAULT mb-6">
            Executive Leadership & Corporate Intensives <br />
            <span className="text-brand-g">For Decision Makers</span>
          </h1>
          <p className="text-base sm:text-lg text-t-3 max-w-2xl leading-relaxed mb-8">
            High-level hybrid seminars detailing carbon offset dynamics, ESG reporting compliance, green bonds, policy alignments, and transition financing.
          </p>
          <div className="flex gap-4">
            <Link
              href="#exec-list"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd transition-all shadow-md"
            >
              Explore Seminars
            </Link>
            <Link
              href="/contact"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-semibold text-brand-g hover:text-brand-gd transition-colors border border-brand-g/20 rounded-lg bg-white"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE LEADERSHIP OVERVIEW & PROGRAM CARDS */}
      <section className="py-20" id="exec-list">
        <div className="container">
          <SectionHeader
            label="Corporate Intensives"
            heading="Strategic Programs for Climate Leaders"
            description="Our executive intensive tracks provide C-suite leaders, directors, investors, and policymakers with the strategic insights required to manage Net-Zero transition portfolios."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* B1 Card */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-6 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-2.5 py-0.5 bg-brand-g text-white rounded-md text-[10px] font-bold mb-3">
                INTENSIVE B1
              </span>
              <h3 className="font-syne text-base sm:text-lg font-bold text-t-DEFAULT mb-2">
                B1 — Global Energy Policies & Geopolitics
              </h3>
              <p className="text-xs text-t-3 leading-relaxed mb-4">
                Senior executives in energy, policy & government. Investigate Paris agreements, COP frameworks, trade pacts, and price trends.
              </p>
              <div className="text-[11px] text-brand-gd font-semibold mb-2">Duration: 4 Days · Hybrid</div>
              <div className="border-t border-bdr-2 pt-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-g mb-1">Outcome</h4>
                <p className="text-[11px] text-t-3 leading-relaxed">
                  Analyse how geopolitical events shape policies, evaluate transition impacts on corporate assets, and forecast pricing trends.
                </p>
              </div>
            </div>

            {/* B2 Card */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-6 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-2.5 py-0.5 bg-brand-g text-white rounded-md text-[10px] font-bold mb-3">
                INTENSIVE B2
              </span>
              <h3 className="font-syne text-base sm:text-lg font-bold text-t-DEFAULT mb-2">
                B2 — Carbon Footprint, Offsetting & Climate Risk
              </h3>
              <p className="text-xs text-t-3 leading-relaxed mb-4">
                Sustainability executives, corporate leaders & climate strategists. Track Scope 1–3 calculations, offsets, and carbon trading models.
              </p>
              <div className="text-[11px] text-brand-gd font-semibold mb-2">Duration: 3 Days · Hybrid</div>
              <div className="border-t border-bdr-2 pt-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-g mb-1">Outcome</h4>
                <p className="text-[11px] text-t-3 leading-relaxed">
                  Calculate, reduce, and offset carbon footprints across sectors. Navigate carbon trading, offset credits, and de-risk organizations.
                </p>
              </div>
            </div>

            {/* B3 Card */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-6 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-2.5 py-0.5 bg-brand-g text-white rounded-md text-[10px] font-bold mb-3">
                INTENSIVE B3
              </span>
              <h3 className="font-syne text-base sm:text-lg font-bold text-t-DEFAULT mb-2">
                B3 — Sustainable Finance, Carbon Markets & Green Bonds
              </h3>
              <p className="text-xs text-t-3 leading-relaxed mb-4">
                Financial executives, investors, policymakers & ESG professionals. Structure green bonds, allocate transition capital, and navigate taxonomy rules.
              </p>
              <div className="text-[11px] text-brand-gd font-semibold mb-2">Duration: 3 Days · Hybrid</div>
              <div className="border-t border-bdr-2 pt-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-g mb-1">Outcome</h4>
                <p className="text-[11px] text-t-3 leading-relaxed">
                  Leverage sustainable finance to fund clean projects, lead investment decisions in green bonds, and deploy ESG finance strategies.
                </p>
              </div>
            </div>

            {/* B4 Card */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-6 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-2.5 py-0.5 bg-brand-g text-white rounded-md text-[10px] font-bold mb-3">
                INTENSIVE B4
              </span>
              <h3 className="font-syne text-base sm:text-lg font-bold text-t-DEFAULT mb-2">
                B4 — Corporate Sustainability & Energy Transition Leadership
              </h3>
              <p className="text-xs text-t-3 leading-relaxed mb-4">
                C-suite executives, heads of sustainability & energy managers. Master renewable integration (solar, wind, storage) and grid loads.
              </p>
              <div className="text-[11px] text-brand-gd font-semibold mb-2">Duration: 5 Days · Hybrid</div>
              <div className="border-t border-bdr-2 pt-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-g mb-1">Outcome</h4>
                <p className="text-[11px] text-t-3 leading-relaxed">
                  Lead corporate transitions with measurable metrics, deploy utility-scale solar/storage, and align frameworks to targets.
                </p>
              </div>
            </div>

            {/* B5 Card */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-6 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-2.5 py-0.5 bg-brand-g text-white rounded-md text-[10px] font-bold mb-3">
                INTENSIVE B5
              </span>
              <h3 className="font-syne text-base sm:text-lg font-bold text-t-DEFAULT mb-2">
                B5 — Climate Diplomacy & International Collaboration
              </h3>
              <p className="text-xs text-t-3 leading-relaxed mb-4">
                Diplomats, government officials & international organisations. Harmonise regulatory policies and navigate cross-border trade.
              </p>
              <div className="text-[11px] text-brand-gd font-semibold mb-2">Duration: 4 Days · Hybrid</div>
              <div className="border-t border-bdr-2 pt-3">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-g mb-1">Outcome</h4>
                <p className="text-[11px] text-t-3 leading-relaxed">
                  Navigate international energy policies, foster cross-border energy cooperation, and influence global energy diplomacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICAL DETAILS & EXECUTIVE BENEFITS */}
      <section className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-syne text-2xl font-bold text-t-DEFAULT text-center mb-10">
              Executive & Corporate Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
                <h4 className="font-syne text-base font-bold text-brand-gd mb-2">Compliance Risk Mitigation</h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  CXOs learn to navigate CSRD, TCFD, and local Net-Zero directives, avoiding major compliance penalties and regulatory hurdles.
                </p>
              </div>
              <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
                <h4 className="font-syne text-base font-bold text-brand-gd mb-2">Green Capital Structuring</h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Understand the financial economics of Green Bonds, LCOE calculations, and ESG investment requirements to secure lower capital costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-20 bg-brand-gxd text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Build Organizational Decarbonization Assets
          </h2>
          <p className="text-sm text-[#E1F5EE]/80 max-w-2xl mx-auto mb-8 font-light">
            Train your senior leaders and transition desks. Deploy co-branded modules or custom intensives to de-risk corporate decarbonization portfolios.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-brand-gd bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all"
            >
              Enterprise Booking
            </Link>
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Connect with Advisory Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutivePrograms;
