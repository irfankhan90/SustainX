"use client";

import React, { useState } from "react";

interface Course {
  badge: string;
  title: string;
  duration: string;
  modules: string[];
  outcome: string;
  type: "cert" | "exec";
  code: string;
  meta: string;
}

const courseData: Course[] = [
  {
    code: "A1",
    type: "cert",
    meta: "6–8 weeks · Hybrid · Early-career professionals, engineers & graduates",
    badge: "Certificate of Completion",
    title: "A1 — Certificate in Renewable Energy Fundamentals",
    duration: "6–8 weeks · Hybrid · Early-career professionals, engineers & graduates",
    modules: [
      "Introduction to Renewable Energy Ecosystems",
      "Solar Energy Systems (Photovoltaic & Thermal)",
      "Wind Energy Technologies",
      "Energy Storage Systems (Batteries, Hydrogen)",
      "Fundamentals of Grid Integration",
      "Policy & Regulatory Landscape",
    ],
    outcome:
      "Demonstrate a comprehensive understanding of core renewable energy technologies, evaluate basic project feasibility using industry-standard criteria, and interpret global and regional energy policies and their implications.",
  },
  {
    code: "A2",
    type: "cert",
    meta: "8–10 weeks · Hybrid · Engineers & technical consultants",
    badge: "Advanced Certificate",
    title: "A2 — Advanced Certificate in Solar & Wind Project Engineering",
    duration: "8–10 weeks · Hybrid + hands-on lab sessions · Engineers & technical consultants, project designers",
    modules: [
      "Solar PV System Design & Simulation (PVsyst)",
      "Wind Resource Assessment & Turbine Selection",
      "Site Feasibility & Environmental Impact Analysis",
      "SCADA & Remote Monitoring Systems",
      "Grid Interconnection & Load Management",
    ],
    outcome:
      "Design utility-scale and rooftop solar energy systems, conduct comprehensive wind energy feasibility studies, and optimise system performance using industry-standard software (PVsyst, HOMER).",
  },
  {
    code: "A3",
    type: "cert",
    meta: "3–6 months · Hybrid · Project managers & consultants",
    badge: "Professional Diploma",
    title: "A3 — Diploma in Renewable Energy Project Management",
    duration: "3–6 months · Hybrid + capstone project · Project managers, consultants & mid-level professionals",
    modules: [
      "Project Lifecycle in Renewable Energy",
      "Financial Modelling & Investment Analysis",
      "Risk Assessment & Mitigation Strategies",
      "Procurement & Contract Management (EPC)",
      "ESG (Environmental, Social, Governance) Compliance",
    ],
    outcome:
      "Manage large-scale renewable energy projects from inception to commissioning, align deliverables with ESG and sustainability goals, and handle budgets, timelines, and stakeholder expectations effectively.",
  },
  {
    code: "A4",
    type: "cert",
    meta: "6–8 weeks · Executive sessions · CXOs & policymakers",
    badge: "Executive Certificate",
    title: "A4 — Executive Program in Energy Transition & Sustainability Leadership",
    duration: "6–8 weeks · Flexible / modular · CXOs, senior executives & policymakers",
    modules: [
      "Global Energy Transition Trends",
      "Corporate Sustainability & Net-Zero Strategies",
      "Climate Risk & Carbon Markets",
      "Sustainable Finance & Green Bonds",
      "Digital Transformation in Energy (AI, IoT, Smart Grids)",
    ],
    outcome:
      "Lead organisational energy transition strategies with confidence, integrate sustainability into core business models, and make data-driven, future-ready decisions on energy investments.",
  },
  {
    code: "A5",
    type: "cert",
    meta: "3–4 months · Research workshops · R&D specialists",
    badge: "Professional Diploma",
    title: "A5 — Diploma in Emerging Technologies in Renewable Energy",
    duration: "3–4 months · Hybrid + research-focused workshops · Advanced professionals & R&D specialists",
    modules: [
      "Green Hydrogen & Fuel Cell Technologies",
      "Offshore Wind & Floating Solar Systems",
      "Energy Storage Innovations",
      "Smart Grids & Microgrid Architecture",
      "Carbon Capture, Utilisation & Storage (CCUS)",
    ],
    outcome:
      "Evaluate next-generation energy technologies for commercial viability, identify innovation opportunities across the renewable energy value chain, and contribute to R&D strategy and emerging technology roadmaps.",
  },
  {
    code: "B1",
    type: "exec",
    meta: "4 days · Hybrid intensive · Senior executives & government",
    badge: "Executive Intensive",
    title: "B1 — Global Energy Policies & Geopolitics",
    duration: "4 days · Hybrid · Senior executives in energy, policy & government",
    modules: [
      "Global Energy Geopolitics: Major Players & Market Dynamics",
      "International Climate Agreements (Paris Agreement, COP frameworks)",
      "Energy Security & the Fossil-to-Renewables Transition",
      "Global Energy Diversification Trends",
      "Impact of Geopolitical Events on Energy Pricing & Policy",
    ],
    outcome:
      "Analyse how geopolitical events shape energy policies and markets, evaluate the impact of global energy policies on corporate and national strategies, and forecast energy transition trajectories.",
  },
  {
    code: "B2",
    type: "exec",
    meta: "3 days · Hybrid intensive · Sustainability executives",
    badge: "Executive Intensive",
    title: "B2 — Carbon Footprint, Offsetting & Climate Risk",
    duration: "3 days · Hybrid · Sustainability executives, corporate leaders & climate strategists",
    modules: [
      "Carbon Footprint Measurement: Tools & Methodologies",
      "Carbon Offsetting & Global Carbon Markets",
      "Net-Zero Transition: Corporate Decarbonisation Strategies",
      "Sustainability Finance: Reporting, Bonds & ESG Investments",
      "Climate Risks & Opportunities: Future-Proofing Your Organisation",
    ],
    outcome:
      "Calculate, reduce, and offset carbon footprints across sectors. Navigate carbon trading and offset credits. Lead corporate and national strategies toward Net-Zero targets.",
  },
  {
    code: "B3",
    type: "exec",
    meta: "3 days · Hybrid intensive · Financial leaders & investors",
    badge: "Executive Intensive",
    title: "B3 — Sustainable Finance, Carbon Markets & Green Bonds",
    duration: "3 days · Hybrid · Financial executives, investors, policymakers & ESG professionals",
    modules: [
      "Sustainable Finance Landscape: ESG Frameworks & Investment Decisions",
      "Green Bonds, Climate Bonds & Sustainable Investing Mechanisms",
      "Carbon Markets & Trading: Economics & Implications",
      "Regulatory Landscape for Climate Finance (EU Taxonomy, TCFD)",
      "Building Financial Resilience: Insurance, Bonds & Carbon Hedging",
    ],
    outcome:
      "Leverage sustainable finance to fund renewable energy projects, lead investment decisions in green bonds and carbon markets, and develop a sustainability-focused financial strategy aligned with global standards.",
  },
  {
    code: "B4",
    type: "exec",
    meta: "5 days · Hybrid intensive · C-Suite executives",
    badge: "Executive Intensive",
    title: "B4 — Corporate Sustainability & Energy Transition Leadership",
    duration: "5 days · Hybrid · C-suite executives, heads of sustainability & energy management leaders",
    modules: [
      "Energy Transition Frameworks: Drivers & Global Trends",
      "Integrating Renewables: Solar, Wind & Storage at Scale",
      "Strategic Leadership for Net-Zero & Corporate Responsibility",
      "Energy Efficiency, Smart Grids & Innovation Implementation",
      "Policy & Regulatory Navigation for Corporate Strategies",
    ],
    outcome:
      "Lead corporate energy transitions with clear, measurable strategies, integrate renewable energy solutions into corporate infrastructure, and drive innovation while maintaining economic and regulatory compliance.",
  },
  {
    code: "B5",
    type: "exec",
    meta: "4 days · Hybrid intensive · Diplomats & govt officials",
    badge: "Executive Intensive",
    title: "B5 — Climate Diplomacy & International Collaboration for Renewable Energy",
    duration: "4 days · Hybrid · Diplomats, government officials & international organisations",
    modules: [
      "Climate Diplomacy & Renewable Energy Policy Intersections",
      "Energy Cooperation & Trade Agreements (Case Studies)",
      "Climate Finance & Development Aid for Emerging Markets",
      "International Policy Influence & Advocacy Campaigns",
      "Regulatory Harmonisation Across National Frameworks",
    ],
    outcome:
      "Navigate international energy policies and multilateral agreements, foster cross-border energy collaboration for large-scale renewable projects, and influence global energy diplomacy to advance renewable energy adoption.",
  },
];

export const TrainingSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "cert" | "exec">("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filteredCourses = courseData
    .map((course, originalIndex) => ({ ...course, originalIndex }))
    .filter((course) => filter === "all" || course.type === filter);

  // If activeIndex is not in the filtered list, select the first filtered item
  const selectedCourse =
    courseData[activeIndex] || courseData[0];

  return (
    <section className="py-24 bg-white" id="training">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 bg-brand-gxl text-brand-gd rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5">
            Training Programs — 2026 Edition
          </div>
          <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-t-DEFAULT mb-3.5">
            Map your path in the clean energy ecosystem
          </h2>
          <p className="text-[17px] text-t-2 font-light leading-[1.65] max-w-[540px] mx-auto">
            5 Certificate & Diploma programs + 5 Executive Intensives. Designed for every career stage — engineers to C-suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT LIST */}
          <div>
            <div className="flex gap-2 mb-5 flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 border rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  filter === "all"
                    ? "bg-brand-g text-white border-brand-g"
                    : "border-bdr-2 bg-transparent text-t-2 hover:bg-brand-g hover:text-white hover:border-brand-g"
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setFilter("cert")}
                className={`px-4 py-2 border rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  filter === "cert"
                    ? "bg-brand-g text-white border-brand-g"
                    : "border-bdr-2 bg-transparent text-t-2 hover:bg-brand-g hover:text-white hover:border-brand-g"
                }`}
              >
                Part A — Cert/Diploma
              </button>
              <button
                onClick={() => setFilter("exec")}
                className={`px-4 py-2 border rounded-lg text-xs font-medium cursor-pointer transition-all ${
                  filter === "exec"
                    ? "bg-brand-g text-white border-brand-g"
                    : "border-bdr-2 bg-transparent text-t-2 hover:bg-brand-g hover:text-white hover:border-brand-g"
                }`}
              >
                Part B — Executive
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {filteredCourses.map((course) => (
                <div
                  key={course.code}
                  onClick={() => setActiveIndex(course.originalIndex)}
                  className={`flex items-center gap-3.5 p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                    activeIndex === course.originalIndex
                      ? "bg-white border-brand-g shadow-sh"
                      : "bg-[#EEF4F1] border-bdr-DEFAULT hover:bg-white hover:border-brand-g hover:shadow-sh"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-[9px] flex items-center justify-center font-syne text-xs font-bold shrink-0 transition-colors ${
                      activeIndex === course.originalIndex
                        ? "bg-brand-g text-white"
                        : "bg-brand-gxl text-brand-gd"
                    }`}
                  >
                    {course.code}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-t-DEFAULT truncate">
                      {course.title.replace(/^[A-B][1-5]\s*—\s*/, "")}
                    </div>
                    <div className="text-[11px] text-t-3 truncate">
                      {course.meta}
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      activeIndex === course.originalIndex ? "text-brand-g" : "text-t-4"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DETAIL */}
          <div className="bg-[#EEF4F1] border border-bdr-DEFAULT rounded-[20px] p-7 sticky top-[90px]">
            <div className="inline-block px-3 py-1 bg-brand-g text-white rounded-md text-[11px] font-semibold mb-3.5">
              {selectedCourse.badge}
            </div>
            <h3 className="font-syne text-[19px] font-bold text-t-DEFAULT mb-2">
              {selectedCourse.title}
            </h3>
            <div className="text-xs text-t-3 mb-[18px] flex items-center gap-1.5">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {selectedCourse.duration}
            </div>

            <ul className="list-none m-0 p-0 mb-5">
              {selectedCourse.modules.map((mod, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 py-2 border-b border-bdr-DEFAULT text-[13px] text-t-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gl shrink-0" />
                  {mod}
                </li>
              ))}
            </ul>

            <div className="bg-white border border-bdr-2 rounded-lg p-3.5 text-[13px] text-t-2 leading-relaxed">
              <strong className="text-brand-g font-semibold">Outcome:</strong>{" "}
              {selectedCourse.outcome}
            </div>

            <div className="flex gap-2 flex-wrap mt-3.5">
              <span className="px-2.5 py-1 border border-bdr-2 rounded-md text-[11px] text-t-3 bg-white/50">
                Online Portal
              </span>
              <span className="px-2.5 py-1 border border-bdr-2 rounded-md text-[11px] text-t-3 bg-white/50">
                Hybrid Seminars
              </span>
              <span className="px-2.5 py-1 border border-bdr-2 rounded-md text-[11px] text-t-3 bg-white/50">
                Live Case Studies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrainingSection;
