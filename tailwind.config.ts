import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
      space: {
        18: "4.5rem",
      },
      fontFamily: {
        //sans : ['Gilroy', 'sans-serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        marianBlue: '#008000',
        oxfordBlue: '#008000',
        spaceCadet: '#008000',
        darkGreen: '#008000',
        darkPurple: '#008000',
        mediumGreen: '#008000',
        lightGreen: '#66CC66',
        colorPrimary: '#008000',
        colorInActiveText: '#64686b',
        colorSearchText: '#667481',
        colorTint: '#242d34bb',
        colorSecondary: '#008000',
        colorSearch: '#eff3f4',
        colorWhite: '#ffffff',
        countyColor: '#008000',
        nationalColor: '#996600',
        colorGray: '#808080',

        // New colors added
        forestGreen: '#008000',          // Primary Color
        deepOceanBlue: '#006994',        // Secondary Color
        limeGreen: '#32CD32',            // Accent Color
        lightGray: '#F0F0F0',            // Neutral Color
        charcoalGray: '#333333',         // Text Color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [
  ],
}
export default config
