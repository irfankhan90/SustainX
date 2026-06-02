"use client";

import React from "react";

const stats = [
  {
    num: "50",
    suffix: "+",
    desc: "Years combined expertise",
    sub: "Engineering & sustainability leadership",
  },
  {
    num: "6.25",
    suffix: "MW",
    desc: "Solar projects delivered",
    sub: "Adani Green Energy, Rajasthan",
  },
  {
    num: "10",
    suffix: "",
    desc: "Training programs",
    sub: "Certificate + Executive tracks",
  },
  {
    num: "3",
    suffix: "",
    desc: "Global hubs",
    sub: "India · USA · Middle East (Qatar)",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <div className="bg-brand-g text-white py-14">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/15">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-brand-g py-8 px-6 text-center">
              <div className="font-syne text-[42px] font-extrabold text-white leading-none mb-1.5">
                {stat.num}
                <span className="text-brand-gll">{stat.suffix}</span>
              </div>
              <div className="text-sm text-white/80 font-medium">
                {stat.desc}
              </div>
              <div className="text-[12px] text-white/50 mt-[2px]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StatsSection;
