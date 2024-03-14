/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-first": "#19191C",
        "color-first": "#FFFCFD",
        "color-second": "#FD356E",
        "color-third": "#ADADB0",
        "color-fourth": "#D2D2D2",
        "border-color": "#9797973C",
        "scroll-color": "#6A6A6A97",
      },
    },
  },
  plugins: [],
};
