/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   md: { max: "1090px" },
      // },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        garalama: ["var(--garalama-font)"],
      },
      fontWeight: {
        normal: "var(--font-normal)",
        medium: "var(--font-medium)",
      },
      colors: {
        primary: "var(--primary-color)",
        background: "var(--background-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
      },
      zIndex: {
        tooltip: "var(--z-tooltip)",
        fixed: "var(--z-fixed)",
        modal: "var(--z-modal)",
      },
      animation: {
        marquee1: "marquee1 1s linear infinite",
        marquee2: "marquee2 1s linear infinite",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
