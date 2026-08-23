/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#23374D",
        "brand-accent": "#1089FF",
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
        content: "1200px",
        prose: "680px",
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
      spacing: {
        section: "5rem",
        "section-sm": "3rem",
      },
      transitionTimingFunction: {
        enterprise: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
