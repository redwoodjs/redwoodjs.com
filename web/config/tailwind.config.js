module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],

      serif: ['Source Serif Pro', 'serif'],
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
        'rw-orange': '#BF4722',
      },
      borderWidth: {
        16: '16px',
      },
      colors: {
        forest: {
          50: '#EFFDDD',
          100: '#D6F4AA',
          200: '#BFE984',
          300: '#A7DA67',
          400: '#92C64E',
          500: '#76A737',
          600: '#547D20',
          700: '#3C5D15',
          800: '#2E4A0E',
          900: '#1B3408',
        },
        redwood: {
          50: '#FDF0EB',
          100: '#F0BEB1',
          200: '#E2947C',
          300: '#D6785B',
          400: '#CB6141',
          500: '#BF4722',
          600: '#973213',
          700: '#70230B',
          800: '#4F1706',
          900: '#360D02',
        },
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
      },
      margin: {
        19: '4.75rem',
        27: '6.76rem',
      },
      maxHeight: {
        16: '4rem',
      },
      maxWidth: {
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        64: '16rem',
      },
    },
  },
  plugins: [],
}
