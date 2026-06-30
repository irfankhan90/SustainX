"use client";

import React from "react";
import Link from "next/link";

export const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-white text-t-DEFAULT font-sans select-none">
      {/* HERO SECTION */}
      <section className="relative py-24 bg-brand-gxl border-b border-bdr-DEFAULT overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(29,158,117,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10">
          <span className="inline-block px-3 py-1 bg-brand-g/10 text-brand-gd rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
            About SustainX
          </span>
          <h1 className="font-syne text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold leading-[1.1] tracking-tight text-t-DEFAULT mb-6">
            Powering the Global Energy Transition Through <br />
            <span className="text-brand-g">Innovation, Intelligence, and Execution</span>
          </h1>
          <p className="text-base sm:text-lg text-t-3 max-w-3xl leading-relaxed mb-8">
            GlobalPact SustainX is a next-generation sustainability and clean energy platform dedicated to accelerating the world's transition toward a resilient, low-carbon future. As a strategic initiative of GlobalPact Holdings, SustainX bridges the gap between sustainability ambition and real-world execution by transforming complex environmental goals into measurable, scalable, and financially viable outcomes.
          </p>
          <div className="flex gap-4">
            <Link
              href="#who-we-are"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd transition-all shadow-md"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="h-11 px-6 inline-flex items-center justify-center text-xs font-semibold text-brand-g hover:text-brand-gd transition-colors border border-brand-g/20 rounded-lg bg-white"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 bg-white" id="who-we-are">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
                Who We Are
              </span>
              <h2 className="font-syne text-3xl font-bold text-t-DEFAULT leading-tight mb-6">
                Bridging Strategy & Real-World Execution
              </h2>
              <div className="w-12 h-1 bg-brand-g rounded mb-6" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-t-3 leading-relaxed font-light">
                GlobalPact SustainX is a next-generation sustainability and clean energy platform dedicated to accelerating the world's transition toward a resilient, low-carbon future. As a strategic initiative of GlobalPact Holdings, SustainX bridges the gap between sustainability ambition and real-world execution by transforming complex environmental goals into measurable, scalable, and financially viable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-20 bg-surface-3 border-t border-b border-bdr-DEFAULT">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
              What We Do
            </span>
            <h2 className="font-syne text-3xl font-bold text-t-DEFAULT leading-tight">
              Integrated Project Lifecycle Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-7 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-5 font-bold">01</div>
              <h4 className="font-syne text-base font-bold text-t-DEFAULT mb-3">Expertise & Tech</h4>
              <p className="text-xs text-t-3 leading-relaxed">
                We combine deep industry expertise with advanced technologies, artificial intelligence, project management excellence, engineering solutions, and capacity-building programs.
              </p>
            </div>
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-7 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-5 font-bold">02</div>
              <h4 className="font-syne text-base font-bold text-t-DEFAULT mb-3">Deployment Scope</h4>
              <p className="text-xs text-t-3 leading-relaxed">
                Help governments, corporations, investors, and communities achieve their sustainability objectives through renewable energy deployment and smart infrastructure to ESG transformation.
              </p>
            </div>
            <div className="bg-white border border-bdr-DEFAULT rounded-2xl p-7 hover:shadow-sh2 transition-all">
              <div className="w-10 h-10 bg-brand-g/10 text-brand-g rounded-xl flex items-center justify-center mb-5 font-bold">03</div>
              <h4 className="font-syne text-base font-bold text-t-DEFAULT mb-3">Digital Innovation</h4>
              <p className="text-xs text-t-3 leading-relaxed">
                Driving digital innovation and climate resilience, SustainX delivers integrated solutions across the complete project lifecycle.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-brand-gxl border border-bdr-2 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-t-3 leading-relaxed text-center italic">
              "We combine deep industry expertise with advanced technologies, artificial intelligence, project management excellence, engineering solutions, and capacity-building programs to help governments, corporations, investors, and communities achieve their sustainability objectives. From renewable energy deployment and smart infrastructure to ESG transformation, digital innovation, and climate resilience, SustainX delivers integrated solutions across the complete project lifecycle."
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
                Our Approach
              </span>
              <h2 className="font-syne text-3xl font-bold text-t-DEFAULT leading-tight mb-6">
                Future-Ready Ecosystems Guided by Insights
              </h2>
              <p className="text-sm text-t-3 leading-relaxed mb-6">
                Our multidisciplinary team works alongside global partners to design future-ready ecosystems that are efficient, intelligent, and environmentally responsible.
              </p>
              <div className="border-l-4 border-brand-g pl-4 py-1 text-xs text-t-3 font-semibold uppercase tracking-wider">
                Guided by data-driven insights, transparent governance & long-term value
              </div>
            </div>
            <div className="bg-brand-gxl border border-bdr-2 rounded-2xl p-8">
              <p className="text-sm sm:text-base text-brand-gd leading-relaxed font-light">
                Our multidisciplinary team works alongside global partners to design future-ready ecosystems that are efficient, intelligent, and environmentally responsible. Every project is guided by data-driven insights, transparent governance, and a commitment to creating long-term economic, social, and environmental value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY / WHY SUSTAINX */}
      <section className="py-20 bg-brand-gxl border-t border-bdr-DEFAULT">
        <div className="container max-w-4xl text-center">
          <span className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider block mb-2">
            Our Core Philosophy
          </span>
          <h2 className="font-syne text-2xl sm:text-3xl font-bold text-t-DEFAULT mb-8 leading-tight">
            Sustainability as a Catalyst for Global Prosperity
          </h2>
          <p className="text-sm sm:text-base text-t-3 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            At GlobalPact SustainX, sustainability is more than environmental responsibility—it is a catalyst for innovation, economic growth, and global prosperity. By integrating strategy, technology, execution, and impact measurement into a single platform, we empower organizations to move confidently toward a net-zero future while creating lasting value for generations to come.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-brand-gxd text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="container relative z-10 max-w-4xl text-center">
          <h2 className="font-syne text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight mb-4">
            Partner With SustainX Today
          </h2>
          <p className="text-sm text-[#E1F5EE]/80 max-w-2xl mx-auto mb-8 font-light">
            Empowering organizations to move confidently toward a net-zero future while creating lasting value for generations to come.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-brand-gd bg-white rounded-lg hover:bg-[#E1F5EE] shadow-md transition-all"
            >
              Partner With Us
            </Link>
            <Link
              href="/about/vision"
              className="h-11 px-8 inline-flex items-center justify-center text-xs font-bold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all"
            >
              Our Vision &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
