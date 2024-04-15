/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors:{
    //  focus_input_color: "var(--focus-input-color)"
    // },
    container: {
      center: true,
      screens: true,
      padding: "1.5rem"
    }
  },
  plugins: [],
}