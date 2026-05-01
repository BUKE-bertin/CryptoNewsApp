/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E1217',
        card: '#1C1F26',
        cardHover: '#2A2E39',
        primary: '#E91E63', // Daily.dev pink
        accent: '#7C3AED', // Purple
        textMain: '#FFFFFF',
        textMuted: '#A9B1BD',
        border: '#2D323F'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
