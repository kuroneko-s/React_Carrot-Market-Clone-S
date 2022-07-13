/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // tailwind를 어디에서 사용할 건지 알려줘야 한다.
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
