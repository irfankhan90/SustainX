"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Track scroll position to resize navbar and toggle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active navigation hash using hashchange and scroll
  useEffect(() => {
    setActiveHash(window.location.hash || "#home");

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleLinkClick = (hash: string) => {
    setActiveHash(hash);
    setIsOpen(false);
  };

  const getLinkClass = (hash: string) => {
    const isActive = activeHash === hash;
    return `relative py-2 text-sm font-semibold transition-colors duration-200 group cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-g ${
      isActive ? "text-[#1D9E75] font-bold" : "text-t-2 hover:text-[#1D9E75]"
    }`;
  };

  const getUnderlineClass = (hash: string) => {
    const isActive = activeHash === hash;
    return `absolute bottom-0 left-0 w-full h-[2px] bg-[#1D9E75] rounded-full transition-transform duration-300 origin-left ${
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500">
      
      {/* Announcement Bar */}
      <div
        className={`bg-gradient-to-r from-[#085041] via-[#0F6E56] to-[#1D9E75] text-white px-4 text-center text-[11px] font-medium tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 overflow-hidden select-none ${
          isScrolled ? "h-0 py-0 opacity-0" : "h-[28px] py-1 opacity-100 border-b border-white/5"
        }`}
      >
        <span>🌍</span>
        <span className="truncate uppercase font-bold tracking-widest text-[9.5px]">
          GlobalPact SustainX — Energy Transition Execution Partner
        </span>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full flex items-center transition-all duration-300 ${
          isScrolled
            ? "h-[64px] bg-[#F8FAF9]/90 backdrop-blur-[24px] border-b border-bdr-DEFAULT/70 shadow-[0_4px_25px_rgba(11,22,18,0.02)]"
            : "h-[84px] bg-[#F8FAF9]/80 backdrop-blur-[12px] border-b border-bdr-DEFAULT/20"
        }`}
      >
        <div className="w-full flex items-center justify-between max-w-none mx-auto px-6 md:px-8 relative">
          
          {/* Brand Logo & Tagline */}
          <Link 
            href="#home" 
            className="flex items-center gap-2 sm:gap-[12px] group shrink-0" 
            onClick={() => handleLinkClick("#home")}
          >
            <img
              src="/logo.jpg"
              alt="GlobalPact SustainX Logo"
              className={`object-contain transition-all duration-350 ${
                isScrolled ? "h-[44px] sm:h-[48px]" : "h-[54px] sm:h-[62px]"
              } w-auto flex-shrink-0`}
            />
            <div className="flex flex-col justify-center">
              <div className="font-syne text-[18px] sm:text-[20px] font-extrabold text-t-DEFAULT tracking-tight leading-none">
                GlobalPact <span className="text-[#1D9E75] font-extrabold">SustainX</span>
              </div>
              <div className="hidden sm:block text-[8.5px] text-t-3 font-bold tracking-[0.16em] mt-1.5 transition-all duration-300 group-hover:text-[#1D9E75] uppercase">
                Centre of Excellence
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            
            {/* Solutions Dropdown */}
            <li className="relative group">
              <span className={getLinkClass("#features")}>
                <span>Solutions</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className={getUnderlineClass("#features")} />
              </span>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white border border-[#D0E8DE] rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Strategic Advisory
                </Link>
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Project Management
                </Link>
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  EPC Solutions
                </Link>
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Capacity Building
                </Link>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li className="relative group">
              <span className={getLinkClass("#industries")}>
                <span>Industries</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className={getUnderlineClass("#industries")} />
              </span>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white border border-[#D0E8DE] rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="#about"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Renewable Utilities
                </Link>
                <Link
                  href="#about"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Grid Infrastructure
                </Link>
                <Link
                  href="#about"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Corporate ESG Compliance
                </Link>
                <Link
                  href="#about"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Climate Finance
                </Link>
              </div>
            </li>

            {/* Programs Dropdown */}
            <li className="relative group">
              <span className={getLinkClass("#training")}>
                <span>Programs</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className={getUnderlineClass("#training")} />
              </span>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white border border-[#D0E8DE] rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] py-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="#training"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Certified Energy Manager
                </Link>
                <Link
                  href="#training"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Clean Energy PMC Track
                </Link>
                <Link
                  href="#training"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/50 transition-colors"
                >
                  Executive Leadership Intensive
                </Link>
              </div>
            </li>

            {/* About Link */}
            <li>
              <Link href="#about" className={getLinkClass("#about")} onClick={() => handleLinkClick("#about")}>
                <span>About</span>
                <span className={getUnderlineClass("#about")} />
              </Link>
            </li>

            {/* Contact Link */}
            <li>
              <Link href="#contact" className={getLinkClass("#contact")} onClick={() => handleLinkClick("#contact")}>
                <span>Contact</span>
                <span className={getUnderlineClass("#contact")} />
              </Link>
            </li>
          </ul>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto relative z-10">
            {/* Grayscale Subtle Client Login */}
            <Link
              href="/login"
              className="h-10 px-4 flex items-center justify-center text-sm font-semibold text-t-2 hover:text-[#1D9E75] transition-colors cursor-pointer mr-2"
            >
              Client Portal
            </Link>
            {/* Primary Consulting Action Button */}
            <Link
              href="#contact"
              className="h-10 px-[22px] flex items-center justify-center text-sm font-bold text-white rounded-lg bg-[#085041] hover:bg-[#063B30] shadow-[0_4px_12px_rgba(8,80,65,0.15)] hover:shadow-[0_8px_20px_rgba(8,80,65,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden w-10 h-10 flex-col justify-center items-center gap-[5px] p-2 cursor-pointer z-[110] select-none rounded-lg hover:bg-[#E1F5EE]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-[20px] h-[2px] bg-t-DEFAULT rounded-sm transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-[20px] h-[2px] bg-t-DEFAULT rounded-sm transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-[20px] h-[2px] bg-t-DEFAULT rounded-sm transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#F8FAF9] flex flex-col pt-24 px-6 transition-all duration-350 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* Mobile Links */}
        <ul className="flex flex-col gap-5 list-none m-0 p-0 text-center mb-8">
          <li>
            <Link
              href="#features"
              onClick={() => handleLinkClick("#features")}
              className="text-lg font-bold font-syne block transition-colors text-t-DEFAULT hover:text-[#1D9E75]"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className="text-lg font-bold font-syne block transition-colors text-t-DEFAULT hover:text-[#1D9E75]"
            >
              Industries
            </Link>
          </li>
          <li>
            <Link
              href="#training"
              onClick={() => handleLinkClick("#training")}
              className="text-lg font-bold font-syne block transition-colors text-t-DEFAULT hover:text-[#1D9E75]"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className="text-lg font-bold font-syne block transition-colors text-t-DEFAULT hover:text-[#1D9E75]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className="text-lg font-bold font-syne block transition-colors text-t-DEFAULT hover:text-[#1D9E75]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Action Buttons */}
        <div className="flex flex-col gap-4 border-t border-[#D0E8DE]/45 pt-6">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="w-full h-11 flex items-center justify-center text-sm font-semibold text-[#1D9E75] rounded-lg border border-[#1D9E75] bg-white hover:bg-[#E1F5EE]/30 transition-all duration-300"
          >
            Client Portal
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full h-11 flex items-center justify-center text-sm font-bold text-white rounded-lg bg-[#085041] hover:bg-[#063B30] shadow-md transition-all duration-300"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
