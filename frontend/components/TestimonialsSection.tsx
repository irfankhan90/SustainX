import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: "arjun-kapoor",
    stars: "★★★★★",
    text: '"The Diploma in RE Project Management completely changed how I approach large-scale energy projects. The capstone simulation was real-world level. Best career investment I\'ve made."',
    author: "Arjun Kapoor",
    role: "Project Manager, Adani Green Energy, Rajasthan",
    avatar: "AK",
    colorClass: "bg-brand-g",
  },
  {
    id: "sara-al-rashidi",
    stars: "★★★★★",
    text: '"The B4 Corporate Sustainability Leadership program gave our C-suite the clarity to integrate renewables at scale. The AI ESG dashboard insights are genuinely impressive and actionable."',
    author: "Sara Al-Rashidi",
    role: "Head of ESG, Energy Corp, Saudi Arabia",
    avatar: "SA",
    colorClass: "bg-brand-gd",
  },
  {
    id: "rohit-mehta",
    stars: "★★★★★",
    text: '"As an engineer needing both technical depth and policy understanding, SustainX was perfect. A2 Solar & Wind Engineering with PVsyst simulation labs is genuinely world-class."',
    author: "Rohit Mehta",
    role: "Solar Design Engineer, Mumbai",
    avatar: "RM",
    colorClass: "bg-brand-gxd",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <SectionHeader
          label="Testimonials"
          heading="What professionals say about SustainX"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="bg-surface-3 border border-bdr-DEFAULT rounded-[28px] p-6 sm:p-7 transition-all duration-200 hover:bg-white hover:shadow-sh2 hover:-translate-y-0.5"
            >
              <div className="text-brand-g text-[15px] mb-3.5 tracking-[2px]">
                {testi.stars}
              </div>
              <p className="text-sm text-t-2 leading-[1.65] font-light mb-[18px]">
                {testi.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-[38px] h-[38px] rounded-full flex items-center justify-center font-syne text-xs font-bold text-white shrink-0 ${testi.colorClass}`}
                >
                  {testi.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-t-DEFAULT">
                    {testi.author}
                  </div>
                  <div className="text-[11px] text-t-3">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
