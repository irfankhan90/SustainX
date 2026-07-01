"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Errors & States
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if already logged in as ADMIN
    const storedUser = localStorage.getItem("sustainx_user");
    const storedToken = localStorage.getItem("sustainx_token");
    if (storedUser && storedToken) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.role === "ADMIN") {
          window.location.href = "/admin/dashboard";
        }
      } catch {
        // clear corrupted data
        localStorage.removeItem("sustainx_user");
        localStorage.removeItem("sustainx_token");
      }
    }

    // Load remembered email
    const rememberedEmail = localStorage.getItem("sustainx_remember_admin_email");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setFormError("");

    if (!email) {
      setEmailError("Administrator email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setFormError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app";
      const response = await fetch(`${apiUrl}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        localStorage.setItem("sustainx_token", result.data.token);
        localStorage.setItem("sustainx_user", JSON.stringify(result.data.user));
        
        if (rememberMe) {
          localStorage.setItem("sustainx_remember_admin_email", email);
        } else {
          localStorage.removeItem("sustainx_remember_admin_email");
        }

        setIsSuccess(true);
        setTimeout(() => {
          window.location.href = "/admin/dashboard";
        }, 1200);
      } else {
        setFormError(result.message || "Invalid administrator credentials.");
      }
    } catch {
      setFormError("Unable to connect to the administration server. Please verify your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#E1F5EE]/40 to-transparent pointer-events-none z-0" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2.5 select-none cursor-pointer">
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={42} 
              height={42} 
              priority
              className="h-10 w-auto object-contain rounded-lg"
            />
            <div className="font-syne text-[22px] font-extrabold text-[#0A1628]">
              GlobalPact <span className="text-[#0F8B6D] font-extrabold">SustainX</span>
            </div>
            <span className="text-[10px] font-bold tracking-widest bg-brand-gxl text-[#0F8B6D] px-2.5 py-0.5 rounded-full border border-brand-gll/20 uppercase">
              Admin
            </span>
          </Link>
        </div>
        <h2 className="text-center font-syne text-2xl font-extrabold text-[#0A1628] tracking-tight">
          Sign In to Portal
        </h2>
        <p className="mt-2 text-center text-xs text-t-3">
          Authorized administrative access only.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <motion.div 
          className="bg-white py-8 px-6 sm:px-10 shadow-sh2 border border-[#D0E8DE]/60 rounded-[32px]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isSuccess ? (
            <div className="py-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-brand-g rounded-full flex items-center justify-center text-white mb-4 shadow-sm border border-brand-gl/10">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-syne font-bold text-[19px] text-brand-gxd mb-1.5">
                Authentication Granted
              </h3>
              <p className="text-xs text-t-2 leading-relaxed mb-4">
                Loading administrative terminal...
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              {formError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs font-semibold leading-normal">
                  {formError}
                </div>
              )}

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2">
                  Admin Email Address
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-t-3">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={isLoading}
                    className={`block w-full h-11 pl-10 pr-4 sm:text-sm bg-[#F8FAF9] border ${
                      emailError ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-[#D0E8DE] focus:border-[#0F8B6D] focus:ring-[#0F8B6D]"
                    } rounded-xl outline-none transition-colors`}
                    placeholder="admin@sustainx.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {emailError && (
                  <p className="mt-1.5 text-xs text-red-600 font-semibold">{emailError}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-xs font-bold text-[#0A1628] uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-t-3">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2.2]">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    disabled={isLoading}
                    className={`block w-full h-11 pl-10 pr-12 sm:text-sm bg-[#F8FAF9] border ${
                      passwordError ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-[#D0E8DE] focus:border-[#0F8B6D] focus:ring-[#0F8B6D]"
                    } rounded-xl outline-none transition-colors`}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-t-3 hover:text-[#0B1612] focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2]">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {passwordError && (
                  <p className="mt-1.5 text-xs text-red-600 font-semibold">{passwordError}</p>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    disabled={isLoading}
                    className="h-4 w-4 text-[#0F8B6D] focus:ring-[#0F8B6D] border-[#D0E8DE] rounded cursor-pointer"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs font-semibold text-[#0A1628] cursor-pointer">
                    Remember email
                  </label>
                </div>

                <div className="text-xs">
                  <span className="font-semibold text-t-3 cursor-not-allowed">
                    Forgot password?
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 flex items-center justify-center text-sm font-bold text-white rounded-xl shadow-sm hover:shadow transition-all relative overflow-hidden disabled:opacity-50 cursor-pointer"
                style={{ backgroundColor: "#0F8B6D" }}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <div className="w-full flex items-center justify-between px-3">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] opacity-80">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Authenticate Admin</span>
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[2]">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
