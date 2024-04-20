/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '500': '500px',
        '555': '5rem'
      },
      maxWidth: {
        '1200': '1200px',
      }
    },
  },
  plugins: [],
}