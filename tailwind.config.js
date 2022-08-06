/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#252427',
      white: '#fff',
      gray: {
        100: '#949AA6',
        200: '#6c757d',
      },
      primary: '#D1B1FF',
      primaryLight: '#ffe3ff',
      primaryDark: '#9f81cc',
      primary: '#D1B1FF',
      secondary: '#272932',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
