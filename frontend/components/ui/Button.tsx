import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer border-none whitespace-nowrap active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-g focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-brand-g text-white shadow-[0_4px_14px_rgba(29,158,117,0.25)] hover:bg-brand-gd hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(29,158,117,0.35)]",
    outline: "bg-transparent text-t-2 border-[1.5px] border-bdr-2 hover:border-brand-g hover:text-brand-g hover:bg-brand-gxl",
    white: "bg-white text-brand-gd font-semibold shadow-sh2 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(11,22,18,0.15)]",
    "white-outline": "bg-transparent text-white border-[1.5px] border-white/40 hover:bg-white/12 hover:border-white/70",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-7 py-[13px] text-[15px]",
    lg: "px-[36px] py-[16px] text-[17px] rounded-xl",
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
export default Button;
