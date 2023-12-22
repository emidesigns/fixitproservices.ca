/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark-blue": "rgb(0, 49, 171)",
        "bg-light-blue": "rgb(0, 145, 255)",
        "yellow": "rgba(255, 255, 0, 1)"
      },
    },
  },
  plugins: [],
};
