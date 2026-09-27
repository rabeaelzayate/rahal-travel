import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "subtle" | "gold-accent" | "dashed";
  className?: string;
}

export function Divider({
  variant = "subtle",
  className,
  ...props
}: DividerProps) {
  if (variant === "gold-accent") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-3 my-6 w-full max-w-xs mx-auto select-none",
          className
        )}
        {...props}
      >
        <span className="h-0.5 bg-linear-to-l from-gold-500/80 to-transparent flex-1" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
        <span className="h-0.5 bg-linear-to-r from-gold-500/80 to-transparent flex-1" />
      </div>
    );
  }

  if (variant === "dashed") {
    return (
      <div
        className={cn("w-full border-t border-dashed border-slate-300 my-6", className)}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn("w-full h-px bg-slate-200/90 my-6", className)}
      {...props}
    />
  );
}
