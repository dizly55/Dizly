/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dizly: {
          teal: "#00BFA6",
          coral: "#FF6B6B",
          bluebg: "#F1FAFE",
          yellow: "#FFD93D",
          text: "#222222",
        },
      },
    },
  },
  plugins: [],
};
