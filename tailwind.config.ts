import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        indigo: {
          '900': '#1a202c',
        },
        professional: {
          navy: '#0A192F',
          charcoal: '#36454F',
          teal: '#008080',
          violet: '#8A2BE2',
        },
        accent: {
          peach: '#FFDAB9',
          aqua: '#00FFFF',
          'neon-green': '#39FF14',
          'sunset-orange': '#FD5E53',
        },
        coffee: {
          100: '#F4EDE6',
          200: '#E6D4C5',
          300: '#D1B59C',
          400: '#B68D6E',
          500: '#8B7355',
          600: '#6B5A4D',
          700: '#4A3D33',
          800: '#332B24',
          900: '#1F1A16'
        }
      },
      boxShadow: {
        tile: '0 20px 45px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
