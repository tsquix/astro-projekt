/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      fontWeight: {
        normal: 500,
        bold: 700,
      },
      fontSize: {
        headingL: ["80px", "80px"],
        BodyS: ["14px", "16px"],
        BodyM: ["18px", "28px"],
        headingLMobile: ["36px", "42px"],
        Medium: ["16px", "26px"],
      },
      boxShadow: {
        custom: "4px 1px 8px rgba(0, 0, 0, 0.1)",
      },
      padding: {
        18: "4.5rem",
      },
      letterSpacing: {
        tightest: "-0.5px",
      },
      dropShadow: {
        "custom-lg":
          "0 10px 8px rgb(0, 0, 0, 0.4), 0 4px 3px rgb(0, 0, 0, 0.8)", // Custom drop-shadow
      },
    },
  },
  plugins: [],
};
