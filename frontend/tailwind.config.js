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
      headings: ['PT Serif', 'serif'],
      body: ['Rubik', 'sans-serif']
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.5rem',
      xlg: '1.875rem',
      xxlg: '3.125rem'
    },
    color: {
      c100: '#f9320c',
      c200: '#141f32',
      c300: '#7a8baa',
      c400: '#f9f7ff'
    },
    lineHeight: {
      1: '1.75rem',
      2: '2.5rem'
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
