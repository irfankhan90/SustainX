"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Sidebar Menu items list
interface SidebarItem {
  id: string;
  label: string;
  icon: string;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "energy", label: "Renewable Energy", icon: "⚡" },
  { id: "sustainability", label: "Sustainability Intelligence", icon: "🌱" },
  { id: "esg", label: "ESG Analytics", icon: "📊" },
  { id: "ai", label: "AI Insights", icon: "🤖" },
  { id: "advisory", label: "Strategic Advisory", icon: "📋" },
  { id: "projects", label: "Project Management", icon: "📈" },
  { id: "epc", label: "EPC Projects", icon: "🏗️" },
  { id: "training", label: "Training & Capacity Building", icon: "🎓" },
  { id: "partners", label: "Partnerships", icon: "👥" },
  { id: "reports", label: "Reports", icon: "📄" },
  { id: "settings", label: "Settings", icon: "⚙/" },
];

// Project item interface
interface ProjectItem {
  id: string;
  title: string;
  category: string;
  progress: number;
  status: "backlog" | "progress" | "review" | "completed";
  assignee: string;
}

// Training program interface
interface ProgramItem {
  id: string;
  title: string;
  category: string;
  enrolled: number;
  progress: number;
}

// Numerical ticker helper component
const AnimatedCount: React.FC<{ target: number; suffix?: string; prefix?: string; duration?: number; decimals?: number }> = ({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 1,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(progress * target);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  const formatted = value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  
  // Dynamic live fluctuations for energy meters
  const [liveSolar, setLiveSolar] = useState(482.4);
  const [liveWind, setLiveWind] = useState(389.2);

  // Kanban Projects state
  const [projects, setProjects] = useState<ProjectItem[]>([
    { id: "p1", title: "1.2GW Solar EPC Survey", category: "Solar EPC", progress: 35, status: "progress", assignee: "Rahul K." },
    { id: "p2", title: "ESG Disclosures Audit", category: "ESG Intelligence", progress: 10, status: "backlog", assignee: "Priya S." },
    { id: "p3", title: "Smart Grid Integration", category: "AI Analytics", progress: 75, status: "review", assignee: "Marc D." },
    { id: "p4", title: "Wind Turbine Commissioning", category: "Wind operations", progress: 100, status: "completed", assignee: "Anil M." },
    { id: "p5", title: "Carbon Footprint Baseline Assessment", category: "Sustainability", progress: 60, status: "progress", assignee: "Sarah L." },
    { id: "p6", title: "Executive ESG Certification Cohort", category: "Capacity Building", progress: 90, status: "review", assignee: "Dr. Dave" },
  ]);

  // Training Programs State
  const [programs, setPrograms] = useState<ProgramItem[]>([
    { id: "t1", title: "A1 — Renewable Energy Foundations", category: "Core Training", enrolled: 840, progress: 75 },
    { id: "t2", title: "A2 — Solar & Wind System Engineering", category: "Advanced Engineering", enrolled: 450, progress: 40 },
    { id: "t3", title: "A3 — Clean Energy Project Management (PMC)", category: "Project Management", enrolled: 320, progress: 90 },
    { id: "t4", title: "A4 — Executive Sustainability & ESG Leadership", category: "Executive ESG", enrolled: 232, progress: 15 },
  ]);

  // World Map active hub tooltip state
  const [activeHub, setActiveHub] = useState<string | null>(null);

  // Notifications List
  const notifications = [
    "Alert: Mumbai Solar Microgrid synchronized successfully.",
    "Updates: 45 enrollees registered for ESG Certification Program.",
    "Advisory: Strategic Sustainability Roadmap template updated.",
  ];

  // Simulating live telemetry updates
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveSolar((prev) => +(prev + (Math.random() - 0.5) * 4).toFixed(1));
      setLiveWind((prev) => +(prev + (Math.random() - 0.5) * 3).toFixed(1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Filter projects by search
  const filteredProjects = projects.filter((p) => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter programs by search
  const filteredPrograms = programs.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Kanban status update helper
  const moveProjectStatus = (id: string, nextStatus: "backlog" | "progress" | "review" | "completed") => {
    setProjects((prev) => 
      prev.map((p) => p.id === id ? { ...p, status: nextStatus, progress: nextStatus === "completed" ? 100 : p.progress } : p)
    );
  };

  // Add mock project
  const handleAddProject = () => {
    const newProj: ProjectItem = {
      id: `p${projects.length + 1}`,
      title: "New Capacity Building Program",
      category: "Advisory",
      progress: 0,
      status: "backlog",
      assignee: "User"
    };
    setProjects((prev) => [newProj, ...prev]);
  };

  // Add mock enrollees
  const handleRegisterParticipant = (id: string) => {
    setPrograms((prev) =>
      prev.map((p) => p.id === id ? { ...p, enrolled: p.enrolled + 1 } : p)
    );
  };

  return (
    <div className={`min-h-screen w-full flex font-sans ${darkMode ? "bg-[#090F0C] text-[#E0E8E4] dark" : "bg-[#F3F7F5] text-[#0B1612]"}`}>
      
      {/* SIDEBAR NAVIGATION PANEL */}
      <aside className={`w-64 shrink-0 flex flex-col justify-between p-5 border-r transition-all duration-300 ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
        <div>
          {/* Logo Branding */}
          <Link href="/" className="inline-flex items-center gap-[12px] mb-8">
            <img 
              src="/logo.jpg" 
              alt="GlobalPact Logo" 
              className="h-[48px] w-auto object-contain flex-shrink-0" 
            />
            <div className="font-syne text-[15px] font-bold tracking-tight leading-none text-[#0B1612] dark:text-white">
              GlobalPact <span className="text-[#1D9E75]">SustainX</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? "bg-[#1D9E75] text-white shadow-[0_4px_12px_rgba(29,158,117,0.2)]" 
                      : `text-[#3A5549] dark:text-[#A8C4BA] hover:bg-[#E1F5EE] dark:hover:bg-[#152520] hover:text-[#1D9E75]`
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card */}
        <div className={`p-3.5 rounded-2xl flex items-center gap-3 border ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
          <div className="w-9 h-9 rounded-full bg-[#1D9E75] flex items-center justify-center font-bold text-white text-xs">
            GP
          </div>
          <div className="overflow-hidden">
            <h4 className="font-syne text-xs font-bold text-[#0B1612] dark:text-white leading-none">GlobalPact Admin</h4>
            <span className="text-[10px] text-[#6B8C80] dark:text-[#A8C4BA] truncate block mt-1">globalpactholdings.in</span>
          </div>
        </div>
      </aside>

      {/* MAIN VIEWPORT WRAPPER */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* HEADER BAR */}
        <header className={`h-16 px-8 border-b flex items-center justify-between z-20 ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
          <div className="flex items-center gap-4 w-96">
            {/* Search Input */}
            <div className="relative w-full">
              <span className="absolute left-3 top-2.5 text-xs text-[#6B8C80]">🔍</span>
              <input
                type="text"
                placeholder={`Search metrics, projects, or training...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-1.5 rounded-xl border text-[13px] outline-none transition-all ${
                  darkMode 
                    ? "bg-[#14221D] border-[#1C2C26] text-white focus:border-[#1D9E75]" 
                    : "bg-[#F8FAF9] border-[#D0E8DE] focus:border-[#1D9E75]"
                }`}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                darkMode ? "border-[#1C2C26] hover:bg-[#14221D] text-white" : "border-[#D0E8DE] hover:bg-[#EEF4F1] text-[#0B1612]"
              }`}
              title="Toggle Theme"
            >
              <span>{darkMode ? "☀️" : "🌙"}</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`p-2 rounded-xl border relative transition-all cursor-pointer ${
                  darkMode ? "border-[#1C2C26] hover:bg-[#14221D] text-white" : "border-[#D0E8DE] hover:bg-[#EEF4F1] text-[#0B1612]"
                }`}
              >
                <span>🔔</span>
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white animate-pulse" />
              </button>

              {showNotifications && (
                <div className={`absolute right-0 mt-3 w-80 p-4 rounded-2xl shadow-xl border z-30 ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26] text-white" : "bg-white border-[#D0E8DE]"
                }`}>
                  <h4 className="font-syne text-xs font-bold text-[#1D9E75] mb-2.5 uppercase tracking-wide">Telemetry Alerts</h4>
                  <div className="flex flex-col gap-2.5">
                    {notifications.map((n, idx) => (
                      <div key={idx} className={`p-2 rounded-lg text-xs leading-relaxed ${darkMode ? "bg-[#14221D] hover:bg-[#1C2C26]" : "bg-[#F3F7F5] hover:bg-[#EEF4F1]"}`}>
                        {n}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Active Telemetry Widget */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E1F5EE] text-[#0F6E56] font-bold text-xs border border-[#B5D9CB]/40 animate-pulse">
              <span className="w-2 h-2 bg-[#1D9E75] rounded-full" />
              <span>ACTIVE SYSTEM</span>
            </div>
          </div>
        </header>

        {/* CONTAINER CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              
              {/* Header Title */}
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Executive Performance Overview
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  GlobalPact SustainX real-time sustainability ecosystem dashboard.
                </p>
              </div>

              {/* Executive Overview Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                
                {/* Card 1: Energy */}
                <div className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">⚡</span>
                    <span className="text-[10px] text-green-500 font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-full">+12.4%</span>
                  </div>
                  <h4 className="text-[10px] uppercase font-bold text-[#6B8C80] tracking-wider mb-1">Generated Output</h4>
                  <div className="text-xl font-bold font-syne text-[#0B1612] dark:text-white">
                    <AnimatedCount target={liveSolar + liveWind} decimals={1} suffix=" MWh" />
                  </div>
                </div>

                {/* Card 2: CO2 Reduction */}
                <div className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">🌱</span>
                    <span className="text-[10px] text-green-500 font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-full">-18.2%</span>
                  </div>
                  <h4 className="text-[10px] uppercase font-bold text-[#6B8C80] tracking-wider mb-1">Carbon Mitigated</h4>
                  <div className="text-xl font-bold font-syne text-[#0B1612] dark:text-white">
                    <AnimatedCount target={428.6} decimals={1} suffix=" Tons" />
                  </div>
                </div>

                {/* Card 3: ESG Score */}
                <div className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">📊</span>
                    <span className="text-[10px] text-green-500 font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-full">Grade A</span>
                  </div>
                  <h4 className="text-[10px] uppercase font-bold text-[#6B8C80] tracking-wider mb-1">ESG Performance</h4>
                  <div className="text-xl font-bold font-syne text-[#0B1612] dark:text-white">
                    <AnimatedCount target={92.4} decimals={1} suffix="/100" />
                  </div>
                </div>

                {/* Card 4: AI Insights */}
                <div className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">🤖</span>
                    <span className="text-[10px] text-[#1D9E75] font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-full">Optimal</span>
                  </div>
                  <h4 className="text-[10px] uppercase font-bold text-[#6B8C80] tracking-wider mb-1">AI Advisories</h4>
                  <div className="text-xl font-bold font-syne text-[#0B1612] dark:text-white">
                    <AnimatedCount target={14} decimals={0} suffix=" Active" />
                  </div>
                </div>

                {/* Card 5: Active PMC */}
                <div className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">📈</span>
                    <span className="text-[10px] text-[#1D9E75] font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-full">Grid Active</span>
                  </div>
                  <h4 className="text-[10px] uppercase font-bold text-[#6B8C80] tracking-wider mb-1">Total PMC/EPC</h4>
                  <div className="text-xl font-bold font-syne text-[#0B1612] dark:text-white">
                    <AnimatedCount target={projects.length} decimals={0} suffix=" Sites" />
                  </div>
                </div>

                {/* Card 6: Training Enrollees */}
                <div className={`p-5 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">🎓</span>
                    <span className="text-[10px] text-green-500 font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-full">+48 enr.</span>
                  </div>
                  <h4 className="text-[10px] uppercase font-bold text-[#6B8C80] tracking-wider mb-1">Certifications Issued</h4>
                  <div className="text-xl font-bold font-syne text-[#0B1612] dark:text-white">
                    <AnimatedCount target={programs.reduce((acc, p) => acc + p.enrolled, 0)} decimals={0} suffix=" Issued" />
                  </div>
                </div>

              </div>

              {/* Middle Section: ESG Center & Energy Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* ESG gauge panel */}
                <div className={`lg:col-span-5 p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-5">Sustainability Intelligence Center</h3>
                  
                  {/* Gauge Render */}
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="relative w-44 h-44 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="88" cy="88" r="70" fill="none" stroke="#E6EFEA" strokeWidth="12" />
                        <circle cx="88" cy="88" r="70" fill="none" stroke="#1D9E75" strokeWidth="12" strokeDasharray="440" strokeDashoffset="44" strokeLinecap="round" />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="font-syne text-3xl font-extrabold text-[#0B1612] dark:text-white">92.4</span>
                        <span className="text-[10px] font-bold text-[#1D9E75] uppercase mt-1 tracking-wider">Index Score</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 mt-6 text-center border-t border-[#EEF4F1] dark:border-[#152520] pt-5">
                    <div>
                      <div className="text-[10px] text-[#6B8C80]">Environmental</div>
                      <div className="font-bold text-[#1D9E75] mt-1">94.8%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6B8C80]">Social Audit</div>
                      <div className="font-bold text-blue-500 mt-1">89.2%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6B8C80]">Governance</div>
                      <div className="font-bold text-amber-500 mt-1">93.1%</div>
                    </div>
                  </div>
                </div>

                {/* Energy Chart Generation Panel */}
                <div className={`lg:col-span-7 p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white">Live Generation Operations</h3>
                    <div className="flex gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#1D9E75]" /><span>Solar ({liveSolar} MWh)</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /><span>Wind ({liveWind} MWh)</span></div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="w-full h-48 relative pt-4">
                    <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 500 150">
                      {/* Grid Lines */}
                      <g stroke="#EEF4F1" dark-stroke="#152520" strokeWidth="0.5" strokeDasharray="3 3">
                        <line x1="0" y1="30" x2="500" y2="30" />
                        <line x1="0" y1="75" x2="500" y2="75" />
                        <line x1="0" y1="120" x2="500" y2="120" />
                      </g>
                      
                      {/* Solar Generation line */}
                      <path d="M 0 110 C 60 70, 120 120, 180 60 C 240 40, 300 85, 360 45 C 420 50, 480 30, 500 10" stroke="#1D9E75" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Wind Generation line */}
                      <path d="M 0 130 C 60 110, 120 80, 180 90 C 240 60, 300 70, 360 55 C 420 40, 480 50, 500 25" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="2 2" strokeLinecap="round" />
                      
                      {/* Graph node dots */}
                      <circle cx="180" cy="60" r="4.5" fill="#ffffff" stroke="#1D9E75" strokeWidth="2" />
                      <circle cx="360" cy="45" r="4.5" fill="#ffffff" stroke="#1D9E75" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Bottom Section: Sustainability Map & AI Insights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* SVG Interactive Map */}
                <div className={`lg:col-span-7 p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-2">Sustainability Map</h3>
                  <p className="text-xs text-[#6B8C80] mb-5">Click on active project nodes to view deployment parameters.</p>

                  <div className="w-full h-64 rounded-2xl overflow-hidden bg-sky-50/20 dark:bg-black/30 border border-[#D0E8DE] dark:border-[#1C2C26] relative p-1.5 flex items-center justify-center">
                    <svg className="w-full h-full max-w-[480px]" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* World Continent Path outlines */}
                      <g fill="#E1F5EE" stroke="#B5D9CB" strokeWidth="0.8" opacity="0.8" className="dark:fill-[#152520] dark:stroke-[#1C2C26]">
                        {/* Americas */}
                        <path d="M40,30 L80,30 L95,65 L85,90 L92,120 L80,150 L65,185 L50,170 L55,140 L45,115 L25,100 L15,80 L25,50 Z" />
                        {/* Eurasia / Africa */}
                        <path d="M150,40 L195,30 L260,25 L320,40 L350,75 L320,95 L275,100 L250,130 L220,165 L200,195 L175,170 L150,155 L125,140 L115,110 L125,75 Z" />
                        {/* Australia */}
                        <path d="M320,150 L360,150 L370,175 L345,185 L310,170 Z" />
                      </g>

                      {/* India Hub (Mumbai) */}
                      <g 
                        className="cursor-pointer" 
                        onMouseEnter={() => setActiveHub("mumbai")}
                        onMouseLeave={() => setActiveHub(null)}
                      >
                        <circle cx="215" cy="98" r="9" fill="#1D9E75" className="pulse-glow-effect" style={{ transformOrigin: "215px 98px" }} />
                        <circle cx="215" cy="98" r="4.5" fill="#ffffff" stroke="#1D9E75" strokeWidth="1.5" />
                      </g>

                      {/* Middle East Hub (Doha) */}
                      <g 
                        className="cursor-pointer" 
                        onMouseEnter={() => setActiveHub("doha")}
                        onMouseLeave={() => setActiveHub(null)}
                      >
                        <circle cx="195" cy="92" r="8" fill="#3B82F6" className="pulse-glow-effect" style={{ transformOrigin: "195px 92px" }} />
                        <circle cx="195" cy="92" r="4" fill="#ffffff" stroke="#3B82F6" strokeWidth="1.5" />
                      </g>

                      {/* USA Hub (Canton) */}
                      <g 
                        className="cursor-pointer" 
                        onMouseEnter={() => setActiveHub("canton")}
                        onMouseLeave={() => setActiveHub(null)}
                      >
                        <circle cx="78" cy="62" r="8" fill="#C9A84C" className="pulse-glow-effect" style={{ transformOrigin: "78px 62px" }} />
                        <circle cx="78" cy="62" r="4" fill="#ffffff" stroke="#C9A84C" strokeWidth="1.5" />
                      </g>
                    </svg>

                    {/* Tooltip Overlay */}
                    {activeHub && (
                      <div className={`absolute bottom-5 left-5 p-3.5 rounded-xl shadow-xl border z-20 max-w-[260px] animate-fadeUp ${
                        darkMode ? "bg-[#0E1613] border-[#1C2C26] text-white" : "bg-white border-[#D0E8DE]"
                      }`}>
                        {activeHub === "mumbai" && (
                          <>
                            <h5 className="font-syne font-bold text-xs text-[#1D9E75] mb-1">Mumbai Headquarters</h5>
                            <p className="text-[11px] text-[#6B8C80] leading-relaxed">India Solar EPC operations lead, 2,500 certifications issued, primary Advisory Center.</p>
                          </>
                        )}
                        {activeHub === "canton" && (
                          <>
                            <h5 className="font-syne font-bold text-xs text-amber-500 mb-1">Canton Innovation Hub</h5>
                            <p className="text-[11px] text-[#6B8C80] leading-relaxed">Advanced AI microgrid deployment testing,clean tech R&D hub in North America.</p>
                          </>
                        )}
                        {activeHub === "doha" && (
                          <>
                            <h5 className="font-syne font-bold text-xs text-blue-500 mb-1">Doha Deployment Center</h5>
                            <p className="text-[11px] text-[#6B8C80] leading-relaxed">GCC frontline logistics, Saudi Arabia & UAE Vision 2030 wind turbine planning.</p>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* AI Insights & recommendations */}
                <div className={`lg:col-span-5 p-6 rounded-3xl border flex flex-col justify-between ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <div>
                    <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-5">AI Optimization Insights</h3>
                    
                    <div className="space-y-4">
                      
                      {/* Insight 1 */}
                      <div className={`p-4 rounded-2xl border flex gap-3.5 ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                        <div className="w-9 h-9 rounded-xl bg-brand-gxl flex items-center justify-center text-base">🤖</div>
                        <div className="flex-1">
                          <h5 className="font-syne text-xs font-bold text-[#1D9E75] mb-0.5">Peak Energy Shifting Recommendation</h5>
                          <p className="text-[11.5px] text-[#6B8C80] leading-relaxed">AI recommends charging local storage batteries by 12% between 11 AM to 2 PM to offset peak evening distribution loads.</p>
                        </div>
                      </div>

                      {/* Insight 2 */}
                      <div className={`p-4 rounded-2xl border flex gap-3.5 ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-500 text-base">📈</div>
                        <div className="flex-1">
                          <h5 className="font-syne text-xs font-bold text-blue-500 mb-0.5">ESG Risk Mitigation Warning</h5>
                          <p className="text-[11.5px] text-[#6B8C80] leading-relaxed">ESG emissions variance detected at Sector-3 wind fleet. Performance index forecast to drop by 2.1% if unresolved.</p>
                        </div>
                      </div>

                    </div>
                  </div>

                  <button className="w-full mt-5 py-3 rounded-xl bg-[#1D9E75] text-white font-bold text-xs hover:bg-[#0F6E56] transition-colors cursor-pointer">
                    Apply AI Load Balancer
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: RENEWABLE ENERGY OPERATIONS */}
          {activeTab === "energy" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Renewable Energy Operations
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Manage Solar arrays, Wind generation units, and Smart Grid integration.
                </p>
              </div>

              {/* Generation Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Solar card */}
                <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-syne text-sm font-bold text-[#6B8C80]">SOLAR GRID</span>
                    <span className="text-lg">☀️</span>
                  </div>
                  <div className="text-3xl font-bold font-syne text-[#1D9E75]">{liveSolar} MWh</div>
                  <p className="text-xs text-[#6B8C80] mt-2">Generating capacity at 94.2% efficiency. Sunlight reflection optimal.</p>
                </div>

                {/* Wind Card */}
                <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-syne text-sm font-bold text-[#6B8C80]">WIND FLEETS</span>
                    <span className="text-lg">🌬️</span>
                  </div>
                  <div className="text-3xl font-bold font-syne text-blue-500">{liveWind} MWh</div>
                  <p className="text-xs text-[#6B8C80] mt-2">Rotors active. Wind speeds at Canton and Doha are averaging 18 km/h.</p>
                </div>

                {/* Storage Card */}
                <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-syne text-sm font-bold text-[#6B8C80]">ENERGY STORAGE</span>
                    <span className="text-lg">🔋</span>
                  </div>
                  <div className="text-3xl font-bold font-syne text-amber-500">842.1 MWh</div>
                  <p className="text-xs text-[#6B8C80] mt-2">Active Tesla Powerpack charge at 84% capacity. Supplying backup grid.</p>
                </div>

              </div>

              {/* Energy transmission and flow panel */}
              <div className={`p-8 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">Grid Performance & Flow</h3>
                
                {/* SVG Power Grid flow */}
                <div className="w-full max-w-4xl mx-auto h-52 bg-slate-900 rounded-2xl relative overflow-hidden flex items-center justify-center p-6">
                  {/* Shifting grid lines */}
                  <div className="absolute inset-0 bg-[#0E1613]/80 opacity-40 animate-pulse pointer-events-none" />

                  <svg className="w-full h-full max-w-[650px] z-10" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Solar node */}
                    <g transform="translate(60, 60)">
                      <circle cx="0" cy="0" r="22" fill="#14221D" stroke="#1D9E75" strokeWidth="2" />
                      <text x="-12" y="4" fill="#1D9E75" fontSize="11" fontWeight="bold">SOLAR</text>
                    </g>

                    {/* Wind node */}
                    <g transform="translate(200, 60)">
                      <circle cx="0" cy="0" r="22" fill="#0A1E2C" stroke="#3B82F6" strokeWidth="2" />
                      <text x="-12" y="4" fill="#3B82F6" fontSize="11" fontWeight="bold">WIND</text>
                    </g>

                    {/* Storage node */}
                    <g transform="translate(340, 60)">
                      <circle cx="0" cy="0" r="22" fill="#201A10" stroke="#C9A84C" strokeWidth="2" />
                      <text x="-14" y="4" fill="#C9A84C" fontSize="11" fontWeight="bold">STORE</text>
                    </g>

                    {/* Output Smart grid */}
                    <g transform="translate(480, 60)">
                      <rect x="-24" y="-24" width="48" height="48" rx="8" fill="#1E1428" stroke="#A78BFA" strokeWidth="2" />
                      <text x="-14" y="4" fill="#A78BFA" fontSize="11" fontWeight="bold">GRID</text>
                    </g>

                    {/* Connection energy lines with flow dots */}
                    <line x1="82" y1="60" x2="178" y2="60" stroke="#1D9E75" strokeWidth="2" strokeDasharray="6 4" className="energy-flow-line" />
                    <line x1="222" y1="60" x2="318" y2="60" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" className="energy-flow-line" />
                    <line x1="362" y1="60" x2="456" y2="60" stroke="#C9A84C" strokeWidth="2" strokeDasharray="6 4" className="energy-flow-line" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SUSTAINABILITY INTELLIGENCE / ESG */}
          {(activeTab === "sustainability" || activeTab === "esg") && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Sustainability Intelligence & ESG
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Track carbon footprints, greenhouse gas protocols, social parameters, and governance audits.
                </p>
              </div>

              {/* Emissions grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Carbon Footprint details */}
                <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">Carbon Footprint Accounting</h3>
                  
                  <div className="space-y-5">
                    {/* Scope 1 */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Scope 1 (Direct Emissions)</span>
                        <span className="text-[#1D9E75]">120 Tons CO2e</span>
                      </div>
                      <div className="w-full h-3.5 bg-brand-gxl/30 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1D9E75] rounded-full" style={{ width: "35%" }} />
                      </div>
                    </div>

                    {/* Scope 2 */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Scope 2 (Indirect Grid Purchases)</span>
                        <span className="text-blue-500">210 Tons CO2e</span>
                      </div>
                      <div className="w-full h-3.5 bg-blue-100/30 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "55%" }} />
                      </div>
                    </div>

                    {/* Scope 3 */}
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>Scope 3 (Supply Chain Value)</span>
                        <span className="text-amber-500">98 Tons CO2e</span>
                      </div>
                      <div className="w-full h-3.5 bg-amber-100/30 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full" style={{ width: "25%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ESG Breakdown Audit status */}
                <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">ESG Audit Scorecards</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className={`p-4 rounded-2xl border text-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <div className="text-2xl mb-1">🌿</div>
                      <h4 className="text-xs font-bold uppercase text-[#6B8C80]">Environmental</h4>
                      <div className="text-lg font-extrabold text-[#1D9E75] mt-1.5">94.8%</div>
                    </div>

                    <div className={`p-4 rounded-2xl border text-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <div className="text-2xl mb-1">🤝</div>
                      <h4 className="text-xs font-bold uppercase text-[#6B8C80]">Social Audit</h4>
                      <div className="text-lg font-extrabold text-blue-500 mt-1.5">89.2%</div>
                    </div>

                    <div className={`p-4 rounded-2xl border text-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <div className="text-2xl mb-1">⚖️</div>
                      <h4 className="text-xs font-bold uppercase text-[#6B8C80]">Governance</h4>
                      <div className="text-lg font-extrabold text-amber-500 mt-1.5">93.1%</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B8C80] leading-relaxed mt-6">
                    SustainX algorithms verify operational reports according to GHG Protocol, SASB, and GRI standards dynamically.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: AI INSIGHTS */}
          {activeTab === "ai" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  AI-Powered Sustainability Insights
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Deep learning forecasts, load balancing models, and risk analysis metrics.
                </p>
              </div>

              {/* Futuristic AI Insights cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* AI Forecast */}
                <div className={`p-6 rounded-3xl border relative overflow-hidden ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <span className="absolute right-6 top-6 text-3xl opacity-20">📈</span>
                  <h4 className="font-syne text-xs font-bold text-[#1D9E75] mb-2 uppercase">Sustainability Forecasting</h4>
                  <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-4">Carbon Offsetting Projections</h3>
                  <p className="text-xs text-[#6B8C80] leading-relaxed mb-6">
                    Based on solar array expansions at Mumbai HQ and wind fleets in GCC, carbon mitigation rates are forecast to increase by **48%** within the next 180 business days.
                  </p>
                  <div className="w-full bg-[#EEF4F1] dark:bg-[#14221D] h-20 rounded-xl flex items-center justify-center p-3">
                    <span className="text-[11px] font-bold text-[#1D9E75] uppercase">Target Mitigated: 630 Tons CO2e</span>
                  </div>
                </div>

                {/* Risk Analysis */}
                <div className={`p-6 rounded-3xl border relative overflow-hidden ${
                  darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"
                }`}>
                  <span className="absolute right-6 top-6 text-3xl opacity-20">⚠️</span>
                  <h4 className="font-syne text-xs font-bold text-amber-500 mb-2 uppercase">Risk Analysis Meter</h4>
                  <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-4">Smart Grid Load Strain</h3>
                  <p className="text-xs text-[#6B8C80] leading-relaxed mb-6">
                    Active predictive analysis alerts to a high probability of strain at District-4 microgrid during peak hours (6 PM - 9 PM). Recommends automatic EV station power shifting.
                  </p>
                  <div className="w-full bg-amber-50 dark:bg-[#201A10] h-20 rounded-xl flex items-center justify-center p-3">
                    <span className="text-[11px] font-bold text-amber-500 uppercase">Warning Level: Moderate (65% Probability)</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 5: STRATEGIC ADVISORY */}
          {activeTab === "advisory" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Strategic Advisory Dashboard
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Manage Advisory roadmaps, ESG compliance strategies, and client engagements.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">Active Advisory Engagements</h3>
                
                <div className="space-y-4">
                  {/* Roadmaps */}
                  <div className={`p-4 rounded-xl border flex justify-between items-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div>
                      <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">GCC Net-Zero Policy Roadmap</h4>
                      <span className="text-[11px] text-[#6B8C80]">Client: Energy Commission Doha</span>
                    </div>
                    <span className="text-xs font-bold text-green-500 bg-[#E1F5EE] px-3 py-1 rounded-full">Phase 3 Active</span>
                  </div>

                  <div className={`p-4 rounded-xl border flex justify-between items-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div>
                      <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">Corporation ESG Disclosure Plan</h4>
                      <span className="text-[11px] text-[#6B8C80]">Client: Auto Manufacturing Canton</span>
                    </div>
                    <span className="text-xs font-bold text-blue-500 bg-blue-100/30 px-3 py-1 rounded-full">Auditing Draft</span>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PROJECT MANAGEMENT / EPC */}
          {(activeTab === "projects" || activeTab === "epc") && (
            <div className="space-y-8 animate-fadeUp">
              
              {/* Kanban Title and Controls */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                    Project Management & EPC Projects
                  </h1>
                  <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                    Track Solar install site surveys, turbine commissioning, and PMC milestones.
                  </p>
                </div>
                <button
                  onClick={handleAddProject}
                  className="px-5 py-2.5 rounded-xl bg-[#1D9E75] text-white font-bold text-xs hover:bg-[#0F6E56] transition-colors cursor-pointer self-start"
                >
                  + Add Project Card
                </button>
              </div>

              {/* Kanban Board Container */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                
                {/* Column 1: Backlog */}
                <div className={`p-4 rounded-2xl border flex flex-col gap-4 ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center pb-2 border-b border-[#EEF4F1] dark:border-[#152520]">
                    <span className="font-syne text-xs font-bold text-[#6B8C80] uppercase tracking-wider">Backlog</span>
                    <span className="w-5 h-5 bg-[#EEF4F1] dark:bg-[#152520] rounded-full flex items-center justify-center text-[10px] font-bold text-[#6B8C80]">
                      {filteredProjects.filter(p => p.status === "backlog").length}
                    </span>
                  </div>

                  {filteredProjects.filter(p => p.status === "backlog").map((p) => (
                    <div key={p.id} className={`p-4 rounded-xl border relative shadow-sm ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-md font-bold uppercase">{p.category}</span>
                      <h4 className="font-syne text-xs font-bold mt-2 text-[#0B1612] dark:text-white">{p.title}</h4>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[10px] text-[#6B8C80]">Assignee: {p.assignee}</span>
                        <button
                          onClick={() => moveProjectStatus(p.id, "progress")}
                          className="text-[10px] text-[#1D9E75] font-bold hover:underline cursor-pointer"
                        >
                          Start &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2: In Progress */}
                <div className={`p-4 rounded-2xl border flex flex-col gap-4 ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center pb-2 border-b border-[#EEF4F1] dark:border-[#152520]">
                    <span className="font-syne text-xs font-bold text-blue-500 uppercase tracking-wider">In Progress</span>
                    <span className="w-5 h-5 bg-[#EEF4F1] dark:bg-[#152520] rounded-full flex items-center justify-center text-[10px] font-bold text-[#6B8C80]">
                      {filteredProjects.filter(p => p.status === "progress").length}
                    </span>
                  </div>

                  {filteredProjects.filter(p => p.status === "progress").map((p) => (
                    <div key={p.id} className={`p-4 rounded-xl border relative shadow-sm ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-md font-bold uppercase">{p.category}</span>
                      <h4 className="font-syne text-xs font-bold mt-2 text-[#0B1612] dark:text-white">{p.title}</h4>
                      
                      {/* progress bar */}
                      <div className="w-full h-1.5 bg-[#EEF4F1] dark:bg-black/30 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${p.progress}%` }} />
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[10px] text-[#6B8C80]">Assignee: {p.assignee}</span>
                        <button
                          onClick={() => moveProjectStatus(p.id, "review")}
                          className="text-[10px] text-[#1D9E75] font-bold hover:underline cursor-pointer"
                        >
                          Submit Review &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3: In Review */}
                <div className={`p-4 rounded-2xl border flex flex-col gap-4 ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center pb-2 border-b border-[#EEF4F1] dark:border-[#152520]">
                    <span className="font-syne text-xs font-bold text-amber-500 uppercase tracking-wider">In Review</span>
                    <span className="w-5 h-5 bg-[#EEF4F1] dark:bg-[#152520] rounded-full flex items-center justify-center text-[10px] font-bold text-[#6B8C80]">
                      {filteredProjects.filter(p => p.status === "review").length}
                    </span>
                  </div>

                  {filteredProjects.filter(p => p.status === "review").map((p) => (
                    <div key={p.id} className={`p-4 rounded-xl border relative shadow-sm ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-md font-bold uppercase">{p.category}</span>
                      <h4 className="font-syne text-xs font-bold mt-2 text-[#0B1612] dark:text-white">{p.title}</h4>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[10px] text-[#6B8C80]">Assignee: {p.assignee}</span>
                        <button
                          onClick={() => moveProjectStatus(p.id, "completed")}
                          className="text-[10px] text-[#1D9E75] font-bold hover:underline cursor-pointer"
                        >
                          Approve &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 4: Completed */}
                <div className={`p-4 rounded-2xl border flex flex-col gap-4 ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                  <div className="flex justify-between items-center pb-2 border-b border-[#EEF4F1] dark:border-[#152520]">
                    <span className="font-syne text-xs font-bold text-[#1D9E75] uppercase tracking-wider">Completed</span>
                    <span className="w-5 h-5 bg-[#EEF4F1] dark:bg-[#152520] rounded-full flex items-center justify-center text-[10px] font-bold text-[#6B8C80]">
                      {filteredProjects.filter(p => p.status === "completed").length}
                    </span>
                  </div>

                  {filteredProjects.filter(p => p.status === "completed").map((p) => (
                    <div key={p.id} className={`p-4 rounded-xl border relative shadow-sm ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                      <span className="text-[10px] bg-green-500/10 text-[#1D9E75] px-2 py-0.5 rounded-md font-bold uppercase">{p.category}</span>
                      <h4 className="font-syne text-xs font-bold mt-2 text-[#0B1612] dark:text-white">{p.title}</h4>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-[10px] text-[#6B8C80]">Assignee: {p.assignee}</span>
                        <span className="text-[10px] text-green-500 font-bold bg-[#E1F5EE] px-2 py-0.5 rounded-md">100% Mitigated</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}

          {/* TAB 7: TRAINING & CAPACITY BUILDING */}
          {activeTab === "training" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Training & Capacity Building Center
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Clean energy foundations, solar design eng., and advisory leadership certifications.
                </p>
              </div>

              {/* Programs listing */}
              <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">Certified Educational Curriculums</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPrograms.map((prog) => (
                    <div key={prog.id} className={`p-5 rounded-2xl border flex flex-col justify-between ${
                      darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"
                    }`}>
                      <div>
                        <span className="text-[10px] font-bold text-[#1D9E75] uppercase">{prog.category}</span>
                        <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white mt-1.5">{prog.title}</h4>
                        <div className="flex justify-between text-xs font-bold text-[#6B8C80] mt-4 mb-2">
                          <span>Total Enrolled enrollees</span>
                          <span>{prog.enrolled} Participants</span>
                        </div>
                        
                        {/* progress bar */}
                        <div className="w-full h-2 bg-[#EEF4F1] dark:bg-black/30 rounded-full overflow-hidden">
                          <div className="h-full bg-[#1D9E75]" style={{ width: `${prog.progress}%` }} />
                        </div>
                      </div>

                      <button
                        onClick={() => handleRegisterParticipant(prog.id)}
                        className="w-full mt-5 py-2.5 rounded-xl border border-[#B5D9CB] dark:border-[#1C2C26] text-xs font-bold text-[#1D9E75] hover:bg-brand-gxl transition-all cursor-pointer"
                      >
                        Register New Participant
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: PARTNERSHIPS */}
          {activeTab === "partners" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Corporate Partnerships
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Global clean energy project partners, NGOs, Auto giants, and ESG developers directory.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Partner 1 */}
                  <div className={`p-5 rounded-2xl border text-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div className="w-12 h-12 rounded-full bg-[#1D9E75]/10 flex items-center justify-center mx-auto text-xl mb-3">🏢</div>
                    <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">GlobalPact International</h4>
                    <span className="text-[10px] text-[#6B8C80] block mt-1">Holding Group Entity</span>
                  </div>

                  {/* Partner 2 */}
                  <div className={`p-5 rounded-2xl border text-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto text-xl mb-3">⚡</div>
                    <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">Schoon Energy Corp</h4>
                    <span className="text-[10px] text-[#6B8C80] block mt-1">Operational Joint Venture</span>
                  </div>

                  {/* Partner 3 */}
                  <div className={`p-5 rounded-2xl border text-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto text-xl mb-3">🎓</div>
                    <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">Automotive ESG Coalition</h4>
                    <span className="text-[10px] text-[#6B8C80] block mt-1">R&D clean tech Alliance</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: REPORTS */}
          {activeTab === "reports" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Compliance Reports
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Download compliance documentation matching GRI, SASB, and GHG protocols.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">Generated Reports</h3>

                <div className="space-y-4">
                  {/* report row */}
                  <div className={`p-4 rounded-xl border flex justify-between items-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📄</span>
                      <div>
                        <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">Q1 Carbon Account Summary.pdf</h4>
                        <span className="text-[11px] text-[#6B8C80]">Generated: 2 days ago · 1.4 MB</span>
                      </div>
                    </div>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#E1F5EE] text-[#1D9E75] font-bold text-xs hover:bg-[#1D9E75] hover:text-white transition-all cursor-pointer">
                      Download
                    </button>
                  </div>

                  <div className={`p-4 rounded-xl border flex justify-between items-center ${darkMode ? "bg-[#14221D] border-[#1C2C26]" : "bg-[#F8FAF9] border-[#D0E8DE]"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📄</span>
                      <div>
                        <h4 className="font-syne text-sm font-bold text-[#0B1612] dark:text-white">Corporate ESG Audit Certification.pdf</h4>
                        <span className="text-[11px] text-[#6B8C80]">Generated: 1 week ago · 3.2 MB</span>
                      </div>
                    </div>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#E1F5EE] text-[#1D9E75] font-bold text-xs hover:bg-[#1D9E75] hover:text-white transition-all cursor-pointer">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-8 animate-fadeUp">
              <div>
                <h1 className="font-syne text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-1 text-[#0B1612] dark:text-white">
                  Dashboard Settings
                </h1>
                <p className="text-sm text-[#3A5549] dark:text-[#A8C4BA]">
                  Configure your telemetry thresholds, reporting formats, and active parameters.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${darkMode ? "bg-[#0E1613] border-[#1C2C26]" : "bg-white border-[#D0E8DE]"}`}>
                <h3 className="font-syne text-lg font-bold text-[#0B1612] dark:text-white mb-6">General Preferences</h3>

                <div className="space-y-5 max-w-md">
                  {/* toggle dark */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xs font-bold text-[#0B1612] dark:text-white">Toggle System Dark Theme</h4>
                      <span className="text-[10px] text-[#6B8C80]">Adjust screen brightness dynamically</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      className="w-9 h-5 rounded-full bg-slate-200 checked:bg-[#1D9E75] transition-all cursor-pointer"
                    />
                  </div>

                  {/* input update phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-[#6B8C80] uppercase">Official Mumbai Contact Number</label>
                    <input
                      type="text"
                      defaultValue="+91-22-40167394"
                      disabled
                      className={`px-3.5 py-2.5 rounded-lg border text-xs font-bold cursor-not-allowed ${
                        darkMode ? "bg-[#14221D] border-[#1C2C26] text-white" : "bg-[#F8FAF9] border-[#D0E8DE]"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}
