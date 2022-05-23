module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "#6F5CF1",
      },
    },
    screens: {
      mobile: { max: "480px" },
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
