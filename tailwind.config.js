/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'all',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/stories/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    screens: {
      'sm': '350px',

      'md': '540px',

      'lg': '720px',

      'xl': '1024px',

      '2xl': '1280px',
    }
  },
  plugins: [],
}
