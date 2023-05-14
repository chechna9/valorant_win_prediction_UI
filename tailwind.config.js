/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'myDark':"#18122B",
        'myDark2':"#393053",
        'myLight2':"#443C68",
        'myLight':"#635985"
      }
    },
  },
  plugins: [],
}

