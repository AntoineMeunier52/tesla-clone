/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./app/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "top-bar-items-color": "#171a20",
        "white-text": "#fff",
        "primary-blue": "#3e6ae1",
        "gray-1": "#2d2d2d66",
      },
      fontFamily: {
        Roboto: "Roboto, sans-serif",
        InterTight: "Inter Tight, sans-serif",
      },
      keyframes: {
        stroke: {
          to: { "stroke-dashoffset": "0" },
        },
      },
      animation: {
        stroke: "stroke 2s ease forwards",
      },
    },
  },
  plugins: [],
};
