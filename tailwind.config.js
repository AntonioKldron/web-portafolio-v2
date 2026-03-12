/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        bg: {
          light: '#f8fafc',
          dark: '#030712',
        },
        txt: {
          light: '#1e293b',
          dark: '#94a3b8',
        }
      },
    },
  },
  plugins: [],
}