import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className = "",
  hoverEffect = true,
  children,
  ...props
}) => {
  return (
    <div
      className={`bg-white border border-bdr-DEFAULT rounded-[20px] p-6 shadow-sh ${
        hoverEffect ? "transition-all duration-200 hover:shadow-sh2 hover:-translate-y-1" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
