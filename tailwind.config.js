const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        blue: colors.blue, 
        body: "#FFFFFF",
        theme: "#F49C2A",
      nav: "#404053",
      secondary: "#F7B764",
      accent: "#17B890",
      "input-border": "#565666",
      input: "#2A2A35",
      white: colors.white,
      text: "#1F1F1F",
      header: "#22222b"
      }
    },
    fontFamily: {
      'poppins': ["'Poppins'", "sans-serif"],
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    },
    require('tailwindcss-text-fill-stroke')(),
    require('tailwindcss-neumorphism'),
],
}
