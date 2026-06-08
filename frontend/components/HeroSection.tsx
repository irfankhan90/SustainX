"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Chip } from "./ui/Chip";

const FLOW_STEPS = [
  {
    title: "Strategic Advisory",
    icon: "📋",
    desc: "Net-Zero roadmaps, feasibility studies, and green finance structuring."
  },
  {
    title: "Project Management",
    icon: "📈",
    desc: "Owner's engineering, project scheduling, and milestone enforcement."
  },
  {
    title: "EPC Solutions",
    icon: "🏗️",
    desc: "Field procurement, equipment installation, and utility grid hookups."
  },
  {
    title: "Capacity Building",
    icon: "🎓",
    desc: "Operational simulator training and certified engineering readiness."
  },
  {
    title: "Sustainable Impact",
    icon: "🌍",
    desc: "Verifiable carbon offset telemetry and active green power generation."
  }
];

export const HeroSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation of highlights
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % FLOW_STEPS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-[120px] pb-[80px] overflow-hidden bg-[#F8FAF9]" id="home">
      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-bdr-DEFAULT) 1px, transparent 1px), linear-gradient(90deg, var(--color-bdr-DEFAULT) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial Orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.12)_0%,transparent_70%)] -top-[120px] -right-[100px]" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.08)_0%,transparent_70%)] bottom-[100px] -left-[100px]" />
      </div>

      <div className="container relative z-[1] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-center">
          {/* LEFT COLUMN: HERO ESSENTIALS */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Chip className="anim-1 mb-5 self-start" dot={true}>
              Knowledge • Intelligence • Execution • Impact
            </Chip>
            
            <h1 className="anim-2 font-syne text-[36px] sm:text-[4.5vw] lg:text-[54px] font-extrabold leading-[1.12] tracking-[-0.035em] text-t-DEFAULT mb-6">
              Turning Energy Transition Strategies into <span className="bg-gradient-to-r from-brand-g to-brand-gd bg-clip-text text-transparent">Real-World Impact</span>
            </h1>
            
            <p className="anim-3 text-[16px] sm:text-[18px] text-t-2 leading-[1.65] font-normal max-w-[560px] mb-8">
              GlobalPact SustainX integrates sustainability consulting, capital scheduling, field EPC, and real-time grid telemetry into a single, unified execution platform.
            </p>
            
            <div className="anim-4 flex items-center gap-4 flex-wrap mb-10">
              <Button variant="primary" size="lg" href="#about" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2">
                Explore Solutions
              </Button>
              <Button variant="outline" size="lg" href="#contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2">
                Partner With Us
              </Button>
            </div>
            
            {/* Trusted indicators */}
            <div className="anim-5 hidden lg:flex items-center gap-4">
              <div className="flex">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white bg-brand-g select-none">
                  GP
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-brand-gd select-none">
                  IIT
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-brand-gxd select-none">
                  KOC
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-brand-gd bg-[#5DCAA5] select-none">
                  SE
                </div>
              </div>
              <div className="text-[12.5px] text-t-3 font-medium">
                Integrated with leaders: <strong className="text-t-DEFAULT font-semibold">IIT Kanpur, GlobalPact Holdings, KOC Kuwait, Schoon Energy</strong>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ANIMATED EXECUTION FLOW */}
          <div className="lg:col-span-6 w-full flex flex-col items-center justify-center overflow-visible mt-12 lg:mt-0 anim-5">
            <div className="w-full max-w-[480px] bg-[#0A110E] border border-[#163327] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(11,22,18,0.3)] backdrop-blur-lg">
              
              {/* Decorative background grid and flows */}
              <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(29,158,117,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.1) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
              <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-g/10 filter blur-[80px] -top-10 -right-10 pointer-events-none" />
              <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-gd/5 filter blur-[80px] -bottom-10 -left-10 pointer-events-none" />

              {/* Console Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#163327] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gl animate-pulse" />
                  <span className="font-syne text-[10px] font-extrabold tracking-[0.15em] text-[#A8C4BA] uppercase">
                    Execution Telemetry
                  </span>
                </div>
                <div className="text-[9px] font-bold text-brand-gl uppercase tracking-wider bg-[#0C2219] px-2 py-0.5 rounded border border-brand-g/20">
                  System Active
                </div>
              </div>

              {/* Timeline Flow Container */}
              <div className="relative z-10 flex flex-col gap-4">
                
                {/* Vertical Connector Line
                    This line starts at the center of the first icon (top ~42px) and ends at the center of the last icon (bottom ~42px).
                */}
                <div className="absolute left-[42px] top-[42px] bottom-[42px] w-[2px] bg-[#163327] pointer-events-none">
                  {/* Glowing active path segment overlay */}
                  <div 
                    className="absolute w-[2px] bg-brand-gl transition-all duration-700 ease-in-out shadow-[0_0_8px_#5DCAA5]"
                    style={{
                      top: 0,
                      height: `${(activeStep / (FLOW_STEPS.length - 1)) * 100}%`
                    }}
                  />
                  {/* Glowing dynamic pulse cursor */}
                  <div 
                    className="absolute w-[8px] h-[8px] -left-[3px] bg-[#5DCAA5] rounded-full transition-all duration-700 ease-in-out -translate-y-1/2 shadow-[0_0_12px_#5DCAA5,0_0_20px_#1D9E75]"
                    style={{
                      top: `${(activeStep / (FLOW_STEPS.length - 1)) * 100}%`
                    }}
                  />
                </div>

                {/* Steps Cards */}
                {FLOW_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={step.title}
                      className={`relative flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer group select-none ${
                        isActive
                          ? "bg-[#11241E]/90 border-brand-g shadow-[0_0_20px_rgba(29,158,117,0.15)] translate-x-2"
                          : "bg-[#0E1613]/40 border-[#1C2C26] hover:border-brand-g/40 hover:bg-[#11241E]/30"
                      }`}
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setActiveStep(idx);
                      }}
                      onMouseLeave={() => {
                        setIsHovered(false);
                      }}
                      onClick={() => {
                        setActiveStep(idx);
                      }}
                    >
                      {/* Step Indicator / Icon */}
                      <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center shrink-0 text-xl font-bold transition-all duration-300 relative z-10 ${
                        isActive
                          ? "bg-brand-g text-white shadow-[0_0_15px_rgba(29,158,117,0.4)]"
                          : "bg-[#162922] text-[#A8C4BA] group-hover:bg-[#1D9E75]/20 group-hover:text-white"
                      }`}>
                        {step.icon}
                      </div>

                      {/* Connecting point dot helper centered relative to the connector line */}
                      <div className={`absolute left-[42px] top-[42px] -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full border transition-all duration-300 z-20 pointer-events-none ${
                        isActive
                          ? "bg-[#5DCAA5] border-[#5DCAA5] scale-125 shadow-[0_0_8px_#5DCAA5]"
                          : "bg-[#0E1613] border-[#28443A] group-hover:border-brand-g/60"
                      }`} />

                      {/* Step Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-0.5">
                          <h4 className={`font-syne text-[14px] font-bold tracking-wide transition-colors duration-300 truncate ${
                            isActive ? "text-white" : "text-[#E0E8E4]/90 group-hover:text-white"
                          }`}>
                            {step.title}
                          </h4>
                          <span className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 shrink-0 ${
                            isActive ? "text-brand-gl" : "text-[#6B8C80]"
                          }`}>
                            Phase 0{idx + 1}
                          </span>
                        </div>
                        <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${
                          isActive ? "text-[#A8C4BA]" : "text-[#8BA59B] group-hover:text-[#A8C4BA]"
                        }`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Trusted indicators (Mobile-only, stacked below Execution Flow) */}
            <div className="anim-5 flex lg:hidden items-center gap-4 mt-10 px-4 justify-center">
              <div className="flex shrink-0">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white bg-brand-g select-none">
                  GP
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-brand-gd select-none">
                  IIT
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-white bg-brand-gxd select-none">
                  KOC
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white -ml-2 flex items-center justify-center text-[10px] font-bold text-brand-gd bg-[#5DCAA5] select-none">
                  SE
                </div>
              </div>
              <div className="text-[12.5px] text-t-3 font-medium text-left">
                Integrated with leaders: <strong className="text-t-DEFAULT font-semibold">IIT Kanpur, GlobalPact Holdings, KOC Kuwait, Schoon Energy</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
