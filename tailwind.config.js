const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme') // for default theme

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xss: "250px",
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      red: colors.rose,

      /* custom colors */
      porpoise: '#DADADA'
    },
    extend: {
      spacing: {
        auto: 'auto',
        0: '0',
        1: '0.0625rem',
        2: '0.125rem',
        3: '0.1875rem',
        4: '0.25rem',
        5: '0.3125rem',
        6: '0.375rem',
        7: '0.4375rem',
        8: '0.5rem',
        9: '0.5625rem',
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        28: '1.75rem',
        30: '1.875rem',
        32: '2rem',
        34: '2.125rem',
        36: '2.25rem',
        38: '2.375rem',
        40: '2.5rem',
        45: '2.8125rem',
        50: '3.125rem',
        55: '3.4375rem',
        60: '3.75rem',
        65: '4.0625rem',
        70: '4.375rem',
        80: '5rem',
        90: '5.625rem',
        100: '6.25rem',
        '260px': '262.04px',
        '498px': '498px',
        '10f': "10%",
        '20f': "20%",
        '50f': '50%',
        '40f': '40%',
        '60f': '60%',
        120: '7.50rem',
        150: '10rem',
        '17mpx':'-17px',
        '13mpx':'-13px',
        '420px':'420px'
        

      },
      fontFamily: {
        base: ['Chakra Petch'],
        inter: ['Inter'],
        roboto: ['Roboto'],
        'russo-one': ['Russo One']
      },
      fontSize: {
        14: '0.875rem',
        base: '1rem',
        17: '1.0625rem',
        18: '1.125rem',
        21: '1.3125rem',
        24: '1.5rem',
        32: '2rem',
        28: '1.75rem',
        60: '3.75rem',
        '60px': '60px',
        '30px': '30px',
        '40px': '40px',
        '18px': '18px',
        '17px': '17px',
        
      }
    }
  },
  plugins: []
}
