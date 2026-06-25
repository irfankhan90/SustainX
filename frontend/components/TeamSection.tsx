import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const team = [
  {
    id: "umar-siddiqui",
    name: "Mr. Umar Siddiqui",
    title: "Managing Director",
    avatar: "US",
    colorClass: "bg-ink-DEFAULT",
    bio: "Global Entrepreneur & Social Reformist. Managed Fortune 500 software teams. Board member at Singapore's Global Source Media & Technology Investments. Founder of Anti-Corruption Academy & Idea of India Foundation. Promoter of WorldHub City, Navi Mumbai.",
  },
  {
    id: "saad-alam",
    name: "Dr. Saad Alam",
    title: "President",
    avatar: "SA",
    colorClass: "bg-brand-g",
    bio: "Strategist at AI, Renewable Energy & EV intersection. PhD from USA. 10+ years at Chrysler, Ford & GM leading AI-enabled EV infrastructure. Founded CARET at AMU. Advisor to Fortune 500s & Government bodies on energy economics and workforce readiness beyond 2030.",
  },
  {
    id: "ma-mufazzal",
    name: "Dr. M.A. Mufazzal",
    title: "Chief Consultant",
    avatar: "MM",
    colorClass: "bg-brand-gd",
    bio: "PhD in Corporate Communication. Specializes in strategies aligning with UN SDGs 7 and 13. Speaker at the United Nations General Assembly (2014) on global citizenship and sustainable development. Advisor to Anti-Corruption Academy & Idea of India Foundation.",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-surface-3 scroll-mt-[var(--navbar-height)]" id="about">
      <div className="container">
        <SectionHeader
          label="Executive Management"
          heading="Led by global energy & technology experts"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-bdr-DEFAULT rounded-[28px] p-6 sm:p-7 text-center transition-all duration-200 hover:shadow-sh2 hover:-translate-y-0.5"
            >
              <div
                className={`w-[68px] h-[68px] rounded-full flex items-center justify-center font-syne text-xl font-extrabold text-white mx-auto mb-3.5 ${member.colorClass}`}
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
