/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Arimo', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        background: "#faf6ee",
        surface: "#e8dcc8",
        foreground: "#1c1814",
        accent: "#a07848",
        border: "#d9cbb7",
        muted: {
          foreground: "#6f6255",
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
