
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'easy-navy': '#002147',
        'easy-blue': '#405975',
        'easy-gray': '#8090A3',
        'easy-gold': '#F0B146',
        'easy-orange': '#DA7929',
        'easy-white': '#FFFFFF',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  // Désactiver les styles par défaut si nécessaire
  corePlugins: {
    preflight: false, // Désactive les styles de réinitialisation de base
  },
  plugins: [],
//    require('@tailwindcss/forms'),
//  ],
}
