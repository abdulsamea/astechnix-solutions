import { type SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement> & {
  variant?: "dark" | "light" | "monochrome";
  showWordmark?: boolean;
};

const ICON_COLOR: Record<string, string> = {
  dark: "#1089FF",
  light: "#1089FF",
  monochrome: "currentColor",
};

const TEXT_COLOR: Record<string, string> = {
  dark: "#23374D",
  light: "#FFFFFF",
  monochrome: "currentColor",
};

export function Logo({ variant = "dark", showWordmark = true, ...props }: LogoProps) {
  const iconColor = ICON_COLOR[variant];
  const textColor = TEXT_COLOR[variant];

  if (!showWordmark) {
    return (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AStechnix" role="img" {...props}>
        <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 8V20M20 20L30 14M20 20L10 14M20 20V32" stroke={iconColor} strokeWidth="1.5" strokeOpacity="0.5" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="3" fill={iconColor} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AStechnix" role="img" {...props}>
      <path d="M20 8L30 14V26L20 32L10 26V14L20 8Z" stroke={iconColor} strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 8V20M20 20L30 14M20 20L10 14M20 20V32" stroke={iconColor} strokeWidth="1.5" strokeOpacity="0.5" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="3" fill={iconColor} />
      <text x="44" y="27" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="20" fontWeight="800" fill={textColor} letterSpacing="-0.02em">AStechnix</text>
    </svg>
  );
}

export function LogoMark({ variant = "dark", ...props }: Omit<LogoProps, "showWordmark">) {
  return <Logo variant={variant} showWordmark={false} {...props} />;
}
