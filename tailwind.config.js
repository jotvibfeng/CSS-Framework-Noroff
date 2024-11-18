/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      stroke: "currentColor",
      colors: { customPurple: "#8685EF", customNav: "#aca9bb" },
      screens: {
        xs: "480px",
        "2xl": "1920px",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
