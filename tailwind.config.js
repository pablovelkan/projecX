/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: {
          950: "#001a0b",
          900: "#01210e",
          850: "#022914",
        },
        ivory: "#F3EBDD",
        blood: {
          600: "#006400",
          700: "#004D00",
        },
        ember: "#006400",
        parchment: "#E8DDC7",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        cinzel: ["Cinzel", "ui-serif", "Georgia", "serif"],
        wedding: ["Great Vibes", "ui-serif", "Georgia", "serif"],
        edwardian: ["Edwardian Script ITC", "ITC Edwardian Script", "Edwardian Script", "Great Vibes", "ui-serif", "Georgia", "serif"],
        handdrawn: ["Permanent Marker", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        glowRed: "0 0 0 1px rgba(0,100,0,0.25), 0 0 26px rgba(0,100,0,0.25)",
        glowRedStrong: "0 0 0 1px rgba(0,100,0,0.35), 0 0 40px rgba(0,100,0,0.35)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-60%)" },
          "100%": { transform: "translateX(60%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
