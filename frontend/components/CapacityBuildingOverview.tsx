import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export const CapacityBuildingOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white scroll-mt-[var(--navbar-height)]" id="capacity-building">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mockup / Structure */}
          <div className="lg:col-span-5 bg-surface-DEFAULT border border-bdr-DEFAULT rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between min-h-[400px] relative overflow-hidden select-none">
            <div className="absolute -bottom-[120px] -left-[120px] w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(29,158,117,0.06)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="border-b border-bdr-DEFAULT pb-4 mb-6">
              <h4 className="font-syne text-xs font-bold text-t-DEFAULT uppercase tracking-wider mb-1">
                Ecosystem Curriculum Hierarchy
              </h4>
              <p className="text-[11px] text-t-3">
                10 certified engineering & C-suite training tracks
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4">
              {/* Part A block */}
              <div className="bg-white border border-bdr-DEFAULT/60 rounded-2xl p-4 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-brand-gxl flex items-center justify-center text-brand-g font-syne font-bold shrink-0">
                  A
                </div>
                <div>
                  <h5 className="font-syne text-[13px] font-bold text-t-DEFAULT mb-0.5">
                    Part A: Certified Curriculums
                  </h5>
                  <p className="text-[11px] text-t-3">
                    5 programs (A1–A5) for engineers, designers & project managers.
                  </p>
                </div>
              </div>

              {/* Part B block */}
              <div className="bg-white border border-bdr-DEFAULT/60 rounded-2xl p-4 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center text-brand-gd font-syne font-bold shrink-0">
                  B
                </div>
                <div>
                  <h5 className="font-syne text-[13px] font-bold text-t-DEFAULT mb-0.5">
                    Part B: Executive Intensives
                  </h5>
                  <p className="text-[11px] text-t-3">
                    5 courses (B1–B5) for C-suite leaders, investors & policymakers.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-bdr-DEFAULT pt-4 mt-6 text-center text-[11px] font-bold text-t-3 uppercase tracking-wider select-none">
              Hybrid Online & In-Person Seminars
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <SectionHeader
              label="Upskilling & Capacity Building"
              heading={
                <>
                  Empowering the Next Generation
                  <br />
                  <span className="text-brand-g">of Clean Energy Leaders.</span>
                </>
              }
              align="left"
              dot={true}
              className="mb-6"
            />

            <p className="font-sans text-sm sm:text-[15px] text-t-2 leading-relaxed mb-6 font-light">
              Upskilling engineering teams, project managers, and executives is a fundamental capability of the SustainX ecosystem. We offer structured curricula integrated with simulation modeling tools (HOMER, PVsyst) to bridge technical capacity deficits.
            </p>

            <ul className="list-none m-0 p-0 flex flex-col gap-3.5 mb-8">
              <li className="flex items-start gap-2.5 text-[13.5px] text-t-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-brand-g stroke-[2.5] shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Industry-Recognized Certifications:</strong> Formats tailored for professionals looking to lead design and grid synchronization operations.</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13.5px] text-t-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-brand-g stroke-[2.5] shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span><strong>Flexible Delivery Formats:</strong> Hybrid online classes, hands-on physical labs, and case studies led by global sector leaders.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/capacity-building/certificate-programs"
                className="h-11 px-5 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-gxd hover:bg-brand-gd shadow-md transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
              >
                Certificate Programs
              </Link>
              <Link
                href="/capacity-building/diploma-programs"
                className="h-11 px-5 inline-flex items-center justify-center text-xs font-bold text-white rounded-lg bg-brand-g hover:bg-brand-gd shadow-md transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
              >
                Diploma Programs
              </Link>
              <Link
                href="/capacity-building/executive-corporate-programs"
                className="h-11 px-5 inline-flex items-center justify-center text-xs font-bold text-t-DEFAULT border border-bdr-DEFAULT rounded-lg bg-white hover:bg-brand-gxl shadow-md transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2"
              >
                Executive & Corporate Programs
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CapacityBuildingOverview;
