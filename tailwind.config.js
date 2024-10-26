/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#a4c1ff',
          400: '#819dff',
          500: '#647eff',
          600: '#4b61f2',
          700: '#3a4cdb',
          800: '#2d3eb3',
          900: '#1c2987',
        },
        darkblue: {
          50: '#e6eaf0',
          100: '#ccd4e1',
          200: '#99a9c4',
          300: '#667ea6',
          400: '#334d88',
          500: '#001c6a',
          600: '#001655',
          700: '#001140',
          800: '#000b2b',
          900: '#000616',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}