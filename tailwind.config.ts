import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-background': '#F7F9FC',
        'brand-primary': '#0052FF',
        'brand-secondary': '#4C8DFF',
        'brand-accent': '#E6F0FF',
        'brand-text-primary': '#172B4D',
        'brand-text-secondary': '#505F79',
        'brand-green': '#10B981',
        'brand-blue': '#0052FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
