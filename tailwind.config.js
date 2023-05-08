/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./index.html"],

    theme: {
    extend: {fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },},
    colors: {
  
    },

    screens: {
    },

  },
  
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

