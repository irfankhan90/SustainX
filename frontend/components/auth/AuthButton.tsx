"use client";

import React from "react";

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      type="submit"
      disabled={disabled || isLoading}
      className={`w-full h-11 relative overflow-hidden flex items-center justify-center gap-2 rounded-lg font-semibold text-[15px] text-white bg-brand-g shadow-[0_4px_14px_rgba(29,158,117,0.25)] hover:bg-brand-gd hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(29,158,117,0.35)] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {/* Energy Sweep Animation Overlay */}
      {!isLoading && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-sweep-effect pointer-events-none" />
      )}
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default AuthButton;
