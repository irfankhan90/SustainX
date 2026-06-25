"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 bg-[#F8FAF9] min-h-screen">
        <div className="container max-w-4xl bg-white border border-[#D0E8DE] rounded-3xl p-6 sm:p-12 shadow-[0_4px_20px_rgba(11,22,18,0.02)]">
          <div className="inline-block px-3 py-1 bg-[#E1F5EE] text-[#0F6E56] rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Legal & Compliance
          </div>
          <h1 className="font-syne text-[32px] sm:text-[40px] font-extrabold text-[#0B1612] leading-tight mb-2">
            Cookie Policy
          </h1>
          <p className="text-xs text-[#6B8C80] mb-8 border-b border-[#D0E8DE] pb-6">
            Last Updated: June 17, 2026
          </p>

          <div className="prose max-w-none text-sm text-[#3A5549] leading-relaxed space-y-6">
            <p>
              GlobalPact SustainX uses cookies on our website and digital platform. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their usage.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the platform or a third-party to recognize you and make your next visit easier and the service more useful to you.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">2. How SustainX Uses Cookies</h2>
            <p>
              When you use and access the platform, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essential Cookies:</strong> To authenticate users, prevent fraudulent use of user accounts, and maintain sessions across private dashboards.</li>
              <li><strong>Preference Cookies:</strong> To store settings, such as your preference for Dark Mode vs. Light Mode inside our control room.</li>
              <li><strong>Analytics Cookies:</strong> To track telemetry navigation patterns and assess which training modules and insights are most engaging.</li>
            </ul>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">3. Your Choices Regarding Cookies</h2>
            <p>
              If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
