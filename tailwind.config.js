/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        custom: "path('M0,0 H600 V400 H0 V50 Q0 0 50 0 Z')",
      },
    },
  },
  plugins: [ 
    require("daisyui")],
    daisyui: {
      darkTheme: false, 
    },
  
}