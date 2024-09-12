/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      className: {
        half: 'before:content-["☆"] before:absolute before:left-1/2 before:text-yellow-400',
      },
    },
  },
  plugins: [],
};
