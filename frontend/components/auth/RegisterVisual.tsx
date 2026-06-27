"use client";

import React, { useState, useEffect } from "react";

export const RegisterVisual: React.FC = () => {
  const [chargingPercentage, setChargingPercentage] = useState(68);
  const [gridLoad, setGridLoad] = useState(1280);

  // Simulated live charging state & load variations to make the illustration feel active
  useEffect(() => {
    const interval = setInterval(() => {
      setChargingPercentage((prev) => (prev >= 100 ? 40 : prev + 1));
      setGridLoad((prev) => {
        const change = (Math.random() - 0.5) * 15;
        return Math.round(Math.max(1220, Math.min(1340, prev + change)));
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[580px] flex flex-col gap-6 relative z-10">
      
      {/* Embedded visual-specific CSS animations */}
      <style jsx global>{`
        @keyframes laserFlow {
          to {
            stroke-dashoffset: -30;
          }
        }
        @keyframes pulseGlowRing {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }
        @keyframes batteryGlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .laser-energy-path {
          stroke-dasharray: 8 6;
          animation: laserFlow 1s linear infinite;
        }
        .laser-energy-path-slow {
          stroke-dasharray: 10 7;
          animation: laserFlow 1.8s linear infinite;
        }
        .pulse-glow-ring {
          animation: pulseGlowRing 2s ease-in-out infinite;
        }
        .battery-glow {
          animation: batteryGlow 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Main visual glass container */}
      <div className="bg-white/40 backdrop-blur-[16px] border border-white/60 rounded-[24px] p-6 shadow-[0_20px_50px_rgba(11,22,18,0.06)] relative overflow-hidden">
        
        {/* SVG Smart Energy Ecosystem Grid */}
        <svg
          viewBox="0 0 500 320"
          className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="gridSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5FAF7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#E2EEEB" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="solarBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="greenLaserGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5DCAA5" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="blueLaserGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          <rect width="500" height="320" rx="16" fill="url(#gridSky)" />

          {/* Grid lines */}
          <g stroke="#CDE5DC" strokeWidth="0.5" strokeDasharray="4 4">
            <line x1="0" y1="60" x2="500" y2="60" />
            <line x1="0" y1="120" x2="500" y2="120" />
            <line x1="0" y1="180" x2="500" y2="180" />
            <line x1="0" y1="240" x2="500" y2="240" />
            <line x1="100" y1="0" x2="100" y2="320" />
            <line x1="200" y1="0" x2="200" y2="320" />
            <line x1="300" y1="0" x2="300" y2="320" />
            <line x1="400" y1="0" x2="400" y2="320" />
          </g>

          {/* Abstract mountains */}
          <path d="M-10 270 C80 230 160 280 260 240 C340 210 420 250 510 210 L510 340 L-10 340 Z" fill="#E2F3EC" opacity="0.75" />
          <path d="M-10 285 C90 255 210 295 320 260 C400 235 440 255 510 235 L510 340 L-10 340 Z" fill="#D6ECE1" opacity="0.6" />

          {/* --- SMART NODES & CONNECTORS --- */}

          {/* Connection Lines (Flowing laser currents) */}
          <g>
            {/* Wind turbine node -> Grid Hub */}
            <path d="M100,100 L250,170" stroke="url(#greenLaserGrad)" strokeWidth="2.5" className="laser-energy-path" />
            
            {/* Solar tracking array -> Grid Hub */}
            <path d="M110,250 L250,170" stroke="url(#blueLaserGrad)" strokeWidth="2" className="laser-energy-path" />

            {/* Grid Hub -> Enterprise Smart Building */}
            <path d="M250,170 L390,90" stroke="url(#blueLaserGrad)" strokeWidth="2.5" className="laser-energy-path" />

            {/* Grid Hub -> EV Fleet Station */}
            <path d="M250,170 L400,240" stroke="url(#greenLaserGrad)" strokeWidth="2.5" className="laser-energy-path-slow" />
          </g>

          {/* Node 1: Wind Generation (Top Left) */}
          <g transform="translate(100, 100)">
            <circle cx="0" cy="0" r="14" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="1.5" />
            {/* Wind icon vector */}
            <path d="M-6,-4 C-3,-4 -2,-6 0,-6 C2,-6 3,-4 5,-4 M-8,0 C-5,0 -4,-2 -2,-2 C0,-2 2,0 4,0 M-5,4 C-2,4 -1,2 1,2 C3,2 4,4 6,4" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="0" cy="0" r="22" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="2 2" className="pulse-glow-ring" style={{ transformOrigin: "0px 0px" }} />
          </g>

          {/* Node 2: Solar Tracking Arrays (Bottom Left) */}
          <g transform="translate(110, 250)">
            <circle cx="0" cy="0" r="14" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
            {/* Solar panels vector shape */}
            <polygon points="-7,5 7,5 5,-5 -5,-5" fill="url(#solarBlue)" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#ffffff" strokeWidth="0.75" />
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#ffffff" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="22" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" className="pulse-glow-ring" style={{ transformOrigin: "0px 0px" }} />
          </g>

          {/* Node 3: AI Grid Optimizer Central Hub (Center) */}
          <g transform="translate(250, 170)">
            <circle cx="0" cy="0" r="20" fill="#1D9E75" />
            <circle cx="0" cy="0" r="12" fill="#ffffff" />
            {/* Core optimization icon */}
            <circle cx="0" cy="0" r="5" fill="#1D9E75" />
            <path d="M0,-8 L0,-12 M0,8 L0,12 M-8,0 L-12,0 M8,0 L12,0" stroke="#1D9E75" strokeWidth="1.5" />
            {/* Rotating tracker outer ring */}
            <circle cx="0" cy="0" r="28" stroke="#1D9E75" strokeWidth="0.75" strokeDasharray="3 3" className="animate-spin" style={{ transformOrigin: "0px 0px", animationDuration: "12s" }} />
          </g>

          {/* Node 4: Enterprise Hub (Top Right) */}
          <g transform="translate(390, 90)">
            <circle cx="0" cy="0" r="16" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
            {/* Smart building shape */}
            <rect x="-6" y="-8" width="12" height="16" rx="1.5" fill="#3B82F6" />
            <rect x="-3" y="-5" width="2" height="2" fill="#ffffff" />
            <rect x="1" y="-5" width="2" height="2" fill="#ffffff" />
            <rect x="-3" y="-1" width="2" height="2" fill="#ffffff" />
            <rect x="1" y="-1" width="2" height="2" fill="#ffffff" />
            <circle cx="0" cy="0" r="24" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" className="pulse-glow-ring" style={{ transformOrigin: "0px 0px" }} />
          </g>

          {/* Node 5: EV Charging Fleet Depot (Bottom Right) */}
          <g transform="translate(400, 240)">
            <circle cx="0" cy="0" r="16" fill="#E1F5EE" stroke="#10B981" strokeWidth="1.5" />
            {/* Car/EV silhouette */}
            <path d="M-8,3 L-8,-1 C-8,-3 -6,-5 -4,-5 L4,-5 C6,-5 8,-3 8,-1 L8,3 Z" fill="#10B981" />
            <circle cx="-4" cy="5" r="2" fill="#10B981" />
            <circle cx="4" cy="5" r="2" fill="#10B981" />
            {/* Electric bolt */}
            <path d="M-1,-3 L1,-1 L-1,-1 L1,2" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
            <circle cx="0" cy="0" r="24" stroke="#10B981" strokeWidth="1" strokeDasharray="2 2" className="pulse-glow-ring" style={{ transformOrigin: "0px 0px" }} />
          </g>

          {/* Flow Particles */}
          <circle cx="160" cy="128" r="3" fill="#ffffff" stroke="#10B981" strokeWidth="1.5" />
          <circle cx="180" cy="210" r="3" fill="#ffffff" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="320" cy="130" r="3" fill="#ffffff" stroke="#3B82F6" strokeWidth="1.5" />
          <circle cx="325" cy="205" r="3" fill="#ffffff" stroke="#10B981" strokeWidth="1.5" />

          {/* Live Status indicator label */}
          <g transform="translate(30, 25)">
            <rect width="105" height="24" rx="12" fill="#1D9E75" />
            <circle cx="15" cy="12" r="4" fill="#ffffff" className="pulse-glow-ring" style={{ transformOrigin: "15px 12px" }} />
            <text x="26" y="16" fill="#ffffff" fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">SECURE PROT</text>
          </g>
        </svg>
      </div>

      {/* --- FLOATING METRIC CARDS --- */}

      {/* Card 1: Net-Zero Pathway tracker (Top Left, floating) */}
      <div className="absolute top-5 left-5 w-[190px] bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-4 shadow-lg select-none floating-card-1">
        <div className="flex items-center gap-1.5 text-[10.5px] text-t-3 font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-g" />
          Net-Zero Pathway
        </div>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="font-syne font-extrabold text-[22px] text-brand-g">On Track</span>
          <span className="text-[10px] text-t-3">84% Goal</span>
        </div>
        
        {/* Sparkline Graph */}
        <div className="h-6 w-full mt-2 flex items-end">
          <svg className="w-full h-full" viewBox="0 0 100 24" fill="none">
            <path
              d="M0,20 Q15,5 30,15 T60,8 T90,3 L100,20"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0,20 Q15,5 30,15 T60,8 T90,3 L100,20 L100,24 L0,24 Z"
              fill="#10B981"
              opacity="0.1"
            />
          </svg>
        </div>
        <p className="text-[9px] text-t-3 mt-1.5">CO₂ Offset: 84.2 tCO₂e/mo</p>
      </div>

      {/* Card 2: EV Fleet Status tracker (Bottom Right, floating) */}
      <div className="absolute bottom-6 right-6 w-[200px] bg-white/80 backdrop-blur-md border border-white/90 rounded-2xl p-4 shadow-lg select-none floating-card-2">
        <div className="flex items-center gap-1.5 text-[10.5px] text-t-3 font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Smart Fleet Hub
        </div>
        <div className="font-syne font-extrabold text-[18px] text-t-DEFAULT mt-1 flex items-center justify-between">
          <span>Charging Fleet</span>
          <span className="text-[14px] text-brand-g font-bold">{chargingPercentage}%</span>
        </div>
        
        {/* Custom Progress charger bar */}
        <div className="w-full bg-brand-gxl rounded-full h-2 mt-2 overflow-hidden">
          <div
            className="bg-brand-g h-full rounded-full transition-all duration-150"
            style={{ width: `${chargingPercentage}%` }}
          />
        </div>
        <p className="text-[9px] text-t-3 mt-1.5">24 Vehicles Active • Balanced Grid Load</p>
      </div>

      {/* Card 3: Live Load Diagnostics (Middle Left, floating) */}
      <div className="absolute top-[48%] left-6 w-[170px] bg-white/85 backdrop-blur-md border border-white/90 rounded-xl p-3 shadow-md select-none floating-card-3 text-[10.5px]">
        <div className="flex items-center gap-1.5 font-bold text-blue-600">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          Smart Grid Flow
        </div>
        <div className="font-syne font-extrabold text-[15px] text-t-DEFAULT mt-1">
          {gridLoad} kW
        </div>
        <p className="text-[9.5px] text-t-3 mt-0.5 leading-snug">
          Grid optimization active. Load fluctuations balanced.
        </p>
      </div>

    </div>
  );
};

export default RegisterVisual;
