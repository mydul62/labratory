/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lora: "Lora, serif",
        Source:" Source Sans 3, sans-serif",
       }
    
    },
  },
  plugins: [require('daisyui')],
}