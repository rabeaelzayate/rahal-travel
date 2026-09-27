import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      children,
      icon,
      iconPosition = "right",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer select-none";

    const variants = {
      primary:
        "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 focus-visible:ring-navy-900 shadow-xs",
      secondary:
        "bg-navy-800 text-white hover:bg-navy-700 active:bg-navy-900 shadow-xs",
      gold: "bg-gold-500 text-navy-950 hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-gold-500 shadow-xs font-bold",
      outline:
        "border-2 border-navy-900 text-navy-900 hover:bg-navy-900/5 active:bg-navy-900/10 focus-visible:ring-navy-900",
      ghost:
        "text-navy-900 hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-slate-400",
      whatsapp:
        "bg-[#25D366] text-white hover:bg-[#20ba5a] active:bg-[#1da851] focus-visible:ring-[#25D366] shadow-xs font-medium",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm sm:text-base px-5 py-2.5 gap-2",
      lg: "text-base sm:text-lg px-7 py-3.5 gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      const isExternal =
        href.startsWith("http") ||
        href.startsWith("tel:") ||
        href.startsWith("https://wa.me") ||
        href.startsWith("mailto:");

      return (
        <Link
          href={href}
          className={combinedClassName}
          target={props.target || (isExternal ? "_blank" : undefined)}
          rel={props.rel || (isExternal ? "noopener noreferrer" : undefined)}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
