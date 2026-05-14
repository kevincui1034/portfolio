/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["var(--font-display)", "system-ui", "sans-serif"],
      serif: ["var(--font-serif)", "Georgia", "serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        bg: "#221e2a",
        "bg-2": "#2b2734",
        "bg-3": "#322d3c",
        ink: "#f3efe8",
        dim: "#a8a39a",
        "dim-2": "#7a7470",
        accent: "#e8a87c",
        "accent-2": "#c8a8e9",
        "accent-3": "#8fc8d4",
      },
      maxWidth: {
        page: "1400px",
      },
    },
  },
  plugins: [],
};
