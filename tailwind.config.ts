import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0F",
          800: "#111118",
          700: "#16161f",
          600: "#1d1d2a",
        },
        brand: {
          50: "#eef0ff",
          100: "#dde1ff",
          200: "#bcc3ff",
          300: "#949dff",
          400: "#6d72f7",
          500: "#5b54e8",
          600: "#4b3fd1",
          700: "#3f33ad",
          800: "#352d8c",
          900: "#2f2b70",
        },
        cyber: {
          400: "#34e0d2",
          500: "#16c8bb",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
