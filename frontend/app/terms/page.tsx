"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 bg-[#F8FAF9] min-h-screen">
        <div className="container max-w-4xl bg-white border border-[#D0E8DE] rounded-3xl p-6 sm:p-12 shadow-[0_4px_20px_rgba(11,22,18,0.02)]">
          <div className="inline-block px-3 py-1 bg-[#E1F5EE] text-[#0F6E56] rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Legal & Compliance
          </div>
          <h1 className="font-syne text-[32px] sm:text-[40px] font-extrabold text-[#0B1612] leading-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-[#6B8C80] mb-8 border-b border-[#D0E8DE] pb-6">
            Last Updated: June 17, 2026
          </p>

          <div className="prose max-w-none text-sm text-[#3A5549] leading-relaxed space-y-6">
            <p>
              Welcome to GlobalPact SustainX. By accessing or using our website, AI platform, dashboards, and training programs, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement between you, whether personally or on behalf of an entity, and GlobalPact SustainX concerning your access to and use of our platform. If you do not agree with all of these terms, you are prohibited from using the site.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">2. Use of the Platform</h2>
            <p>
              When using our capacity building modules, PMC/EPC trackers, and AI insight portals, you represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All registration information you submit is truthful, accurate, and current.</li>
              <li>You will maintain the security of your password and accept all risks of unauthorized access to your account.</li>
              <li>Your use of the platform does not violate any applicable law or regulation.</li>
            </ul>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the platform is our proprietary property and all source code, databases, software, website designs, audio, video, text, photographs, and graphics are owned or controlled by us or licensed to us, and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">4. Limitation of Liability</h2>
            <p>
              In no event shall GlobalPact SustainX, its directors, employees, or partners be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of or inability to use the platform, including any database downtime or incorrect AI forecasting parameters.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">5. Governing Law</h2>
            <p>
              These Terms of Service and your use of the platform are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, India.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to change or modify these Terms of Service at any time. We will alert you about any changes by updating the &quot;Last Updated&quot; date of these Terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
