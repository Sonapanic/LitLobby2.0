module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Include React files
  ],
  theme: {
    extend: {
      colors: {
        softWhite: '#f3f3f3',
        softBlack: '#3c3c3c',
        warmBrown: '#4B402E',
        lightGrey: '#d6d6d6',
        alternateBrown: '#74644b'
      }
    }
  }
  // other Tailwind CSS configurations...
}
