"use client";

import React from "react";
import { Button } from "./ui/Button";

const trustItems = [
  {
    text: "Industry-recognised credentials",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    text: "Trusted by Fortune 500s & Governments",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    text: "Hybrid online & in-person delivery",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-brand-gl stroke-2 shrink-0">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
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
        <div className="inline-flex items-center gap-[7px] px-3.5 py-[5px] border border-brand-gl/30 rounded-full text-xs font-semibold text-brand-gl bg-brand-g/15 tracking-wider uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gl animate-pulse-slow" />
          2026 Programs Open · India & Middle East
        </div>

        <h2 className="font-syne text-[30px] sm:text-[4vw] md:text-[52px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4">
          Turn Global Ambition into
          <br />
          <span className="text-brand-gl">On-the-Ground Reality.</span>
        </h2>

        <p className="text-base text-white/55 font-light max-w-[480px] mx-auto mb-8 leading-[1.65]">
          Partner with GlobalPact SustainX to build the next generation of clean energy leaders. Start free today.
        </p>

        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <Button variant="white" size="lg" href="/register">
            Start Free — No Credit Card
          </Button>
          <Button variant="white-outline" size="lg" href="mailto:sustainx@globalpactholdings.in">
            Contact Us
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-7 flex-wrap">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-white/45">
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
