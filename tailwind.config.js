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
        color3: '#128a45' //green
      },

      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },

        typing: {
          from: {
            width: '0'
          },
          to: {
            width: '28ch'
          },
        },

        blink: {
          from: {
            'border-right': '0'
          },
          to: {
            'border-right': '0'
          },
        },

        //animação de texto nome das linguagens
        slide: {
          '0%, 100%': {
            'margin-top': '-270px',
          },
          '5%, 33%': {
            'margin-top': '-180px',
          },
          '38%, 66%': {
            'margin-top': '-90px',
          },
          '71%, 99.99%': {
            'margin-top': '0px'
          }
        },

      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'typing': 'typing 3s steps(28), blink 2s infinite',
        'slide': 'slide 7s linear infinite', //animação de texto nome das linguagens
      },


    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
};