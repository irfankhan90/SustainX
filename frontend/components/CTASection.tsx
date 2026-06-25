import React from "react";
import { Button } from "./ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

const trustItems = [
  {
    id: "credentials",
    text: "Industry-recognised credentials",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "fortune-500s",
    text: "Trusted by Fortune 500s & Governments",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "hybrid-delivery",
    text: "Hybrid online & in-person delivery",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "global-hubs",
    text: "3 global hubs — India, USA, Middle East",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
];

export const CTASection: React.FC = () => {
  return (
    <section className="bg-ink-2 py-24 relative overflow-hidden text-white">
      {/* ORBS */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.18)_0%,transparent_65%)] -top-[150px] -left-[100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.12)_0%,transparent_65%)] -bottom-[100px] -right-[80px] pointer-events-none" />

      <div className="container relative z-[1] text-center">
        <SectionHeader
          label="2026 Programs Open · India & Middle East"
          heading={
            <>
              Turn Global Ambition into
              <br />
              <span className="text-brand-gl">On-the-Ground Reality.</span>
            </>
          }
          description="Partner with GlobalPact SustainX to build the next generation of clean energy leaders. Start free today."
          variant="light"
          dot={true}
        />

        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <Button variant="white" size="lg" href="/register">
            Join the Ecosystem
          </Button>
          <Button variant="white-outline" size="lg" href="mailto:sustainx@globalpactholdings.in">
            Partner With Us
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-7 flex-wrap">
          {trustItems.map((item) => (
            <div key={item.id} className="flex items-center gap-1.5 text-xs text-white/70">
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
