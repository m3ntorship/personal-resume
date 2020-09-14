module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
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
    extend: {}
  },
  variants: {},
  plugins: []
};
