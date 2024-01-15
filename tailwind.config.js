/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Epilogue', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        White: 'hsl(0, 0%, 98%)',
        Gray: 'hsl(0, 0%, 41%)',
        Black: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
};
