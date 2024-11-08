/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
