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
      { label: "Capacity Building", href: "/capacity-building" },
    ],
  },
  {
    label: "Centre of Excellence",
    href: "/capacity-building",
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
      { label: "Our Partners", href: "/#trusted-partners" },
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
    return `relative py-2 text-sm lg:text-[12px] xl:text-[13px] 2xl:text-sm font-semibold transition-colors duration-300 group cursor-pointer flex items-center gap-1 lg:gap-0.5 xl:gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1D9E75] whitespace-nowrap ${
      isActive ? "text-[#1D9E75]" : "text-t-2 hover:text-[#1D9E75]"
    }`;
  };

  const getUnderlineClass = (isActive: boolean) => {
    return `absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#1D9E75] rounded-full transition-transform duration-300 ease-out origin-left ${
      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100"
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
        className={`w-full flex items-center transition-all duration-300 bg-white ${
          isScrolled
            ? "h-[68px] lg:h-[80px] border-b border-[#E2ECE8] shadow-[0_4px_20px_rgba(11,22,18,0.04)]"
            : "h-[72px] lg:h-[88px] border-b border-[#E2ECE8]/60"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 xl:px-8 h-full flex items-center justify-between">
          
          {/* Logo Section (Far Left) */}
          <div className="h-full flex items-center justify-start shrink-0">
            <Link 
              href="#home" 
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none cursor-pointer" 
              onClick={handleLogoClick}
            >
              <Image
                src="/assets/logo.png"
                alt="GlobalPact SustainX Logo"
                width={52}
                height={52}
                priority
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "h-10 w-10 lg:h-[44px] lg:w-[44px]" : "h-[44px] w-[44px] lg:h-[52px] lg:w-[52px]"
                } flex-shrink-0 rounded-md`}
              />
              <div className="flex flex-col justify-center min-w-0">
                <div className="font-syne text-[15px] lg:text-[16px] xl:text-[18px] font-extrabold text-t-DEFAULT tracking-tight leading-none">
                  GlobalPact <span className="text-[#1D9E75] font-extrabold">SustainX</span>
                </div>
                <div className="text-[8.5px] sm:text-[9.5px] lg:hidden 2xl:block text-t-3 font-bold tracking-wide mt-1 transition-all duration-300 group-hover:text-[#1D9E75] whitespace-nowrap">
                  Empowering Sustainable Growth Worldwide
                </div>
              </div>
            </Link>
          </div>

          {/* Center Navigation Section (Perfect alignment and natural expansion) */}
          <div className="hidden lg:flex items-center justify-center flex-1 h-full lg:ml-3 lg:mr-3 xl:ml-6 xl:mr-6 2xl:ml-10 2xl:mr-10">
            <ul className="flex items-center lg:gap-1.5 xl:gap-4.5 2xl:gap-8 list-none m-0 p-0 h-full">
              {navItems.map((item, idx) => {
                const hasSubmenu = !!item.submenu;
                const isActive = isItemActive(item);

                if (!hasSubmenu) {
                  return (
                    <li key={idx} className="flex items-center h-full">
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
                  <li key={idx} className="relative group h-full flex items-center">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={getLinkClass(isActive)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-current flex-shrink-0"
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
                        className={getLinkClass(isActive)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-current flex-shrink-0"
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
                      <ul className="w-56 bg-white border border-[#E2ECE8] rounded-2xl shadow-[0_12px_32px_rgba(11,22,18,0.08)] py-2.5 list-none m-0">
                        {item.submenu?.map((sub, sIdx) => {
                          const isSubActive =
                            (pathname === sub.href.split("#")[0] || (sub.href.split("#")[0] === "/" && pathname === "/")) &&
                            (activeHash === `#${sub.href.split("#")[1]}` || (!sub.href.split("#")[1] && activeHash === "#home"));

                          return (
                            <li key={sIdx}>
                              <Link
                                href={sub.href}
                                onClick={() => handleLinkClick(sub.href)}
                                className={`block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-200 ${
                                  isSubActive
                                    ? "text-[#1D9E75] bg-[#1D9E75]/5 font-bold"
                                    : "text-t-2 hover:text-[#1D9E75] hover:bg-[#E1F5EE]/30"
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
          </div>

          {/* Right Side Actions / Hamburger */}
          <div className="h-full flex items-center justify-end shrink-0">
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center lg:gap-2.5 xl:gap-4.5 shrink-0">
              {mounted && (
                <Link
                  href="/login"
                  className="h-10 px-3 xl:px-4 flex items-center justify-center text-sm font-semibold text-[#1D9E75] border border-[#1D9E75]/30 rounded-lg hover:bg-[#E1F5EE]/20 transition-all cursor-pointer focus-visible:outline-none whitespace-nowrap"
                >
                  Sign In
                </Link>
              )}
              <Link
                href="#partnership-inquiry"
                className="h-10 px-4 xl:px-6 flex items-center justify-center text-sm font-bold text-white rounded-lg bg-[#1D9E75] hover:bg-[#157C5C] shadow-[0_4px_12px_rgba(29,158,117,0.15)] hover:shadow-[0_8px_20px_rgba(29,158,117,0.25)] hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2 whitespace-nowrap"
              >
                Partner With Us
              </Link>
            </div>

            {/* Hamburger Menu Toggle (Mobile) */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex lg:hidden w-11 h-11 items-center justify-center cursor-pointer select-none rounded-lg hover:bg-[#E1F5EE]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D9E75] focus-visible:ring-offset-2 transition-colors duration-250 animate-fade-in"
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
            src="/assets/logo.png"
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
          {mounted && (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full h-11 flex items-center justify-center text-sm font-bold text-[#1D9E75] border border-[#1D9E75]/30 rounded-lg hover:bg-[#E1F5EE]/20 transition-all"
            >
              Sign In
            </Link>
          )}
          <Link
            href="#partnership-inquiry"
            onClick={() => setIsOpen(false)}
            className="w-full h-11 flex items-center justify-center text-sm font-bold text-white rounded-lg bg-[#1D9E75] hover:bg-[#157C5C] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
