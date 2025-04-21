import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#ff4d4d',
        secondary: '#ff6b6b',
        background: '#0a0a1f',
      },
      fontFamily: {
        pixel: ['PixelFont', 'monospace'],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config 