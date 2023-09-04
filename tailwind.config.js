/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'serif': ['ui-serif', 'Georgia'],
    }
  },
  plugins: [],
}

