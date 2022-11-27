const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: colors.blue,
        body: "#0E1028",
        theme: "#20d3fe",
        secondary: "#92c7f7",
        tertiary: "#8ba1f7",
        nav: "#404053",
        accent: "#17B890",
        "input-border": "#565666",
        input: "#2A2A35",
        white: colors.white,
        text: "#FFFFFF",
        header: "#22222b",
        button: "#f25c54",
      },
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwindcss-text-fill-stroke")(),
    require("tailwindcss-neumorphism"),
  ],
};
