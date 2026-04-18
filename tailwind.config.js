/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        sm: "468px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        primary: "#00B207",
        secondary: "#2C742F",
        common: "#fff",
        grays: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#F7F7F7",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D"
        },
        blacks: {
          500: "#333333",
          900: "#1A1A1A"
        },
        greens: {
          500: "#84D187",
          800: "#2B572E"
        },
        sticks: {
          red: "#EA4B48",
          blue: "#2388FF"
        },
        yellows: {
          700: "#FCC900",
          900: "#FF8A00"
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

    },
  },
  plugins: [],
}