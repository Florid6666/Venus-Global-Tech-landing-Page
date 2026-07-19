/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkVoid: '#05050A',
        darkCard: '#0B0F19',
        darkCardHover: '#131A2A',
        lightBg: '#F8F8FC',
        indigoPrimary: '#5B5BF6',
        violetSecondary: '#8B5CF6',
        coralAccent: '#FF6B4A',
        glowAccent: '#7C5CFF',
        emeraldSuccess: '#2EE6A6',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Satoshi', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
