/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DDDDDD',
        secondary: '#222831',
        'secondary-light': '#30475E',
        accent: '#F05454',
      },
    },
  },
  plugins: [],
};
