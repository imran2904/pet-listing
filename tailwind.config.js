module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customBg: '#f0f4f8',
        customHoverBg: '#1D4ED8',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [],
};
