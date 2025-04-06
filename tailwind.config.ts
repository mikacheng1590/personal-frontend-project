import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "mika-blue": {
          50: "#316C8C",
          100: "#003049",
        },
        "mika-red": {
          100: "#D62828",
        },
        "mika-maroon": {
          50: "#A3431A",
          100: "#9E2F21",
        },
        "mika-orange": {
          50: "#F77F00",
          100: "#F7B538",
        },
        "mika-yellow": {
          50: "#EAE2B7",
          100: "#FCBF49",
        },
        "mika-green": {
          50: "#687C4F",
          100: "#2A4E28",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
