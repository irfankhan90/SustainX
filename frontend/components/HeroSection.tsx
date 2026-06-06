"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Chip } from "./ui/Chip";

const ECOSYSTEM_PILLARS = [
  { 
    label: "Renewable Energy", 
    icon: "⚡", 
    desc: "Utility-scale solar, wind fleets & battery storage installations.",
    color: "text-brand-g",
    lineColor: "#1D9E75",
    bgColor: "bg-brand-gxl/30"
  },
  { 
    label: "Sustainability & ESG", 
    icon: "🌱", 
    desc: "Corporate decarbonization, CSRD compliance & Net-Zero modeling.",
    color: "text-emerald-500",
    lineColor: "#10B981",
    bgColor: "bg-emerald-50"
  },
  { 
    label: "AI-Powered Intelligence", 
    icon: "🤖", 
    desc: "Predictive grid analytics, load management & automated dispatch.",
    color: "text-purple-500",
    lineColor: "#8B5CF6",
    bgColor: "bg-purple-50"
  },
  { 
    label: "ESG Analytics", 
    icon: "📊", 
    desc: "Scope 1-3 carbon tracking & real-time metric scorecards.",
    color: "text-blue-500",
    lineColor: "#3B82F6",
    bgColor: "bg-blue-50"
  },
  { 
    label: "Strategic Advisory", 
    icon: "📋", 
    desc: "Energy transition roadmaps, policy navigation & green finance.",
    color: "text-amber-500",
    lineColor: "#F59E0B",
    bgColor: "bg-amber-50"
  },
  { 
    label: "Project Management", 
    icon: "📈", 
    desc: "Owner's engineering, PMC lifecycle monitoring & compliance.",
    color: "text-sky-500",
    lineColor: "#0EA5E9",
    bgColor: "bg-sky-50"
  },
  { 
    label: "EPC Solutions", 
    icon: "🏗️", 
    desc: "Direct field engineering, procurement, construction & grid hookup.",
    color: "text-rose-500",
    lineColor: "#F43F5E",
    bgColor: "bg-rose-50"
  },
  { 
    label: "Capacity Building", 
    icon: "🎓", 
    desc: "Executive intensives, site engineering training & certifications.",
    color: "text-teal-500",
    lineColor: "#14B8A6",
    bgColor: "bg-teal-50"
  },
];

export const HeroSection: React.FC = () => {
  // Real-time fluctuating carbon mitigation counts and energy metrics
  const [mitigatedTons, setMitigatedTons] = useState(428630.4);
  const [generatedMwh, setGeneratedMwh] = useState(871.65);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [theta, setTheta] = useState(0);

  // Smooth orbital animation loop
  useEffect(() => {
    let frameId: number;
    const updateOrbit = () => {
      setTheta((prev) => (prev + 0.0035) % (2 * Math.PI));
      frameId = requestAnimationFrame(updateOrbit);
    };
    frameId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Fluctuating real-time tickers
  useEffect(() => {
    const timer = setInterval(() => {
      setMitigatedTons((prev) => +(prev + 0.08).toFixed(2));
      setGeneratedMwh((prev) => +(prev + (Math.random() - 0.5) * 0.12).toFixed(2));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

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
              Knowledge. Intelligence. Execution. Impact.
            </Chip>
            
            <h1 className="anim-2 font-syne text-[36px] sm:text-[4.5vw] lg:text-[54px] font-extrabold leading-[1.12] tracking-[-0.035em] text-t-DEFAULT mb-6">
              Powering the <span className="bg-gradient-to-r from-brand-g to-brand-gd bg-clip-text text-transparent">Global Energy</span> Transition.
            </h1>
            
            <h2 className="anim-3 font-syne text-[15px] sm:text-[17px] font-bold text-brand-gd leading-relaxed mb-4 tracking-wide uppercase">
              A 360° Ecosystem for Renewable Energy, ESG Intelligence, AI-Powered Insights, Strategic Advisory, Project Management, EPC Solutions, and Capacity Building.
            </h2>
            
            <p className="anim-3 text-[15px] sm:text-[16px] text-t-2 leading-[1.65] font-normal max-w-[560px] mb-8">
              GlobalPact SustainX brings together technology, intelligence, sustainability, and execution to accelerate the global energy transition. We empower organizations, professionals, institutions, and industries through integrated solutions that drive measurable impact.
            </p>
            
            <div className="anim-4 flex items-center gap-4 flex-wrap mb-10">
              <Button variant="primary" size="lg" href="#about" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2">
                Explore Ecosystem Solutions
              </Button>
              <Button variant="outline" size="lg" href="#contact" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2">
                Partner With Us
              </Button>
            </div>
            
            {/* Trusted indicators */}
            <div className="anim-5 flex items-center gap-4">
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

          {/* RIGHT COLUMN: 3D ROTATING GLOBE & ORBITAL NODES */}
          <div className="lg:col-span-6 hidden md:block">
            <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none">
              
              {/* Outer Glow Ring back layer */}
              <div className="absolute w-[360px] h-[360px] rounded-full bg-emerald-500/5 border border-brand-g/10 animate-pulse-slow" />
              
              {/* Interactive SVG Canvas */}
              <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  {/* Globe Atmosphere Radial Shading */}
                  <radialGradient id="sphere-shading" cx="35%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                    <stop offset="60%" stopColor="rgba(29,158,117,0.03)" />
                    <stop offset="90%" stopColor="rgba(11,22,18,0.78)" />
                    <stop offset="100%" stopColor="rgba(6,12,10,0.96)" />
                  </radialGradient>

                  {/* Ring Border Glow */}
                  <linearGradient id="sphere-border-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5DCAA5" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#1D9E75" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0B1612" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Dotted grid pattern for ocean background */}
                  <pattern id="dot-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.75" fill="#5DCAA5" opacity="0.12" />
                  </pattern>

                  {/* Globe Map mask for clean clipping */}
                  <clipPath id="globe-clip">
                    <circle cx="200" cy="200" r="110" />
                  </clipPath>
                </defs>

                {/* Back-orbit Connection Lines (Renders behind the Globe) */}
                {ECOSYSTEM_PILLARS.map((pillar, idx) => {
                  const nodeAngle = theta + idx * ((2 * Math.PI) / 8);
                  const isFront = Math.sin(nodeAngle) > 0;
                  if (isFront) return null; // Draw back-lines first
                  
                  const x = 200 + 175 * Math.cos(nodeAngle);
                  const y = 200 + 65 * Math.sin(nodeAngle);

                  return (
                    <line
                      key={`back-line-${idx}`}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={pillar.lineColor}
                      strokeWidth={activeNode === idx ? "2.5" : "0.75"}
                      strokeDasharray="4 4"
                      className="energy-flow-line"
                      opacity={activeNode === idx ? 0.8 : 0.15}
                    />
                  );
                })}

                {/* Wireframe longitude / latitude grid (Globe Base) */}
                <g stroke="#1D9E75" strokeWidth="0.5" opacity="0.25" fill="none">
                  <circle cx="200" cy="200" r="110" />
                  <ellipse cx="200" cy="200" rx="80" ry="110" />
                  <ellipse cx="200" cy="200" rx="40" ry="110" />
                  <line x1="200" y1="90" x2="200" y2="310" />
                  <ellipse cx="200" cy="200" rx="110" ry="80" />
                  <ellipse cx="200" cy="200" rx="110" ry="40" />
                  <line x1="90" y1="200" x2="310" y2="200" />
                </g>

                {/* Dotted Sphere background base */}
                <circle cx="200" cy="200" r="110" fill="url(#dot-pattern)" />

                {/* CLIPPED ROTATING EARTH MAP GROUP */}
                <g clipPath="url(#globe-clip)">
                  <g className="globe-spin-g">
                    
                    {/* MAP COPY 1 */}
                    <g transform="translate(0, 0)">
                      {/* Stylized high-tech vector continents */}
                      {/* Americas */}
                      <path d="M 25,45 L 50,40 L 70,55 L 80,75 L 60,95 L 45,110 L 50,130 L 60,150 L 55,185 L 45,170 L 40,140 L 30,115 L 20,80 Z" fill="#1D9E75" opacity="0.3" stroke="#5DCAA5" strokeWidth="0.5" />
                      {/* Eurasia / Africa */}
                      <path d="M 140,50 L 160,40 L 200,35 L 240,40 L 260,60 L 250,80 L 270,95 L 255,110 L 220,120 L 200,140 L 190,165 L 180,180 L 170,170 L 160,135 L 150,115 L 140,90 Z" fill="#1D9E75" opacity="0.3" stroke="#5DCAA5" strokeWidth="0.5" />
                      {/* Australia */}
                      <path d="M 280,130 L 310,135 L 305,155 L 285,160 Z" fill="#1D9E75" opacity="0.3" stroke="#5DCAA5" strokeWidth="0.5" />

                      {/* Global Connectivity Network Arc Trails */}
                      <path d="M 75,70 Q 127,65 180,105" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="energy-flow-line" opacity="0.6" />
                      <path d="M 180,105 Q 197,90 215,100" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="energy-flow-line" opacity="0.6" />
                      <path d="M 215,100 Q 227,115 240,120" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="energy-flow-line" opacity="0.6" />

                      {/* Regional Pins (Pulsing nodes on map) */}
                      {/* USA (New York area) */}
                      <circle cx="75" cy="70" r="2.5" fill="#ffffff" />
                      <circle cx="75" cy="70" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "75px 70px" }} />
                      <text x="65" y="60" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">USA 🇺🇸</text>

                      {/* GCC (Doha) */}
                      <circle cx="180" cy="105" r="2.5" fill="#ffffff" />
                      <circle cx="180" cy="105" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "180px 105px" }} />
                      <text x="165" y="117" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">GCC 🌍</text>

                      {/* India (Mumbai/Delhi area) */}
                      <circle cx="215" cy="100" r="2.5" fill="#ffffff" />
                      <circle cx="215" cy="100" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "215px 100px" }} />
                      <text x="202" y="92" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">India 🇮🇳</text>

                      {/* Singapore */}
                      <circle cx="240" cy="120" r="2.5" fill="#ffffff" />
                      <circle cx="240" cy="120" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "240px 120px" }} />
                      <text x="235" y="132" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">Singapore 🇸🇬</text>
                    </g>

                    {/* MAP COPY 2 (Repeated for seamless slide) */}
                    <g transform="translate(400, 0)">
                      <path d="M 25,45 L 50,40 L 70,55 L 80,75 L 60,95 L 45,110 L 50,130 L 60,150 L 55,185 L 45,170 L 40,140 L 30,115 L 20,80 Z" fill="#1D9E75" opacity="0.3" stroke="#5DCAA5" strokeWidth="0.5" />
                      <path d="M 140,50 L 160,40 L 200,35 L 240,40 L 260,60 L 250,80 L 270,95 L 255,110 L 220,120 L 200,140 L 190,165 L 180,180 L 170,170 L 160,135 L 150,115 L 140,90 Z" fill="#1D9E75" opacity="0.3" stroke="#5DCAA5" strokeWidth="0.5" />
                      <path d="M 280,130 L 310,135 L 305,155 L 285,160 Z" fill="#1D9E75" opacity="0.3" stroke="#5DCAA5" strokeWidth="0.5" />

                      <path d="M 75,70 Q 127,65 180,105" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="energy-flow-line" opacity="0.6" />
                      <path d="M 180,105 Q 197,90 215,100" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="energy-flow-line" opacity="0.6" />
                      <path d="M 215,100 Q 227,115 240,120" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="energy-flow-line" opacity="0.6" />

                      <circle cx="75" cy="70" r="2.5" fill="#ffffff" />
                      <circle cx="75" cy="70" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "75px 70px" }} />
                      <text x="65" y="60" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">USA 🇺🇸</text>

                      <circle cx="180" cy="105" r="2.5" fill="#ffffff" />
                      <circle cx="180" cy="105" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "180px 105px" }} />
                      <text x="165" y="117" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">GCC 🌍</text>

                      <circle cx="215" cy="100" r="2.5" fill="#ffffff" />
                      <circle cx="215" cy="100" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "215px 100px" }} />
                      <text x="202" y="92" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">India 🇮🇳</text>

                      <circle cx="240" cy="120" r="2.5" fill="#ffffff" />
                      <circle cx="240" cy="120" r="6" stroke="#5DCAA5" strokeWidth="1.2" fill="none" className="animate-ping" style={{ transformOrigin: "240px 120px" }} />
                      <text x="235" y="132" fill="#E0E8E4" fontSize="6" fontWeight="bold" className="font-syne">Singapore 🇸🇬</text>
                    </g>

                  </g>
                </g>

                {/* Spherical atmosphere shading overlay */}
                <circle cx="200" cy="200" r="110" fill="url(#sphere-shading)" pointer-events="none" />
                
                {/* Glowing Outer rim border */}
                <circle cx="200" cy="200" r="110" stroke="url(#sphere-border-glow)" strokeWidth="2" fill="none" pointer-events="none" />

                {/* Front-orbit Connection Lines (Renders on top of Globe) */}
                {ECOSYSTEM_PILLARS.map((pillar, idx) => {
                  const nodeAngle = theta + idx * ((2 * Math.PI) / 8);
                  const isFront = Math.sin(nodeAngle) > 0;
                  if (!isFront) return null; // Draw front-lines

                  const x = 200 + 175 * Math.cos(nodeAngle);
                  const y = 200 + 65 * Math.sin(nodeAngle);

                  return (
                    <line
                      key={`front-line-${idx}`}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke={pillar.lineColor}
                      strokeWidth={activeNode === idx ? "2.5" : "0.75"}
                      strokeDasharray="4 4"
                      className="energy-flow-line"
                      opacity={activeNode === idx ? 0.95 : 0.35}
                    />
                  );
                })}
              </svg>

              {/* HTML Orbiting Node Pill Cards Overlay */}
              {ECOSYSTEM_PILLARS.map((pillar, idx) => {
                // Calculate position along elliptical tilted path
                const nodeAngle = theta + idx * ((2 * Math.PI) / 8);
                const x = 200 + 175 * Math.cos(nodeAngle);
                const y = 200 + 65 * Math.sin(nodeAngle);
                
                // 3D parameters
                const isFront = Math.sin(nodeAngle) > 0;
                const scale = isFront ? 1.05 : 0.8;
                const opacity = isFront ? 1.0 : 0.55;
                
                // Map coordinates from 0-400 SVG box to percentage
                const leftPct = (x / 400) * 100;
                const topPct = (y / 400) * 100;

                const isActive = activeNode === idx;

                return (
                  <button
                    key={pillar.label}
                    type="button"
                    onMouseEnter={() => setActiveNode(idx)}
                    onMouseLeave={() => setActiveNode(null)}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                      transform: `translate(-50%, -50%) scale(${scale})`,
                      zIndex: isFront ? 30 : 5,
                      opacity: opacity,
                    }}
                    className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sh transition-all duration-300 backdrop-blur-md cursor-pointer select-none text-white whitespace-nowrap text-[11px] font-bold ${
                      isActive
                        ? "bg-[#14221D] border-brand-g shadow-[0_0_20px_rgba(29,158,117,0.45)] scale-110 opacity-100 z-40"
                        : "bg-[#0E1613]/90 border-[#1C2C26] hover:border-brand-g hover:bg-[#14221D]/90"
                    }`}
                  >
                    <span>{pillar.icon}</span>
                    <span className="font-syne tracking-wide">{pillar.label}</span>
                  </button>
                );
              })}

              {/* Real-time details glassmorphic card below centerpiece */}
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[85%] bg-[#0E1613]/95 border border-[#1C2C26] rounded-xl p-4 z-30 shadow-sh2 backdrop-blur-md">
                {activeNode !== null ? (
                  <div className="animate-fadeUp">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[14px]">{ECOSYSTEM_PILLARS[activeNode].icon}</span>
                      <h4 className="font-syne text-[11px] font-bold text-[#E0E8E4] uppercase tracking-wide">
                        {ECOSYSTEM_PILLARS[activeNode].label}
                      </h4>
                    </div>
                    <p className="text-[10px] text-[#A8C4BA] leading-normal font-light">
                      {ECOSYSTEM_PILLARS[activeNode].desc}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 text-left animate-fadeUp">
                    <div>
                      <div className="text-[8px] uppercase font-bold text-[#6B8C80] tracking-wider mb-0.5">Global Carbon Offsets</div>
                      <div className="font-syne text-[12.5px] font-extrabold text-[#E0E8E4]">
                        {mitigatedTons.toLocaleString()} Tons
                      </div>
                    </div>
                    <div>
                      <div className="text-[8px] uppercase font-bold text-[#6B8C80] tracking-wider mb-0.5">Active Smart Grid Yield</div>
                      <div className="font-syne text-[12.5px] font-extrabold text-[#5DCAA5]">
                        {generatedMwh.toLocaleString()} MWh
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: SUSTAINX 360° ECOSYSTEM PILLARS */}
        <div className="mt-24 border-t border-bdr-DEFAULT/50 pt-16 anim-5">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-brand-gxl text-brand-gd rounded-full text-[10px] font-bold uppercase tracking-widest">
              Platform Foundations
            </span>
            <h3 className="font-syne text-[24px] sm:text-[32px] font-extrabold text-t-DEFAULT mt-3 mb-4 tracking-tight">
              SustainX 360° Integrated Ecosystem
            </h3>
            <p className="text-[14px] sm:text-[15px] text-t-2 max-w-[620px] mx-auto font-light leading-relaxed">
              Bridging the gap between sustainability planning and field execution. Hover over or tap any pillar below to discover our comprehensive capability model.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOSYSTEM_PILLARS.map((pillar, index) => (
              <div
                key={pillar.label}
                onMouseEnter={() => setActiveNode(index)}
                onMouseLeave={() => setActiveNode(null)}
                className="group p-5 bg-white border border-bdr-DEFAULT rounded-2xl shadow-sh hover:border-brand-g hover:shadow-sh2 -translate-y-0 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${pillar.bgColor} flex items-center justify-center text-lg mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    {pillar.icon}
                  </div>
                  <h4 className="font-syne text-sm font-bold text-t-DEFAULT mb-2 group-hover:text-brand-gd transition-colors">
                    {pillar.label}
                  </h4>
                  <p className="text-[12px] text-t-2 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-brand-g opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn capabilities</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
