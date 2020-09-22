module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    // enabled: true,
    content: [
      './public/**/*.html',
      './src/**/*.html',
      './src/**/*.jsx',
      './src/**/*.js'
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: ['bg-c100', 'bg-c200']
    }
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
      xxlg: '3.125rem',
      xxxlg: '6.25rem'
    },
    colors: {
      c100: '#f9320c', // red
      c200: '#141f32', // dark-blue
      c300: '#7a8baa', // grayish-blue
      c400: '#f9f7ff', // off-white
      c600: '#8072fc', // light-blue
      c700: '#ed3ce3', // purple
      c800: '#74fa5e', // light-green
      c900: '#f9e5e9', // for the services section hover effect
      c1000: '#f9ebf0', // for the services section hover effect
      c1100: '#f9f1f7', // for the services section hover effect
      white: '#fff', // white
      black: '#000' // Black
    },
    lineHeight: {
      1: '1.75rem',
      2: '2.5rem',
      3: '4.375rem'
    },
    corePlugins: {
      container: false
    },
    extend: {
      borderRadius: {
        md: '12.5rem' // this for the border radius of my-work-process section
      },
      margin: {
        35: '8.75rem' //Between every two sections
      },
      width: {
        70: '17.5rem', // for the services section hover effect
        80: '20.5rem', // for the outer circle in my-work-process in mobile
        90: '22.5rem', // for the services section hover effect
        110: '27.5rem' // for the services section hover effect
      },
      height: {
        70: '17.5rem', // for the services section hover effect
        90: '22.5rem', // for the services section hover effect
        110: '27.5rem' // for the services section hover effect
      },
      minWidth: {
        navbar: '78rem'
      },
      zIndex: {
        60: 60
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'], // adding opacity to group-hover
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'], // adding bg to group-hover
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'] // adding textColor to group-hover
  },
  plugins: []
};
