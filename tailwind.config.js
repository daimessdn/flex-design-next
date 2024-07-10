/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C6E49",
        secondary: "#4C956C",
        white: "#F7FFF7",
        gray: "#1B2021",
        black: "#08090A",
      },
      fontFamily: {
        ligaSans: ["var(--font-ligasans)"],
        geist: ["var(--font-geist)"],
      },
    },
  },
  plugins: [],
};
