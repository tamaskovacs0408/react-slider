/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '500': '500px'
      },
      maxWidth: {
        '1200': '1200px',
        '750': '750px'
      }
    },
    colors: {
      'sliderbutton': '#0a0a0a87'
    }
  },
  plugins: [],
}