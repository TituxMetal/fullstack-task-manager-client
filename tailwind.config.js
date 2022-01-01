const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js, html}'],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral[800],
        primary: colors.yellow[600],
        secondary: colors.amber[200],
        amber: colors.amber,
        yellow: colors.yellow,
        gray: colors.neutral,
        white: colors.neutral[50]
      }
    }
  }
}
