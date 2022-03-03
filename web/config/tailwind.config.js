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
      maxWidth: {
        64: '16rem',
      },
    },
  },
  plugins: [],
}
