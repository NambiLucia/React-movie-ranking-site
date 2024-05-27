/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#e50914',
        'custom-yellow': '#ffc966',
      },
    },
  },
  plugins: [],
}

