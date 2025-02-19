/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "1px",
        sm: "560px",
        md: "768px",
        lg: "992px",
        xl: "1260px",
        xxl: "1440px"
      },
    },
  },
  plugins: [],
}