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
      },
      boxShadow: {
        custom: "4px 1px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
