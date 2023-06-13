/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      chalky: "#e5c07b",
      coral: "#ef596f",
      dark: "#5c6370",
      deepdark: "#282c34",
      error: "#f44747",
      fountainblue: "#2bbac5",
      green: "#85ca78",
      invalid: "#ffffff",
      lightdark: "#7f848e",
      lightWhite: "#abb2bf",
      malibu: "#61afef",
      purple: "#d55fde",
      whiskey: "#d19a66",
      deepred: "#be5046",
      bgsection: "#2a303c",
      yellow: "#FFD369",
    },
  },

  plugins: [require("daisyui")],
};
