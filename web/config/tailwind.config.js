module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: [
        'Fira Code',
        'Fira Mono',
        'ui-monospace',
        'SFMono-Regular',
        'monospace',
      ],
    },
    extend: {
      borderWidth: {
        16: '16px',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
      },
      margin: {
        27: '6.76rem',
      },
      maxHeight: {
        16: '4rem',
      },
      maxWidth: {
        32: '8rem',
        36: '9rem',
        64: '16rem',
      },
    },
  },
  plugins: [],
}
