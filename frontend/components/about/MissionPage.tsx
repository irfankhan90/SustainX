"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const MissionPage: React.FC = () => {
  return (
    <div className="bg-white text-t-DEFAULT font-sans select-none">
      {/* HERO SECTION */}
      <section className="relative py-24 bg-brand-gxl border-b border-bdr-DEFAULT overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,158,117,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-g/10 text-brand-gd rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
            Our Mission
          </span>
          <h1 className="font-syne text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-t-DEFAULT mb-6">
            Turning Sustainability Ambitions <br />
            <span className="text-brand-g">into Measurable Impact</span>
          </h1>
          <p className="text-base sm:text-lg text-t-3 max-w-3xl leading-relaxed mb-8">
            Our mission is to enable organizations worldwide to successfully plan, manage, and deliver sustainable transformation through integrated strategy, advanced technology, and execution excellence.
          </p>
          <div className="flex gap-4">
            <Link
              href="#commitments"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd transition-all shadow-md"
            >
              Our Commitments
            </Link>
            <Link
              href="/contact"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-semibold text-brand-g hover:text-brand-gd transition-colors border border-brand-g/20 rounded-lg bg-white"
            >
              Contact Advisors
            </Link>
          </div>
        </div>
      </section>

      {/* CORE MISSION STATEMENT */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
              Mission Statement
            </span>
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 sm:p-10 shadow-sm mb-4">
              <p className="text-base sm:text-lg text-brand-gd leading-relaxed font-semibold italic">
                "Our mission is to enable organizations worldwide to successfully plan, manage, and deliver sustainable transformation through integrated strategy, advanced technology, and execution excellence."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENTS */}
      <section className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT" id="commitments">
        <div className="container">
          <SectionHeader
            label="Corporate Undertaking"
            heading="Our Pillars of Commitment"
            description="We pledge seven specific capabilities to ensure utility engineering standards and data audits satisfy net-zero parameters."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {/* 1 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Delivering innovative renewable energy and smart infrastructure solutions.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Driving AI-powered sustainability, ESG, and digital transformation initiatives.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Providing world-class strategic advisory, project management, and engineering expertise.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6c-3 0-5.5-1.5-6-4m12 4c.5-2.5-2-4-6-4" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Building local capabilities through education, training, and knowledge sharing.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Creating measurable environmental, economic, and social impact across every project.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Fostering global partnerships that accelerate innovation, investment, and long-term sustainability.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-6 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-4 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-xs text-t-2 leading-relaxed">
                Supporting organizations in achieving their net-zero, climate resilience, and sustainable development goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="py-20 bg-brand-gxl border-t border-bdr-DEFAULT">
        <div className="container max-w-4xl text-center">
          <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
            Closing Statement
          </span>
          <h2 className="font-syne text-xl sm:text-2xl font-bold text-t-DEFAULT leading-relaxed max-w-3xl mx-auto italic">
            "Together, we are transforming ambitious ideas into sustainable realities—creating a cleaner, smarter, and more resilient future for the world."
          </h2>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-gxd text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Build Turnkey Realities With Us
          </h2>
          <p className="text-sm text-[#E1F5EE]/80 max-w-2xl mx-auto mb-8 font-light">
            Empowering organizations worldwide to successfully plan, manage, and deliver sustainable transformation.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-brand-gd bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/about/about-us"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Who We Are &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
