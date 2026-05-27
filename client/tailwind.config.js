/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF007F",
        secondary: "#FF6A00",
        accent: "#FFD6EC",
        dark: "#09090E",
        text: "#111111",
        muted: "#666666"
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(17,17,17,1)',
        'brutal-hover': '4px 4px 0px 0px rgba(17,17,17,1)',
        'brutal-primary': '8px 8px 0px 0px rgba(255,0,127,1)',
      }
    },
  },
  plugins: [],
}
