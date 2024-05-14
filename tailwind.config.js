/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "team-enemigo": "#ff4500",
        "team-aliado": "#00bfff",
        purple: "#3f3cbb",
        midnight: "#121063",
      },
    },
  },
  plugins: [],
};
