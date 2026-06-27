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
  created_at: string;
}

const categories = [
  "All",
  "Strategic Partnership",
  "Develop With SustainX",
  "Accelerate Transformation",
  "Request Strategic Advisory",
  "Discuss a Project Opportunity",
  "Access Energy Trading Services",
  "Other"
];

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeInquiry, setActiveInquiry] = useState<Inquiry | null>(null);

  // Auth States
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // UI States
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

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

  // Fetch inquiries when category changes or component mounts
  useEffect(() => {
    if (isAdmin !== true || !token) return;

    const fetchInquiries = async () => {
      setIsLoading(true);
      setErrorMsg("");
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const queryParam = selectedCategory !== "All" ? `?category=${encodeURIComponent(selectedCategory)}` : "";
        
        const response = await fetch(`${apiUrl}/api/inquiries${queryParam}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        const result = await response.json();

        if (response.ok && result.status === "success") {
          setInquiries(result.data.inquiries);
        } else {
          setErrorMsg(result.message || "Failed to load inquiries.");
        }
      } catch {
        setErrorMsg("Unable to connect to the server. Please verify your connection.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiries();
  }, [isAdmin, token, selectedCategory]);

  const handleLogout = () => {
    localStorage.removeItem("sustainx_token");
    localStorage.removeItem("sustainx_user");
    window.location.href = "/";
  };

  // Filter inquiries based on search query
  const filteredInquiries = inquiries.filter((inquiry) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      inquiry.full_name.toLowerCase().includes(searchLower) ||
      inquiry.organization.toLowerCase().includes(searchLower) ||
      inquiry.email.toLowerCase().includes(searchLower) ||
      inquiry.message.toLowerCase().includes(searchLower)
    );
  });

  if (isAdmin === null) {
    // Still checking auth
    return (
      <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-g border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isAdmin === false) {
    // Access Denied State
    return (
      <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center px-4">
        <motion.div 
          className="bg-white border border-[#D0E8DE] shadow-sh2 rounded-[32px] p-8 max-w-md w-full text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-14 h-14 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-100">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className="font-syne text-[22px] font-extrabold text-[#0A1628] mb-3">Access Restricted</h2>
          <p className="text-t-2 text-sm leading-relaxed mb-6">
            This dashboard is only accessible to administrator accounts. Please sign in with administrator credentials.
          </p>
          <div className="flex flex-col gap-3">
            <Link 
              href="/login" 
              className="w-full h-11 flex items-center justify-center text-sm font-bold text-white rounded-xl transition-colors cursor-pointer"
              style={{ backgroundColor: "#0F8B6D" }}
            >
              Sign In as Admin
            </Link>
            <Link href="/" className="text-sm font-bold text-brand-g hover:text-brand-gd transition-colors cursor-pointer">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-16">
      {/* Header bar */}
      <header className="bg-white border-b border-[#D0E8DE]/70 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 select-none cursor-pointer">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} style={{ height: "auto" }} className="h-9 w-auto object-contain" />
            <div className="font-syne text-[18px] font-extrabold text-[#0A1628]">
              GlobalPact <span className="text-[#0F8B6D] font-extrabold">SustainX</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest bg-brand-gxl text-[#0F8B6D] px-2 py-0.5 rounded-full border border-brand-gll/20 uppercase">
              Admin
            </span>
          </Link>
          
          <button
            onClick={handleLogout}
            className="text-xs font-bold text-t-2 hover:text-red-600 transition-colors border border-bdr-2 rounded-lg px-3 py-1.5 hover:bg-red-50/50 cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Main dashboard content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Top welcome/title */}
        <div className="mb-8">
          <h1 className="font-syne text-[28px] sm:text-[32px] font-extrabold text-[#0A1628]">
            Strategic Inquiry Submissions
          </h1>
          <p className="text-xs text-t-3 mt-1">
            Review and qualify high-value business opportunities in real-time.
          </p>
        </div>

        {/* Filters and search layout */}
        <div className="flex flex-col gap-6 bg-white border border-[#D0E8DE]/60 rounded-2xl p-5 mb-8 shadow-sm">
          
          {/* Category Tabs */}
          <div>
            <div className="text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-3">
              Filter by Inquiry Category
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0F8B6D] text-white shadow-sm"
                      : "bg-[#EEF4F1] text-t-2 hover:bg-[#D0E8DE]/50"
                  }`}
                >
                  {cat === "All" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#EEF4F1]" />

          {/* Search Input */}
          <div className="flex items-center gap-3 relative max-w-md w-full">
            <div className="absolute left-3.5 pointer-events-none text-t-3">
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2]">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search partner, company, email, or message contents..."
              className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#D0E8DE] bg-transparent text-sm text-[#0B1612] outline-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D] transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-3.5 text-t-3 hover:text-[#0B1612] cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Content list block */}
        {isLoading ? (
          <div className="bg-white border border-[#D0E8DE]/50 rounded-3xl p-20 flex flex-col items-center justify-center shadow-sm">
            <div className="w-10 h-10 border-4 border-brand-g border-t-transparent rounded-full animate-spin mb-4" />
            <span className="text-xs text-t-3 font-semibold">Fetching inquiry data streams...</span>
          </div>
        ) : errorMsg ? (
          <div className="bg-red-50 border border-red-100 text-red-600 rounded-2xl p-6 text-center text-sm font-semibold">
            {errorMsg}
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="bg-white border border-[#D0E8DE]/50 rounded-3xl p-16 text-center shadow-sm">
            <div className="w-12 h-12 bg-[#EEF4F1] rounded-full flex items-center justify-center mx-auto mb-4 text-[#6B8C80]">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-[2]" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="font-syne text-base font-bold text-[#0A1628] mb-1">No Inquiries Found</h3>
            <p className="text-xs text-t-3 max-w-xs mx-auto">
              {searchQuery ? "No entries match your search criteria. Try modifying your keywords." : "No inquiry submissions received in this category yet."}
            </p>
          </div>
        ) : (
          <motion.div 
            className="bg-white border border-[#D0E8DE]/60 rounded-3xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-[#EEF4F1] text-left">
                <thead className="bg-[#F8FAF9]">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Lead Contact / Company</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider">Message Abstract</th>
                    <th className="px-6 py-4 text-xs font-bold text-[#0A1628] uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EEF4F1] text-sm text-[#0B1612]">
                  {filteredInquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-[#EEF4F1]/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-t-3">
                        {new Date(item.created_at).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-[#0A1628]">{item.full_name}</div>
                        <div className="text-xs text-t-3">{item.organization}</div>
                        <a href={`mailto:${item.email}`} className="text-xs text-brand-g hover:underline focus-visible:outline-none">
                          {item.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-block text-[11px] font-bold text-[#0F8B6D] bg-brand-gxl px-2.5 py-0.5 rounded-full border border-brand-gll/20">
                          {item.inquiry_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                          item.status === 'New' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                          item.status === 'In Review' ? 'text-amber-600 bg-amber-50 border-amber-100' :
                          item.status === 'Contacted' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                          'text-slate-500 bg-slate-50 border-slate-100'
                        }`}>
                          {item.status || 'New'}
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
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List View */}
            <div className="block md:hidden divide-y divide-[#EEF4F1]">
              {filteredInquiries.map((item) => (
                <div key={item.id} className="p-5 space-y-3.5 hover:bg-[#EEF4F1]/20">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-t-3">
                      {new Date(item.created_at).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                    <div className="flex gap-1.5 items-center">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                        item.status === 'New' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                        item.status === 'In Review' ? 'text-amber-600 bg-amber-50 border-amber-100' :
                        item.status === 'Contacted' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                        'text-slate-500 bg-slate-50 border-slate-100'
                      }`}>
                        {item.status || 'New'}
                      </span>
                      <span className="text-[9px] font-bold text-[#0F8B6D] bg-brand-gxl px-2 py-0.5 rounded-full">
                        {item.inquiry_type}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#0A1628] text-[15px]">{item.full_name}</h4>
                    <div className="text-xs text-t-3">{item.organization}</div>
                    <a href={`mailto:${item.email}`} className="text-xs text-brand-g hover:underline mt-0.5 inline-block">
                      {item.email}
                    </a>
                  </div>

                  <p className="text-xs text-t-2 line-clamp-2 bg-[#F8FAF9] p-3 rounded-lg border border-[#D0E8DE]/40">
                    {item.message}
                  </p>

                  <button
                    onClick={() => setActiveInquiry(item)}
                    className="w-full h-9 rounded-lg text-xs font-bold text-white transition-colors cursor-pointer"
                    style={{ backgroundColor: "#0F8B6D" }}
                  >
                    View Detailed Inquiry
                  </button>
                </div>
              ))}
            </div>

          </motion.div>
        )}

      </main>

      {/* Inquiry details detail modal overlay */}
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

            {/* Modal Box */}
            <motion.div
              className="bg-white border border-[#D0E8DE] shadow-sh2 rounded-[32px] w-full max-w-xl relative overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
            >
              {/* Top title */}
              <div className="p-6 border-b border-[#EEF4F1] flex items-center justify-between">
                <div>
                  <div className="flex gap-2 items-center">
                    <span className="text-[10px] font-bold text-[#0F8B6D] bg-brand-gxl px-2.5 py-0.5 rounded-full uppercase border border-brand-gll/20">
                      {activeInquiry.inquiry_type}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      activeInquiry.status === 'New' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                      activeInquiry.status === 'In Review' ? 'text-amber-600 bg-amber-50 border-amber-100' :
                      activeInquiry.status === 'Contacted' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' :
                      'text-slate-500 bg-slate-50 border-slate-100'
                    }`}>
                      Status: {activeInquiry.status || 'New'}
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

              {/* Body */}
              <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
                <div>
                  <div className="text-[11px] font-bold text-t-3 uppercase tracking-wider mb-1">Partner Contact</div>
                  <h3 className="font-syne text-lg font-bold text-[#0A1628]">{activeInquiry.full_name}</h3>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-t-3 uppercase tracking-wider mb-1">Organization / Company</div>
                  <p className="text-sm text-[#0B1612] font-semibold">{activeInquiry.organization}</p>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-t-3 uppercase tracking-wider mb-1">Email Address</div>
                  <a href={`mailto:${activeInquiry.email}`} className="text-sm text-brand-g font-semibold hover:underline">
                    {activeInquiry.email}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-bold text-t-3 uppercase tracking-wider mb-1">Mobile Number</div>
                  <a href={`tel:${activeInquiry.phone}`} className="text-sm text-t-DEFAULT font-semibold hover:underline">
                    {activeInquiry.phone}
                  </a>
                </div>

                <div className="border-t border-[#EEF4F1] pt-4">
                  <div className="text-[11px] font-bold text-t-3 uppercase tracking-wider mb-2">Message & Project Scope</div>
                  <div className="bg-[#F8FAF9] border border-[#D0E8DE]/60 rounded-2xl p-4 text-sm text-[#1C2E27] whitespace-pre-wrap leading-relaxed">
                    {activeInquiry.message}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-[#EEF4F1] bg-[#F8FAF9] flex items-center justify-end gap-3">
                <a
                  href={`mailto:${activeInquiry.email}?subject=Regarding your Inquiry: "${activeInquiry.inquiry_type}" - SustainX`}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-colors cursor-pointer"
                  style={{ backgroundColor: "#0F8B6D" }}
                >
                  Reply via Email
                </a>
                <button
                  onClick={() => setActiveInquiry(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-t-2 hover:bg-[#EEF4F1] border border-bdr-2 transition-colors cursor-pointer bg-white"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
