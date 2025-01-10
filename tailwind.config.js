/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        walbaum: ["'Walbaum Com'", "sans-serif"], // Add the custom font
      },
    },
    colors: {
      'yellow-white' : '#F7F7F7'
    }

    
  },
  plugins: [],
}