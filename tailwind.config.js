/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Actor", "Segoe UI"],
        title: ["Tilt Warp", "Segoe UI"],
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
