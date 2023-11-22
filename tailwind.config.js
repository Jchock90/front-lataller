/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'violetin': '#c3a9f7',
        },
      },
      letterSpacing: {
      widest: '0.40em',
    }
    },
    plugins: [
        'tailwind-scrollbar',({ nocompatible: true }),
        'tailwindcss-animations',
    ],
  }