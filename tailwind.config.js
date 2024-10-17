const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        Playfair: ['Playfair Display'],
      },
      colors: {
        'dark-blue': '#0A0F2C', // Couleur sombre classe
        'light-gray': '#D3D3D3', // Texte gris clair
        'soft-yellow': '#FFD700', // Jaune doux pour les accents
      },
    },
  },
  plugins: [],
});

