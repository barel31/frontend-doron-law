/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      footer: '1020px',
      navbar: '980px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'max-footer': { max: '1019px' },
      'max-navbar': { max: '979px' },
      'max-sm': { max: '639px' },
      'max-md': { max: '767px' },
      'max-lg': { max: '1023px' },
      'max-xl': { max: '1279px' },
      'max-2xl': { max: '1535px' },
      'max-3xl': { max: '1919px' },
    },
  },
  plugins: [],
  darkMode: 'class',
  safelist: [
    'hover:shadow-sm',
    'scale-105',
    'hover:scale-105',
    'hover:bg-slate-400',
    'dark:hover:bg-slate-500',
    'max-md:m-2', 'p-4', 'xl:p-4', 'p-1', 'shadow-md'
  ],
};
