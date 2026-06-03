"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Monitor scroll for resizing navbar and hiding announcement bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active navigation hash using hashchange and scroll observer
  useEffect(() => {
    setActiveHash(window.location.hash || "#home");

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Close mobile drawer when a link is clicked
  const handleLinkClick = (hash: string) => {
    setActiveHash(hash);
    setIsOpen(false);
  };

  const getLinkClass = (hash: string) => {
    const isActive = activeHash === hash;
    return `relative py-2 text-sm font-semibold transition-colors duration-250 group cursor-pointer flex items-center gap-1 ${
      isActive ? "text-brand-g font-bold" : "text-t-2 hover:text-brand-g"
    }`;
  };

  const getUnderlineClass = (hash: string) => {
    const isActive = activeHash === hash;
    return `absolute bottom-0 left-0 w-full h-[2px] bg-brand-g rounded-full transition-transform duration-300 origin-left ${
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500">
      {/* 1. ANNOUNCEMENT BAR */}
      <div
        className={`bg-gradient-to-r from-brand-gxd via-brand-gd to-brand-g text-white px-4 text-center text-[11px] font-medium tracking-wide flex items-center justify-center gap-1.5 transition-all duration-300 overflow-hidden select-none ${
          isScrolled ? "h-0 py-0 opacity-0" : "h-[26px] py-1 opacity-100 border-b border-white/5"
        }`}
      >
        <span>🌍</span>
        <span className="truncate">
          Powering the Global Energy Transition through AI & Sustainability
        </span>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav
        className={`w-full flex items-center transition-all duration-300 ${
          isScrolled
            ? "h-[64px] bg-[#F8FAF9]/88 backdrop-blur-[24px] border-b border-bdr-DEFAULT/70 shadow-[0_4px_25px_rgba(11,22,18,0.02)]"
            : "h-[84px] bg-[#F8FAF9]/75 backdrop-blur-[12px] border-b border-bdr-DEFAULT/20"
        }`}
      >
        <div className="w-full flex items-center justify-between max-w-none mx-auto px-6 md:px-8 relative">
          
          {/* BRAND LOGO & TAGLINE */}
          <Link href="#home" className="flex items-center gap-[14px] group shrink-0 animate-fadeUp" onClick={() => handleLinkClick("#home")}>
            <img
              src="/logo.jpg"
              alt="GlobalPact SustainX Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-[54px]" : "h-[70px]"
              } w-auto flex-shrink-0`}
            />
            <div className="flex flex-col justify-center">
              <div className="font-syne text-[21.5px] font-extrabold text-t-DEFAULT tracking-tight leading-none">
                GlobalPact <span className="bg-gradient-to-r from-brand-g to-brand-gd bg-clip-text text-transparent font-extrabold">SustainX</span>
              </div>
              <div className="text-[9px] text-t-3 font-bold tracking-widest mt-2 transition-all duration-300 group-hover:text-brand-g uppercase">
                Powering the Global Energy Transition
              </div>
            </div>
          </Link>

          {/* DESKTOP MAIN NAVIGATION LINKS WITH DROPDOWNS */}
          <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            {/* About */}
            <li>
              <Link href="#about" className={getLinkClass("#about")} onClick={() => handleLinkClick("#about")}>
                <span>About</span>
                <span className={getUnderlineClass("#about")} />
              </Link>
            </li>

            {/* Platform Dropdown */}
            <li className="relative group">
              <Link href="#features" className={getLinkClass("#features")} onClick={() => handleLinkClick("#features")}>
                <span>Platform</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className={getUnderlineClass("#features")} />
              </Link>
              {/* Premium dropdown card */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-[#F8FAF9] border border-bdr-DEFAULT/75 rounded-xl shadow-sh2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Analytics Dashboard
                </Link>
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  ESG Scope 1-3 Tracker
                </Link>
                <Link
                  href="#features"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Hybrid Lab Simulations
                </Link>
              </div>
            </li>

            {/* Programs Dropdown */}
            <li className="relative group">
              <Link href="#training" className={getLinkClass("#training")} onClick={() => handleLinkClick("#training")}>
                <span>Programs</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className={getUnderlineClass("#training")} />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-[#F8FAF9] border border-bdr-DEFAULT/75 rounded-xl shadow-sh2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="#training"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Part A — Certifications
                </Link>
                <Link
                  href="#training"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Part B — Executive Intensives
                </Link>
                <Link
                  href="#training"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Emerging Tech Curriculum
                </Link>
              </div>
            </li>

            {/* AI Dropdown with Sparkle Badge */}
            <li className="relative group">
              <Link href="#ai" className={getLinkClass("#ai")} onClick={() => handleLinkClick("#ai")}>
                <span>AI</span>
                <span className="text-[10px] text-brand-gold">✨</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3 fill-none stroke-current stroke-[2.5] transition-transform duration-300 group-hover:rotate-180 mt-[1px]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className={getUnderlineClass("#ai")} />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-[#F8FAF9] border border-bdr-DEFAULT/75 rounded-xl shadow-sh2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <Link
                  href="#ai"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  AI Load Optimizer
                </Link>
                <Link
                  href="#ai"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Predictive Grid Analytics
                </Link>
                <Link
                  href="#ai"
                  className="block px-4 py-2 text-xs font-bold text-t-2 hover:text-brand-g hover:bg-brand-gxl/50 transition-colors"
                >
                  Automated ESG Reports
                </Link>
              </div>
            </li>

            {/* Pricing */}
            <li>
              <Link href="#pricing" className={getLinkClass("#pricing")} onClick={() => handleLinkClick("#pricing")}>
                <span>Pricing</span>
                <span className={getUnderlineClass("#pricing")} />
              </Link>
            </li>

            {/* Contact (Gets extra margin-left to space Pricing → Contact) */}
            <li className="ml-5">
              <Link href="#contact" className={getLinkClass("#contact")} onClick={() => handleLinkClick("#contact")}>
                <span>Contact</span>
                <span className={getUnderlineClass("#contact")} />
              </Link>
            </li>
          </ul>

          {/* DESKTOP CTAs WITH BREATHING ROOM */}
          <div className="hidden md:flex items-center gap-3 shrink-0 ml-8">
            {/* Outlined Sign In */}
            <Link
              href="/login"
              className="h-10 px-[18px] flex items-center justify-center text-sm font-semibold text-brand-g rounded-lg border-[1.5px] border-brand-g bg-transparent hover:bg-brand-g hover:text-white transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Sign in
            </Link>
            {/* Premium Gradient Get Started */}
            <Link
              href="/register"
              className="h-10 px-[26px] flex items-center justify-center gap-1.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-gd via-brand-g to-blue-600 shadow-[0_3px_10px_rgba(29,158,117,0.18)] hover:shadow-[0_8px_20px_rgba(29,158,117,0.28)] hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
            >
              <span>Get started free</span>
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 translate-x-0 group-hover:translate-x-1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* HAMBURGER DRAWER TOGGLE (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-[5px] p-2 cursor-pointer z-[110] select-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-[22px] h-[2px] bg-t-DEFAULT rounded-sm transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-[22px] h-[2px] bg-t-DEFAULT rounded-sm transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-[22px] h-[2px] bg-t-DEFAULT rounded-sm transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-[#F8FAF9] flex flex-col pt-24 px-7 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        {/* Mobile Navigation List */}
        <ul className="flex flex-col gap-5 list-none m-0 p-0 text-center mb-8">
          <li>
            <Link
              href="#about"
              onClick={() => handleLinkClick("#about")}
              className={`text-xl font-bold font-syne block transition-colors ${
                activeHash === "#about" ? "text-brand-g" : "text-t-DEFAULT hover:text-brand-g"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              onClick={() => handleLinkClick("#features")}
              className={`text-xl font-bold font-syne block transition-colors ${
                activeHash === "#features" ? "text-brand-g" : "text-t-DEFAULT hover:text-brand-g"
              }`}
            >
              Platform
            </Link>
          </li>
          <li>
            <Link
              href="#training"
              onClick={() => handleLinkClick("#training")}
              className={`text-xl font-bold font-syne block transition-colors ${
                activeHash === "#training" ? "text-brand-g" : "text-t-DEFAULT hover:text-brand-g"
              }`}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="#ai"
              onClick={() => handleLinkClick("#ai")}
              className={`text-xl font-bold font-syne block transition-colors ${
                activeHash === "#ai" ? "text-brand-g" : "text-t-DEFAULT hover:text-brand-g"
              }`}
            >
              AI <span className="text-brand-gold animate-pulse">✨</span>
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              onClick={() => handleLinkClick("#pricing")}
              className={`text-xl font-bold font-syne block transition-colors ${
                activeHash === "#pricing" ? "text-brand-g" : "text-t-DEFAULT hover:text-brand-g"
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className={`text-xl font-bold font-syne block transition-colors ${
                activeHash === "#contact" ? "text-brand-g" : "text-t-DEFAULT hover:text-brand-g"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button Actions */}
        <div className="flex flex-col gap-4 border-t border-bdr-DEFAULT/30 pt-6">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="w-full h-11 flex items-center justify-center text-sm font-semibold text-brand-g rounded-lg border-[1.5px] border-brand-g bg-white hover:bg-brand-g hover:text-white transition-all duration-300"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="w-full h-11 flex items-center justify-center gap-1.5 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-brand-gd via-brand-g to-blue-600 shadow-md transition-all duration-300 group"
          >
            <span>Get started free</span>
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 translate-x-0 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
