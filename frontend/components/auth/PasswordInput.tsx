"use client";

import React, { useState } from "react";
import InputField from "./InputField";

interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  id,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <InputField
        label={label}
        error={error}
        id={id}
        type={showPassword ? "text" : "password"}
        className={className}
        style={{ paddingRight: "40px" }}
        leftIcon={
          <svg
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        }
        {...props}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3.5 top-[38px] text-t-3 hover:text-t-2 focus:outline-none cursor-pointer transition-colors p-1"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          /* Eye Off Icon */
          <svg
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
          >
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        ) : (
          /* Eye Icon */
          <svg
            viewBox="0 0 24 24"
            className="w-[18px] h-[18px] fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
