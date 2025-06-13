/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add more paths if needed
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0px 4px 6px rgba(255, 255, 255, 0.4)', // Custom white shadow
      },
    },
    screens:{
            ipadportrait: { raw: '(width: 1024px) and (orientation: portrait)' },
    }
  },
  plugins: [],
}

