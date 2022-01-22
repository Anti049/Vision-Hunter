/* eslint-disable global-require */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Genshin', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
        mono: ['FiraCode NF', 'monospace'],
        title: ['Genshin', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        titlebar: '#202442',
        background: '#202442',
        'background-secondary': '#25294A',
        item: '#2D325A',
        primary: '#4E7CFF',
        navigation: '#4E7CFFCC',
        'navigation-hover': '#4E7CFF66',
        button: '#394076',
        '4star': '#D28FD6',
        '5star': '#FFB13F',
        rare: {
          from: '#D28FD6',
          to: '#665680',
        },
        legendary: {
          from: '#FFB13F',
          to: '#846332',
        },
        dracula: {
          darker: {
            default: '#282A36',
            50: '#CDD0E4',
          },
        },
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        rare: '0 0 0 3px rgba(173, 118, 176, 0.5)',
        legendary: '0 0 0 3px rgba(185, 129, 46, 0.5)',
        outline: '0 0 0 2px #4E7CFF',
        select: '0 20px 16px rgba(0, 0, 0, 0.5)',
      },
      height: {
        14: '3.5rem',
      },
      width: {
        14: '3.5rem',
      },
      spacing: {
        '32px': '32px',
        'sidebar-full': '20rem',
        'sidebar-mini': '4rem',
      },
      backgroundImage: {
        'emblem-pattern': 'url(/images/logo/full.png)',
      },
      screens: {
        tablet: '1000px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-dracula')(),
  ],
};
