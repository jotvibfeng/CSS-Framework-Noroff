/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      stroke: "currentColor",
      colors: { customPurple: "#8685EF", customNav: "#aca9bb" },
      screens: {
        xs: "380px",
        sm: "500px",
        "2xl": "1920px",
      },
      fontFamily: { rob: ["roboto"] },
      width: {
        custom: "50%",
      },
      height: {
        hcustom: "50%",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
