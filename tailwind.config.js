/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0E15',
          light: '#1B202E',
        },
        brandRed: {
          DEFAULT: '#F0030A',
          dark: '#CC0208',
          light: '#FF3B42',
        },
        warmIvory: {
          DEFAULT: '#FAF6F0',
          dark: '#F3ECE1',
          light: '#FFFDF9',
        },
        logoMint: {
          DEFAULT: '#F3FFFF',
          border: '#D0F5F5',
        },
        terracotta: {
          DEFAULT: '#C97B4A',
          dark: '#A65F32',
          light: '#E29768',
        },
        softCharcoal: {
          DEFAULT: '#2E2A28',
          light: '#4A4441',
          muted: '#78716E',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Work Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 20px 40px -15px rgba(11, 14, 21, 0.07)',
        'warm-hover': '0 30px 60px -20px rgba(11, 14, 21, 0.12)',
        'terracotta': '0 15px 30px -10px rgba(201, 123, 74, 0.25)',
      }
    },
  },
  plugins: [],
}
