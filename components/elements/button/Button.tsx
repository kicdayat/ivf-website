/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

/* eslint-disable-next-line */
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "danger" | "gray";
  size?: "small" | "medium" | "large";
  shadow?: "small" | "medium" | "large" | "none";
  rounded?: "none" | "rounded" | "full";
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = "Button", ...props }, ref) => {
    const {
      variant = "primary",
      size = "medium",
      rounded = "rounded",
      shadow = "none",
      type = "button",
      disabled = false,
      fullWidth = false,
      className,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cls(`
        ${className}
        ${classes.base}
        ${classes.size[size]}
        ${classes.variant[variant]}
        ${classes.rounded[rounded]}
        ${classes.shadow[shadow]}
        ${disabled && classes.disabled}
        ${fullWidth && classes.fullWidth}
  `)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
export default Button;

// ===============
// ====Styling====
// ===============
const cls = (input: string) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

const classes = {
  base: "focus:outline-none transition duration-200 font-semibold",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  fullWidth: "w-full block",
  size: {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-1.5",
    large: "px-8 py-2 text-lg",
  },
  shadow: {
    none: "shadow-none",
    small: "shadow-sm",
    medium: "shadow-md",
    large: "shadow-lg",
  },
  rounded: {
    none: "rounded-none",
    rounded: "rounded-md",
    full: "rounded-full",
  },
  variant: {
    primary:
      "bg-primary hover:bg-primary-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:ring-opacity-50 text-gray-900 shadow-primary/50",
    secondary:
      "bg-primary-300 hover:bg-primary-200 focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray focus:ring-opacity-50 text-primary-700 shadow-primary-300/50",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white shadow-red-500/50",
    gray: "bg-white hover:bg-gray-100 text-gray-600 border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-white shadow-gray-500/50",
  },
};
