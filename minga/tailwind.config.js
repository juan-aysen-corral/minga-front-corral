/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "foto1":"url('/imagenes/branden-skeli-kQ0_flbwBI4-unsplash 1.png')",
        "foto2":"url('/imagenes/branden-skeli-kQ0_flbwBI4-unsplash 2.png')",
      }
    },
  },
  plugins: [],
}