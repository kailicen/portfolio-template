import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-solace-600 text-white shadow-sm hover:bg-solace-700 hover:shadow-md focus-visible:ring-solace-300",

  secondary:
    "bg-solace-700 text-white shadow-sm hover:bg-solace-800 hover:shadow-md focus-visible:ring-solace-300",

  outline:
    "border border-solace-300 bg-solace-surface text-solace-700 hover:border-solace-500 hover:bg-solace-50 focus-visible:ring-solace-200",

  text: "text-solace-700 hover:bg-solace-50 hover:text-solace-800 focus-visible:ring-solace-200",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `
    inline-flex min-h-[48px] items-center justify-center
    rounded-lg px-6 py-3
    font-semibold
    transition-all duration-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-offset-2
    focus-visible:ring-offset-solace-canvas
    ${variants[variant]}
    ${className}
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
