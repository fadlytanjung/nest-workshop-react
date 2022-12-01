/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'gray-25': '#f4f5f7',
        'gray-50': '#5e6c84',
        'gray-60': '#dfe1e6',
        'gray-100': '#42526e',
        'warning-100': '#FFAB00',
        'success': '#006644',
        'success-100': '#e3fcef',
        'information': '#0747a6',
        'information-50': '#4AAEE8',
        'information-100': '#deebff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}