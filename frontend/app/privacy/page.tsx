"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[140px] pb-20 bg-[#F8FAF9] min-h-screen">
        <div className="container max-w-4xl bg-white border border-[#D0E8DE] rounded-3xl p-6 sm:p-12 shadow-[0_4px_20px_rgba(11,22,18,0.02)]">
          <div className="inline-block px-3 py-1 bg-[#E1F5EE] text-[#0F6E56] rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Legal & Compliance
          </div>
          <h1 className="font-syne text-[32px] sm:text-[40px] font-extrabold text-[#0B1612] leading-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6B8C80] mb-8 border-b border-[#D0E8DE] pb-6">
            Last Updated: June 17, 2026
          </p>

          <div className="prose max-w-none text-sm text-[#3A5549] leading-relaxed space-y-6">
            <p>
              At GlobalPact SustainX, we are committed to protecting your privacy. This Privacy Policy details how we collect, use, and safeguard your personal information when you use our training programs, AI insights, and sustainability platform.
            </p>
            
            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">1. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Identification Info:</strong> Name, business email address, company name, contact number, and job title when registering for our certifications or portal.</li>
              <li><strong>Telemetry Data:</strong> Metrics related to clean energy installations, sustainability indicators, and emissions data submitted to our AI analytics engine.</li>
              <li><strong>Usage Information:</strong> Data on how you interact with our platform, such as navigation paths, login times, and device settings.</li>
            </ul>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">2. How We Use Your Information</h2>
            <p>
              The information we collect is used to power the SustainX execution ecosystem:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, operate, and maintain our certified educational curricula and client dashboards.</li>
              <li>To run AI analysis models, load balancing metrics, and optimize local energy telemetry outputs.</li>
              <li>To process compliance reports matching GRI, SASB, and GHG protocols.</li>
              <li>To send you updates, alert notifications, and strategic advisories.</li>
            </ul>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">3. Security of Data</h2>
            <p>
              We employ strict technical and organizational security measures to protect your database credentials and telemetry inputs. However, please remember that no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">4. Sharing Your Data</h2>
            <p>
              We do not sell, trade, or rent your personal identification information to third parties. We may share information with corporate partners and group entities (such as GlobalPact Holdings and Schoon Energy) under strict confidentiality agreements.
            </p>

            <h2 className="font-syne text-lg font-bold text-[#0B1612] pt-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our compliance team:
            </p>
            <p className="bg-[#F3F7F5] border border-[#D0E8DE] p-4 rounded-xl text-xs font-medium text-[#0B1612]">
              <strong>GlobalPact SustainX Compliance Office</strong><br />
              Email: sustainx@globalpactholdings.in<br />
              Phone: +91-22-40167394<br />
              Address: B-101/102, Grenville, Lokhandwala Complex, Andheri West, Mumbai – 400053
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
