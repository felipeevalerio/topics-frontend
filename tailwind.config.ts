import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      orange: {
        300: '#FC8415',
        500: '#FA9436',
      },
      transparent: '#00000000',
      gray: {
        400: '3f3f3f',
        500: '#2f2f2f',
        700: '#1f1f1f',
      },
      white: {
        500: '#f2f2f2',
        700: '#f0f0f0',
      },
      error: '#ff3333',
    },
  },
  plugins: [],
}
export default config
