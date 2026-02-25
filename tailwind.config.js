/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#03045E',
        'royal-blue': '#023E8A',
        'star-blue': '#0077B6',
        'blue-green': '#0096C7',
        'pacific-cyan': '#00B4D8',
        'sky-blue': '#48CAE4',
        'pale-azure': '#90E0EF',
        'non-photo-blue': '#ADE8F4',
        'powder-blue': '#CAF0F8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 180, 216, 0.5), 0 0 10px rgba(0, 180, 216, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 180, 216, 0.8), 0 0 30px rgba(0, 180, 216, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
