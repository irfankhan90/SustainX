"use client";

import React, { useEffect } from "react";

export default function AdminInquiriesRedirectPage() {
  useEffect(() => {
    const storedUser = localStorage.getItem("sustainx_user");
    const storedToken = localStorage.getItem("sustainx_token");

    if (storedUser && storedToken) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.role === "ADMIN") {
          window.location.href = "/admin/dashboard";
          return;
        }
      } catch {
        // clear corrupted data
      }
    }
    window.location.href = "/admin/login";
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-brand-g border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
