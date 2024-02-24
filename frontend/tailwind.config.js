/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreenStart: 'rgb(79, 106, 83)',
        customGreenMiddle: 'rgb(81, 135, 107)',
        customGreenEnd: 'rgb(36, 57, 48)',
        colorCard: '#bbf7d0',
        cream: '#ECE9E6',
      },
      height: {
        '450': '450px',
        '500': '500px',
      },
      width: {
        '400': '400px',
        '600': '600px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};

