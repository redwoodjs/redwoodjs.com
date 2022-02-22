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
      colors: {
        red: {
          100: '#FDF8F6',
          200: '#FAEAE5',
          300: '#F3C7BA',
          400: '#EBA48E',
          500: '#E38163',
          600: '#DC5E38',
          700: '#BF4722',
          800: '#682712',
          900: '#341309',
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
      },
    },
  },
  plugins: [],
}
