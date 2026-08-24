/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#23374D",
        "brand-accent": "#1089FF",
        "brand-accent-light": "#3BA0FF",
        "surface": "#E5E5E5",
        "canvas": "#EEEEEE",
        "ink": {
          DEFAULT: "#1A2332",
          soft: "#3D4F63",
          muted: "#6B7B8C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
        prose: "720px",
        wide: "1440px",
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
      spacing: {
        section: "6rem",
        "section-sm": "3.5rem",
        "section-lg": "8rem",
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        enterprise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(35, 55, 77, 0.06), 0 1px 2px 0 rgba(35, 55, 77, 0.04)",
        "card-hover": "0 8px 24px 0 rgba(35, 55, 77, 0.10), 0 2px 6px 0 rgba(35, 55, 77, 0.06)",
      },
    },
  },
  plugins: [],
};
