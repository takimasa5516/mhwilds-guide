/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hunter: {
          bg: '#0b0d13',
          surface: '#131722',
          card: '#191f2d',
          cardHover: '#232b3d',
          border: '#2a3449',
          borderHover: '#3e4c6b',
          gold: '#d4af37',
          goldLight: '#f3e5ab',
          goldDark: '#8f731a',
          fire: '#ef4444',
          water: '#3b82f6',
          ice: '#38bdf8',
          thunder: '#eab308',
          dragon: '#a855f7',
          poison: '#9333ea',
          paralysis: '#f59e0b',
          sleep: '#0ea5e9',
          blast: '#f97316'
        }
      }
    },
  },
  plugins: [],
}
