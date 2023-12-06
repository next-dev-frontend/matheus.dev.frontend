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

      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'typing': 'typing 3s steps(28), blink 2s infinite',
      },


    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
};