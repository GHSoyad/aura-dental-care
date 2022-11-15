/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-hero': "url('/src/Assets/images/chair.png')",
        'chair': "url('/src/Assets/images/chair.png')",
        'home-appointment': "url('/src/Assets/images/appointment.png')",
        'footer': "url('/src/Assets/images/footer.png')"
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