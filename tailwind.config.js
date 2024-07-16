/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C6E49",
        white: "#F7FFF7",
        white2: "#F4F4F9",
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
