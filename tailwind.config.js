/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fef7ed',
          100: '#fcecd8',
          200: '#f8d5b0',
          300: '#f3b97e',
          400: '#ed9645',
          500: '#e67a24',
          600: '#d65c14',
          700: '#b8440f',
          800: '#94350f',
          900: '#7a2d10',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#faf3e6',
          300: '#f5ead5',
        },
        gold: {
          300: '#ffd700',
          400: '#f0c000',
          500: '#d4a500',
        }
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
      },
      animation: {
        'star-fall': 'starFall 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        starFall: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0) rotate(0deg) scale(1)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(100px) rotate(180deg) scale(0.5)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}