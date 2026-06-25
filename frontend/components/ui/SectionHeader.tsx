import React from "react";

interface SectionHeaderProps {
  /** Pill label text (e.g. "Platform Features") */
  label: string;
  /** Main heading — supports JSX for styled spans */
  heading: React.ReactNode;
  /** Optional description paragraph below the heading */
  description?: string;
  /** Use "light" on dark backgrounds (PillarsSection, CTASection) */
  variant?: "default" | "light";
  /** Show animated pulse dot before the label */
  dot?: boolean;
  /** Alignment: "center" (default) or "left" */
  align?: "center" | "left";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  heading,
  description,
  variant = "default",
  dot = false,
  align = "center",
  className = "",
}) => {
  const isLight = variant === "light";
  const isLeft = align === "left";

  return (
    <div className={`flex flex-col ${isLeft ? "text-left items-start mb-6" : "text-center items-center mb-12"} ${className}`}>
      <div
        className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 border ${
          isLight
            ? "border-brand-gl/30 text-brand-gl bg-brand-g/15"
            : "border-bdr-2 text-brand-gd bg-brand-gxl"
        }`}
      >
        {dot && (
          <span
            className={`w-1.5 h-1.5 rounded-full animate-pulse-slow ${
              isLight ? "bg-brand-gl" : "bg-brand-g"
            }`}
          />
        )}
        {label}
      </div>
      <h2
        className={`font-syne text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-tight tracking-tight mb-3.5 ${
          isLight ? "text-white" : "text-t-DEFAULT"
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`text-base font-light leading-relaxed max-w-lg ${
            isLeft ? "text-left" : "mx-auto"
          } ${isLight ? "text-white/75" : "text-t-2"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
