/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E2F", // Background
        secondary: "#5D5FEF", // Accent
        highlight: "#EFD55D", // CTA
      },
    },
  },
  plugins: [],
};
