module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'ab': '0 2px 8px rgba(0, 0, 0, 0.25)',
        'bc': '0 1px 8px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}