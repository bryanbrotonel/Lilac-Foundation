/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        frosted: 'hsla(0,0%,100%,0.2)',
        frostedHover: 'hsla(0,0%,100%,0.4)',
        // black: '#252427',
        black: {
          900: '#0b0b0c',
          800: '#121213',
          700: '#252427', // Base hue
          500: '#424143',
          300: '#5f5e60',
          100: '#7c7b7d',
          80: '#99989a',
          60: '#b5b4b5',
          40: '#d0d0d1',
          20: '#ebebeb',
        },
        // white: '#FFFFFF',
        white: {
          700: '#282828',
          600: '#2e2e2e',
          500: '#404040',
          300: '#5a5a5a',
          100: '#787878',
          80: '#9a9a9a',
          50: '#bbbbbb',
          30: '#d9d9d9',
          20: '#f0f0f0',
          0: '#FFFFFF', // Base hue
        },
        gray: {
          100: '#949AA6',
          200: '#6c757d',
        },
        // primary: '#D1B1FF',
        primary: {
          800: '#1c1544',
          700: '#2c2153',
          400: '#514179',
          100: '#8069a9',
          70: '#ad92da',
          50: '#D1B1FF', // Base hue
          40: '#dec6ff',
          30: '#e9d3ff',
          20: '#f2dfff',
          10: '#faf3ff',
        },
        secondary: '#272932',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
