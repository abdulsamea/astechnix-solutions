import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "outline-white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-accent text-white hover:bg-brand-accent/90 active:bg-brand-accent/80",
  secondary: "bg-white text-brand-dark border border-ink/15 hover:border-brand-accent hover:text-brand-accent",
  ghost: "text-brand-dark hover:bg-surface",
  dark: "bg-brand-dark text-white hover:bg-brand-dark/90",
  "outline-white": "bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/50",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-sm rounded-md",
  lg: "px-7 py-3.5 text-base rounded-md",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

interface ButtonAsLink extends CommonProps {
  to: string;
}

interface ButtonAsAnchor extends CommonProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

function getClasses(variant: Variant, size: Size, className: string): string {
  return `btn ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({ variant = "primary", size = "md", children, className = "", ...props }: ButtonProps) {
  const classes = getClasses(variant, size, className);

  if ("to" in props) {
    return <Link to={props.to} className={classes}>{children}</Link>;
  }

  if ("href" in props) {
    return <a href={props.href} className={classes}>{children}</a>;
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button variant="secondary" {...props} />;
}
