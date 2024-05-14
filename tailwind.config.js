/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "team-enemigo": "#d82e2f",
        "team-aliado": "#42a6db",
      },
    },
  },
  plugins: [],
};
