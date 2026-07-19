/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/img/heroBg.jpg')",
      },

      colors: {
        solace: {
          50: "#F7F7F3",
          100: "#EEEFEA",
          200: "#DDE2DB",
          300: "#BCC8BE",
          400: "#98AA9B",
          500: "#748B79",
          600: "#607665",
          700: "#4F6355",
          800: "#405046",
          900: "#334039",

          canvas: "#F7F4EE",
          surface: "#FFFDF8",
          linen: "#E8E4DA",
          stone: "#D8C8B3",
          mist: "#AAB5AC",
          forest: "#536B59",
          ink: "#172033",
        },
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
