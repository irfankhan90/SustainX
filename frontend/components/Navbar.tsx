"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] h-[66px] flex items-center transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8FAF9]/92 backdrop-blur-[18px] border-b border-bdr-DEFAULT shadow-sh"
            : "bg-[#F8FAF9]/92 backdrop-blur-[18px] border-b border-bdr-DEFAULT"
        }`}
      >
        <div className="w-100 flex items-center justify-between max-w-[1120px] mx-auto px-7">
          {/* LOGO */}
          <Link href="#home" className="flex items-center gap-2.5">
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

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            <li>
              <Link href="#about" className="text-t-2 text-sm hover:text-brand-g transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#features" className="text-t-2 text-sm hover:text-brand-g transition-colors duration-200">
                Platform
              </Link>
            </li>
            <li>
              <Link href="#training" className="text-t-2 text-sm hover:text-brand-g transition-colors duration-200">
                Programs
              </Link>
            </li>
            <li>
              <Link href="#ai" className="text-t-2 text-sm hover:text-brand-g transition-colors duration-200">
                AI
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-t-2 text-sm hover:text-brand-g transition-colors duration-200">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-t-2 text-sm hover:text-brand-g transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <Button variant="outline" size="sm" className="px-[18px] py-2 text-sm h-[38px]" href="/login">
              Sign in
            </Button>
            <Button variant="primary" size="sm" className="px-[18px] py-[9px] text-sm h-[38px]" href="/register">
              Get started free
            </Button>
          </div>

          {/* HAMBURGER TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-[5px] p-2 cursor-pointer z-[110]"
            aria-label="Toggle menu"
          >
            <span className={`w-[22px] h-[2px] bg-t-DEFAULT rounded-sm transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-[22px] h-[2px] bg-t-DEFAULT rounded-sm transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-[22px] h-[2px] bg-t-DEFAULT rounded-sm transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-[#F8FAF9] flex flex-col pt-24 px-7 transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 list-none m-0 p-0 text-center mb-8">
          <li>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-t-DEFAULT text-xl font-medium font-syne block hover:text-brand-g transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="text-t-DEFAULT text-xl font-medium font-syne block hover:text-brand-g transition-colors"
            >
              Platform
            </Link>
          </li>
          <li>
            <Link
              href="#training"
              onClick={() => setIsOpen(false)}
              className="text-t-DEFAULT text-xl font-medium font-syne block hover:text-brand-g transition-colors"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="#ai"
              onClick={() => setIsOpen(false)}
              className="text-t-DEFAULT text-xl font-medium font-syne block hover:text-brand-g transition-colors"
            >
              AI
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-t-DEFAULT text-xl font-medium font-syne block hover:text-brand-g transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-t-DEFAULT text-xl font-medium font-syne block hover:text-brand-g transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          <Button variant="outline" size="md" className="w-100" href="/login" onClick={() => setIsOpen(false)}>
            Sign in
          </Button>
          <Button variant="primary" size="md" className="w-100" href="/register" onClick={() => setIsOpen(false)}>
            Get started free
          </Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
