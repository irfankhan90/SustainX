import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const advisors = [
  {
    id: "reji-kumar-pillai",
    name: "Reji Kumar Pillai",
    org: "President, India Smart Grid Forum · Chairman, Global Smart Energy Federation",
  },
  {
    id: "somitra-sanadhya",
    name: "Prof. Somitra Sanadhya",
    org: "Wadhwani School of AI, IIT Kanpur",
  },
  {
    id: "ali-t-alouani",
    name: "Dr. Ali T Alouani",
    org: "Tennessee Tech University, USA",
  },
  {
    id: "simon-kehimkar",
    name: "Simon Kehimkar",
    org: "Manager, General Motors, USA",
  },
  {
    id: "aqueel-ahmad",
    name: "Dr. Aqueel Ahmad",
    org: "Manager, Switch Mobility",
  },
  {
    id: "ali-al-duaij",
    name: "Ali Al Duaij",
    org: "Manager, KOC, Kuwait",
  },
  {
    id: "samir-al-shariff",
    name: "Dr. Samir Al-Shariff",
    org: "Taibah University, Saudi Arabia",
  },
  {
    id: "rakan-chabaan",
    name: "Dr. Rakan Chabaan",
    org: "Senior Manager, Hyundai Kia, USA",
  },
];

export const AdvisorySection: React.FC = () => {
  return (
    <section id="advisory-board" className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT scroll-mt-[var(--navbar-height)]">
      <div className="container">
        <SectionHeader
          label="Global Advisory Board"
          heading="Supported by industry pioneers worldwide"
          description="Our advisory board brings together global leaders from automotive, energy, academia, and policy sectors."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="bg-white border border-bdr-DEFAULT rounded-xl p-[18px] transition-all duration-200 hover:shadow-sh2 hover:-translate-y-0.5"
            >
              <h3 className="font-syne text-sm font-bold text-t-DEFAULT mb-[3px]">
                {advisor.name}
              </h3>
              <div className="text-xs text-brand-g font-semibold">
                {advisor.org}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
