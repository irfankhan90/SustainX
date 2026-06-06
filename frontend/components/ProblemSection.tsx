"use client";

import React, { useState } from "react";

interface PillarData {
  id: string;
  label: string;
  icon: string;
  strategy: string;
  execution: string;
  metric: string;
  metricLabel: string;
  angle: number; // angle in degrees
  color: string;
  lineColor: string;
}

const HUB_PILLARS: PillarData[] = [
  {
    id: "renewable",
    label: "Renewable Energy",
    icon: "⚡",
    strategy: "Resource feasibility models, solar/wind yield assessments, and grid capacity studies.",
    execution: "Field installation, EPC construction supervision, and active utility hookup.",
    metric: "98.7% Yield Match",
    metricLabel: "Operational Accuracy",
    angle: -90, // Top
    color: "from-brand-g to-brand-gl",
    lineColor: "#1D9E75"
  },
  {
    id: "esg",
    label: "ESG Intelligence",
    icon: "🌱",
    strategy: "Regulatory compliance blueprints, CSRD emission mapping, and green audit plans.",
    execution: "Live Scope 1-3 sensor tracking, automated logs, and carbon offset transactions.",
    metric: "100% Audit Ready",
    metricLabel: "Emissions Verification",
    angle: -38.5, // Top-Right
    color: "from-emerald-400 to-teal-500",
    lineColor: "#34D399"
  },
  {
    id: "ai",
    label: "AI-Powered Insights",
    icon: "🤖",
    strategy: "Machine learning grid forecasts, weather prediction, and load dispatch math.",
    execution: "Direct smart grid adjustments, automated load-shedding, and battery discharge.",
    metric: "-22% Peak Load",
    metricLabel: "Grid Stress Mitigated",
    angle: 13, // Right-Bottom
    color: "from-purple-500 to-indigo-500",
    lineColor: "#A78BFA"
  },
  {
    id: "advisory",
    label: "Strategic Advisory",
    icon: "📋",
    strategy: "Net-Zero policy blueprints, ESG rating targets, and green finance packaging.",
    execution: "Real-time Capex tracking, compliance auditing, and active project financing.",
    metric: "$4.2B Guided",
    metricLabel: "ESG Finance Allocated",
    angle: 64.5, // Bottom-Right
    color: "from-amber-400 to-orange-500",
    lineColor: "#FBBF24"
  },
  {
    id: "pm",
    label: "Project Management",
    icon: "📈",
    strategy: "Timelines, lifecycle staging, safety plans, and supply chain allocation.",
    execution: "On-site PMC monitoring, certified milestone audits, and vendor validation.",
    metric: "94% On-Schedule",
    metricLabel: "Project Commissioning",
    angle: 115.5, // Bottom-Left
    color: "from-sky-400 to-blue-500",
    lineColor: "#38BDF8"
  },
  {
    id: "epc",
    label: "EPC Solutions",
    icon: "🏗️",
    strategy: "Engineering schematics, structural design models, and grid connection layout.",
    execution: "Active civil works, inverter rigging, panel wiring, and physical hookups.",
    metric: "450MW Commissioned",
    metricLabel: "Active Solar/Wind Sites",
    angle: 167, // Left-Bottom
    color: "from-rose-400 to-pink-500",
    lineColor: "#F43F5E"
  },
  {
    id: "capacity",
    label: "Capacity Building",
    icon: "🎓",
    strategy: "Workforce competency profiling and institutional technical study maps.",
    execution: "VR simulation training, onsite safety drills, and engineering certifications.",
    metric: "18k+ Certified",
    metricLabel: "Site-Ready Engineers",
    angle: 218.5, // Top-Left
    color: "from-teal-400 to-cyan-500",
    lineColor: "#2DD4BF"
  }
];

export const ProblemSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("renewable");

  const activePillar = HUB_PILLARS.find((p) => p.id === activeId) || HUB_PILLARS[0];

  return (
    <section className="bg-[#050B09] text-[#E0E8E4] py-24 relative overflow-hidden" id="about">
      {/* Background Tech Grids & Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(29,158,117,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Soft Radial Center Hub Glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.12)_0%,transparent_70%)] top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.06)_0%,transparent_75%)] top-[15%] left-[10%]" />
      </div>

      <div className="container relative z-[1] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: NARRATIVE & DYNAMIC BRIDGE CARD */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-[7px] px-3.5 py-[5px] border border-[#163327] rounded-full text-xs font-semibold text-brand-gl bg-[#092218] tracking-wider uppercase mb-5 self-start select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gl animate-pulse"></span>
              Execution Ecosystem
            </div>
            
            <h2 className="font-syne text-[32px] sm:text-[4vw] lg:text-[44px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white mb-5">
              Bridging the Gap From Strategy to <span className="bg-gradient-to-r from-brand-gl to-emerald-400 bg-clip-text text-transparent">Action</span>.
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-t-4 leading-[1.65] font-light max-w-[500px] mb-8">
              Corporate ESG mandates and machine learning models often disconnect from physical field work. SustainX serves as the integration engine—directly mapping high-level planning onto verified operations.
            </p>

            {/* DYNAMIC STRATEGY-TO-EXECUTION CONVERSION CARD */}
            <div className="bg-[#0E1613]/80 border border-[#1C2C26] rounded-2xl p-6 shadow-sh2 backdrop-blur-md relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-g to-transparent opacity-5 rounded-full filter blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5 border-b border-[#1C2C26] pb-3">
                <span className="text-2xl">{activePillar.icon}</span>
                <div>
                  <h4 className="font-syne text-[15px] font-bold text-white uppercase tracking-wider">
                    {activePillar.label}
                  </h4>
                  <p className="text-[10px] text-brand-gl font-bold tracking-widest uppercase">Pillar Bridge</p>
                </div>
              </div>

              {/* Dynamic Bridge Diagram */}
              <div className="flex flex-col gap-4">
                {/* Strategy Step */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[#14231E] border border-brand-g/30 text-brand-gl text-xs font-bold font-syne select-none group-hover:bg-[#1D9E75] group-hover:text-white transition-colors duration-300">
                    A
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-t-3 uppercase tracking-wider mb-0.5">Strategy & Modeling</h5>
                    <p className="text-[12.5px] text-t-4 font-light leading-relaxed">
                      {activePillar.strategy}
                    </p>
                  </div>
                </div>

                {/* Vertical Connector Line */}
                <div className="h-5 w-[1.5px] bg-gradient-to-b from-brand-gl to-[#14231E] ml-4 opacity-50" />

                {/* Execution Step */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[#092218] border border-brand-gl/40 text-brand-gl text-xs font-bold font-syne select-none group-hover:bg-brand-gd group-hover:text-white transition-colors duration-300">
                    B
                  </div>
                  <div>
                    <h5 className="text-[12px] font-bold text-brand-gl uppercase tracking-wider mb-0.5">Physical Execution</h5>
                    <p className="text-[12.5px] text-t-4 font-light leading-relaxed">
                      {activePillar.execution}
                    </p>
                  </div>
                </div>

                {/* Converter Metric Panel */}
                <div className="mt-4 pt-4 border-t border-[#1C2C26] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] uppercase font-bold text-t-3 tracking-wider mb-0.5">
                      {activePillar.metricLabel}
                    </div>
                    <div className="font-syne text-[15px] font-extrabold text-[#5DCAA5]">
                      {activePillar.metric}
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full border-2 border-brand-g/20 flex items-center justify-center text-[10px] text-brand-gl font-bold bg-[#14231E]/40 animate-pulse-slow">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE VISUAL CORE HUB */}
          <div className="lg:col-span-7 w-full flex items-center justify-center overflow-visible mt-8 lg:mt-0">
            <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none scale-[0.85] xs:scale-[0.95] sm:scale-100 origin-center transition-all duration-300">
              
              {/* Dynamic Connecting Lines SVG Canvas */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Central Hub Glowing Radial Shading */}
                  <radialGradient id="hub-shading" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#5DCAA5" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#1C2E27" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0B1612" stopOpacity="1" />
                  </radialGradient>
                </defs>

                {/* Base SVG Lines connecting Orbit Nodes to Central Hub */}
                {HUB_PILLARS.map((pillar) => {
                  const angleRad = (pillar.angle * Math.PI) / 180;
                  const x = 250 + 170 * Math.cos(angleRad);
                  const y = 250 + 170 * Math.sin(angleRad);
                  const isActive = activeId === pillar.id;

                  return (
                    <g key={`line-group-${pillar.id}`}>
                      {/* Connection line background wire */}
                      <line
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke={pillar.lineColor}
                        strokeWidth={isActive ? "2" : "0.75"}
                        opacity={isActive ? 0.8 : 0.15}
                        className="transition-all duration-300"
                      />
                      
                      {/* Animating energy flow particle dash */}
                      <line
                        x1="250"
                        y1="250"
                        x2={x}
                        y2={y}
                        stroke={pillar.lineColor}
                        strokeWidth={isActive ? "2.5" : "1.5"}
                        strokeDasharray="8 6"
                        className="energy-flow-line transition-all duration-300"
                        opacity={isActive ? 0.95 : 0.45}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* CENTER HUB PIECE */}
              <div 
                className="absolute z-20 w-28 h-28 rounded-full flex flex-col items-center justify-center border border-brand-g/40 bg-[#0E1613] shadow-[0_0_30px_rgba(29,158,117,0.3)] transition-transform duration-500 scale-100 hover:scale-105"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                {/* Concentric rotating dash ring */}
                <div className="absolute inset-[-6px] rounded-full border border-dashed border-brand-gl/20 animate-spin" style={{ animationDuration: "25s" }} />
                <div className="absolute inset-[-12px] rounded-full border border-dotted border-brand-g/10 animate-spin" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
                
                {/* Dynamic Inner glowing core */}
                <div className="w-10 h-10 rounded-full bg-brand-g/10 flex items-center justify-center shadow-[inset_0_0_15px_rgba(93,202,165,0.4)] animate-pulse">
                  <span className="text-white text-xs font-bold">SX</span>
                </div>
                
                <span className="font-syne text-[9px] font-extrabold tracking-[0.18em] text-brand-gl uppercase mt-2 select-none">
                  Hub
                </span>
              </div>

              {/* INTERACTIVE ORBITING NODE CARDS */}
              {HUB_PILLARS.map((pillar) => {
                const angleRad = (pillar.angle * Math.PI) / 180;
                const x = 250 + 170 * Math.cos(angleRad);
                const y = 250 + 170 * Math.sin(angleRad);
                
                // Position percentages
                const leftPct = (x / 500) * 100;
                const topPct = (y / 500) * 100;

                const isActive = activeId === pillar.id;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onMouseEnter={() => setActiveId(pillar.id)}
                    onClick={() => setActiveId(pillar.id)}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: isActive ? 30 : 10
                    }}
                    className={`absolute flex items-center gap-2.5 px-3.5 py-2 rounded-xl border transition-all duration-300 backdrop-blur-md cursor-pointer select-none text-white whitespace-nowrap text-[11px] font-bold ${
                      isActive
                        ? "bg-[#102019] border-[#29A075] shadow-[0_0_20px_rgba(29,158,117,0.4)] scale-110 opacity-100"
                        : "bg-[#09100E]/90 border-[#1A2E26] hover:border-brand-g hover:bg-[#0E1B16]/90 opacity-80"
                    }`}
                  >
                    {/* Glowing color dot indicator */}
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color} shrink-0`} />
                    <span className="text-[13px]">{pillar.icon}</span>
                    <span className="font-syne tracking-wide text-t-DEFAULT">{pillar.label}</span>
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
