/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/img/heroBg.jpg')",
      },
      logo: {
        "solance-logo": "url('/img/solance-logo.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
