/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.vue',
      'nuxt.config.ts',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        width: 'width'
      },
      colors: {
        'm-burgundy-600': '#E92A63',
        'm-burgundy-700': '#D70745',
        'm-burgundy-800': '#9F0533',
        'm-burgundy-900': '#65001E',
        'm-blue-300': '#CFDCE8',
        'm-blue-400': '#9CCDE0',
        'm-blue-500': '#5390A9',
        'm-blue-600': '#2D6276',
        'm-blue-700': '#193844',
        'm-blue-800': '#02182B',
        'm-blue-900': '#000E1B'
      },
      width: {
        'custom-cards': '900px',
        'custom-cards-mini': '670px',
        card: '120px',
        'card-lg': '154px',
        'card-xl': '300px',
        detailedCard: '92px',
        'yt-modal-lg': '750px',
        listing: '48%'
      },
      height: {
        card: '180px',
        'card-lg': '231px',
        'card-xl': '450px',
        detailedCard: '138px',
        'yt-modal-lg': '422px',
        17: '4.8rem'

      }
    }
  },
  variants: {
    transitionProperty: ['responsive', 'hover', 'focus'],
    width: ['responsive', 'focus']
  },
  plugins: [
    require('@tailwindcss/ui')
  ]
}
