module.exports = {
  darkMode: 'class',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: 'var(--font-base)'
    },
    extend: {
      colors: {
        'background-end': 'var(--color-background-end)',
        'background-start': 'var(--color-background-start)',
        'cyan-end': 'var(--color-cyan-end)',
        'cyan-start': 'var(--color-cyan-start)',
        'header-outline': 'var(--color-header-outline)',
        'lizard-end': 'var(--color-lizard-end)',
        'lizard-start': 'var(--color-lizard-start)',
        'paper-end': 'var(--color-paper-end)',
        'paper-start': 'var(--color-paper-start)',
        'spock-end': 'var(--color-cyan-end)',
        'spock-start': 'var(--color-cyan-start)',
        'rock-end': 'var(--color-rock-end)',
        'rock-start': 'var(--color-rock-start)',
        'scissors-end': 'var(--color-scissors-end)',
        'scissors-start': 'var(--color-scissors-start)',
        dark: 'var(--color-text-dark)',
        score: 'var(--color-text-score)'
      }
    }
  },
  variants: {},
  plugins: []
}
