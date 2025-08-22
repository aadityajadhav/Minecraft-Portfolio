/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'minecraft-grass': '#7CB342',
        'minecraft-dirt': '#8D6E63',
        'minecraft-stone': '#757575',
        'minecraft-cobblestone': '#6D4C41',
        'minecraft-ore': '#424242',
        'minecraft-sky': '#87CEEB',
        'minecraft-cloud': '#F5F5F5',
        'minecraft-deepslate': '#2F2F2F',
        'minecraft-nether': '#8B0000'
      },
      fontFamily: {
        'pixel': ['Press Start 2P', 'monospace'],
        'minecraft': ['VT323', 'monospace']
      }
    },
  },
  plugins: [],
}
