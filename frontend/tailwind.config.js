module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
    // purgeLayersByDefault: true
  },
  purge: {
    // enabled: true,
    content: ['./src/*.js'],

    // These options are passed through directly to PurgeCSS
    options: {}
  },
  // ...
  theme: {
    fontFamily: {
      display: ['Rubik', 'PT Serif', 'sans-serif'],
      body: ['Rubik', 'sans-serif']
    },
    color: {
      c100: '#f9320c',
      c200: '#141f32',
      c300: '#7a8baa',
      c400: '#f9f7ff'
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.5rem',
      xlg: '1.875rem',
      xxlg: '3.125rem'
    },
    //fontWeigt
    //lineHeight
    extend: {}
  },
  variants: {},
  plugins: []
};
