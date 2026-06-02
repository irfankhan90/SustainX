"use client";

import React from "react";

const team = [
  {
    name: "Mr. Umar Siddiqui",
    title: "Managing Director",
    avatar: "US",
    color: "#0B1612",
    bio: "Global Entrepreneur & Social Reformist. Managed Fortune 500 software teams. Board member at Singapore's Global Source Media & Technology Investments. Founder of Anti-Corruption Academy & Idea of India Foundation. Promoter of WorldHub City, Navi Mumbai.",
  },
  {
    name: "Dr. Saad Alam",
    title: "President",
    avatar: "SA",
    color: "#1D9E75",
    bio: "Strategist at AI, Renewable Energy & EV intersection. PhD from USA. 10+ years at Chrysler, Ford & GM leading AI-enabled EV infrastructure. Founded CARET at AMU. Advisor to Fortune 500s & Government bodies on energy economics and workforce readiness beyond 2030.",
  },
  {
    name: "Dr. M.A. Mufazzal",
    title: "Chief Consultant",
    avatar: "MM",
    color: "#0F6E56",
    bio: "PhD in Corporate Communication. Specializes in strategies aligning with UN SDGs 7 and 13. Speaker at the United Nations General Assembly (2014) on global citizenship and sustainable development. Advisor to Anti-Corruption Academy & Idea of India Foundation.",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#EEF4F1]" id="team">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 bg-brand-gxl text-brand-gd rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 border border-bdr-2">
            Executive Management
          </div>
          <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-t-DEFAULT mb-3.5">
            Led by global energy & technology experts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-bdr-DEFAULT rounded-[28px] p-7 text-center transition-all duration-200 hover:shadow-sh2 hover:-translate-y-0.5"
            >
              <div
                className="w-[68px] h-[68px] rounded-full flex items-center justify-center font-syne text-xl font-extrabold text-white mx-auto mb-3.5"
                style={{ backgroundColor: member.color }}
              >
                {member.avatar}
              </div>
              <h3 className="font-syne text-base font-bold text-t-DEFAULT mb-1">
                {member.name}
              </h3>
              <div className="text-[13px] text-brand-g font-semibold mb-2.5">
                {member.title}
              </div>
              <p className="text-xs text-t-3 leading-[1.65] text-center">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
