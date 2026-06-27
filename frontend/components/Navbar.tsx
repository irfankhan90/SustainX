"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface SubmenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  submenu?: SubmenuItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    submenu: [
      { label: "About Us", href: "/about/about-us" },
      { label: "Vision", href: "/about/vision" },
      { label: "Mission", href: "/about/mission" },
      { label: "Platform Features", href: "/about/platform-features" },
      { label: "Delivery Model", href: "/about/delivery-model" },
    ],
  },
  {
    label: "Solutions",
    submenu: [
      { label: "Strategic Advisory", href: "/solutions/strategic-advisory" },
      { label: "Project Management", href: "/solutions/project-management" },
      { label: "Turnkey Solution & EPC", href: "/solutions/turnkey-solution-epc" },
      { label: "Capacity Building", href: "/solutions/capacity-building" },
    ],
  },
  {
    label: "Capacity Building",
    submenu: [
      { label: "Certificate Programs", href: "/capacity-building/certificate-programs" },
      { label: "Diploma Programs", href: "/capacity-building/diploma-programs" },
      { label: "Executive & Corporate Programs", href: "/capacity-building/executive-corporate-programs" },
    ],
  },
  { label: "AI in Sustainability", href: "/ai-in-sustainability" },
  {
    label: "Partnerships",
    submenu: [
      { label: "Our Partners", href: "/partnerships/our-partners" },
      { label: "For Partners", href: "/partnerships/for-partners" },
    ],
  },
  {
    label: "Team",
    submenu: [
      { label: "Management", href: "/team/management" },
      { label: "Advisory Board", href: "/team/advisory-board" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<{ [key: string]: boolean }>({});
  
  const pathname = usePathname();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<{ full_name: string; email: string; role: "USER" | "ADMIN" } | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("sustainx_user");
    const storedToken = localStorage.getItem("sustainx_token");
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (err) {
        console.error("Error parsing stored user details", err);
      }
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("sustainx_token");
    localStorage.removeItem("sustainx_user");
    setUser(null);
    setToken(null);
    setIsOpen(false);
    router.push("/");
  };

  // Track scroll position to resize navbar and toggle shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor active navigation hash using hashchange and scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveHash(window.location.hash || "#home");
    }, 0);

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    const hash = href.split("#")[1];
    if (hash) {
      setActiveHash(`#${hash}`);
    } else {
      setActiveHash("");
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveHash("#home");
      window.history.pushState(null, "", "/");
    } else {
      router.push("/");
    }
  };

  const toggleMobileMenu = (label: string) => {
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isItemActive = (item: NavItem) => {
    let active = false;
    if (item.href) {
      const hash = item.href.split("#")[1];
      if (hash) {
        active = pathname === "/" && activeHash === `#${hash}`;
      } else {
        active = pathname === item.href;
      }
    }
    if (!active && item.submenu) {
      active = item.submenu.some((sub) => {
        const pathPart = sub.href.split("#")[0];
        const hashPart = sub.href.split("#")[1];
        const pathMatches = pathname === pathPart || (pathPart === "/" && pathname === "/");
        const hashMatches = !hashPart || activeHash === `#${hashPart}`;
        return pathMatches && hashMatches;
      });
    }
    return active;
  };

  const getLinkClass = (isActive: boolean) => {
    return `relative py-2 text-sm font-semibold transition-colors duration-300 group cursor-pointer flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75] ${
      isActive ? "text-[#1D9E75]" : "text-t-2 hover:text-[#1D9E75]"
    }`;
  };

  const getUnderlineClass = (isActive: boolean) => {
    return `absolute bottom-[-4px] left-0 w-full h-[2.5px] bg-[#1D9E75] rounded-full transition-transform duration-300 ease-out origin-left ${
      isActive ? "scale-x-100 bg-[#1D9E75]" : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 bg-[#1D9E75]/70"
    }`;
  };

  const getMobileLinkClass = (isActive: boolean) => {
    return `text-[17px] font-bold font-syne block py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
      isActive
        ? "text-[#1D9E75] bg-[#1D9E75]/8 shadow-[0_4px_12px_rgba(29,158,117,0.06)]"
        : "text-t-DEFAULT hover:text-[#1D9E75] hover:bg-[#1D9E75]/4"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500">
      
      {/* Announcement Bar */}
      <div
        className={`hidden sm:flex bg-gradient-to-r from-[#085041] via-[#0F6E56] to-[#1D9E75] text-white px-4 text-center text-[11px] font-medium tracking-wide items-center justify-center gap-1.5 transition-all duration-300 overflow-hidden select-none ${
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
            ? "h-[68px] bg-white/95 backdrop-blur-[20px] border-b border-[#085041]/10 shadow-[0_12px_40px_-15px_rgba(8,80,65,0.12)]"
            : "h-[88px] bg-white border-b border-[#085041]/5"
        }`}
      >
        <div className="w-full flex items-center justify-between gap-4 max-w-none mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Brand Logo & Tagline */}
          <Link 
            href="#home" 
            className="flex items-center gap-1.5 sm:gap-[12px] group shrink-0 select-none" 
            onClick={handleLogoClick}
          >
            <Image
              src="/logo.jpg"
              alt="GlobalPact SustainX Logo"
              width={72}
              height={72}
              priority
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-[32px] sm:h-[40px] md:h-[54px]" : "h-[42px] sm:h-[50px] md:h-[72px]"
              } w-auto flex-shrink-0`}
            />
            <div className="flex flex-col justify-center">
              <div className="font-syne text-[15px] sm:text-[20px] font-extrabold text-t-DEFAULT tracking-tight leading-none">
                GlobalPact <span className="text-[#1D9E75] font-extrabold">SustainX</span>
              </div>
              <div className="text-[7.5px] min-[375px]:text-[8.5px] sm:text-[10px] md:text-[11px] lg:hidden xl:block text-t-3 font-bold tracking-wide mt-1 transition-all duration-300 group-hover:text-[#1D9E75] whitespace-nowrap">
                Empowering Sustainable Growth Worldwide
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 list-none m-0 p-0">
            {navItems.map((item, idx) => {
              const hasSubmenu = !!item.submenu;
              const isActive = isItemActive(item);

              if (!hasSubmenu) {
                return (
                  <li key={idx}>
                    <Link
                      href={item.href || "#"}
                      className={getLinkClass(isActive)}
                      onClick={() => handleLinkClick(item.href || "#")}
                    >
                      <span>{item.label}</span>
                      <span className={getUnderlineClass(isActive)} />
                    </Link>
                  </li>
                );
              }

              return (
                <li key={idx} className="relative group py-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`relative py-2 text-sm font-semibold transition-colors duration-300 flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75] ${
                        isActive ? "text-[#1D9E75]" : "text-t-2 hover:text-[#1D9E75]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180 text-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className={getUnderlineClass(isActive)} />
                    </Link>
                  ) : (
                    <button
                      className={`relative py-2 text-sm font-semibold transition-colors duration-300 flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75] ${
                        isActive ? "text-[#1D9E75]" : "text-t-2 hover:text-[#1D9E75]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180 text-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className={getUnderlineClass(isActive)} />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto z-50">
                    <ul className="w-56 bg-white border border-[#D0E8DE]/45 rounded-2xl shadow-[0_12px_40px_-15px_rgba(8,80,65,0.15)] py-2.5 list-none m-0">
                      {item.submenu?.map((sub, sIdx) => {
                        const isSubActive =
                          (pathname === sub.href.split("#")[0] || (sub.href.split("#")[0] === "/" && pathname === "/")) &&
                          (activeHash === `#${sub.href.split("#")[1]}` || (!sub.href.split("#")[1] && activeHash === "#home"));

                        return (
                          <li key={sIdx}>
                            <Link
                              href={sub.href}
                              onClick={() => handleLinkClick(sub.href)}
                              className={`block px-5 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                                isSubActive
                                  ? "text-[#1D9E75] bg-[#1D9E75]/5 font-bold"
                                  : "text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/5"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto relative z-30">
            {/* Social Media Links */}
            <div className="relative z-30 hidden xl:flex items-center gap-1.5 mr-2 border-r border-[#D0E8DE]/45 pr-3.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/globalpactsustainx/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-40 pointer-events-auto w-8 h-8 rounded-lg flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75]"
                aria-label="GlobalPact SustainX on LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/GlobalPactSustainX"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-40 pointer-events-auto w-8 h-8 rounded-lg flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75]"
                aria-label="GlobalPact SustainX on Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/globalSustainx"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-40 pointer-events-auto w-8 h-8 rounded-lg flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75]"
                aria-label="GlobalPact SustainX on X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/globalpactsustainx/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-40 pointer-events-auto w-8 h-8 rounded-lg flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75]"
                aria-label="GlobalPact SustainX on Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            {/* Primary Consulting Action Button */}
            {mounted && token && user ? (
              <>
                <span className="text-xs font-semibold text-t-2 select-none mr-2">
                  Hello, {user.full_name.split(" ")[0]}
                </span>
                {user.role === "ADMIN" && (
                  <Link
                    href="/admin/inquiries"
                    className="h-10 px-4 flex items-center justify-center text-xs font-bold text-brand-gd border border-brand-gl/40 rounded-lg bg-[#E1F5EE]/40 hover:bg-[#E1F5EE] transition-all cursor-pointer mr-1 focus-visible:outline-none"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="h-10 px-4 flex items-center justify-center text-xs font-bold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-all cursor-pointer focus-visible:outline-none"
                >
                  Sign Out
                </button>
              </>
            ) : (
              mounted && (
                <Link
                  href="/login"
                  className="h-10 px-4 flex items-center justify-center text-xs font-bold text-[#1D9E75] border border-[#1D9E75]/30 rounded-lg hover:bg-[#E1F5EE]/20 transition-all cursor-pointer mr-1 focus-visible:outline-none"
                >
                  Sign In
                </Link>
              )
            )}
            <Link
              href="#partnership-inquiry"
              className="h-10 px-5 flex items-center justify-center text-sm font-bold text-white rounded-lg bg-[#1D9E75] hover:bg-[#157C5C] shadow-[0_4px_12px_rgba(29,158,117,0.15)] hover:shadow-[0_8px_20px_rgba(29,158,117,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2"
            >
              Partner With Us
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex lg:hidden w-12 h-12 items-center justify-center cursor-pointer select-none rounded-lg hover:bg-[#E1F5EE]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2 transition-colors duration-250 animate-fade-in"
            aria-label="Open menu"
          >
            <svg 
              className="w-6 h-6 text-t-DEFAULT transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[100] bg-black/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[110] w-[310px] max-w-[calc(100vw-40px)] bg-[#F8FAF9] flex flex-col p-6 pt-20 transition-transform duration-300 ease-in-out shadow-2xl border-l border-[#D0E8DE]/30 lg:hidden ${
          isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        {/* Mobile Header (Logo & Brand & Tagline) */}
        <div className="absolute top-4 left-5 flex items-center gap-2 select-none">
          <Image
            src="/logo.jpg"
            alt="GlobalPact SustainX Logo"
            width={40}
            height={40}
            priority
            className="object-contain h-[36px] w-auto flex-shrink-0 rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <div className="font-syne text-[14px] font-extrabold text-t-DEFAULT tracking-tight leading-none">
              GlobalPact <span className="text-[#1D9E75] font-extrabold">SustainX</span>
            </div>
            <div className="text-[7.5px] text-t-3 font-semibold tracking-tight mt-0.5 whitespace-nowrap">
              Empowering Sustainable Growth Worldwide
            </div>
          </div>
        </div>

        {/* Visible Close (X) Button in Top-Right Corner */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#E1F5EE]/50 text-[#0B6B53] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-3 list-none m-0 p-0 text-left mb-8 overflow-y-auto max-h-[calc(100vh-280px)] pr-1">
          {navItems.map((item, idx) => {
            const hasSubmenu = !!item.submenu;
            const isExpanded = !!expandedMobileMenus[item.label];
            const isActive = isItemActive(item);
            
            if (!hasSubmenu) {
              return (
                <li key={idx}>
                  <Link
                    href={item.href || "#"}
                    onClick={() => handleLinkClick(item.href || "#")}
                    className={getMobileLinkClass(isActive)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            
            return (
              <li key={idx} className="flex flex-col">
                <button
                  onClick={() => toggleMobileMenu(item.label)}
                  className={`w-full text-[17px] font-bold font-syne flex items-center justify-between py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-[#1D9E75] bg-[#1D9E75]/8 shadow-[0_4px_12px_rgba(29,158,117,0.06)]"
                      : "text-t-DEFAULT hover:text-[#1D9E75] hover:bg-[#1D9E75]/4"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 text-current transition-transform duration-250 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                
                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <ul className="flex flex-col gap-1.5 list-none m-0 pl-6 pr-2 py-1">
                    {item.submenu?.map((sub, sIdx) => {
                      const isSubActive =
                        (pathname === sub.href.split("#")[0] || (sub.href.split("#")[0] === "/" && pathname === "/")) &&
                        (activeHash === `#${sub.href.split("#")[1]}` || (!sub.href.split("#")[1] && activeHash === "#home"));
                        
                      return (
                        <li key={sIdx}>
                          <Link
                            href={sub.href}
                            onClick={() => handleLinkClick(sub.href)}
                            className={`block py-2 px-3 text-[14px] font-semibold rounded-lg transition-colors duration-200 ${
                              isSubActive
                                ? "text-[#1D9E75] bg-[#1D9E75]/5 font-bold"
                                : "text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/4"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mobile Action Buttons */}
        <div className="flex flex-col gap-4 border-t border-[#D0E8DE]/45 pt-6 mt-auto">
          {mounted && token && user ? (
            <>
              <div className="text-xs font-semibold text-t-2 text-center mb-1 select-none">
                Hello, {user.full_name}
              </div>
              {user.role === "ADMIN" && (
                <Link
                  href="/admin/inquiries"
                  onClick={() => setIsOpen(false)}
                  className="w-full h-11 flex items-center justify-center text-sm font-bold text-brand-gd border border-brand-gl/40 rounded-lg bg-[#E1F5EE]/40 hover:bg-[#E1F5EE] transition-all"
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={handleSignOut}
                className="w-full h-11 flex items-center justify-center text-sm font-bold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-all cursor-pointer"
              >
                Sign Out
              </button>
            </>
          ) : (
            mounted && (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full h-11 flex items-center justify-center text-sm font-bold text-[#1D9E75] border border-[#1D9E75]/30 rounded-lg hover:bg-[#E1F5EE]/20 transition-all"
              >
                Sign In
              </Link>
            )
          )}
          <Link
            href="#partnership-inquiry"
            onClick={() => setIsOpen(false)}
            className="w-full h-11 flex items-center justify-center text-sm font-bold text-white rounded-lg bg-[#1D9E75] hover:bg-[#157C5C] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Partner With Us
          </Link>
          {/* Mobile Social Media Links */}
          <div className="relative z-25 flex items-center justify-center gap-4 pt-4 border-t border-[#D0E8DE]/30 mt-2">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/globalpactsustainx/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg border border-[#D0E8DE]/45 flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75]"
              aria-label="GlobalPact SustainX on LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/GlobalPactSustainX"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg border border-[#D0E8DE]/45 flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75]"
              aria-label="GlobalPact SustainX on Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="https://x.com/globalSustainx"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg border border-[#D0E8DE]/45 flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75]"
              aria-label="GlobalPact SustainX on X (formerly Twitter)"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/globalpactsustainx/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-30 pointer-events-auto w-11 h-11 rounded-lg border border-[#D0E8DE]/45 flex items-center justify-center text-t-2 hover:text-[#1D9E75] hover:bg-[#1D9E75]/8 hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75]"
              aria-label="GlobalPact SustainX on Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
