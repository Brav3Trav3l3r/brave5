/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["forest",
      {
        halloween: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
          "neutral": "#2C2C2C"}
        },
        {
          forest: {
            ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
            "neutral": "#2C2C2C"}
          },
        
      ],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}
