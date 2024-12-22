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
        roboto: ['var(--font-roboto-sans)'],
      },
      animation: {
        typewriter: 'typewriter 2s steps(25) forwards',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
