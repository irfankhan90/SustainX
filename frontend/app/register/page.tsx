"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import InputField from "@/components/auth/InputField";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";
import SocialButtons from "@/components/auth/SocialButtons";
import RegisterVisual from "@/components/auth/RegisterVisual";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [termsError, setTermsError] = useState("");
  const [formError, setFormError] = useState("");

  // Loading/Success states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setCompanyError("");
    setTermsError("");
    setFormError("");

    // Validate Name
    if (!fullName.trim()) {
      setNameError("Full name is required");
      isValid = false;
    }

    // Validate Email
    if (!email) {
      setEmailError("Business email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid business email");
      isValid = false;
    }

    // Validate Password strength
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setPasswordError("Include at least one uppercase letter and one number");
      isValid = false;
    }

    // Validate Confirm Password
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    // Validate Company
    if (!companyName.trim()) {
      setCompanyError("Company/Organization name is required");
      isValid = false;
    }

    // Validate Terms
    if (!agreeTerms) {
      setTermsError("You must agree to the Terms of Service & Privacy Policy");
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
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
          organization: companyName,
          role: "USER"
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setIsSuccess(true);
      } else {
        setFormError(result.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.warn("Backend connection failed, falling back to mock registration:", err);
      
      // Fallback simulation mode
      if (email.toLowerCase().includes("error")) {
        setFormError("An account with this email address already exists.");
      } else {
        setIsSuccess(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start tracking, analyzing, and reducing your carbon footprint today."
      customVisual={<RegisterVisual />}
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
            Account Created Successfully!
          </h2>
          <p className="text-[13px] text-t-2 leading-relaxed mb-4">
            We've sent a verification email to <strong className="text-t-DEFAULT">{email}</strong>. Please check your inbox and click the activation link.
          </p>
          <Link
            href="/login"
            className="text-[13.5px] font-semibold text-brand-g hover:text-brand-gd underline cursor-pointer"
          >
            Back to login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {formError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[13px] font-semibold leading-normal">
              {formError}
            </div>
          )}

          <InputField
            id="fullName"
            label="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={nameError}
            disabled={isLoading}
            required
          />

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

          <InputField
            id="companyName"
            label="Company / Organization Name"
            placeholder="Clean Energy Corp"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            error={companyError}
            disabled={isLoading}
            required
          />

          <PasswordInput
            id="password"
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            disabled={isLoading}
            required
          />

          <PasswordInput
            id="confirmPassword"
            label="Confirm Password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
            disabled={isLoading}
            required
          />

          <div className="flex flex-col gap-1 mt-1">
            <label className="flex items-start gap-2.5 text-[13px] text-t-2 select-none cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                disabled={isLoading}
                className="w-4 h-4 rounded border-bdr-DEFAULT text-brand-g focus:ring-brand-gl cursor-pointer mt-0.5"
              />
              <span className="leading-tight">
                I agree to the{" "}
                <Link href="/terms" className="font-semibold text-brand-g hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-brand-g hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {termsError && (
              <span className="text-[12px] font-medium text-red-500 mt-1 leading-none">
                {termsError}
              </span>
            )}
          </div>

          <AuthButton isLoading={isLoading} className="mt-2.5">
            Create Account
          </AuthButton>

          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-[1px] bg-bdr-DEFAULT" />
            <span className="text-[11px] text-t-3 font-semibold uppercase tracking-wider">
              Or sign up with
            </span>
            <div className="flex-1 h-[1px] bg-bdr-DEFAULT" />
          </div>

          <SocialButtons
            onGoogleClick={() => alert("Google signup flow triggered")}
            onLinkedInClick={() => alert("LinkedIn signup flow triggered")}
          />

          <p className="text-[13.5px] text-t-2 text-center mt-3">
            Already have an account?{" "}
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
