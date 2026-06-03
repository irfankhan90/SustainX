"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-DEFAULT text-white/55 py-14 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Info column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-[12px] mb-3.5">
              <img 
                src="/logo.jpg" 
                alt="GlobalPact SustainX Logo" 
                className="h-[48px] w-auto object-contain flex-shrink-0" 
              />
              <div className="font-syne text-[17px] font-bold text-white tracking-tight leading-none">
                GlobalPact <span className="text-brand-gl">SustainX</span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed text-white/55 max-w-[320px] mb-4">
              GlobalPact SustainX is an AI-powered sustainability ecosystem focused on Renewable Energy, ESG Intelligence, Strategic Advisory, Project Management, EPC Solutions, and Capacity Building. We empower organizations, professionals, and future leaders to accelerate the global energy transition through innovation, intelligence, and collaboration.
            </p>
            <div className="text-[12px] text-white/45 mb-4 space-y-2.5 max-w-[320px]">
              <div className="flex gap-2">
                <span className="shrink-0 text-white/35">📍</span>
                <span>
                  B-101/102, Grenville, Near Lokhandwala Club, Lokhandwala Complex, Andheri West, Mumbai – 400053
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/35">📞</span>
                <a href="tel:+912240167394" className="hover:text-brand-gl transition-all">
                  +91-22-40167394
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/35">📧</span>
                <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-gl hover:underline break-all">
                  sustainx@globalpactholdings.in
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/35">🌐</span>
                <a 
                  href="https://www.globalpactholdings.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gl transition-colors"
                >
                  www.globalpactholdings.in
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/globalpactsustainx/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-xs font-semibold text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer"
              >
                in
              </a>
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-xs font-semibold text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer">
                f
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-xs font-semibold text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer">
                𝕏
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-xs font-semibold text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer">
                ▶
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="#features" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#training" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="#ai" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  AI Platform
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Dashboard Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="#training" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  A1 — Renewable Energy
                </Link>
              </li>
              <li>
                <Link href="#training" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  A2 — Solar & Wind Eng.
                </Link>
              </li>
              <li>
                <Link href="#training" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  A3 — RE Project Mgmt
                </Link>
              </li>
              <li>
                <Link href="#training" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  A4 — Sustainability Leadership
                </Link>
              </li>
              <li>
                <Link href="#training" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Executive Intensives (B1–B5)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="#about" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.globalpactholdings.in" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  GlobalPact Holdings
                </a>
              </li>
              <li>
                <a href="https://www.schoonenergy.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/45 hover:text-brand-gl transition-colors">
                  Schoon Energy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/8 text-[12px] gap-3">
          <div>
            © 2026 GlobalPact SustainX. All rights reserved. A group entity of GlobalPact International Holdings.
          </div>
          <div className="flex gap-5">
            <Link href="#" className="text-white/30 hover:text-brand-gl transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/30 hover:text-brand-gl transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/30 hover:text-brand-gl transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
