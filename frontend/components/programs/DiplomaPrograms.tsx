"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const DiplomaPrograms: React.FC = () => {
  return (
    <div className="bg-white text-t-DEFAULT font-sans">
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-brand-gxl border-b border-bdr-DEFAULT overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,158,117,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-g/10 text-brand-gd rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
            Part A • Mid-Level Professional Diplomas
          </span>
          <h1 className="font-syne text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-t-DEFAULT mb-6">
            Professional Diplomas for Project Managers <br />
            <span className="text-brand-g">And Energy Leaders</span>
          </h1>
          <p className="text-base sm:text-lg text-t-3 max-w-2xl leading-relaxed mb-8">
            3–6 month hybrid paths containing capstone projects, financial modeling simulations, and advanced technology research.
          </p>
          <div className="flex gap-4">
            <Link
              href="#diploma-list"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd transition-all shadow-md"
            >
              Explore Diplomas
            </Link>
            <Link
              href="/contact"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-semibold text-brand-g hover:text-brand-gd transition-colors border border-brand-g/20 rounded-lg bg-white"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM OVERVIEW & LEARNING PATH */}
      <section className="py-20" id="diploma-list">
        <div className="container">
          <SectionHeader
            label="Diploma Catalog"
            heading="Strategic Execution & Engineering Leadership"
            description="Our professional diploma programs prepare mid-level specialists to oversee complex green energy developments and commercial pathways."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* A3 Course */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-3 py-1 bg-brand-g text-white rounded-md text-xs font-bold mb-4">
                DIPLOMA CODE: A3
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-t-DEFAULT mb-3">
                A3 — Diploma in Renewable Energy Project Management
              </h3>
              <p className="text-sm text-t-3 leading-relaxed mb-6">
                Project managers, consultants & mid-level professionals. Master procurement flows, EPC structures, financial modeling, and baseline risks.
              </p>

              <div className="border-t border-bdr-2 pt-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-3">
                  Key Modules
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-t-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Project Lifecycle & Scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Financial Modelling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Risk Assessment & Mitigation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Procurement & EPC Contracts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    ESG Compliance Auditing
                  </li>
                </ul>
              </div>

              <div className="border-t border-bdr-2 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-2">
                  Learning Outcome
                </h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Manage large-scale renewable energy projects from inception to commissioning, align deliverables with ESG and sustainability goals, and handle budgets, timelines, and stakeholder expectations.
                </p>
              </div>
            </div>

            {/* A5 Course */}
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8 hover:shadow-sh2 transition-all duration-200">
              <span className="inline-block px-3 py-1 bg-brand-g text-white rounded-md text-xs font-bold mb-4">
                DIPLOMA CODE: A5
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-t-DEFAULT mb-3">
                A5 — Diploma in Emerging Technologies in Renewable Energy
              </h3>
              <p className="text-sm text-t-3 leading-relaxed mb-6">
                Advanced professionals & R&D specialists. Formulate commercialization models for green hydrogen, smart storage, and CCUS tech.
              </p>

              <div className="border-t border-bdr-2 pt-5 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-3">
                  Key Modules
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-t-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Green Hydrogen Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Offshore Wind & Floating PV
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Energy Storage Innovations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Smart Microgrid Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-g shrink-0" />
                    Carbon Capture (CCUS)
                  </li>
                </ul>
              </div>

              <div className="border-t border-bdr-2 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gd mb-2">
                  Learning Outcome
                </h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Evaluate next-generation energy technologies for commercial viability, identify innovation opportunities across the value chain, and contribute to emerging technology roadmaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOGISTICAL DETAILS */}
      <section className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Duration</h4>
              <p className="text-xs text-t-3">3–6 Months (A3 Management) <br /> 3–4 Months (A5 Emerging Tech)</p>
            </div>
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Delivery Model</h4>
              <p className="text-xs text-t-3">Hybrid Learning + On-Site Capstone Project Internships</p>
            </div>
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Target Audience</h4>
              <p className="text-xs text-t-3">Project managers, energy consultants, mid-level executives, and R&D specialists.</p>
            </div>
            <div className="bg-white p-6 border border-bdr-DEFAULT rounded-xl">
              <h4 className="font-syne text-sm font-bold text-brand-gd uppercase tracking-wider mb-2">Academic Value</h4>
              <p className="text-xs text-t-3">Professional Diploma featuring verified case reviews from GM, IIT, and KOC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPSTONE PROJECTS & CAREER OPPORTUNITIES */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-syne text-2xl font-bold text-t-DEFAULT text-center mb-10">
              Integrated Capstone Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-bdr-DEFAULT rounded-2xl p-6 bg-brand-gxl">
                <h4 className="font-syne text-base font-bold text-brand-gd mb-2">
                  A3 — Commercial Feasibility & Grid Integration Case Study
                </h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Students design a complete 10MW solar array, modeling solar resource, losses, shading, cabling configurations, and grid connection compliance.
                </p>
              </div>
              <div className="border border-bdr-DEFAULT rounded-2xl p-6 bg-brand-gxl">
                <h4 className="font-syne text-base font-bold text-brand-gd mb-2">
                  A5 — Hydrogen Ecosystem Design Project
                </h4>
                <p className="text-xs text-t-3 leading-relaxed">
                  Assess the commercial economics and electrical requirements of a decentralized green hydrogen charging hub using local clean energy microgrids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-20 bg-brand-gxd text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Lead the Energy Transition
          </h2>
          <p className="text-sm text-[#E1F5EE]/80 max-w-2xl mx-auto mb-8 font-light">
            Secure your credentials. Drive large-scale EPC construction works and transition projects with structural frameworks.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-brand-gd bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Connect with Coordinator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiplomaPrograms;
