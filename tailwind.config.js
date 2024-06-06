/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Soft-Orange': "hsl(35, 77%, 62%)",
        "Soft-Red": "hsl(5, 85%, 63%)",
        "Off-White": "hsl(36, 100%, 99%)",
        "Grayish-Blue": "hsl(233, 8%, 79%)",
        "Dark-Grayish-Blue": "hsl(236, 13%, 42%)",
        "Very-Dark-Blue": "hsl(240, 100%, 5%)",
      },

      fontFamily: {
        'inter': ["inter"],
      },
    },
  },
  plugins: [],
}

