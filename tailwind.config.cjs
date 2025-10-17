/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        primaryDark: '#4f46e5',
        secondary: '#10b981',
        accent: '#f59e0b',
        textDark: '#1f2937',
        textLight: '#6b7280',
        backgroundLight: '#f9fafb',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'neon': 'neon 1.5s ease-in-out infinite alternate',
        'parallax': 'parallax linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        neon: {
          '0%': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #6366f1, 0 0 20px #6366f1',
          },
          '100%': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #6366f1, 0 0 40px #6366f1',
          }
        }
      }
    },
  },
  plugins: [],
}
