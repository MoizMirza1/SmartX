/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        myShadow1 : '4.1px -5px 0 0 rgb(17 24 39)',
        myShadow2 : '-4.1px -5px 0 0 rgb(17 24 39)',
      },
      fontFamily: {
     
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'fira-sans': ['"Fira Sans"', 'sans-serif'],
        'Inter' :  ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      colors: {
        'blue-2': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green-2': '#13ce66',
        'yellow-2': '#ffc82c',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
        'gray-pallet' : 'rgba(255, 255, 255, 0.1)'
        
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
         pulse: 'pulse 3s infinite',
         'infinite-scroll': 'infinite-scroll 40s linear infinite',
        
      },
      safelist: ['animate-fade-in_1s_ease-in-out', 'animate-fade-in-down_1s_ease-in-out'],

      backgroundImage: {
        'hero-pattern': "url('./src/assets/img/HeroImg2.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
};
