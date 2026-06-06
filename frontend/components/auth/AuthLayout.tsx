"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  customVisual?: React.ReactNode;
}

// Background data particles generator
const Particles: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(12)].map((_, i) => {
        const size = Math.random() * 4 + 3;
        const left = Math.random() * 95;
        const delay = Math.random() * 12;
        const duration = Math.random() * 14 + 12;
        return (
          <div
            key={i}
            className="bg-drift-particle bg-[#5DCAA5]/25"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  customVisual,
}) => {
  return (
    <div className="min-h-screen w-full flex bg-[#F8FAF9] font-sans antialiased text-t-DEFAULT">
      
      {/* Inline styles for custom sun flare animation */}
      <style jsx global>{`
        @keyframes sunGlow {
          0%, 100% { opacity: 0.25; transform: scale(1) translate(0px, 0px); }
          50% { opacity: 0.5; transform: scale(1.1) translate(15px, -8px); }
        }
        .sun-glow-flare {
          animation: sunGlow 10s ease-in-out infinite;
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          30% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-sweep-effect {
          animation: shimmerSweep 8s ease-in-out infinite;
        }
      `}</style>

      {/* LEFT COLUMN: AUTH FORM (40% width on large screens) */}
      <div className="w-full lg:w-[40%] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-white border-r border-bdr-DEFAULT z-10">
        {/* Logo Header - Entrance Anim 1 (branding size increased 10-15%, gap & alignment optimized, unnecessary spacing removed) */}
        <header className="mb-5 anim-1">
          <Link href="/" className="inline-flex items-center gap-[14px]">
            <img
              src="/logo.jpg"
              alt="GlobalPact SustainX Logo"
              className="h-[64px] w-auto object-contain flex-shrink-0"
            />
            <div className="font-syne text-[20px] font-bold text-t-DEFAULT tracking-tight leading-none">
              GlobalPact <span className="text-brand-g">SustainX</span>
            </div>
          </Link>
        </header>

        {/* Form Body - Entrance Anim 2 */}
        <div className="flex-1 flex flex-col justify-center max-w-[420px] w-full mx-auto py-4 anim-2">
          <div className="mb-6">
            <h1 className="font-syne font-extrabold text-[32px] sm:text-[35px] text-t-DEFAULT leading-tight tracking-tight mb-2">
              {title}
            </h1>
            <p className="text-[14px] text-t-2 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {children}
        </div>

        {/* Footer - Entrance Anim 3 */}
        <footer className="mt-8 text-[12px] text-t-3 anim-3">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <span>© 2026 GlobalPact SustainX.</span>
            <div className="flex gap-3">
              <Link href="/privacy" className="hover:text-brand-g transition-colors">
                Privacy
              </Link>
              <span className="text-bdr-DEFAULT">•</span>
              <Link href="/terms" className="hover:text-brand-g transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* RIGHT COLUMN: IMMERSIVE SUSTAINABILITY SHOWCASE (60% width on large screens) */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden items-center justify-center p-12 bg-black">
        
        {/* Full-Height Background Realistic Image (Pristine, non-blurred clarity) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105 hover:scale-100" 
          style={{ backgroundImage: "url('/sustainability_hero.png')" }}
        />

        {/* Reduced dark overlays to increase image clarity and visibility of solar panels, wind turbines, EV charging station */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent z-0" />
        <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-black/25 via-black/5 to-transparent pointer-events-none z-0" />

        {/* Dynamic Sunlight Glow Flare */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-400/20 blur-[110px] mix-blend-screen pointer-events-none z-10 sun-glow-flare" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-gl/12 blur-[130px] mix-blend-screen pointer-events-none z-10" />

        {/* Sunlight reflection shimmer over solar panels (sweeping glint effect) */}
        <div className="absolute top-[50%] left-[15%] w-[220px] h-[110px] overflow-hidden pointer-events-none z-10 rotate-[-12deg] rounded-full">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full shimmer-sweep-effect" />
        </div>

        {/* Animated Digital Globe in the top-right area (subtle opacity reduced to 30%) */}
        <div className="absolute top-[2%] right-[-5%] w-[320px] h-[320px] z-10 opacity-30 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(93, 202, 165, 0.2)" strokeWidth="1" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#5DCAA5" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.35" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="#1D9E75" strokeWidth="1.2" opacity="0.5" />
            <ellipse rx="72" ry="24" cx="100" cy="100" fill="none" stroke="#5DCAA5" strokeWidth="0.8" opacity="0.5" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: "100px 100px" }} />
            <ellipse rx="72" ry="24" cx="100" cy="100" fill="none" stroke="#1D9E75" strokeWidth="1" opacity="0.6" className="animate-[spin_15s_linear_infinite_reverse]" style={{ transformOrigin: "100px 100px" }} />
            <ellipse rx="24" ry="72" cx="100" cy="100" fill="none" stroke="#5DCAA5" strokeWidth="0.8" opacity="0.5" className="animate-[spin_25s_linear_infinite]" style={{ transformOrigin: "100px 100px" }} />
            <ellipse rx="24" ry="72" cx="100" cy="100" fill="none" stroke="#1D9E75" strokeWidth="1" opacity="0.6" className="animate-[spin_18s_linear_infinite_reverse]" style={{ transformOrigin: "100px 100px" }} />
            <ellipse rx="72" ry="48" cx="100" cy="100" fill="none" stroke="#5DCAA5" strokeWidth="0.6" opacity="0.4" className="animate-[spin_30s_linear_infinite]" style={{ transformOrigin: "100px 100px" }} />
            <circle cx="100" cy="28" r="2.5" fill="#ffffff" opacity="0.9" className="animate-pulse" />
            <circle cx="100" cy="172" r="2.5" fill="#ffffff" opacity="0.9" className="animate-pulse" />
            <circle cx="28" cy="100" r="2.5" fill="#ffffff" opacity="0.9" className="animate-pulse" />
            <circle cx="172" cy="100" r="2.5" fill="#ffffff" opacity="0.9" className="animate-pulse" />
            <circle cx="50" cy="50" r="2" fill="#5DCAA5" opacity="0.8" />
            <circle cx="150" cy="150" r="2" fill="#5DCAA5" opacity="0.8" />
            <circle cx="150" cy="50" r="2" fill="#5DCAA5" opacity="0.8" />
            <circle cx="50" cy="150" r="2" fill="#5DCAA5" opacity="0.8" />
            <path d="M 50 50 Q 100 80 150 50" fill="none" stroke="#12D396" strokeWidth="0.8" className="globe-network-line" opacity="0.6" />
            <path d="M 50 150 Q 100 120 150 150" fill="none" stroke="#12D396" strokeWidth="0.8" className="globe-network-line" opacity="0.6" />
            <path d="M 50 50 Q 80 100 50 150" fill="none" stroke="#12D396" strokeWidth="0.8" className="globe-network-line" opacity="0.6" />
            <path d="M 150 50 Q 120 100 150 150" fill="none" stroke="#12D396" strokeWidth="0.8" className="globe-network-line" opacity="0.6" />
          </svg>
        </div>

        {/* Dynamic Energy Flow animation between Solar Panels and EV charger */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
          <path
            d="M 120 180 Q 220 210 420 250"
            fill="none"
            stroke="#5DCAA5"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            className="energy-flow-line"
            opacity="0.65"
          />
          <circle cx="120" cy="180" r="4" fill="#3B82F6" className="pulse-glow-effect" style={{ transformOrigin: "120px 180px" }} />
          <circle cx="420" cy="250" r="4" fill="#5DCAA5" className="pulse-glow-effect" style={{ transformOrigin: "420px 250px" }} />
        </svg>

        {/* Floating Data Particles */}
        <Particles />

        {customVisual ? (
          customVisual
        ) : (
          /* Cinematic Overlay Content Wrapper */
          <div className="w-full max-w-[620px] flex flex-col justify-between h-full relative z-20">
            
            {/* Top Row: Hero Header & Description */}
            <div className="anim-1 pt-6">
              {/* Reduced size slightly (from 34/40/45px to 28/34/38px) for better balance */}
              <h2 className="font-sans font-bold text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] tracking-tight text-[#0F2922] mb-4" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.4)" }}>
                Powering the <br />
                <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent font-bold">Global Energy</span> <br />
                <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent font-bold">Transition</span>
              </h2>

              {/* Premium Glassmorphic Container for the Subheadline for significant readability increase */}
              <div className="my-5 p-4 sm:p-5 rounded-2xl bg-[#041a13]/35 backdrop-blur-md border border-white/10 border-l-[4px] border-l-[#10B981] max-w-[500px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <p 
                  className="text-[14px] sm:text-[15px] text-white font-medium leading-relaxed"
                  style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)" }}
                >
                  AI-Powered Sustainability Ecosystem for Renewable Energy, ESG Intelligence, Strategic Advisory, Project Management, EPC Solutions, and Capacity Building.
                </p>
              </div>

              {/* 4 Feature Highlights Pills (Equal Width Grid, Better Spacing & Hover Effects) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 max-w-[500px] mb-8">
                {/* Pill 1: Renewable Energy */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-[11.5px] font-bold text-[#0F2922] tracking-wide hover:scale-[1.03] hover:border-brand-g/30 hover:shadow-md transition-all duration-200 cursor-pointer select-none">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#10B981] flex items-center justify-center text-white flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-current">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span>Renewable Energy</span>
                </div>

                {/* Pill 2: Sustainability Intelligence (Refined name) */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-[11.5px] font-bold text-[#0F2922] tracking-wide hover:scale-[1.03] hover:border-brand-g/30 hover:shadow-md transition-all duration-200 cursor-pointer select-none">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#1D9E75] flex items-center justify-center text-white flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 20 11 20z" />
                      <path d="M19 2c-2.26 4.33-5.27 7.14-8 8" />
                    </svg>
                  </div>
                  <span>Sustainability Intelligence</span>
                </div>

                {/* Pill 3: ESG Excellence */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-[11.5px] font-bold text-[#0F2922] tracking-wide hover:scale-[1.03] hover:border-brand-g/30 hover:shadow-md transition-all duration-200 cursor-pointer select-none">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#3B82F6] flex items-center justify-center text-white flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <span>ESG Excellence</span>
                </div>

                {/* Pill 4: AI-Powered Insights */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.05)] text-[11.5px] font-bold text-[#0F2922] tracking-wide hover:scale-[1.03] hover:border-brand-g/30 hover:shadow-md transition-all duration-200 cursor-pointer select-none">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#8B5CF6] flex items-center justify-center text-white flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  </div>
                  <span>AI-Powered Insights</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Premium Glassmorphic Cards (Refined to be cleaner and fully visible with lighter transparent background) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6">
              
              {/* Card 1: Clean Energy */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-5 shadow-[0_8px_32px_rgba(255,255,255,0.03)] hover:translate-y-[-6px] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_12px_24px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/12 flex items-center justify-center mb-4 border border-white/10">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#10B981] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                    <rect x="3" y="10" width="18" height="11" rx="2" />
                    <path d="M12 10v11M3 15h18M9 10l3 5 3-5M9 21l3-6 3 6" />
                    <circle cx="12" cy="5" r="2" />
                  </svg>
                </div>
                <h3 className="font-syne font-bold text-[14px] text-white tracking-tight mb-1.5">
                  Clean Energy
                </h3>
                <p className="text-[11px] text-white/90 leading-normal font-medium">
                  Driving renewable energy adoption globally.
                </p>
              </div>

              {/* Card 2: Sustainability */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-5 shadow-[0_8px_32px_rgba(255,255,255,0.03)] hover:translate-y-[-6px] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_12px_24px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/12 flex items-center justify-center mb-4 border border-white/10">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1D9E75] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 20 11 20z" />
                    <path d="M19 2c-2.26 4.33-5.27 7.14-8 8" />
                  </svg>
                </div>
                <h3 className="font-syne font-bold text-[14px] text-white tracking-tight mb-1.5">
                  Sustainability
                </h3>
                <p className="text-[11px] text-white/90 leading-normal font-medium">
                  Building a greener planet through intelligence.
                </p>
              </div>

              {/* Card 3: Global Impact */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-5 shadow-[0_8px_32px_rgba(255,255,255,0.03)] hover:translate-y-[-6px] hover:bg-white/15 hover:border-white/30 hover:shadow-[0_12px_24px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/12 flex items-center justify-center mb-4 border border-white/10">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#3B82F6] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="font-syne font-bold text-[14px] text-white tracking-tight mb-1.5">
                  Global Impact
                </h3>
                <p className="text-[11px] text-white/90 leading-normal font-medium">
                  Creating measurable impact for a better future.
                </p>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
