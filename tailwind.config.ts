import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './util/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pryColor: {
          DEFAULT: '#076a39',
          100: '#E6F0EB',
          200: '#0828B1',
          300: '#0A69FA',
        },
        secColor: '#7fd159',
        white: '#fff',
        grayish: {
          DEFAULT: '#F7F7F7',
          100: '#FEFEFE',
          200: '#FAFAFA',
          300: '#F8FAFB',
          400: '#667085',
        },
        black: '#080a09',
        Grey1: '#393b3a',
        Grey2: '#8d8e8e',
        Grey3: '#bdc0ce',
        Grey4: '#E6E6E6',
        Grey5: '#bcbcbd',
        Grey6: '#7e8494',
        Line: '#e5e7ef',
        rated: '#be9122',
        positive: '#20af0b',
        negative: '#ff3b2d',
        receiver: '#eeeff2',
        sender: '#3b70fb',
      },

      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
