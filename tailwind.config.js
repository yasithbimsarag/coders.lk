
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0f',
          alt: '#111118',
          card: '#1a1a2e'
        },
        accent: {
          primary: '#00d4ff',
          secondary: '#0066ff'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // animation: {
      //   'blob': 'blob 7s infinite',
      // },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
