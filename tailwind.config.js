/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
    },
    extend: {
      backgroundImage: theme =>({
        'mobile-app':'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)'
      }),
      spacing:{
        '0.1':'0.063rem'
      },
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
