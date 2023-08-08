module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        color1: '#142039', //gray
        color2: '#ff6341', //orange
        color3: '#27ae60' //green
      },



    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
};