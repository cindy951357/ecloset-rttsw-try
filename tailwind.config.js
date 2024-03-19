/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'all',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/stories/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '415px', //iPhone XR:  415 width

      'md': '540px',

      'lg': '720px',

      'xl': '880px',

      '2xl': '1024px',

      '3xl': '1280px',
    },
    extend: {
      width: {
        '34': '130px',
      }
    }
  },
  plugins: [],
}
