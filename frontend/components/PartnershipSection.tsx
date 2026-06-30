import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const opportunities = [
  {
    id: "developers",
    title: "Developers, EPCs & MSMEs",
    desc: "Streamline engineering designs, construct utility scale assets, and synchronize grids safely using our de-risked PMC/EPC framework.",
    cta: "Build With Us",
    link: "#partnership-inquiry",
    icon: (
      <svg className="w-5 h-5 text-brand-g" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "investors",
    title: "Investors & Asset Owners",
    desc: "Maximize asset yields and audit environmental disclosures according to GRI/SASB standards via our TensorFlow yield-forecasting reports.",
    cta: "Partner With Us",
    link: "#partnership-inquiry",
    icon: (
      <svg className="w-5 h-5 text-brand-g" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: "innovators",
    title: "Innovators & Technology Providers",
    desc: "Field-test and integrate your smart microgrids, battery energy storage systems (BESS), and carbon accounting algorithms in active grids.",
    cta: "Build With Us",
    link: "#partnership-inquiry",
    icon: (
      <svg className="w-5 h-5 text-brand-g" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "professionals",
    title: "Engineers, MBAs & Fresh Professionals",
    desc: "Upskill through our certified curricula, gain hands-on HOMER/PVsyst simulation lab experience, and unlock direct engineering jobs.",
    cta: "Join the Ecosystem",
    link: "/capacity-building",
    icon: (
      <svg className="w-5 h-5 text-brand-g" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6c-3 0-5.5-1.5-6-4m12 4c.5-2.5-2-4-6-4" />
      </svg>
    )
  }
];

export const PartnershipSection: React.FC = () => {
  return (
    <section className="py-24 bg-white scroll-mt-[var(--navbar-height)]" id="partnerships">
      <div className="container">
        
        <SectionHeader
          label="Strategic Collaboration"
          heading="SustainX Collaboration Ecosystem"
          description="Accelerating the energy transition requires active collaboration. We align capital, technology, and talent to deliver real-world execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {opportunities.map((item) => (
            <div
              key={item.id}
              className="bg-surface-DEFAULT border border-bdr-DEFAULT rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-sh transition-all duration-300 hover:border-brand-g/30 group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-gxl flex items-center justify-center mb-5 group-hover:bg-brand-g group-hover:text-white transition-colors duration-300">
                  <span className="group-hover:text-white text-brand-g transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
                
                <h3 className="font-syne text-base font-bold text-t-DEFAULT mb-3">
                  {item.title}
                </h3>
                
                <p className="text-[13.5px] text-t-2 leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
              </div>

              <a
                href={item.link}
                className="h-11 px-5 inline-flex items-center justify-center text-xs font-bold text-brand-g hover:text-white border border-bdr-2 rounded-lg bg-transparent hover:bg-brand-g transition-all self-start cursor-pointer shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipSection;
