/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      // twsm: '640px',
      // twmd: '768px',
      // twlg: '1024px',
      // twxl: '1280px',
      // tw2xl: '1536px'
    },
    fontFamily:{
      'inter': ["Inter", 'sans-serif'],
      'montserrat': ["Montserrat", 'sans-serif'],
    },
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    colors:{
      brightRed: '#d51435',
      velvetRed: '#c20c4e',
      redOne: '#c4302b',
      white: '#ffffff',
      bgBlack: '#13151c',
      black: '#000000',
      lightGrey: '#888888',
      blueGray: '#1c1e28',
      youtubeColor: '#c4302b',
      tiktokColor: '#ff2d55',
      twitterColor: '#007ff0',
      facebookColor: '#246bce',
      instagramColor: '#f56040',
    },
    extend: {},
  },
  plugins: [],
}

