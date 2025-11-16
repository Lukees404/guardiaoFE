/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'guardiao-azul': '#3A7DFF',
        'guardiao-cinza-escuro': '#1E293B',
        'guardiao-cinza-medio': '#64748B',
        'guardiao-cinza-claro': '#F1F5F9',
        'guardiao-branco': '#FFFFFF'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif']
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        bounce: 'bounce 1s infinite'
      }
    }
  },
  plugins: [],
}
