"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";

const features = [
  {
    title: "Predictive Analytics",
    desc: "Forecast energy trends & ESG risks before they happen with TensorFlow engines.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-none stroke-brand-g stroke-[2.2]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Smart Recommendations",
    desc: "AI-suggested grid routing and optimal clean energy diversion algorithms.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-none stroke-brand-g stroke-[2.2]">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M5 12H1m22 0h-4" />
      </svg>
    ),
  },
  {
    title: "Automated ESG Reports",
    desc: "Seamlessly generate compliance documents detailing Scope 1, 2, and 3 emissions.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-none stroke-brand-g stroke-[2.2]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: "Real-time Monitoring",
    desc: "Live KPI tracking of grid loads, carbon offsets, and infrastructure diagnostics.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-none stroke-brand-g stroke-[2.2]">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export const AISection: React.FC = () => {
  const [gridOutput, setGridOutput] = useState(412.8);
  const [co2Saved, setCo2Saved] = useState(1842.6);

  // Simple live numbers updater to make the dashboard feel active and real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setGridOutput((prev) => {
        const change = (Math.random() - 0.5) * 5;
        return parseFloat(Math.max(380, Math.min(450, prev + change)).toFixed(1));
      });
      setCo2Saved((prev) => {
        const change = Math.random() * 0.1;
        return parseFloat((prev + change).toFixed(1));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F8FAF9] text-t-DEFAULT py-24 relative overflow-hidden border-t border-b border-bdr-DEFAULT" id="ai">
      
      {/* Dynamic Keyframe Animations Embedded */}
      <style jsx global>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes floatCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        .energy-flow-line {
          stroke-dasharray: 6 4;
          animation: flow 1.2s linear infinite;
        }
        .energy-flow-line-slow {
          stroke-dasharray: 8 5;
          animation: flow 2s linear infinite;
        }
        .floating-card-1 {
          animation: floatCard 6s ease-in-out infinite;
        }
        .floating-card-2 {
          animation: floatCard 6s 2s ease-in-out infinite;
        }
        .floating-card-3 {
          animation: floatCard 6s 4s ease-in-out infinite;
        }
        .pulse-node {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.1)_0%,transparent_65%)]" />
        <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_65%)]" />
      </div>

      <div className="container relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-center">
          
          {/* LEFT: TEXT AND SPECS (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-[7px] self-start px-3.5 py-[5px] border border-brand-g/20 rounded-full text-xs font-semibold text-brand-g bg-brand-gxl tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-g animate-pulse" />
              AI Framework
            </div>
            
            <h2 className="font-syne text-[32px] sm:text-[4vw] md:text-[42px] font-extrabold leading-[1.1] tracking-[-0.030em] text-t-DEFAULT mb-5">
              AI-powered <span className="text-brand-g">sustainability</span> intelligence.
            </h2>
            
            <p className="text-[16px] text-t-2 font-light leading-relaxed mb-8">
              Our advanced AI engine integrates live telemetry, weather forecast vectors, and grid requirements to automate carbon accounting, predict solar/wind output, and balance EV fleet load distributions.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-bdr-DEFAULT rounded-2xl shadow-[0_4px_12px_rgba(11,22,18,0.02)] hover:border-brand-gl transition-colors duration-250"
                >
                  <h4 className="text-[14px] font-bold text-t-DEFAULT mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-brand-g/10 flex items-center justify-center text-brand-g">
                      {feat.icon}
                    </span>
                    {feat.title}
                  </h4>
                  <p className="text-[11.5px] text-t-3 leading-normal">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-[12px] text-t-3 mb-6 flex items-center gap-2">
              <span className="font-bold text-t-2">Tech stack:</span>
              <span>Python · TensorFlow · PyTorch · OpenAI API · React · Node.js</span>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button variant="primary" href="#contact">
                Deploy AI Platform
              </Button>
              <Button variant="outline" href="#features">
                Explore Analytics
              </Button>
            </div>
          </div>

          {/* RIGHT: PREMIUM ANIMATED VISUAL PANEL (7 Columns) */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            
            {/* Visual Glassmorphic Wrapper */}
            <div className="w-full max-w-[620px] bg-white/40 backdrop-blur-[12px] border border-white/80 rounded-[28px] p-6 shadow-[0_20px_50px_rgba(11,22,18,0.05)] relative overflow-hidden">
              
              {/* SVG Clean-Energy Ecosystem */}
              <svg
                viewBox="0 0 600 420"
                className="w-full h-auto drop-shadow-[0_4px_16px_rgba(11,22,18,0.01)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Defs / Gradients */}
                <defs>
                  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EEF4F1" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="solarGlass" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#1E40AF" />
                  </linearGradient>
                  <linearGradient id="windTower" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#E2ECE9" />
                    <stop offset="100%" stopColor="#BCE2D5" />
                  </linearGradient>
                  <linearGradient id="analytLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                  <linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Base canvas card background */}
                <rect width="600" height="420" rx="20" fill="url(#sky)" />

                {/* Technical background grids */}
                <g stroke="#E2EDE8" strokeWidth="0.75" strokeDasharray="4 4">
                  <line x1="0" y1="80" x2="600" y2="80" />
                  <line x1="0" y1="160" x2="600" y2="160" />
                  <line x1="0" y1="240" x2="600" y2="240" />
                  <line x1="0" y1="320" x2="600" y2="320" />
                  <line x1="120" y1="0" x2="120" y2="420" />
                  <line x1="240" y1="0" x2="240" y2="420" />
                  <line x1="360" y1="0" x2="360" y2="420" />
                  <line x1="480" y1="0" x2="480" y2="420" />
                </g>

                {/* Hills / Landscape */}
                <path
                  d="M-50 360 C120 300 240 370 380 320 C480 280 550 310 650 280 L650 450 L-50 450 Z"
                  fill="#EAF5F0"
                  opacity="0.8"
                />
                <path
                  d="M-50 380 C180 340 290 395 440 350 C540 320 580 340 650 320 L650 450 L-50 450 Z"
                  fill="#DDF2E7"
                  opacity="0.6"
                />

                {/* --- RENEWABLE INFRASTRUCTURE --- */}

                {/* Wind Turbine Left (Large, Animated) */}
                <g transform="translate(160, 200)">
                  {/* Tower shadow */}
                  <path d="M-5,160 L5,160 L2,0 L-2,0 Z" fill="#C5DCD4" opacity="0.5" />
                  {/* Tower */}
                  <path d="M-4,160 L4,160 L1.5,0 L-1.5,0 Z" fill="url(#windTower)" />
                  {/* Nacelle */}
                  <rect x="-6" y="-6" width="12" height="10" rx="3" fill="#0F6E56" />
                  {/* Rotor/Blades */}
                  <g className="animate-spin" style={{ transformOrigin: "0px 0px", animationDuration: "9s" }}>
                    <path d="M0,0 L0,-90 L5,-90 L2,-15 Z" fill="#ffffff" stroke="#0F6E56" strokeWidth="0.5" />
                    <path d="M0,0 L77.9,45 L80.4,40.7 L13,7.5 Z" fill="#ffffff" stroke="#0F6E56" strokeWidth="0.5" />
                    <path d="M0,0 L-77.9,45 L-80.4,40.7 L-13,7.5 Z" fill="#ffffff" stroke="#0F6E56" strokeWidth="0.5" />
                    <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#0F6E56" strokeWidth="1" />
                  </g>
                </g>

                {/* Wind Turbine Right (Smaller, Animated) */}
                <g transform="translate(340, 240)">
                  <path d="M-3,120 L3,120 L1,0 L-1,0 Z" fill="url(#windTower)" />
                  <rect x="-4.5" y="-4.5" width="9" height="8" rx="2.5" fill="#0F6E56" />
                  <g className="animate-spin" style={{ transformOrigin: "0px 0px", animationDuration: "14s" }}>
                    <path d="M0,0 L0,-65 L3.5,-65 L1.5,-10 Z" fill="#ffffff" stroke="#0F6E56" strokeWidth="0.5" />
                    <path d="M0,0 L56.3,32.5 L58.3,29 L9.4,5 Z" fill="#ffffff" stroke="#0F6E56" strokeWidth="0.5" />
                    <path d="M0,0 L-56.3,32.5 L-58.3,29 L-9.4,5 Z" fill="#ffffff" stroke="#0F6E56" strokeWidth="0.5" />
                    <circle cx="0" cy="0" r="3" fill="#ffffff" stroke="#0F6E56" strokeWidth="1" />
                  </g>
                </g>

                {/* Solar Panel Farm (Bottom Left) */}
                <g transform="translate(40, 310)">
                  {/* Base structure line */}
                  <line x1="0" y1="50" x2="110" y2="50" stroke="#0F6E56" strokeWidth="2.5" />
                  
                  {/* Panel Array 1 */}
                  <polygon points="10,50 45,50 35,20 15,20" fill="url(#solarGlass)" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="20" y1="20" x2="23" y2="50" stroke="#93C5FD" strokeWidth="0.75" />
                  <line x1="30" y1="20" x2="35" y2="50" stroke="#93C5FD" strokeWidth="0.75" />
                  <line x1="15" y1="35" x2="40" y2="35" stroke="#93C5FD" strokeWidth="0.75" />

                  {/* Panel Array 2 */}
                  <polygon points="55,50 95,50 85,20 60,20" fill="url(#solarGlass)" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="68" y1="20" x2="70" y2="50" stroke="#93C5FD" strokeWidth="0.75" />
                  <line x1="78" y1="20" x2="82" y2="50" stroke="#93C5FD" strokeWidth="0.75" />
                  <line x1="60" y1="35" x2="92" y2="35" stroke="#93C5FD" strokeWidth="0.75" />
                </g>

                {/* EV Charging Station (Bottom Right) */}
                <g transform="translate(480, 270)">
                  {/* Foundation */}
                  <line x1="-10" y1="90" x2="80" y2="90" stroke="#0F6E56" strokeWidth="2.5" />
                  {/* Charger Stand */}
                  <rect x="15" y="30" width="34" height="60" rx="7" fill="#1C2E27" stroke="#5DCAA5" strokeWidth="2" />
                  {/* Charger Screen */}
                  <rect x="21" y="38" width="22" height="18" rx="2" fill="#5DCAA5" opacity="0.15" />
                  {/* Glowing bolt */}
                  <path d="M30,50 L33,43 L30,43 L33,39" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Charging cord */}
                  <path d="M49,55 C62,55 62,80 50,80" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeDasharray="3 2" />
                  {/* EV Car silhouette outline */}
                  <path d="M70,90 L60,82 C55,82 50,85 46,90" stroke="#0F6E56" strokeWidth="1.5" />
                  {/* Pulsing ring around connector */}
                  <circle cx="49" cy="55" r="8" stroke="#10B981" strokeWidth="1.5" className="pulse-node" style={{ transformOrigin: "49px 55px" }} />
                </g>

                {/* --- AI DIGITAL NETWORK FLOWS (Laser current paths) --- */}
                <g opacity="0.85">
                  {/* Connections: Solar Panel (90,335) -> AI Central Hub (300, 210) */}
                  <path d="M90,335 Q180,310 300,210" fill="none" stroke="#60A5FA" strokeWidth="2" className="energy-flow-line" />
                  
                  {/* Connections: Wind Turbine 1 (160,200) -> AI Central Hub (300, 210) */}
                  <path d="M160,200 Q220,180 300,210" fill="none" stroke="#34D399" strokeWidth="2" className="energy-flow-line" />

                  {/* Connections: Wind Turbine 2 (340,240) -> AI Central Hub (300, 210) */}
                  <path d="M340,240 Q310,225 300,210" fill="none" stroke="#34D399" strokeWidth="2" className="energy-flow-line-slow" />

                  {/* Connections: AI Central Hub (300, 210) -> EV Charger Hub (495, 300) */}
                  <path d="M300,210 Q400,230 495,300" fill="none" stroke="#10B981" strokeWidth="2" className="energy-flow-line" />

                  {/* Connections: AI Central Hub (300, 210) -> Smart City Building Node (430, 110) */}
                  <path d="M300,210 Q350,140 430,110" fill="none" stroke="#60A5FA" strokeWidth="2.5" className="energy-flow-line" />

                  {/* Main AI Centralizing Hub Node */}
                  <circle cx="300" cy="210" r="14" fill="#1D9E75" />
                  <circle cx="300" cy="210" r="22" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="3 3" className="animate-spin" style={{ transformOrigin: "300px 210px", animationDuration: "12s" }} />
                  <circle cx="300" cy="210" r="9" fill="#ffffff" />
                  {/* Core hub inner dot */}
                  <circle cx="300" cy="210" r="4.5" fill="#1D9E75" />
                </g>

                {/* City Skyscrapers Node (Top Right Background) */}
                <g transform="translate(420, 80)">
                  <rect x="0" y="20" width="24" height="60" rx="3" fill="#BCE2D5" opacity="0.4" />
                  <rect x="18" y="40" width="20" height="40" rx="2" fill="#C5DCD4" opacity="0.5" />
                  <rect x="8" y="0" width="18" height="80" rx="3" fill="#9FE1CB" opacity="0.6" stroke="#0F6E56" strokeWidth="1" />
                  {/* Solar panel roof */}
                  <line x1="7" y1="0" x2="27" y2="0" stroke="#3B82F6" strokeWidth="3" />
                  {/* AI City Node receptor */}
                  <circle cx="17" cy="30" r="6" stroke="#3B82F6" strokeWidth="1" className="pulse-node" style={{ transformOrigin: "17px 30px" }} />
                </g>

                {/* --- REAL-TIME PERFORMANCE CHART (SVG OVERLAY GRAPH) --- */}
                <g transform="translate(0, 20)">
                  {/* Graph Line Shadow / Area */}
                  <path
                    d="M 50,110 C 130,50 200,160 300,120 C 400,80 470,150 550,70 L 550,180 L 50,180 Z"
                    fill="url(#graphFill)"
                  />
                  {/* Glow Graph path line */}
                  <path
                    d="M 50,110 C 130,50 200,160 300,120 C 400,80 470,150 550,70"
                    fill="none"
                    stroke="url(#analytLine)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Data Point indicator nodes */}
                  <circle cx="165" cy="115" r="4.5" fill="#3B82F6" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="300" cy="120" r="5" fill="#10B981" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="435" cy="98" r="4.5" fill="#10B981" stroke="#ffffff" strokeWidth="1.5" />
                </g>

                {/* Live Status indicator */}
                <g transform="translate(30, 25)">
                  <rect width="90" height="24" rx="12" fill="#1D9E75" />
                  <circle cx="15" cy="12" r="4.5" fill="#ffffff" className="pulse-node" style={{ transformOrigin: "15px 12px" }} />
                  <text x="28" y="16" fill="#ffffff" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">AI LOADED</text>
                </g>
              </svg>

              {/* --- FLOATING METRIC OVERLAYS --- */}

              {/* Card 1: ESG Analytics (Top Right, floating) */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-[130px] sm:w-[160px] bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-2.5 sm:p-3.5 shadow-lg floating-card-1 select-none">
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10.5px] text-t-3 font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-g" />
                  ESG Monitoring
                </div>
                <div className="font-syne font-extrabold text-[16px] sm:text-[20px] text-brand-g mt-1">
                  94.2%
                </div>
                <p className="text-[8px] sm:text-[10px] text-t-3 mt-0.5">Scope 1–3 Offset Active</p>
              </div>

              {/* Card 2: Live Grid capacity (Bottom Left, floating) */}
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-[140px] sm:w-[180px] bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-2.5 sm:p-3.5 shadow-lg floating-card-2 select-none">
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10.5px] text-t-3 font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Live Grid Load
                </div>
                <div className="font-syne font-extrabold text-[14px] sm:text-[18px] text-t-DEFAULT mt-1">
                  {gridOutput} kW
                </div>
                <div className="flex items-center justify-between mt-1 text-[8px] sm:text-[9.5px] font-semibold">
                  <span className="text-brand-gd bg-brand-gxl px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded-md">Optimal</span>
                  <span className="text-t-3">{co2Saved}t CO₂ Red</span>
                </div>
              </div>

              {/* Card 3: AI Smart Decision Alert (Middle Right, floating) */}
              <div className="hidden sm:block absolute top-[48%] right-6 w-[170px] bg-white/85 backdrop-blur-md border border-white/90 rounded-xl p-3 shadow-md floating-card-3 text-[10.5px] select-none">
                <div className="flex items-center gap-1.5 font-bold text-brand-gd">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  Load Balanced
                </div>
                <p className="text-[9.5px] text-t-3 mt-1 leading-snug">
                  AI rerouted 45 kW solar surplus to EV Charging Hub 3.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISection;
