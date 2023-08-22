/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

