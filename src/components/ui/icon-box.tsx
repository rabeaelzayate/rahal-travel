import React from "react";
import { cn } from "@/lib/utils";

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "navy" | "gold" | "gold-subtle" | "navy-subtle" | "light" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  shape?: "rounded" | "circle" | "square";
  children: React.ReactNode;
}

export function IconBox({
  variant = "navy",
  size = "md",
  shape = "rounded",
  children,
  className,
  ...props
}: IconBoxProps) {
  const baseStyles =
    "inline-flex items-center justify-center shrink-0 transition-all duration-300";

  const variants = {
    navy: "bg-navy-900 text-gold-400 shadow-xs",
    gold: "bg-gold-500 text-navy-950 shadow-xs",
    "gold-subtle": "bg-gold-100 text-gold-800 border border-gold-300/60",
    "navy-subtle": "bg-navy-900/5 text-navy-900 border border-navy-900/10",
    light: "bg-slate-100 text-slate-800 border border-slate-200",
    white: "bg-white text-navy-900 shadow-sm border border-slate-200/80",
  };

  const sizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-11 h-11 text-base",
    lg: "w-14 h-14 text-xl",
    xl: "w-16 h-16 text-2xl",
  };

  const shapes = {
    rounded: "rounded-xl",
    circle: "rounded-full",
    square: "rounded-none",
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        shapes[shape],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
