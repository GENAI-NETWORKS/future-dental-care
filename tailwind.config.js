/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0F1E',
          light: '#111827',
          lighter: '#1a2235'
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#d4b768',
          dark: '#b39542'
        },
        sky: '#4AB8E8',
        text: {
          primary: '#F5F5F5',
          muted: '#8A92A6'
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
