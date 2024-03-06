/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green_primary': '#0A8300',
        'green_secondary': '#84C07F',
        'green_footer': '#C1E4BD',
        'ligth_gray': '#D9E3D8',
        'card': '#E9E9E9',
        'text_card': '#575757',
        'dark_blue': '#011F31',
        'white': '#FCFFFA'
      },
      backgroundImage: {
        'hero': "url('./src/assets/img/hero.png')"
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}