/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        red: {
          500: '#F22539',
          700: '#C00E20'
        },
        gray: {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#BFBFBF',
          600: '#5E5E5E',
          800: '#353535'
        },
        orange: {
          400: '#ECA539'
        }
      },
      backgroundImage: {
        pokemon: "url('./src/assets/images/pokemon-bg.png')"
      }
    }
  },
  plugins: []
}
