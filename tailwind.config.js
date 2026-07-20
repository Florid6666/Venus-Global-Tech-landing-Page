/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlate: '#1A1D20',
        darkCard: '#24282D',
        darkCardBorder: '#2E333A',
        raspberry: '#D8235C',
        raspberryHover: '#B81B4B',
        lightBg: '#F8FAFC',
        grayMuted: '#94A3B8',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Satoshi', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
