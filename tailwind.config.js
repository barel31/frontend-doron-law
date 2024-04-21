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
