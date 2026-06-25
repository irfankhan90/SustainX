"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inquiryTypes = [
  { value: "Strategic Partnership", placeholder: "Tell us about your partnership objectives..." },
  { value: "Develop With SustainX", placeholder: "Describe how you'd like to develop with SustainX..." },
  { value: "Accelerate Transformation", placeholder: "Describe your transformation challenges and goals..." },
  { value: "Request Strategic Advisory", placeholder: "What strategic areas would you like advisory on?" },
  { value: "Discuss a Project Opportunity", placeholder: "Share your project requirements and timelines..." },
  { value: "Access Energy Trading Services", placeholder: "Specify your energy trading volume and requirements..." },
  { value: "Other", placeholder: "How can we help you today?" }
];

export const InquirySection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("Strategic Partnership");
  const [message, setMessage] = useState("");

  // Validation States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // UI States
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle dynamic placeholder retrieval
  const getMessagePlaceholder = () => {
    const selected = inquiryTypes.find((t) => t.value === inquiryType);
    return selected ? selected.placeholder : "Share your requirements...";
  };

  // Real-time validation function
  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    if (name === "fullName") {
      if (!value.trim()) {
        errorMsg = "Full name is required";
      }
    } else if (name === "organization") {
      // Organization is optional, no error required
      errorMsg = "";
    } else if (name === "email") {
      if (!value.trim()) {
        errorMsg = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMsg = "Please enter a valid email address";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        errorMsg = "Message / Project details is required";
      } else if (value.trim().length < 10) {
        errorMsg = "Message must be at least 10 characters long";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleBlur = (name: string, value: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleChange = (name: string, value: string) => {
    if (name === "fullName") setFullName(value);
    else if (name === "organization") setOrganization(value);
    else if (name === "email") setEmail(value);
    else if (name === "message") setMessage(value);

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    const newTouched = { fullName: true, organization: false, email: true, message: true };
    setTouched(newTouched);

    // Validate all
    validateField("fullName", fullName);
    validateField("email", email);
    validateField("message", message);

    const hasErrors =
      !fullName.trim() ||
      !email.trim() ||
      !/\S+@\S+\.\S+/.test(email) ||
      !message.trim();

    if (hasErrors) return;

    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          organization,
          email,
          inquiryType,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === true || result.status === "success")) {
        setIsSuccess(true);
        // Reset form
        setFullName("");
        setOrganization("");
        setEmail("");
        setInquiryType("Strategic Partnership");
        setMessage("");
        setTouched({});
        setErrors({});
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Unable to connect to the server. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden scroll-mt-[var(--navbar-height)]" id="partnership-inquiry">
      {/* Background Energy Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0F8B6D 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      
      {/* Custom Vector Grid Overlay for premium feel */}
      <svg className="absolute inset-0 w-full h-full stroke-brand-g/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse" x="50%">
            <path d="M.5 80V.5H80" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and info */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gxl text-[#0F8B6D] text-xs font-bold tracking-wide uppercase self-start mb-6 border border-brand-gll/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F8B6D] animate-pulse" />
              Partnership Inquiry Portal
            </div>
            
            <h2 className="font-syne text-[36px] sm:text-[44px] font-extrabold text-[#0A1628] leading-[1.15] mb-6">
              Co-create the new energy future.
            </h2>
            
            <p className="text-[#3A5549] text-base leading-relaxed mb-8 font-light max-w-md">
              GlobalPact SustainX collaborates with enterprises, utilities, financial institutions, and governments to execute deep decarbonization and grid monetization. Submit your requirements to connect with our strategic advisory desk.
            </p>

            {/* Feature lists for high-value feel */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-brand-gxl flex items-center justify-center text-[#0F8B6D] shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-[#0A1628]">Accelerated Lead Qualification</h4>
                  <p className="text-xs text-[#6B8C80] mt-0.5">Assigned immediately to regional managing directors.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-brand-gxl flex items-center justify-center text-[#0F8B6D] shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-[#0A1628]">Institutional Advisory & SLA</h4>
                  <p className="text-xs text-[#6B8C80] mt-0.5">Strategic alignment backed by deep regulatory expertise.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div 
              className="bg-white/85 backdrop-blur-[16px] border border-[#D0E8DE] shadow-sh2 rounded-[32px] p-8 sm:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm text-[#0B1612] transition-all duration-200 outline-none ${
                            touched.fullName && errors.fullName
                              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-[#D0E8DE] focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
                          }`}
                          placeholder="e.g. Sarah Jenkins"
                          value={fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          onBlur={(e) => handleBlur("fullName", e.target.value)}
                          disabled={isLoading}
                        />
                        {touched.fullName && errors.fullName && (
                          <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.fullName}</span>
                        )}
                      </div>

                      {/* Organization / Company */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="organization" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">
                          Organization / Company
                        </label>
                        <input
                          id="organization"
                          type="text"
                          className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm text-[#0B1612] transition-all duration-200 outline-none ${
                            touched.organization && errors.organization
                              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-[#D0E8DE] focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
                          }`}
                          placeholder="e.g. NexaGrid Energy"
                          value={organization}
                          onChange={(e) => handleChange("organization", e.target.value)}
                          onBlur={(e) => handleBlur("organization", e.target.value)}
                          disabled={isLoading}
                        />
                        {touched.organization && errors.organization && (
                          <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.organization}</span>
                        )}
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">
                        Business Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm text-[#0B1612] transition-all duration-200 outline-none ${
                          touched.email && errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-[#D0E8DE] focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
                        }`}
                        placeholder="s.jenkins@company.com"
                        value={email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={(e) => handleBlur("email", e.target.value)}
                        disabled={isLoading}
                      />
                      {touched.email && errors.email && (
                        <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.email}</span>
                      )}
                    </div>

                    {/* Inquiry Type Dropdown */}
                    <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
                      <label className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">
                        Inquiry Type
                      </label>
                      
                      {/* Desktop Premium Custom Dropdown */}
                      <div className="hidden md:block w-full">
                        <button
                          type="button"
                          onClick={() => !isLoading && setIsOpen(!isOpen)}
                          className="w-full h-12 px-4 rounded-xl border border-[#D0E8DE] bg-transparent text-left text-sm text-[#0B1612] flex items-center justify-between transition-colors focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D] cursor-pointer"
                          disabled={isLoading}
                        >
                          <span>{inquiryType}</span>
                          <svg
                            viewBox="0 0 24 24"
                            className={`w-4 h-4 text-[#3A5549] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.ul
                              className="absolute left-0 right-0 z-50 mt-1 bg-white border border-[#D0E8DE] rounded-xl shadow-sh2 max-h-60 overflow-y-auto py-1.5 focus:outline-none"
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.15 }}
                            >
                              {inquiryTypes.map((type) => (
                                <li key={type.value}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setInquiryType(type.value);
                                      setIsOpen(false);
                                    }}
                                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer flex items-center justify-between ${
                                      inquiryType === type.value
                                        ? "bg-brand-gxl text-[#0F8B6D] font-semibold"
                                        : "text-[#0B1612] hover:bg-[#EEF4F1]"
                                    }`}
                                  >
                                    <span>{type.value}</span>
                                    {inquiryType === type.value && (
                                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.5]">
                                        <polyline points="20 6 9 17 4 12" />
                                      </svg>
                                    )}
                                  </button>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile Native Selector */}
                      <div className="block md:hidden w-full relative">
                        <select
                          id="inquiryTypeMobile"
                          className="w-full h-12 px-4 rounded-xl border border-[#D0E8DE] bg-transparent text-sm text-[#0B1612] appearance-none focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
                          value={inquiryType}
                          onChange={(e) => setInquiryType(e.target.value)}
                          disabled={isLoading}
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value} className="text-black">
                              {type.value}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3A5549]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message / Project Details */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-[#0A1628] uppercase tracking-wider">
                        Message / Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className={`w-full p-4 rounded-xl border bg-transparent text-sm text-[#0B1612] transition-all duration-200 outline-none resize-none ${
                          touched.message && errors.message
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-[#D0E8DE] focus:border-[#0F8B6D] focus:ring-1 focus:ring-[#0F8B6D]"
                        }`}
                        placeholder={getMessagePlaceholder()}
                        value={message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={(e) => handleBlur("message", e.target.value)}
                        disabled={isLoading}
                      />
                      {touched.message && errors.message && (
                        <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.message}</span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-[54px] rounded-xl text-sm font-bold text-white transition-all duration-300 relative overflow-hidden group shadow-md active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                      style={{ backgroundColor: "#0F8B6D" }}
                    >
                      <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>PROCESSING ENQUIRY...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND ENQUIRY</span>
                            <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold inline-block">→</span>
                          </>
                        )}
                      </div>
                    </button>
                  </motion.form>
                ) : (
                  // Success State Visual representation
                  <motion.div
                    className="flex flex-col items-center text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-[#E1F5EE] rounded-full flex items-center justify-center text-[#0F8B6D] mb-6 shadow-sm border border-brand-gxl/80">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    
                    <h3 className="font-syne text-[22px] font-extrabold text-[#0A1628] mb-3">
                      Thank You
                    </h3>
                    
                    <p className="text-[#3A5549] text-[15px] leading-relaxed max-w-md mb-8 font-medium">
                      Thank you. Your inquiry has been submitted successfully. Our team will contact you soon.
                    </p>
                    
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#0F8B6D] hover:bg-[#E1F5EE] transition-colors border border-[#B5D9CB] cursor-pointer"
                    >
                      SUBMIT ANOTHER ENQUIRY
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InquirySection;
