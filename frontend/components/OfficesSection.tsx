import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const offices = [
  {
    id: "india",
    flag: "🇮🇳",
    flagLabel: "India flag",
    country: "India — Technical Engine",
    role: "Mumbai Headquarters",
    desc: "Access to top-tier technical talent and highly cost-efficient backend engineering support. Driving Pan-India, Maharashtra and South Asia projects including EPC and Solar Finance.",
    address: (
      <>
        B-101/102, Grenville, Near Lokhandwala Club
        <br />
        Lokhandwala Complex, Andheri West, Mumbai – 400053
        <br />
        <a href="tel:+912240167394" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g">
          +91-22-40167394
        </a>
        <br />
        <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-g hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g">
          sustainx@globalpactholdings.in
        </a>
      </>
    ),
  },
  {
    id: "usa",
    flag: "🇺🇸",
    flagLabel: "USA flag",
    country: "USA — Innovation Hub",
    role: "Canton, Michigan",
    desc: "Access to emerging clean technologies, advanced AI research, and innovation ecosystems. Connecting with Fortune 500 automotive and energy companies.",
    address: (
      <>
        GlobalPact Alphanso
        <br />
        Canton, MI 48187, USA
        <br />
        <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-g hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g">
          sustainx@globalpactholdings.in
        </a>
      </>
    ),
  },
  {
    id: "middle-east",
    flag: "🇶🇦",
    flagLabel: "Qatar flag",
    country: "Middle East — Frontline",
    role: "Global Deployment Hub, Doha",
    desc: "Rapid deployment with deep regulatory understanding and context-aware execution across GCC — Saudi Arabia, UAE, Qatar, Kuwait. Supporting Vision 2030 energy targets.",
    address: (
      <>
        PO Box 96296, Doha, Qatar
        <br />
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
          <a href="tel:+97470004441" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g">
            +974 7000 4441
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="tel:+97470807710" className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g">
            +974 7080 7710
          </a>
        </div>
        <br />
        <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-g hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g">
          sustainx@globalpactholdings.in
        </a>
      </>
    ),
  },
];

export const OfficesSection: React.FC = () => {
  return (
    <section className="py-24 bg-surface-3 scroll-mt-[var(--navbar-height)]" id="offices">
      <div className="container">
        <SectionHeader
          label="Global Presence"
          heading="International standards. Local expertise."
          description="Three strategic hubs delivering localized solutions with global reach."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {offices.map((office) => (
            <div
              key={office.id}
              className="bg-white border border-bdr-DEFAULT rounded-[28px] p-6 sm:p-7 relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-brand-g"
            >
              <div className="text-[30px] mb-3">
                <span role="img" aria-label={office.flagLabel}>
                  {office.flag}
                </span>
              </div>
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
