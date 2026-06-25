"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Validation States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // UI States
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Real-time validation function
  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    if (name === "fullName") {
      if (!value.trim()) {
        errorMsg = "Full name is required";
      }
    } else if (name === "emailAddress") {
      if (!value.trim()) {
        errorMsg = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMsg = "Please enter a valid email address";
      }
    } else if (name === "subject") {
      if (!value.trim()) {
        errorMsg = "Subject is required";
      } else if (value.trim().length < 4) {
        errorMsg = "Subject must be at least 4 characters long";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        errorMsg = "Message is required";
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
    else if (name === "emailAddress") setEmailAddress(value);
    else if (name === "subject") setSubject(value);
    else if (name === "message") setMessage(value);

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Mark all as touched
    const newTouched = { fullName: true, emailAddress: true, subject: true, message: true };
    setTouched(newTouched);

    // Validate all
    validateField("fullName", fullName);
    validateField("emailAddress", emailAddress);
    validateField("subject", subject);
    validateField("message", message);

    const hasErrors =
      !fullName.trim() ||
      !emailAddress.trim() ||
      !/\S+@\S+\.\S+/.test(emailAddress) ||
      !subject.trim() ||
      subject.trim().length < 4 ||
      !message.trim() ||
      message.trim().length < 10;

    if (hasErrors) return;

    setIsLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app";
      const response = await fetch(`${apiUrl}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          emailAddress,
          subject,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === true || result.status === "success")) {
        setIsSuccess(true);
        // Reset form
        setFullName("");
        setEmailAddress("");
        setSubject("");
        setMessage("");
        setTouched({});
        setErrors({});
      } else {
        setSubmitError(result.message || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      setSubmitError("Unable to connect to the server. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-surface-2 relative overflow-hidden scroll-mt-[var(--navbar-height)]" id="contact">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #1D9E75 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and details */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gxl text-brand-gd text-xs font-bold tracking-wide uppercase self-start mb-6 border border-brand-g/10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-g animate-pulse" />
              General Inquiries
            </div>
            
            <h2 className="font-syne text-[36px] sm:text-[44px] font-extrabold text-t-DEFAULT leading-[1.15] mb-6">
              Connect with our advisory desk.
            </h2>
            
            <p className="text-t-2 text-base leading-relaxed mb-8 font-light max-w-md">
              Have questions about GlobalPact SustainX solutions, training programs, or ESG monitoring platforms? Drop us a line. Our representatives generally respond within 24 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-g/10 flex items-center justify-center text-brand-g shrink-0 mt-0.5 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-t-DEFAULT">Corporate Support</h4>
                  <a href="mailto:sustainx@globalpactholdings.in" className="text-xs text-brand-g hover:underline mt-0.5 block font-semibold">
                    sustainx@globalpactholdings.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-g/10 flex items-center justify-center text-brand-g shrink-0 mt-0.5 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne text-sm font-bold text-t-DEFAULT">Phone Helpline</h4>
                  <a href="tel:+912240167394" className="text-xs text-brand-g hover:underline mt-0.5 block font-semibold">
                    +91-22-40167394
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <motion.div 
              className="bg-white/90 backdrop-blur-[16px] border border-bdr-DEFAULT shadow-sh2 rounded-[32px] p-8 sm:p-10 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-xl">
                        {submitError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contactFullName" className="text-xs font-bold text-t-DEFAULT uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          id="contactFullName"
                          type="text"
                          className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm text-t-DEFAULT transition-all duration-200 outline-none ${
                            touched.fullName && errors.fullName
                              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-bdr-DEFAULT focus:border-brand-g focus:ring-1 focus:ring-brand-g"
                          }`}
                          placeholder="e.g. Robert Chen"
                          value={fullName}
                          onChange={(e) => handleChange("fullName", e.target.value)}
                          onBlur={(e) => handleBlur("fullName", e.target.value)}
                          disabled={isLoading}
                        />
                        {touched.fullName && errors.fullName && (
                          <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.fullName}</span>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contactEmail" className="text-xs font-bold text-t-DEFAULT uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="contactEmail"
                          type="email"
                          className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm text-t-DEFAULT transition-all duration-200 outline-none ${
                            touched.emailAddress && errors.emailAddress
                              ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-bdr-DEFAULT focus:border-brand-g focus:ring-1 focus:ring-brand-g"
                          }`}
                          placeholder="r.chen@domain.com"
                          value={emailAddress}
                          onChange={(e) => handleChange("emailAddress", e.target.value)}
                          onBlur={(e) => handleBlur("emailAddress", e.target.value)}
                          disabled={isLoading}
                        />
                        {touched.emailAddress && errors.emailAddress && (
                          <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.emailAddress}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contactSubject" className="text-xs font-bold text-t-DEFAULT uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        id="contactSubject"
                        type="text"
                        className={`w-full h-12 px-4 rounded-xl border bg-transparent text-sm text-t-DEFAULT transition-all duration-200 outline-none ${
                          touched.subject && errors.subject
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-bdr-DEFAULT focus:border-brand-g focus:ring-1 focus:ring-brand-g"
                        }`}
                        placeholder="Inquiry topic or project area..."
                        value={subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        onBlur={(e) => handleBlur("subject", e.target.value)}
                        disabled={isLoading}
                      />
                      {touched.subject && errors.subject && (
                        <span className="text-[11px] text-red-500 font-semibold mt-0.5">{errors.subject}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contactMessage" className="text-xs font-bold text-t-DEFAULT uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="contactMessage"
                        rows={5}
                        className={`w-full p-4 rounded-xl border bg-transparent text-sm text-t-DEFAULT transition-all duration-200 outline-none resize-none ${
                          touched.message && errors.message
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-bdr-DEFAULT focus:border-brand-g focus:ring-1 focus:ring-brand-g"
                        }`}
                        placeholder="How can we support you?"
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
                      style={{ backgroundColor: "#1D9E75" }}
                    >
                      <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>SENDING MESSAGE...</span>
                          </>
                        ) : (
                          <>
                            <span>SEND MESSAGE</span>
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
                    <div className="w-16 h-16 bg-brand-gxl rounded-full flex items-center justify-center text-brand-g mb-6 shadow-sm border border-brand-g/15">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    
                    <h3 className="font-syne text-[22px] font-extrabold text-t-DEFAULT mb-3">
                      Thank You
                    </h3>
                    
                    <p className="text-t-2 text-[15px] leading-relaxed max-w-md mb-8 font-medium">
                      Your message has been sent successfully. Our team will get back to you shortly.
                    </p>
                    
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-lg text-xs font-bold text-brand-g hover:bg-brand-gxl/50 transition-colors border border-bdr-2 cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
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

export default ContactSection;
