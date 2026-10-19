/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0d1b3e",
        "brand-accent": "#d4892a",
        "brand-accent-light": "#e0a55c",
        "surface": "#f3f5f7",
        "canvas": "#f3f5f7",
        "border-default": "#dbe0e6",
        "ink": {
          DEFAULT: "#0d1826",
          soft: "#3a4a5e",
          muted: "#768093",
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
        card: "0 1px 3px 0 rgba(13, 27, 62, 0.06), 0 1px 2px 0 rgba(13, 27, 62, 0.04)",
        "card-hover": "0 8px 24px 0 rgba(13, 27, 62, 0.10), 0 2px 6px 0 rgba(13, 27, 62, 0.06)",
        "accent-glow": "0 0 20px hsl(34 72% 50% / 0.10)",
        "navy-glow": "0 0 25px hsl(218 68% 22% / 0.15)",
      },
    },
  },
  plugins: [],
};
