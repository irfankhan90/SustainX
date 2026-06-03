"use client";

import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  leftIcon?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  id,
  className = "",
  type = "text",
  leftIcon,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <label
        htmlFor={id}
        className="text-[13px] font-semibold text-t-2 tracking-wide font-sans"
      >
        {label}
      </label>
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-t-3 pointer-events-none flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        <input
          id={id}
          type={type}
          className={`w-full h-11 ${leftIcon ? 'pl-10' : 'px-3.5'} pr-3.5 rounded-lg border text-t-DEFAULT text-[14px] bg-white font-sans transition-all duration-200 focus:outline-none focus:border-brand-g ${
            error
              ? "border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.15)]"
              : "border-[#E2E8F0] focus:shadow-[0_0_0_4px_var(--color-brand-gxl)]"
          }`}
          {...props}
        />
      </div>
      {error && (
        <span className="text-[12px] font-medium text-red-500 font-sans leading-none mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
