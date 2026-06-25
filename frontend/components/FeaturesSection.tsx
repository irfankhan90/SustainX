import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    id: "certified-programs",
    title: "10 Certified Programs",
    desc: "Certificate & Diploma programs (A1–A5) plus 5 Executive Intensive programs (B1–B5) covering every career stage — from engineers to CXOs.",
    tag: "Part A + Part B tracks",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors duration-250">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics",
    desc: "Predictive analytics, ESG monitoring, smart recommendations, and automated sustainability reports powered by OpenAI & TensorFlow.",
    tag: "Real-time AI insights",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors duration-250">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    id: "hybrid-learning",
    title: "Hybrid Learning",
    desc: "Online modules combined with in-person workshops, simulation labs using PVsyst & HOMER, and global industry expert masterclasses.",
    tag: "Online + In-person",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors duration-250">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "industry-certificates",
    title: "Industry Certificates",
    desc: "Industry-recognised credentials that enhance professional standing, accelerate career advancement, and open doors to global networks.",
    tag: "GlobalPact certified",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors duration-250">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    id: "esg-dashboard",
    title: "ESG Dashboard",
    desc: "Track CO₂ reduction, Scope 1–3 emissions, energy saved, and waste managed in real-time with interactive charts and AI-generated alerts.",
    tag: "Scope 1–3 tracking",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors duration-250">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "corporate-collab",
    title: "Corporate Collaboration",
    desc: "Multi-seat enterprise accounts, team progress tracking, custom training programs aligned with Vision 2030 and India Net-Zero targets.",
    tag: "Enterprise-ready",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 transition-colors duration-250">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const deliveryMethods = [
  {
    id: "hybrid",
    title: "Hybrid Learning",
    desc: "Online + In-person workshops for maximum flexibility",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px].h-[22px] fill-none stroke-white stroke-2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
  {
    id: "experts",
    title: "Industry Experts",
    desc: "Global case studies led by sector leaders from GM, IIT, KOC",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-white stroke-2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "simulations",
    title: "Simulation Tools",
    desc: "PVsyst, HOMER, and digital lab environments",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-white stroke-2">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M7 2v20M17 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    id: "capstone",
    title: "Capstone Projects",
    desc: "End-to-End project execution from design to commissioning",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-white stroke-2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    id: "integration",
    title: "Industry Integration",
    desc: "Live internships and project opportunities with global partners",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-white stroke-2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <>
      {/* FEATURES GRID */}
      <section className="py-24 scroll-mt-[var(--navbar-height)]" id="features">
        <div className="container">
          <SectionHeader
            label="Platform Features"
            heading="Everything your team needs to lead the energy transition"
            description="From certified programs to AI-powered ESG dashboards — one platform for the entire clean energy journey."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-bdr-DEFAULT border border-bdr-DEFAULT rounded-2xl overflow-hidden">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-9 group transition-colors duration-250 hover:bg-brand-gxl"
              >
                <div className="w-12 h-12 bg-brand-gxl text-brand-g rounded-xl flex items-center justify-center mb-5 transition-colors duration-250 group-hover:bg-brand-g group-hover:text-white fill-none stroke-brand-g group-hover:stroke-white stroke-2 stroke-linecap-round stroke-linejoin-round">
                  {feature.icon}
                </div>
                <h3 className="font-syne text-[17px] font-bold text-t-DEFAULT mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-t-3 leading-[1.6]">
                  {feature.desc}
                </p>
                <div className="inline-block mt-3.5 px-2.5 py-[3px] bg-brand-gxl text-brand-gd rounded-md text-xs font-semibold">
                  {feature.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <section id="delivery-model" className="py-24 bg-white border-t border-b border-bdr-DEFAULT">
        <div className="container">
          <SectionHeader
            label="Delivery Model"
            heading="Applied learning ecosystem for real-world execution"
            description="Theory + Practical Application + Industry Reality = Applied Competency & Accelerated Career Advancement"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
            {deliveryMethods.map((method) => (
              <div
                key={method.id}
                className="bg-brand-gxl border border-bdr-2 rounded-xl p-5 text-center transition-all hover:shadow-sh"
              >
                <div className="w-11 h-11 bg-brand-g rounded-xl flex items-center justify-center mx-auto mb-3 shrink-0">
                  {method.icon}
                </div>
                <h3 className="font-syne text-[13px] font-bold text-brand-gd mb-1">
                  {method.title}
                </h3>
                <p className="text-[11px] text-t-3 leading-relaxed">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
