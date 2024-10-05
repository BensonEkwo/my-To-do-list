/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'repeating-stripes': 'repeating-linear-gradient(rgb(254 215 170) 0 14px, gray 14px 16px)',
      },
    },
  },
  plugins: [],
}

