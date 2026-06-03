"use client";

import React from "react";

const offices = [
  {
    flag: "🇮🇳",
    country: "India — Technical Engine",
    role: "Mumbai Headquarters",
    desc: "Access to top-tier technical talent and highly cost-efficient backend engineering support. Driving Pan-India, Maharashtra and South Asia projects including EPC and Solar Finance.",
    address: (
      <>
        B-101/102, Grenville, Near Lokhandwala Club
        <br />
        Lokhandwala Complex, Andheri West, Mumbai – 400053
        <br />
        <a href="tel:+912240167394" className="hover:underline">
          +91-22-40167394
        </a>
        <br />
        <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-g hover:underline">
          sustainx@globalpactholdings.in
        </a>
      </>
    ),
  },
  {
    flag: "🇺🇸",
    country: "USA — Innovation Hub",
    role: "Canton, Michigan",
    desc: "Access to emerging clean technologies, advanced AI research, and innovation ecosystems. Connecting with Fortune 500 automotive and energy companies.",
    address: (
      <>
        GlobalPact Alphanso
        <br />
        Canton, MI 48187, USA
        <br />
        <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-g hover:underline">
          sustainx@globalpactholdings.in
        </a>
      </>
    ),
  },
  {
    flag: "🇶🇦",
    country: "Middle East — Frontline",
    role: "Global Deployment Hub, Doha",
    desc: "Rapid deployment with deep regulatory understanding and context-aware execution across GCC — Saudi Arabia, UAE, Qatar, Kuwait. Supporting Vision 2030 energy targets.",
    address: (
      <>
        PO Box 96296, Doha, Qatar
        <br />
        <a href="tel:+97470004441" className="hover:underline">
          +974 7000 4441
        </a>{" "}
        ·{" "}
        <a href="tel:+97470807710" className="hover:underline">
          +974 7080 7710
        </a>
        <br />
        <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-g hover:underline">
          sustainx@globalpactholdings.in
        </a>
      </>
    ),
  },
];

export const OfficesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#EEF4F1]" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 bg-brand-gxl text-brand-gd rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 border border-bdr-2">
            Global Presence
          </div>
          <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-t-DEFAULT mb-3.5">
            International standards. Local expertise.
          </h2>
          <p className="text-[17px] text-t-2 font-light leading-[1.65] max-w-[540px] mx-auto">
            Three strategic hubs delivering localized solutions with global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offices.map((office, idx) => (
            <div
              key={idx}
              className="bg-white border border-bdr-DEFAULT rounded-[28px] p-7 relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-brand-g"
            >
              <div className="text-[30px] mb-3">{office.flag}</div>
              <h3 className="font-syne text-base font-bold text-t-DEFAULT mb-[3px]">
                {office.country}
              </h3>
              <div className="text-[11px] text-brand-g font-semibold uppercase tracking-wider mb-2.5">
                {office.role}
              </div>
              <p className="text-xs text-t-3 leading-[1.65] mb-3.5">
                {office.desc}
              </p>
              <div className="text-xs text-t-2 leading-[1.7] border-t border-bdr-DEFAULT pt-3.5">
                {office.address}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OfficesSection;
