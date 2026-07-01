"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const team = [
  {
    id: "umar-siddiqui",
    name: "Mr. Umar Siddiqui",
    title: "Managing Director",
    avatar: "/umar_siddiqui.png",
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
    avatar: "/ma_mufazzal.png",
    colorClass: "bg-brand-gd",
    bio: "PhD in Corporate Communication. Specializes in strategies aligning with UN SDGs 7 and 13. Speaker at the United Nations General Assembly (2014) on global citizenship and sustainable development. Advisor to Anti-Corruption Academy & Idea of India Foundation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-surface-3 scroll-mt-[var(--navbar-height)]" id="about">
      <div className="container">
        <SectionHeader
          label="Executive Management"
          heading="Led by global energy & technology experts"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group bg-white/90 backdrop-blur-md border border-brand-g/10 hover:border-brand-g/25 rounded-[28px] p-10 sm:p-12 lg:p-14 text-center transition-all duration-300 hover:shadow-[0_20px_45px_rgba(11,22,18,0.08)] hover:-translate-y-1 relative overflow-hidden"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Profile Image / Avatar container */}
              <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full mx-auto mb-8 border-4 border-white shadow-[0_12px_30px_rgba(0,0,0,0.12),_0_0_15px_rgba(29,158,117,0.25)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-[1.03]">
                {member.avatar.startsWith("/") ? (
                  <Image
                    src={member.avatar}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    sizes="(max-width: 768px) 140px, 160px"
                    className={`object-cover brightness-[1.03] contrast-[1.02] ${
                      member.id === "ma-mufazzal" ? "object-[70%_25%]" : "object-[center_28%]"
                    }`}
                    priority
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center font-syne text-3xl font-extrabold text-white ${member.colorClass}`}>
                    {member.avatar}
                  </div>
                )}
              </div>

              {/* Title & Biography */}
              <h3 className="font-syne text-[17px] font-bold text-t-DEFAULT mb-1.5 transition-colors duration-200 group-hover:text-brand-g">
                {member.name}
              </h3>
              <div className="text-[13px] text-brand-g font-bold uppercase tracking-wider mb-4">
                {member.title}
              </div>
              <p className="text-[12.5px] text-t-2 leading-[1.75] text-center max-w-[300px] mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
