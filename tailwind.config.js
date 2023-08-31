const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // brandPrimary: '#419D9E',
        brandPrimary: '#34B3B0',
        // brandPrimary: '#3370FF',
        brandGray: '#F6F8F9',
        brandBlack: '#000',
        // brandBlack: '#020403',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        'dark-lg':
          '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.04)',
      },
      height: {
        600: '600px',
      },
    },
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },

  plugins: [],
}
