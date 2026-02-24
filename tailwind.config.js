/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#256af4",
          "primary-glow": "#256af480",
          "background-dark": "#020617",
          "card-dark": "#0f172a",
          "border-dark": "#1e293b",
        },
      },
    },
    plugins: [],
  }