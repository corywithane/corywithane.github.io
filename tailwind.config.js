/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.{html,js, png}"],
  theme: {
      extend: {
      fontFamily: {
          'sans': ['raleway', 'sans-serif'],
      },
      colors: {
          'black': '#010104',
          'white': '#f0f0f5',
          'dark-charcoal': '#1F262A',
          'charcoal': '#273034',
          'light-gray': '#CACACA',
          'lime': '#C4EB00',
          'light-lime': '#f9fde5',
          // 'light-lime': '#E7F799',
          'dark-lime': '#89A400',
      },
      },
  },
  variants: {
    extend:{
      textColor:['dark'], // Enables variant for text during dark mode
      backgroundColor: ['dark'], // Enables variant for background during dark mode
    },
  },
  plugins: [],
};

