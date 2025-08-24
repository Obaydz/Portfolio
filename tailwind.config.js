/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // toggle dark mode via ThemeContext
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8b5cf6",
          DEFAULT: "#7f5af0",
          dark: "#5a31c8",
        },
        secondary: {
          light: "#f472b6",
          DEFAULT: "#f50057",
          dark: "#c40042",
        },
        background: {
          light: "#f9fafb",
          DEFAULT: "#ffffff",
          dark: "#111827",
        },
        surface: {
          light: "#ffffff",
          dark: "#1f2937",
        },
        text: {
          light: "#1f2937",
          dark: "#f3f4f6",
        },
        accent: {
          light: "#e0c3fc",
          dark: "#7f5af0",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0,0,0,0.1)",
        strong: "0 8px 20px rgba(0,0,0,0.2)",
        glow: "0 0 20px rgba(127, 90, 240, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
        layout: "margin, padding, width, height, top, left, right, bottom",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-purple-pink":
          "linear-gradient(135deg, #8b5cf6 0%, #d24577ff 100%)",
      },
    },
  },
  plugins: [],
};
