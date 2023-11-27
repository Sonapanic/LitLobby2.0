module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Include React files
  ],
  theme: {
    extend: {
      colors: {
        ghostWhite: '#F8F8FF',
        softBlack: '#3c3c3c'
      }
    }
  }
  // other Tailwind CSS configurations...
}
