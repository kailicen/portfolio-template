import React from "react";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Shared layout container that enforces a single, consistent content width and
 * horizontal gutter across the entire site.
 *
 * - Max width: 1152px (max-w-6xl), widening to 1280px (max-w-7xl) on very large screens.
 * - Horizontal padding: 16px mobile / 24px sm / 32px lg.
 *
 * Use this anywhere page or section content should align to the site's edges.
 */
export default function Container<T extends React.ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <Component
      className={`mx-auto w-full max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
