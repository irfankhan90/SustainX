"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactSection from "@/components/ContactSection";

export const CertificatePrograms: React.FC = () => {
  return (
    <div className="bg-white text-t-DEFAULT font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-brand-gxl border-b border-bdr-DEFAULT overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,158,117,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-g/10 text-brand-gd rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
            Part A • Technical Training Catalog
          </span>
          <h1 className="font-syne text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-t-DEFAULT mb-6">
            Foundational & Advanced Energy <br />
            <span className="text-brand-g">Professional Certificates</span>
          </h1>
          <p className="text-base sm:text-lg text-t-3 max-w-2xl leading-relaxed mb-8">
            Rigorous hybrid modules spanning Solar PV engineering, wind resource analysis, and ESG reporting formats for technical specialists.
          </p>
          <div className="flex gap-4">
            <Link
              href="#programs-list"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd transition-all shadow-md"
            >
              Explore Programs
            </Link>
            <Link
              href="#contact-section"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-semibold text-brand-g hover:text-brand-gd transition-colors border border-brand-g/20 rounded-lg bg-white"
            >
              Request Syllabus
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM OVERVIEW */}
      <section className="py-20" id="programs-list">
        <div className="container">
          <SectionHeader
            label="Program Offerings"
            heading="Certified Tracks for Energy Professionals"
            description="Our professional certificate programs provide engineers, project designers, and consultants with the practical capabilities required to run clean energy assets."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* A1 Course */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-3 py-1 bg-brand-g text-white rounded-md text-xs font-bold mb-4">
                COURSE CODE: A1
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-t-DEFAULT mb-3">
                A1 — Certificate in Renewable Energy Fundamentals
              </h3>
              <p className="text-sm text-t-3 leading-relaxed mb-6">
                Early-career professionals, engineers & graduates. Establish a solid foundation in primary renewable technology frameworks and policy landscapes.
              </p>
              
              <div className="border-t border-bdr-2 pt-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-3">
                  Key Modules
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-t-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Renewable Ecosystems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Solar PV & Thermal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Wind Energy Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Storage & Hydrogen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Grid Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Policy & Regulations
                  </li>
                </ul>
              </div>

              <div className="border-t border-bdr-2 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-2">
                  Learning Outcome
                </h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Demonstrate a comprehensive understanding of core renewable energy technologies, evaluate basic project feasibility using industry-standard criteria, and interpret global and regional energy policies.
                </p>
              </div>
            </div>

            {/* A2 Course */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-3 py-1 bg-brand-g text-white rounded-md text-xs font-bold mb-4">
                COURSE CODE: A2
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-t-DEFAULT mb-3">
                A2 — Advanced Certificate in Solar & Wind Project Engineering
              </h3>
              <p className="text-sm text-t-3 leading-relaxed mb-6">
                Engineers & technical consultants. Master high-fidelity asset designing and simulation programs to de-risk engineering execution.
              </p>

              <div className="border-t border-bdr-2 pt-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-3">
                  Key Modules
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-t-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    PV System Design & PVsyst
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Wind Resource Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Environmental Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    SCADA & Remote Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Grid Interconnection
                  </li>
                </ul>
              </div>

              <div className="border-t border-bdr-2 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-2">
                  Learning Outcome
                </h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Design utility-scale and rooftop solar energy systems, conduct comprehensive wind energy feasibility studies, and optimise system performance using industry-standard software (PVsyst, HOMER).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICAL DETAILS & TARGET AUDIENCE */}
      <section className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Duration</h4>
              <p className="text-xs text-t-3">6–8 Weeks (A1 Fundamentals) <br /> 8–10 Weeks (A2 Advanced Engineering)</p>
            </div>
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Delivery Mode</h4>
              <p className="text-xs text-t-3">Hybrid Online Learning + Hands-On Practical Simulation Labs</p>
            </div>
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Target Audience</h4>
              <p className="text-xs text-t-3">Early-career engineers, technical advisors, project designers, and science graduates.</p>
            </div>
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Credential</h4>
              <p className="text-xs text-t-3">Certificate / Advanced Certificate in Renewable Energy Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOFTWARE & SIMULATION TOOLS */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-brand-g text-white rounded-2xl flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-white stroke-2">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <path d="M7 2v20M17 2v20M2 12h20" />
              </svg>
            </div>
            <div>
              <h3 className="font-syne text-lg font-bold text-brand-gd mb-2">
                Advanced Software Integration
              </h3>
              <p className="text-xs text-t-3 leading-relaxed">
                Students acquire direct competencies in industry-standard modeling frameworks. We teach modeling, load calculations, losses optimization, and configuration simulations inside **PVsyst** and **HOMER Pro**.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION & CONTACT */}
      <section className="py-20 bg-brand-gxd text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Empower Your Engineering Career
          </h2>
          <p className="text-sm text-[#E1F5EE]/80 max-w-2xl mx-auto mb-8 font-light">
            Become a certified expert in solar and wind designs. Get access to active simulation libraries and align your skills with global grids.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#contact-section"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-brand-gd bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all"
            >
              Enroll Now
            </Link>
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION (Interactive Form) */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </div>
  );
};

export default CertificatePrograms;
