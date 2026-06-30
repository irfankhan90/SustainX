"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const VisionPage: React.FC = () => {
  return (
    <div className="bg-white text-t-DEFAULT font-sans select-none">
      {/* HERO SECTION */}
      <section className="relative py-24 bg-brand-gxl border-b border-bdr-DEFAULT overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,158,117,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-g/10 text-brand-gd rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
            Our Vision
          </span>
          <h1 className="font-syne text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-t-DEFAULT mb-6">
            Building a Sustainable Future <br />
            <span className="text-brand-g">for Every Generation</span>
          </h1>
          <p className="text-base sm:text-lg text-t-3 max-w-3xl leading-relaxed mb-8">
            To become the world's most trusted sustainability transformation platform, empowering governments, enterprises, investors, and communities to accelerate the global transition toward a resilient, intelligent, and net-zero future through innovation, collaboration, and measurable impact.
          </p>
          <div className="flex gap-4">
            <Link
              href="#vision-statement"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd transition-all shadow-md"
            >
              Explore Our Vision
            </Link>
            <Link
              href="/about/mission"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-semibold text-brand-g hover:text-brand-gd transition-colors border border-brand-g/20 rounded-lg bg-white"
            >
              Our Mission &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* VISION STATEMENT */}
      <section className="py-20 bg-white" id="vision-statement">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
              Vision Statement
            </span>
            <h2 className="font-syne text-2xl sm:text-3xl font-bold text-t-DEFAULT mb-8 leading-tight">
              Empowering a Resilient, Intelligent & Net-Zero Future
            </h2>
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 sm:p-10 shadow-sm mb-12">
              <p className="text-base sm:text-lg text-brand-gd leading-relaxed font-light italic">
                "To become the world's most trusted sustainability transformation platform, empowering governments, enterprises, investors, and communities to accelerate the global transition toward a resilient, intelligent, and net-zero future through innovation, collaboration, and measurable impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SHARED FUTURE */}
      <section className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
                Our Shared Future
              </span>
              <h2 className="font-syne text-3xl font-bold text-t-DEFAULT leading-tight mb-4">
                Smarter Economies & Healthier Communities
              </h2>
              <div className="w-12 h-1 bg-brand-g rounded mb-6" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-t-3 leading-relaxed font-light">
                We envision a world where clean energy, digital intelligence, and responsible leadership work together to create stronger economies, healthier communities, and a sustainable planet for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION PILLARS */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionHeader
            label="Vision Pillars"
            heading="Key Vectors of Grid Transformation"
            description="Our vision centers on three strategic vectors to deliver utility-grade decarbonization ecosystems globally."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-7 hover:shadow-sh2 transition-all">
              <h4 className="font-syne text-base font-bold text-brand-gd mb-3">Clean Energy Grids</h4>
              <p className="text-xs text-t-3 leading-relaxed">
                A decentralized, high-stability renewable energy grid driven by battery storage integrations and clean capacity expansion.
              </p>
            </div>
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-7 hover:shadow-sh2 transition-all">
              <h4 className="font-syne text-base font-bold text-brand-gd mb-3">Digital Intelligence</h4>
              <p className="text-xs text-t-3 leading-relaxed">
                Leveraging machine telemetry, load forecasting, and automated carbon compliance auditing under a unified dashboard.
              </p>
            </div>
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-7 hover:shadow-sh2 transition-all">
              <h4 className="font-syne text-base font-bold text-brand-gd mb-3">Responsible Leadership</h4>
              <p className="text-xs text-t-3 leading-relaxed">
                Upskilling engineering workforces, advising national policy groups, and structuring capital allocations through Green Bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-gxd text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Accelerating the Transition Together
          </h2>
          <p className="text-sm text-[#E1F5EE]/80 max-w-2xl mx-auto mb-8 font-light">
            We envision a world where clean energy, digital intelligence, and responsible leadership work together to create a sustainable planet.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-brand-gd bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all"
            >
              Partner With Us
            </Link>
            <Link
              href="/about/mission"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Our Mission &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionPage;
