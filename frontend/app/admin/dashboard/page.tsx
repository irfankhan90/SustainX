"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Inquiry {
  id: number;
  full_name: string;
  organization: string;
  email: string;
  phone: string;
  inquiry_type: string;
  message: string;
  status: string;
  ip_address?: string;
  created_at: string;
}

interface Stats {
  totalInquiries: number;
  newInquiries: number;
  contactRequests: number;
  todayInquiries: number;
  partnerRequests: number;
  trainingEnquiries: number;
}

const categories = [
  "All",
  "Strategic Partnership",
  "Develop With SustainX",
  "Accelerate Transformation",
  "Request Strategic Advisory",
  "Discuss a Project Opportunity",
  "Access Energy Trading Services",
  "Strategic Advisory",
  "Project Management",
  "Renewable Energy & EPC",
  "Capacity Building & Training",
  "Other"
];

const statuses = ["All", "New", "Pending", "Resolved"];

export default function AdminDashboardPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalInquiries: 0,
    newInquiries: 0,
    contactRequests: 0,
    todayInquiries: 0,
    partnerRequests: 0,
    trainingEnquiries: 0
  });

  // UI filters & search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedDateRange, setSelectedDateRange] = useState("All");

  // Selected Detail Modal
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);

  // Authentication Guards
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // UI States
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Sidebar navigation selection
  const [sidebarTab, setSidebarTab] = useState("Dashboard");

  useEffect(() => {
    // Perform authentication check client-side
    const storedUser = localStorage.getItem("sustainx_user");
    const storedToken = localStorage.getItem("sustainx_token");

    if (storedUser && storedToken) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.role === "ADMIN") {
          setIsAdmin(true);
          setToken(storedToken);
        } else {
          setIsAdmin(false);
        }
      } catch {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, []);

  // Redirect if access is denied
  useEffect(() => {
    if (isAdmin === false) {
      window.location.href = "/admin/login";
    }
  }, [isAdmin]);

  // Fetch Dashboard Stats & Inquiries
  const fetchDashboardData = async () => {
    if (isAdmin !== true || !token) return;

    setIsLoading(true);
    setErrorMsg("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app";
      
      // Build queries for list endpoint
      const params = new URLSearchParams();
      if (selectedCategory !== "All") params.append("category", selectedCategory);
      if (selectedStatus !== "All") params.append("status", selectedStatus);
      if (selectedDateRange !== "All") params.append("dateRange", selectedDateRange);
      if (searchQuery.trim() !== "") params.append("search", searchQuery.trim());

      // Concurrent fetch stats and inquiries list
      const [statsRes, listRes] = await Promise.all([
        fetch(`${apiUrl}/api/admin/dashboard`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }),
        fetch(`${apiUrl}/api/admin/inquiries?${params.toString()}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        })
      ]);

      const statsResult = await statsRes.json();
      const listResult = await listRes.json();

      if (statsRes.ok && statsResult.status === "success") {
        setStats(statsResult.data.stats);
      }
      if (listRes.ok && listResult.status === "success") {
        setInquiries(listResult.data.inquiries);
      } else {
        setErrorMsg(listResult.message || "Failed to fetch inquiry streams.");
      }
    } catch {
      setErrorMsg("Failed to connect to the administration server. Please verify your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger loading when filters, queries, or auth states change
  useEffect(() => {
    fetchDashboardData();
  }, [isAdmin, token, selectedCategory, selectedStatus, selectedDateRange]);

  // Handle inquiry status update
  const handleUpdateStatus = async (inquiryId: number, newStatus: string) => {
    if (!token) return;
    setIsUpdatingStatus(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app";
      const response = await fetch(`${apiUrl}/api/admin/inquiries/${inquiryId}/status`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus })
      });
      const result = await response.json();
      if (response.ok && result.status === "success") {
        // Refresh local data list and active details
        if (activeInquiry && activeInquiry.id === inquiryId) {
          setActiveInquiry({ ...activeInquiry, status: newStatus });
        }
        await fetchDashboardData();
      } else {
        alert(result.message || "Failed to update status.");
      }
    } catch {
      alert("Failed to reach server. Please try again.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Handle inquiry deletion
  const handleDeleteInquiry = async (inquiryId: number) => {
    if (!token) return;
    if (!confirm("Are you sure you want to permanently delete this inquiry?")) return;
    
    setIsDeleting(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app";
      const response = await fetch(`${apiUrl}/api/admin/inquiries/${inquiryId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      if (response.ok && result.status === "success") {
        setActiveInquiry(null);
        await fetchDashboardData();
      } else {
        alert(result.message || "Failed to delete inquiry.");
      }
    } catch {
      alert("Failed to reach server. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("sustainx_token");
    localStorage.removeItem("sustainx_user");
    window.location.href = "/admin/login";
  };

  // Loading state when checking authentication
  if (isAdmin === null) {
    return (
      <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-g border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Denied layout
  if (isAdmin === false) {
    return null; // Redirect logic is running in useEffect
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex font-sans">
      {/* Sidebar Layout Component */}
      <aside className="w-64 bg-white border-r border-[#D0E8DE]/60 flex flex-col fixed inset-y-0 left-0 z-30 shadow-sm">
        {/* Brand Header */}
        <div className="h-20 border-b border-[#EEF4F1] flex items-center px-6">
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={34} 
              height={34} 
              className="h-8.5 w-auto object-contain rounded-md"
            />
            <div className="font-syne text-[17px] font-extrabold text-[#0A1628]">
              GlobalPact <span className="text-[#0F8B6D] font-extrabold">SustainX</span>
            </div>
            <span className="text-[9px] font-bold tracking-widest bg-brand-gxl text-[#0F8B6D] px-1.5 py-0.5 rounded border border-brand-gll/20 uppercase">
              Adm
            </span>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <button
            onClick={() => setSidebarTab("Dashboard")}
            className={`w-full h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              sidebarTab === "Dashboard"
                ? "bg-[#0F8B6D] text-white shadow-sm"
                : "text-t-2 hover:bg-[#EEF4F1]/60"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
              <rect x="3" y="3" width="7" height="9" rx="1" />
              <rect x="14" y="3" width="7" height="5" rx="1" />
              <rect x="14" y="12" width="7" height="9" rx="1" />
              <rect x="3" y="16" width="7" height="5" rx="1" />
            </svg>
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setSidebarTab("Inquiries")}
            className={`w-full h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer relative ${
              sidebarTab === "Inquiries"
                ? "bg-[#0F8B6D] text-white shadow-sm"
                : "text-t-2 hover:bg-[#EEF4F1]/60"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Inquiries</span>
            {stats.newInquiries > 0 && (
              <span className="absolute right-4 text-[10px] font-extrabold bg-[#E64A19] text-white w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {stats.newInquiries}
              </span>
            )}
          </button>

          <div className="pt-4 pb-2 border-t border-[#EEF4F1] mt-4">
            <span className="px-4 text-[10px] font-bold text-t-3 uppercase tracking-widest block">Coming Soon</span>
          </div>

          <div className="w-full h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold text-t-3/60 cursor-not-allowed select-none">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Partner Requests</span>
          </div>

          <div className="w-full h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold text-t-3/60 cursor-not-allowed select-none">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            <span>Training Enquiries</span>
          </div>

          <div className="w-full h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold text-t-3/60 cursor-not-allowed select-none">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M2 10h20" />
            </svg>
            <span>Newsletter</span>
          </div>

          <div className="pt-4 border-t border-[#EEF4F1] mt-4" />

          <button
            onClick={() => setSidebarTab("Settings")}
            className={`w-full h-11 flex items-center gap-3.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              sidebarTab === "Settings"
                ? "bg-[#0F8B6D] text-white shadow-sm"
                : "text-t-2 hover:bg-[#EEF4F1]/60"
            }`}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2]">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>Settings</span>
          </button>
        </nav>

        {/* Sidebar Footer Logout */}
        <div className="p-4 border-t border-[#EEF4F1] bg-[#F8FAF9]">
          <button
            onClick={handleLogout}
            className="w-full h-11 flex items-center justify-center gap-3 px-4 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-100 transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2]">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Sign Out Terminal</span>
          </button>
        </div>
      </aside>

      {/* Main content layout container */}
      <div className="flex-1 pl-64 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-[#D0E8DE]/60 flex items-center justify-between px-8 sticky top-0 z-20 shadow-sm">
          <div>
            <h1 className="font-syne text-[20px] font-extrabold text-[#0A1628]">
              {sidebarTab === "Dashboard" ? "Enterprise Operations Dashboard" : sidebarTab === "Inquiries" ? "Customer Inquiry Streams" : sidebarTab}
            </h1>
            <p className="text-[11px] text-t-3">
              {sidebarTab === "Dashboard" ? "Real-time key statistics and database metrics overview." : "Filter, search, and manage customer inquiries."}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={fetchDashboardData}
              className="w-9 h-9 border border-[#D0E8DE] rounded-xl flex items-center justify-center hover:bg-[#EEF4F1]/60 transition-colors text-t-2 cursor-pointer"
              title="Refresh Data Streams"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.2] active:rotate-180 transition-transform duration-300">
                <path d="M23 4v6h-6" />
                <path d="M1 20v-6h6" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
            </button>
            <div className="flex items-center gap-2.5 bg-[#EEF4F1] border border-[#D0E8DE]/50 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0F8B6D]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#12D396] animate-ping" />
              <span>Admin Online</span>
            </div>
          </div>
        </header>

        {/* Dashboard Main Workspace */}
        <main className="flex-grow p-8">
          {errorMsg && (
            <div className="mb-6 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-2xl text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          {sidebarTab === "Dashboard" && (
            <div className="space-y-8 animate-fadeUp">
              {/* Statistics Counters Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Total */}
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-t-3 uppercase tracking-wider">Total Inquiries</span>
                    <h3 className="text-3xl font-extrabold text-[#0A1628] font-syne">{stats.totalInquiries}</h3>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2.2]">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </div>
                </div>

                {/* New inquiries */}
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-t-3 uppercase tracking-wider">New Inquiries</span>
                    <h3 className="text-3xl font-extrabold text-[#0A1628] font-syne">{stats.newInquiries}</h3>
                  </div>
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2.2]">
                      <polygon points="12 2 2 22 22 22" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                </div>

                {/* Contact Requests */}
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-t-3 uppercase tracking-wider">Contact Requests</span>
                    <h3 className="text-3xl font-extrabold text-[#0A1628] font-syne">{stats.contactRequests}</h3>
                  </div>
                  <div className="w-12 h-12 bg-[#E1F5EE] text-[#0F8B6D] rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2.2]">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                </div>

                {/* Today's inquiries */}
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-t-3 uppercase tracking-wider">Today's Inquiries</span>
                    <h3 className="text-3xl font-extrabold text-[#0A1628] font-syne">{stats.todayInquiries}</h3>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2.2]">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Quick Actions / Recent Section split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left quick summary details */}
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 shadow-sm space-y-6">
                  <h3 className="font-syne text-[16px] font-extrabold text-[#0A1628] border-b border-[#EEF4F1] pb-3">Operational Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-t-2">Database Status</span>
                      <span className="font-semibold text-emerald-600">Active / Online</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-t-2">Email Notifications</span>
                      <span className="font-semibold text-[#0F8B6D]">Ready (SMTP)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-t-2">Partner Inquiry Target</span>
                      <span className="font-semibold text-t-2">4 Filters Active</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSidebarTab("Inquiries")}
                    className="w-full h-10 bg-[#0F8B6D] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-[#0E7A60] transition-colors cursor-pointer"
                  >
                    <span>Manage Inquiries</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2]">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>

                {/* Right recent listing snippet */}
                <div className="lg:col-span-2 bg-white border border-[#D0E8DE]/60 rounded-3xl p-6 shadow-sm flex flex-col">
                  <div className="flex items-center justify-between border-b border-[#EEF4F1] pb-3 mb-4">
                    <h3 className="font-syne text-[16px] font-extrabold text-[#0A1628]">Recent Inquiries</h3>
                    <button 
                      onClick={() => setSidebarTab("Inquiries")}
                      className="text-xs font-bold text-[#0F8B6D] hover:underline cursor-pointer"
                    >
                      View All
                    </button>
                  </div>

                  <div className="space-y-3.5 flex-grow overflow-y-auto max-h-[280px] pr-2">
                    {isLoading ? (
                      <div className="py-12 flex flex-col items-center justify-center">
                        <div className="w-7 h-7 border-2 border-brand-g border-t-transparent rounded-full animate-spin mb-3" />
                        <span className="text-xs text-t-3">Loading records...</span>
                      </div>
                    ) : inquiries.length === 0 ? (
                      <div className="py-12 text-center text-xs text-t-3">
                        No inquiries exist matching standard filters.
                      </div>
                    ) : (
                      inquiries.slice(0, 4).map((inquiry) => (
                        <div 
                          key={inquiry.id} 
                          onClick={() => {
                            setActiveInquiry(inquiry);
                            setSidebarTab("Inquiries");
                          }}
                          className="bg-[#F8FAF9] hover:bg-[#EEF4F1]/30 border border-[#D0E8DE]/40 p-4 rounded-2xl flex items-center justify-between transition-colors cursor-pointer"
                        >
                          <div>
                            <div className="font-bold text-xs text-[#0A1628]">{inquiry.full_name}</div>
                            <div className="text-[10px] text-t-3 mt-0.5">{inquiry.organization} • {inquiry.inquiry_type}</div>
                          </div>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                            inquiry.status === "New" ? "text-blue-600 bg-blue-50 border-blue-100" :
                            inquiry.status === "Pending" ? "text-amber-600 bg-amber-50 border-amber-100" :
                            "text-emerald-600 bg-emerald-50 border-emerald-100"
                          }`}>
                            {inquiry.status}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {sidebarTab === "Inquiries" && (
            <div className="space-y-6 animate-fadeUp">
              {/* Search & Filters Controls */}
              <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-5 shadow-sm space-y-4">
                
                {/* Search query row */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  {/* Search box */}
                  <div className="relative flex-1 w-full">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-t-3">
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2]">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search inquiries by Lead Name, Email, Company..."
                      className="w-full h-11 pl-10 pr-10 rounded-xl border border-[#D0E8DE] bg-transparent text-xs text-[#0B1612] outline-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D] transition-colors"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && fetchDashboardData()}
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => { setSearchQuery(""); setTimeout(() => fetchDashboardData(), 50); }}
                        className="absolute right-3.5 top-3 text-t-3 hover:text-black cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Actions buttons */}
                  <button 
                    onClick={fetchDashboardData}
                    className="w-full md:w-auto h-11 px-6 bg-[#0F8B6D] text-white font-bold text-xs rounded-xl shadow-sm hover:shadow hover:bg-[#0E7A60] transition-all cursor-pointer"
                  >
                    Apply Filter Query
                  </button>
                </div>

                <div className="border-t border-[#EEF4F1]" />

                {/* Filters selection inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Inquiry Type */}
                  <div>
                    <label className="block text-[10px] font-bold text-t-3 uppercase tracking-wider mb-2">Inquiry Type</label>
                    <select
                      className="w-full h-10 border border-[#D0E8DE] rounded-xl px-3 bg-transparent text-xs text-t-2 outline-none focus:border-[#0F8B6D]"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat === "All" ? "All Inquiry Types" : cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-[10px] font-bold text-t-3 uppercase tracking-wider mb-2">Status</label>
                    <select
                      className="w-full h-10 border border-[#D0E8DE] rounded-xl px-3 bg-transparent text-xs text-t-2 outline-none focus:border-[#0F8B6D]"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      {statuses.map(st => (
                        <option key={st} value={st}>{st === "All" ? "All Statuses" : st}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date range */}
                  <div>
                    <label className="block text-[10px] font-bold text-t-3 uppercase tracking-wider mb-2">Date Range</label>
                    <select
                      className="w-full h-10 border border-[#D0E8DE] rounded-xl px-3 bg-transparent text-xs text-t-2 outline-none focus:border-[#0F8B6D]"
                      value={selectedDateRange}
                      onChange={(e) => setSelectedDateRange(e.target.value)}
                    >
                      <option value="All">All Time</option>
                      <option value="today">Today</option>
                      <option value="7d">Last 7 Days</option>
                      <option value="30d">Last 30 Days</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Inquiries Table List */}
              {isLoading ? (
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-20 flex flex-col items-center justify-center shadow-sm">
                  <div className="w-9 h-9 border-4 border-brand-g border-t-transparent rounded-full animate-spin mb-4" />
                  <span className="text-xs text-t-3">Fetching live inquiry database streams...</span>
                </div>
              ) : inquiries.length === 0 ? (
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-16 text-center shadow-sm">
                  <div className="w-12 h-12 bg-[#EEF4F1] rounded-full flex items-center justify-center mx-auto mb-4 text-[#6B8C80]">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <h3 className="font-syne text-base font-bold text-[#0A1628] mb-1">No Inquiries Found</h3>
                  <p className="text-xs text-t-3 max-w-xs mx-auto">
                    There are no customer inquiries matching your queries and filters.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-[#EEF4F1] text-left">
                      <thead className="bg-[#F8FAF9]">
                        <tr>
                          <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Date & Time</th>
                          <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Contact Details</th>
                          <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Inquiry Type</th>
                          <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Message Abstract</th>
                          <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EEF4F1] text-sm text-[#0B1612]">
                        {inquiries.map((item) => (
                          <tr key={item.id} className="hover:bg-[#EEF4F1]/30 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-xs text-t-3">
                              {new Date(item.created_at).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                              })}
                              <div className="text-[10px] text-t-3/70 mt-0.5">
                                {new Date(item.created_at).toLocaleTimeString(undefined, {
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="font-semibold text-[#0A1628]">{item.full_name}</div>
                              <div className="text-xs text-t-3">{item.organization || "No Organization"}</div>
                              <div className="text-[11px] text-brand-g hover:underline mt-0.5">
                                <a href={`mailto:${item.email}`}>{item.email}</a>
                              </div>
                              {item.phone && (
                                <div className="text-[11px] text-t-3 mt-0.5">
                                  <a href={`tel:${item.phone}`} className="hover:underline">{item.phone}</a>
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-block text-[10px] font-bold text-[#0F8B6D] bg-brand-gxl px-2.5 py-0.5 rounded-full border border-brand-gll/20">
                                {item.inquiry_type}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                                item.status === 'New' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                                item.status === 'Pending' ? 'text-amber-600 bg-amber-50 border-amber-100' :
                                item.status === 'Resolved' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                                'text-slate-500 bg-slate-50 border-slate-100'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 max-w-xs truncate text-t-2 text-xs">
                              {item.message}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-xs">
                              <button
                                onClick={() => setActiveInquiry(item)}
                                className="px-3.5 py-2 rounded-lg font-bold text-white transition-colors cursor-pointer"
                                style={{ backgroundColor: "#0F8B6D" }}
                              >
                                View details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {sidebarTab === "Settings" && (
            <div className="bg-white border border-[#D0E8DE]/60 rounded-3xl p-8 shadow-sm space-y-6 max-w-xl animate-fadeUp">
              <h3 className="font-syne text-[18px] font-extrabold text-[#0A1628] border-b border-[#EEF4F1] pb-3">Admin Terminal Settings</h3>
              
              <div className="space-y-4 text-sm text-t-2">
                <p>
                  This portal is set up to communicate directly with PostgreSQL database connections.
                </p>
                <div className="bg-[#F8FAF9] p-4 border border-[#D0E8DE]/50 rounded-2xl space-y-2 text-xs">
                  <div><strong>API Node Server:</strong> {process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app"}</div>
                  <div><strong>Database Driver:</strong> pg (node-postgres)</div>
                  <div><strong>JWT Session Key:</strong> LocalStorage secure check</div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Inquiry Detail Modal View Overlay */}
      <AnimatePresence>
        {activeInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveInquiry(null)}
            />

            {/* Modal Dialog container */}
            <motion.div
              className="bg-white border border-[#D0E8DE] shadow-sh2 rounded-[32px] w-full max-w-xl relative overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#EEF4F1] flex items-center justify-between">
                <div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[10px] font-bold text-[#0F8B6D] bg-brand-gxl px-2.5 py-0.5 rounded-full uppercase border border-brand-gll/20">
                      {activeInquiry.inquiry_type}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      activeInquiry.status === 'New' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                      activeInquiry.status === 'Pending' ? 'text-amber-600 bg-amber-50 border-amber-100' :
                      activeInquiry.status === 'Resolved' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                      'text-slate-500 bg-slate-50 border-slate-100'
                    }`}>
                      {activeInquiry.status}
                    </span>
                  </div>
                  <div className="text-[10px] text-t-3 mt-1.5">
                    Submitted: {new Date(activeInquiry.created_at).toLocaleString()}
                  </div>
                </div>
                <button
                  onClick={() => setActiveInquiry(null)}
                  className="w-8 h-8 rounded-full bg-[#EEF4F1] flex items-center justify-center text-t-2 hover:bg-[#D0E8DE]/60 transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-1">Lead Contact</div>
                    <h4 className="font-syne text-sm font-bold text-[#0A1628]">{activeInquiry.full_name}</h4>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-1">Company / Organization</div>
                    <h4 className="text-sm font-semibold text-[#0B1612]">{activeInquiry.organization || "No organization"}</h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-1">Business Email</div>
                    <a href={`mailto:${activeInquiry.email}`} className="text-sm text-brand-g font-semibold hover:underline">
                      {activeInquiry.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-1">Phone / Mobile</div>
                    <a href={`tel:${activeInquiry.phone}`} className="text-sm text-t-DEFAULT font-semibold hover:underline">
                      {activeInquiry.phone || "No phone number"}
                    </a>
                  </div>
                </div>

                {activeInquiry.ip_address && (
                  <div>
                    <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-1">IP Address</div>
                    <span className="text-xs text-t-2 font-medium">{activeInquiry.ip_address}</span>
                  </div>
                )}

                <div className="border-t border-[#EEF4F1] pt-4">
                  <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-2">Message & Inquiry Details</div>
                  <div className="bg-[#F8FAF9] border border-[#D0E8DE]/60 rounded-2xl p-4 text-xs text-[#1C2E27] whitespace-pre-wrap leading-relaxed">
                    {activeInquiry.message}
                  </div>
                </div>

                {/* Status action buttons */}
                <div className="border-t border-[#EEF4F1] pt-4">
                  <div className="text-[10px] font-bold text-t-3 uppercase tracking-wider mb-2">Change Status Option</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateStatus(activeInquiry.id, "Pending")}
                      disabled={isUpdatingStatus || activeInquiry.status === "Pending"}
                      className="px-3.5 py-2 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg text-xs font-bold transition-all disabled:opacity-40 cursor-pointer"
                    >
                      Mark Pending
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(activeInquiry.id, "Resolved")}
                      disabled={isUpdatingStatus || activeInquiry.status === "Resolved"}
                      className="px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-xs font-bold transition-all disabled:opacity-40 cursor-pointer"
                    >
                      Mark Resolved
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(activeInquiry.id, "New")}
                      disabled={isUpdatingStatus || activeInquiry.status === "New"}
                      className="px-3.5 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 rounded-lg text-xs font-bold transition-all disabled:opacity-40 cursor-pointer"
                    >
                      Mark as New
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-[#EEF4F1] bg-[#F8FAF9] flex items-center justify-between">
                <button
                  onClick={() => handleDeleteInquiry(activeInquiry.id)}
                  disabled={isDeleting}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 border border-red-200 transition-colors cursor-pointer bg-white"
                >
                  Delete Inquiry
                </button>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${activeInquiry.email}?subject=Regarding your Inquiry: "${activeInquiry.inquiry_type}" - SustainX`}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-colors cursor-pointer"
                    style={{ backgroundColor: "#0F8B6D" }}
                  >
                    Reply via Email
                  </a>
                  <button
                    onClick={() => setActiveInquiry(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-t-2 hover:bg-[#EEF4F1] border border-bdr-2 transition-colors cursor-pointer bg-white"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
