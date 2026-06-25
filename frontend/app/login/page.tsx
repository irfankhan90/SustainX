"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/auth/InputField";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  // Loading/Success states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    setFormError("");

    // Validate email
    if (!email) {
      setEmailError("Email address is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Validate password
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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/auth/login`, {
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
        setIsSuccess(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        setFormError(result.message || "Invalid email or password. Please try again.");
      }
    } catch {
      setFormError("Unable to connect to the server. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Powering the Global Energy Transition"
      subtitle="Sign in to continue."
    >
      {isSuccess ? (
        <div className="bg-brand-gxl/50 border border-brand-gl/40 p-6 rounded-2xl flex flex-col items-center text-center animate-fadeUp">
          <div className="w-12 h-12 bg-brand-g rounded-full flex items-center justify-center text-white mb-3.5">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-syne font-bold text-[18px] text-brand-gxd mb-1.5">
            Sign In Successful
          </h2>
          <p className="text-[13px] text-t-2 leading-relaxed mb-4">
            Redirecting to homepage...
          </p>
          <Link
            href="/"
            className="text-[13.5px] font-semibold text-brand-g hover:text-brand-gd underline cursor-pointer"
          >
            Go to home immediately
          </Link>
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
            leftIcon={
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
          />

          <div className="flex flex-col gap-1 w-full">
            <PasswordInput
              id="password"
              label="Password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              disabled={isLoading}
              required
            />
            <div className="flex items-center justify-end mt-1.5 text-[13px]">
              <Link
                href="/forgot-password"
                className="font-semibold text-brand-g hover:text-brand-gd transition-colors cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <AuthButton 
            isLoading={isLoading} 
            className="mt-2 bg-gradient-to-r from-[#009B72] to-[#12D396] hover:from-[#008960] hover:to-[#0FBF87] border-0"
          >
            <div className="w-full flex items-center justify-between px-1">
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round opacity-80"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="font-sans font-semibold text-[15px] tracking-wide">Sign In</span>
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </AuthButton>

          <p className="text-[13.5px] text-t-2 text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-brand-g hover:text-brand-gd transition-colors underline cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
}
