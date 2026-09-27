import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "navy" | "subtle" | "outline" | "success";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "gold",
  size = "md",
  icon,
  className,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 font-semibold transition-colors duration-200 select-none rounded-full";

  const variants = {
    gold: "bg-gold-100 text-gold-800 border border-gold-300",
    navy: "bg-navy-900 text-white border border-navy-800",
    subtle: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "bg-transparent text-navy-900 border border-navy-800/40",
    success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
    lg: "text-sm px-4 py-1.5",
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
