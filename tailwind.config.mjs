/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e51f23',
        secondary: '#86bc42',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        jura: ['var(--font-jura-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
