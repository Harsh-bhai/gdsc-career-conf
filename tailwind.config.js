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
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.5)",
        // lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontSize: {
        xxs: "0.5rem", // You can adjust the size as needed
        "3xs": "0.4rem", // You can adjust the size as needed
      },
      // screens: {
      //   md: { max: "1090px" },
      // },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        header: ["var(--header-font)"],
      },
      fontWeight: {
        normal: "var(--font-normal)",
        medium: "var(--font-medium)",
      },
      colors: {
        primary: "var(--primary-color)",
        fade: "var(--primary-fade-color)",
        background: "var(--background-color)",
        dark: "var(--dark-color)",
        light: "var(--light-color)",
      },
      boxShadow: {
        "custom-purple": "0 1px 3px #5f24bf, 0 0 3px #5f24bf",
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
  plugins: [require("tailwind-scrollbar")],
};
