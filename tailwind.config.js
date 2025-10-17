/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de cores pastéis
        'pastel-pink': '#FFB3BA',
        'pastel-orange': '#FFDFBA',
        'pastel-yellow': '#FFFFBA',
        'pastel-green': '#BAFFC9',
        'pastel-blue': '#BAE1FF',
        'pastel-purple': '#E1BAFF',
        'soft-gray': '#F8F9FA',
        'warm-gray': '#F1F3F4',
        'sage-green': '#A8C8A8',
        'lavender': '#E6E6FA',
        'peach': '#FFCCCB',
        'mint': '#F0FFF0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
