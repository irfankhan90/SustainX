import React from "react";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  dot?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  dot = true,
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center gap-[7px] px-3.5 py-[5px] border border-bdr-2 rounded-full text-xs font-semibold text-brand-gd bg-brand-gxl tracking-wider uppercase ${className}`}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-brand-g animate-pulse-slow" />
      )}
      {children}
    </div>
  );
};
export default Chip;
