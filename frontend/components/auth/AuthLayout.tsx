"use client";

import React from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  customVisual?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  customVisual,
}) => {
  return (
    <div className="min-h-screen w-full flex bg-[#F8FAF9] font-sans antialiased text-t-DEFAULT">
      {/* LEFT COLUMN: AUTH FORM */}
      <div className="w-full lg:w-[48%] xl:w-[45%] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-white border-r border-bdr-DEFAULT z-10">
        {/* Logo Header */}
        <header className="mb-8">
          <Link href="/" className="flex items-center gap-2.5 inline-block">
            <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center border border-bdr-2 bg-white flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="GlobalPact SustainX Logo"
                className="w-full h-full object-cover scale-[1.05]"
              />
            </div>
            <div>
              <div className="font-syne text-[17px] font-bold text-t-DEFAULT tracking-tight leading-none">
                GlobalPact <span className="text-brand-g">SustainX</span>
              </div>
              <div className="text-[10px] text-t-3 tracking-wide mt-1">
                Centre of Excellence
              </div>
            </div>
          </Link>
        </header>

        {/* Form Body */}
        <div className="flex-1 flex flex-col justify-center max-w-[420px] w-full mx-auto py-4">
          <div className="mb-6">
            <h1 className="font-syne font-bold text-[28px] text-t-DEFAULT leading-tight tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-[14px] text-t-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {children}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-[12px] text-t-3">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <span>© 2026 GlobalPact SustainX.</span>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-brand-g transition-colors">
                Privacy
              </Link>
              <span className="text-bdr-DEFAULT">•</span>
              <Link href="#" className="hover:text-brand-g transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* RIGHT COLUMN: RENEWABLE ENERGY & AI DASHBOARD GRAPHICS (Desktop Only) */}
      <div className="hidden lg:flex lg:w-[52%] xl:w-[55%] relative overflow-hidden bg-gradient-to-br from-[#E8F4F0] via-[#EAF1F5] to-[#F1F6F2] items-center justify-center p-12">
        {/* Soft Decorative Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gxl/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[130px]" />

        {customVisual ? (
          customVisual
        ) : (
          /* Dashboard/Illustration Container */
          <div className="w-full max-w-[580px] flex flex-col gap-6 relative z-10">
            
            {/* Main Visual: Detailed Smart energy / Sustainability illustration in Glassmorphic Container */}
            <div className="bg-white/40 backdrop-blur-[16px] border border-white/60 rounded-[24px] p-6 shadow-[0_20px_50px_rgba(11,22,18,0.06)] relative overflow-hidden">
              
              {/* SVG Clean-Energy & Grid Visualization */}
              <svg
                viewBox="0 0 500 320"
                className="w-full h-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Sky background / grid */}
                <defs>
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F0F7F4" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#EAF1EE" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5DCAA5" />
                    <stop offset="100%" stopColor="#1D9E75" />
                  </linearGradient>
                  <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>

                <rect width="500" height="320" rx="16" fill="url(#skyGrad)" />
                
                {/* Technical Grid lines */}
                <g stroke="#D0E8DE" strokeWidth="0.5" strokeDasharray="3 3">
                  <line x1="0" y1="60" x2="500" y2="60" />
                  <line x1="0" y1="120" x2="500" y2="120" />
                  <line x1="0" y1="180" x2="500" y2="180" />
                  <line x1="0" y1="240" x2="500" y2="240" />
                  <line x1="100" y1="0" x2="100" y2="320" />
                  <line x1="200" y1="0" x2="200" y2="320" />
                  <line x1="300" y1="0" x2="300" y2="320" />
                  <line x1="400" y1="0" x2="400" y2="320" />
                </g>

                {/* Mountains/Hills outline in background */}
                <path
                  d="M-20 280 L80 230 L180 270 L340 210 L480 260 L520 240 L520 340 L-20 340 Z"
                  fill="#E1F5EE"
                  opacity="0.8"
                />
                <path
                  d="M-20 295 L140 250 L280 285 L410 230 L520 275 L520 340 L-20 340 Z"
                  fill="#D2ECE1"
                  opacity="0.6"
                />

                {/* Solar Farm Array (Bottom Left) */}
                <g transform="translate(60, 240)">
                  {/* Panel 1 */}
                  <polygon points="10,40 50,40 40,10 15,10" fill="#3B82F6" opacity="0.9" stroke="#1D4ED8" strokeWidth="1.5" />
                  <line x1="25" y1="10" x2="30" y2="40" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="37" y1="10" x2="40" y2="40" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="15" y1="10" x2="10" y2="40" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="15" y1="25" x2="45" y2="25" stroke="#1D4ED8" strokeWidth="1" />
                  
                  {/* Panel 2 */}
                  <polygon points="60,40 100,40 90,10 65,10" fill="#3B82F6" opacity="0.9" stroke="#1D4ED8" strokeWidth="1.5" />
                  <line x1="75" y1="10" x2="80" y2="40" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="87" y1="10" x2="90" y2="40" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="65" y1="10" x2="60" y2="40" stroke="#1D4ED8" strokeWidth="1" />
                  <line x1="65" y1="25" x2="95" y2="25" stroke="#1D4ED8" strokeWidth="1" />

                  {/* Ground foundation lines */}
                  <line x1="0" y1="40" x2="110" y2="40" stroke="#1D9E75" strokeWidth="2" />
                </g>

                {/* Wind Turbine 1 (Animated Floating Center) */}
                <g transform="translate(250, 100)" className="animate-float-1">
                  {/* Tower */}
                  <path d="M-4,130 L4,130 L2,0 L-2,0 Z" fill="#9FE1CB" />
                  {/* Nacelle */}
                  <rect x="-6" y="-6" width="12" height="12" rx="4" fill="#1D9E75" />
                  {/* Rotor / Blades */}
                  <g className="animate-spin" style={{ transformOrigin: "0px 0px", animationDuration: "10s" }}>
                    <path d="M0,0 L0,-75 L6,-75 L3,-15 Z" fill="#ffffff" opacity="0.9" stroke="#1D9E75" strokeWidth="0.5" />
                    <path d="M0,0 L65,37.5 L68,31 L13,7.5 Z" fill="#ffffff" opacity="0.9" stroke="#1D9E75" strokeWidth="0.5" />
                    <path d="M0,0 L-65,37.5 L-68,31 L-13,7.5 Z" fill="#ffffff" opacity="0.9" stroke="#1D9E75" strokeWidth="0.5" />
                    <circle cx="0" cy="0" r="4" fill="#ffffff" />
                  </g>
                </g>

                {/* Wind Turbine 2 (Smaller, Right) */}
                <g transform="translate(360, 140)" className="animate-float-2">
                  {/* Tower */}
                  <path d="M-3,90 L3,90 L1.5,0 L-1.5,0 Z" fill="#9FE1CB" opacity="0.8" />
                  {/* Nacelle */}
                  <rect x="-4" y="-4" width="8" height="8" rx="3" fill="#1D9E75" opacity="0.8" />
                  {/* Rotor / Blades */}
                  <g className="animate-spin" style={{ transformOrigin: "0px 0px", animationDuration: "14s" }}>
                    <path d="M0,0 L0,-50 L4,-50 L2,-10 Z" fill="#ffffff" opacity="0.8" stroke="#1D9E75" strokeWidth="0.5" />
                    <path d="M0,0 L43.3,25 L45.3,20.6 L8.6,5 Z" fill="#ffffff" opacity="0.8" stroke="#1D9E75" strokeWidth="0.5" />
                    <path d="M0,0 L-43.3,25 L-45.3,20.6 L-8.6,5 Z" fill="#ffffff" opacity="0.8" stroke="#1D9E75" strokeWidth="0.5" />
                    <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  </g>
                </g>

                {/* EV Charging Station Visual (Bottom Right) */}
                <g transform="translate(390, 230)">
                  {/* Station base */}
                  <rect x="10" y="20" width="30" height="50" rx="6" fill="#1D2E27" stroke="#5DCAA5" strokeWidth="1.5" />
                  <rect x="15" y="28" width="20" height="15" rx="3" fill="#5DCAA5" opacity="0.2" />
                  {/* EV green logo inside charger */}
                  <path d="M22,38 L25,32 L22,32 L25,29" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Cable & Plug */}
                  <path d="M40,35 C48,35 48,55 40,55" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeDasharray="2 1" />
                  {/* Platform */}
                  <line x1="0" y1="70" x2="60" y2="70" stroke="#1D9E75" strokeWidth="2" />
                </g>

                {/* AI Analytic Grid Overlay / Connecting Energy Nodes */}
                <g opacity="0.8">
                  {/* Animated Pulsing target circles */}
                  <circle cx="250" cy="100" r="16" stroke="#1D9E75" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse-slow" style={{ transformOrigin: "250px 100px" }} />
                  <circle cx="115" cy="255" r="12" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse-slow" style={{ transformOrigin: "115px 255px" }} />
                  <circle cx="410" cy="255" r="12" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="2 2" className="animate-pulse-slow" style={{ transformOrigin: "410px 255px" }} />

                  {/* Cyber-energy linking laser lines */}
                  <line x1="115" y1="255" x2="250" y2="100" stroke="#5DCAA5" strokeWidth="1" opacity="0.6" />
                  <line x1="250" y1="100" x2="410" y2="255" stroke="#5DCAA5" strokeWidth="1" opacity="0.6" />
                  <line x1="115" y1="255" x2="410" y2="255" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />

                  {/* Energy packet flow dots */}
                  <circle cx="182" cy="177" r="3" fill="#ffffff" stroke="#1D9E75" strokeWidth="1.5" />
                  <circle cx="330" cy="177" r="3" fill="#ffffff" stroke="#5DCAA5" strokeWidth="1.5" />
                </g>

                {/* Analytic Floating energy graph line */}
                <path
                  d="M50 130 Q120 70 200 120 T350 90 T450 60"
                  fill="none"
                  stroke="url(#blueGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M50 130 Q120 70 200 120 T350 90 T450 60 L450 320 L50 320 Z"
                  fill="url(#skyGrad)"
                  opacity="0.15"
                />

                {/* Live Status Label tag */}
                <g transform="translate(30, 25)">
                  <rect width="90" height="24" rx="12" fill="#1D9E75" />
                  <circle cx="14" cy="12" r="4.5" fill="#ffffff" className="animate-pulse-slow" style={{ transformOrigin: "14px 12px" }} />
                  <text x="26" y="16" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">LIVE STATUS</text>
                </g>
              </svg>
            </div>

            {/* Floating Metric Card 1: AI Power Optimization */}
            <div className="bg-white/70 backdrop-blur-[12px] border border-white/80 rounded-[20px] p-5 shadow-[0_12px_32px_rgba(11,22,18,0.04)] flex items-center justify-between hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-brand-gxl flex items-center justify-center text-brand-g">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5.5 h-5.5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-[15px] text-t-DEFAULT">
                    Smart Grid Efficiency
                  </h3>
                  <p className="text-[12px] text-t-3">
                    AI Optimizing Grid Loads
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-syne font-bold text-[18px] text-brand-g">
                  +24.8%
                </div>
                <div className="text-[10px] text-brand-gd font-semibold bg-brand-gxl px-2 py-0.5 rounded-full inline-block mt-0.5">
                  Active
                </div>
              </div>
            </div>

            {/* Floating Metric Card 2: Micro-SaaS Analytics stats */}
            <div className="bg-white/70 backdrop-blur-[12px] border border-white/80 rounded-[20px] p-5 shadow-[0_12px_32px_rgba(11,22,18,0.04)] flex items-center justify-between hover:translate-y-[-2px] transition-transform duration-300">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5.5 h-5.5 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-syne font-bold text-[15px] text-t-DEFAULT">
                    Renewable Gen Capacity
                  </h3>
                  <p className="text-[12px] text-t-3">
                    Total Wind & Solar generated today
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-syne font-bold text-[18px] text-t-DEFAULT">
                  1,842.6 MWh
                </div>
                <div className="text-[10px] text-t-3 font-semibold mt-0.5">
                  Updated 1m ago
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
