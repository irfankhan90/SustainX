"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-DEFAULT text-white/55 py-14 border-t border-white/5">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-8 lg:gap-12 mb-12">
          {/* Logo & Description Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 flex flex-col justify-start">
            <Link href="/" className="inline-flex items-center gap-[12px] mb-4 hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-brand-g focus-visible:outline-offset-2 rounded-lg">
              <Image 
                src="/assets/logo.png" 
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
            
            <p className="text-[13px] leading-relaxed text-white/75 max-w-[340px] mb-5">
              GlobalPact SustainX is an AI-powered sustainability ecosystem delivering Strategic Advisory, Project Management, EPC Solutions, Capacity Building, ESG Intelligence, and AI-driven innovation to accelerate the global energy transition.
            </p>
            
            {/* Interactive Contact Information */}
            <div className="text-[12px] text-white/65 mb-6 space-y-2.5 max-w-[340px]">
              <div className="flex gap-2">
                <span className="shrink-0 text-white/50" role="img" aria-label="Location">📍</span>
                <span className="leading-relaxed">
                  B-101/102, Grenville, Near Lokhandwala Club, Lokhandwala Complex, Andheri West, Mumbai – 400053
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/50" role="img" aria-label="Phone">📞</span>
                <a 
                  href="tel:+912240167394" 
                  className="hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none"
                  aria-label="Call GlobalPact SustainX at +91-22-40167394"
                >
                  +91-22-40167394
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/50" role="img" aria-label="Email">📧</span>
                <a 
                  href="mailto:sustainx@globalpactholdings.in" 
                  className="hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none break-all"
                  aria-label="Email sustainx@globalpactholdings.in"
                >
                  sustainx@globalpactholdings.in
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="shrink-0 text-white/50" role="img" aria-label="Website">🌐</span>
                <a 
                  href="https://www.globalpactholdings.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none"
                  aria-label="Visit GlobalPact Holdings official website (opens in a new tab)"
                >
                  www.globalpactholdings.in
                </a>
              </div>
            </div>
            
            {/* Social Icons with interactive animations & green glow */}
            <div className="relative z-20 flex gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/globalpactsustainx/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(29,158,117,0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-g focus-visible:outline-offset-2"
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
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(29,158,117,0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-g focus-visible:outline-offset-2"
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
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(29,158,117,0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-g focus-visible:outline-offset-2"
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
                className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg bg-white/8 flex items-center justify-center text-white/45 hover:bg-brand-g hover:text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(29,158,117,0.4)] cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-g focus-visible:outline-offset-2"
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

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="/" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  About
                </Link>
              </li>
              <li>
                <Link href="/solutions/strategic-advisory" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/capacity-building" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link href="/ai-in-sustainability" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  AI in Sustainability
                </Link>
              </li>
              <li>
                <Link href="/partnerships/for-partners" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="/solutions/strategic-advisory" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/solutions/project-management" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/solutions/turnkey-solution-epc" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Turnkey Solutions
                </Link>
              </li>
              <li>
                <Link href="/capacity-building" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Capacity Building
                </Link>
              </li>
              <li>
                <Link href="/solutions/strategic-advisory" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  ESG Intelligence
                </Link>
              </li>
              <li>
                <Link href="/ai-in-sustainability" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  AI in Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li>
                <Link href="/about/about-us" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team/management" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.globalpactholdings.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none"
                >
                  GlobalPact Holdings
                </a>
              </li>
              <li>
                <a 
                  href="https://www.schoonenergy.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[13px] text-white/65 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none"
                >
                  Schoon Energy
                </a>
              </li>
            </ul>
          </div>

          {/* Global Presence Column */}
          <div>
            <h4 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              Global Presence
            </h4>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li className="text-[13px] text-white/65 flex items-center gap-2">
                <span className="text-[14px] shrink-0" role="img" aria-label="India flag">🇮🇳</span> India
              </li>
              <li className="text-[13px] text-white/65 flex items-center gap-2">
                <span className="text-[14px] shrink-0" role="img" aria-label="Singapore flag">🇸🇬</span> Singapore
              </li>
              <li className="text-[13px] text-white/65 flex items-center gap-2">
                <span className="text-[14px] shrink-0" role="img" aria-label="KSA flag">🇸🇦</span> KSA
              </li>
              <li className="text-[13px] text-white/65 flex items-center gap-2">
                <span className="text-[14px] shrink-0" role="img" aria-label="UAE flag">🇦🇪</span> UAE
              </li>
              <li className="text-[13px] text-white/65 flex items-center gap-2">
                <span className="text-[14px] shrink-0" role="img" aria-label="USA flag">🇺🇸</span> USA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t border-white/8 text-[12px] gap-4">
          <div className="text-white/65 space-y-1">
            <p className="font-semibold text-white/85">© 2026 GlobalPact SustainX. All Rights Reserved.</p>
            <p className="text-white/50 text-[11px]">A GlobalPact Holdings Company.</p>
            <p className="text-brand-gl font-medium text-[11px]">Powering the Global Energy Transition.</p>
            <p className="text-white/50 text-[11px]">Made in India with ❤️ by Indians</p>
          </div>
          <div className="flex flex-wrap gap-5 md:justify-end">
            <Link href="/privacy" className="text-white/30 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/30 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-white/30 hover:text-brand-gl transition-colors duration-200 focus-visible:text-brand-gl focus-visible:outline-none">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
