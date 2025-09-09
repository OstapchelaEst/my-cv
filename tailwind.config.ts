export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'white',
        accent: '#677bfe',
      },

      screens: {
        laptop: { max: '1450px' },
        tablet: { max: '900px' },
        mobile: { max: '650px' },
      },

      fontFamily: {
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [],
}
