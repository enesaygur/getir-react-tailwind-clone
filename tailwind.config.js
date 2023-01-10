/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#4c3398",
        "brand-yellow": "#ffd300",
        "primary-brand-color": "#5d33bc",
        "secondary-brand-color": "#7849f7",
      },
    },
  },
  plugins: [],
};
