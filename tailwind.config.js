/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        position: 'right, left, top, bottom, margin, padding',
        textColor: 'color',
      },
      colors: {
        primary: '#ef2352',
        secondary: '#EFF6E0',
        ui: '#8d99ae',
        back: '#01161E',
      },
    },
  },
  plugins: [],
}
