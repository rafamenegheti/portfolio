module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        sans: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        cafe: {
          50: "#f3efff",
          100: "#e4dbff",
          200: "#c9b8ff",
          300: "#a78bfa",
          400: "#8b6cf0",
          500: "#6d4fd6",
          600: "#5538b5",
          700: "#412a8c",
          800: "#2d1d5e",
          900: "#1a1038",
          950: "#0d0820",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(180, 160, 255, 0.25)",
        "glow-sm": "0 0 20px rgba(180, 160, 255, 0.2)",
        "text-glow": "0 0 30px rgba(255, 255, 255, 0.45)",
      },
      borderRadius: {
        glass: "1.75rem",
      },
    },
  },
  plugins: [],
};
