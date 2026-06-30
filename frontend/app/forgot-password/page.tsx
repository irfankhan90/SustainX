"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/auth/InputField";
import AuthButton from "@/components/auth/AuthButton";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

  // Loading/Success states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    setEmailError("");
    setFormError("");

    if (!email) {
      setEmailError("Email address is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setFormError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://sustain-x-two.vercel.app";
      const response = await fetch(`${apiUrl}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setIsSuccess(true);
      } else {
        setFormError(result.message || "Unable to process your request. Please try again.");
      }
    } catch {
      setFormError("Unable to connect to the server. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email address and we'll send you a link to reset your password."
    >
      {isSuccess ? (
        <div className="bg-brand-gxl/50 border border-brand-gl/40 p-6 rounded-2xl flex flex-col items-center text-center animate-fadeUp">
          <div className="w-12 h-12 bg-brand-g rounded-full flex items-center justify-center text-white mb-3.5">
            {/* Mail Icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22 7 12 14 2 7" />
            </svg>
          </div>
          <h2 className="font-syne font-bold text-[18px] text-brand-gxd mb-1.5">
            Reset Link Sent
          </h2>
          <p className="text-[13px] text-t-2 leading-relaxed mb-5">
            We have sent password reset instructions to <strong className="text-t-DEFAULT">{email}</strong>. Please check your spam folder if it doesn&apos;t arrive in a few minutes.
          </p>
          <div className="flex flex-col gap-2.5 w-full">
            <button
              onClick={() => {
                setIsSuccess(false);
                setIsLoading(false);
              }}
              className="w-full h-11 flex items-center justify-center rounded-lg border border-bdr-DEFAULT bg-white text-t-2 text-[13.5px] font-semibold hover:bg-[#F8FAF9] hover:border-bdr-2 transition-all cursor-pointer"
            >
              Resend email
            </button>
            <Link
              href="/login"
              className="text-[13.5px] font-semibold text-brand-g hover:text-brand-gd transition-colors underline text-center mt-1.5 cursor-pointer"
            >
              Back to login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {formError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[13px] font-semibold leading-normal">
              {formError}
            </div>
          )}

          <InputField
            id="email"
            label="Business Email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            disabled={isLoading}
            required
          />

          <AuthButton isLoading={isLoading} className="mt-2">
            Send Reset Link
          </AuthButton>

          <p className="text-[13.5px] text-t-2 text-center mt-3">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand-g hover:text-brand-gd transition-colors underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}
