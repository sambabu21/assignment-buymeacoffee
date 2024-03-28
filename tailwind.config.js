/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '-20px 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '-20px 35px 45px rgba(0, 0, 0, 0.25)',
            '-20px 45px 60px rgba(0, 0, 0, 0.15)'
        ]
      }

    },
  },
  plugins: [],
}

