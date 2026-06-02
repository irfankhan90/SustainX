"use client";

import React from "react";

const plans = [
  {
    name: "Free",
    desc: "Try before you commit",
    price: "₹0",
    popular: false,
    features: [
      { name: "1 course access", available: true },
      { name: "Basic dashboard", available: true },
      { name: "Community forum", available: true },
      { name: "Certificate", available: false },
      { name: "AI insights", available: false },
    ],
    btnText: "Get Started Free",
  },
  {
    name: "Basic",
    desc: "For individual professionals",
    price: "₹2,999",
    popular: false,
    features: [
      { name: "3 courses access", available: true },
      { name: "Analytics dashboard", available: true },
      { name: "Certificate of Completion", available: true },
      { name: "Email support", available: true },
      { name: "AI insights", available: false },
    ],
    btnText: "Get Basic",
  },
  {
    name: "Pro",
    desc: "For serious professionals",
    price: "₹7,999",
    popular: true,
    features: [
      { name: "All 10 programs", available: true },
      { name: "AI insights & ESG reports", available: true },
      { name: "ESG tracking dashboard", available: true },
      { name: "Priority support", available: true },
      { name: "Certificate + LinkedIn badge", available: true },
    ],
    btnText: "Get Pro",
  },
  {
    name: "Enterprise",
    desc: "For corporate teams",
    price: "Custom",
    popular: false,
    features: [
      { name: "Unlimited users", available: true },
      { name: "Custom training programs", available: true },
      { name: "Dedicated account manager", available: true },
      { name: "Full API access", available: true },
      { name: "SLA + onboarding support", available: true },
    ],
    btnText: "Contact Sales",
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-3.5 py-1 bg-brand-gxl text-brand-gd rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5">
            Pricing
          </div>
          <h2 className="font-syne text-[28px] sm:text-[3.5vw] md:text-[44px] font-extrabold leading-[1.1] tracking-[-0.025em] text-t-DEFAULT mb-3.5">
            Simple, transparent pricing
          </h2>
          <p className="text-[17px] text-t-2 font-light leading-[1.65] max-w-[540px] mx-auto">
            Start free. Scale with your team. Enterprise plans for large corporate organizations across India and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-[28px] p-[26px] py-[30px] transition-all duration-200 relative flex flex-col justify-between hover:shadow-sh2 hover:-translate-y-1 ${
                plan.popular ? "border-brand-g border-2" : "border-bdr-DEFAULT border-[1.5px]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-g text-white px-4 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="font-syne text-base font-bold text-t-DEFAULT mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-t-3 mb-[18px]">{plan.desc}</p>
                <div className="font-syne text-[30px] font-extrabold text-t-DEFAULT leading-none mb-1">
                  {plan.price !== "Custom" ? (
                    <>
                      {plan.price.slice(0, 1)}
                      <sub className="text-[20px] font-bold align-top mt-[3px] inline-block">{plan.price.slice(1)}</sub>
                      <span className="text-[13px] font-normal text-t-3">/month</span>
                    </>
                  ) : (
                    <>
                      Custom<span className="text-[13px] font-normal text-t-3"> pricing</span>
                    </>
                  )}
                </div>
                <div className="h-[1px] bg-bdr-DEFAULT my-[18px]" />

                <ul className="list-none m-0 p-0 mb-6 flex flex-col gap-2.5">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2.5 text-[13px] leading-tight ${
                        feature.available ? "text-t-2" : "text-t-4"
                      }`}
                    >
                      {feature.available ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-none stroke-brand-g stroke-[2.5] shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-none stroke-t-4 stroke-2 shrink-0 mt-0.5"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-[11px] rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-[1.5px] ${
                  plan.popular
                    ? "bg-brand-g text-white border-brand-g hover:bg-brand-gd"
                    : "bg-transparent text-t-2 border-bdr-2 hover:border-brand-g hover:text-brand-g hover:bg-brand-gxl"
                }`}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
