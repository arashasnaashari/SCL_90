const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      IranianSans: ["IranianSans"],
      Vazir: ["Vazir"],
    },
    extend: {
      backgroundImage: (theme) => ({
        landing: "url('/img/show.png')",
      }),
    },
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      bookgram: {
        DEFAULT: "#f3e6dd",
        btn: "#c0a793",
        head: "#403b8e",
        badge: "#348097",
        menu: "#acabab",
        search: "#eaeaeb",
        banafsh: "#403b8e",
        hr: "#c1c3c7",
        blueg: "#a7c5f4",
        yellow: "#dbb714",
        green: "#17e327",
        sabz: "#03DAC6",
      },
      black: colors.black,
    },
    screens: {
      xs: { max: "1024px" },
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
