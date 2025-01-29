/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [".html"],
    theme: {
      extend: {
        colors: {
            clifford: '#da373d',
            'btn-bg': '#B68C5A',
        },
        fontFamily: {
            'font-Poppins': ["Poppins", "serif"],
            'font-EB': ["EB Garamond", "serif"],
        },
      },
    },
    plugins: [],
  }