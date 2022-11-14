/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-appointment-bg': "url('/src/Assets/images/appointment.png')"
      }
    }
  },
  daisyui: {
    themes: [
      {
        AuroraTheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "accent": "#3A4256",
          "neutral": "#3D4451",
          "base-100": "#ffffff",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}