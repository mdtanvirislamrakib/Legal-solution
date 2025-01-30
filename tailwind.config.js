/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [".html"],
    theme: {
      extend: {
        colors: {
            clifford: '#da373d',
            'btn-bg': '#B68C5A',
            'gradient-1': "rgba(17, 17, 17, 0.8)",
            'footer-color': 'rgb(17, 17, 17)',
        },
        fontFamily: {
            'font-Poppins': ["Poppins", "serif"],
            'font-EB': ["EB Garamond", "serif"],
        },
      },
    },
    plugins: [],
  }