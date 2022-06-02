module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      "colors": {
        "600": {
          "blue": "#2563eb"
        },
        "blanc": "#ffffff",
        "violet": "#330458",
        "fushia": "#8c158e",
        "gris": "#3a3a3a",
        "bleu": "#2563eb",
        "blue": {
          "600": "#2563eb"
        }
      },
      "fontSize": {
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.625rem",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.125rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "5rem"
      },
      "fontFamily": {
        "league-gothic": "League Gothic",
        "bangers": "Bangers",
        "faster-one": "Faster One",
        "montserrat": "Montserrat"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.3125rem",
        "default": "0.5rem",
        "lg": "0.625rem",
        "xl": "0.65625rem",
        "2xl": "1.875rem",
        "3xl": "2.1875rem",
        "full": "9999px"

      },
      "screens": {
        "sm": "320px"

      }
    },
  },
  plugins: [],
}
