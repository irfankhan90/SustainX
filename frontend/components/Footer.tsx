"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-DEFAULT text-white/55 py-14 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo & Info column */}
          <div className="lg:col-span-2">
            <Link href="/#home" className="inline-flex items-center gap-[12px] mb-3.5">
              <Image 
                src="/logo.jpg" 
                alt="GlobalPact SustainX Logo" 
                width={48}
                height={48}
                style={{ height: "auto" }}
                className="h-[48px] w-auto object-contain flex-shrink-0" 
              />
              <div className="font-syne text-[17px] font-bold text-white tracking-tight leading-none">
                GlobalPact <span className="text-brand-gl">SustainX</span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed text-white/75 max-w-[320px] mb-4">
              GlobalPact SustainX is an AI-powered sustainability ecosystem focused on Renewable Energy, ESG Intelligence, Strategic Advisory, Project Management, EPC Solutions, and Capacity Building. We empower organizations, professionals, and future leaders to accelerate the global energy transition through innovation, intelligence, and collaboration.
            </p>
            <div className="text-[12px] text-white/65 mb-4 space-y-2.5 max-w-[320px]">
              <div className="flex gap-2">
                <span className="shrink-0 text-white/50" role="img" aria-label="Location">📍</span>
                <span>
                  B-101/102, Grenville, Near Lokhandwala Club, Lokhandwala Complex, Andheri West, Mumbai – 400053
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/50" role="img" aria-label="Phone">📞</span>
                <a href="tel:+912240167394" className="hover:text-brand-gl transition-all">
                  +91-22-40167394
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/50" role="img" aria-label="Email">📧</span>
                <a href="mailto:sustainx@globalpactholdings.in" className="text-brand-gl hover:underline break-all">
                  sustainx@globalpactholdings.in
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/50" role="img" aria-label="Website">🌐</span>
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
            <div className="relative z-20 flex gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/globalpactsustainx/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer"
                aria-label="GlobalPact SustainX on LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/GlobalPactSustainX"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer"
                aria-label="GlobalPact SustainX on Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/globalSustainx"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer"
                aria-label="GlobalPact SustainX on X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/globalpactsustainx/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all cursor-pointer"
                aria-label="GlobalPact SustainX on Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="/#features" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/#ai" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  AI Platform
                </Link>
              </li>
              <li>
                <Link href="/#partnerships" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  Partnerships
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
                <Link href="/programs" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  A1 — Renewable Energy
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  A2 — Solar & Wind Eng.
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  A3 — RE Project Mgmt
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  A4 — Sustainability Leadership
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
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
                <Link href="/#about" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#team" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://www.globalpactholdings.in" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
                  GlobalPact Holdings
                </a>
              </li>
              <li>
                <a href="https://www.schoonenergy.com" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors">
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
            <Link href="/privacy" className="text-white/30 hover:text-brand-gl transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-brand-gl transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/30 hover:text-brand-gl transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
