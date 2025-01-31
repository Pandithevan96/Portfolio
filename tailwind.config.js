/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'source-serif-pro': ['Source Serif Pro', 'serif'],
        // New aesthetic, trendy, and fancy fonts
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'baloo': ['Baloo', 'cursive'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
        'lobster': ['Lobster', 'cursive'],
        'abril-fatface': ['Abril Fatface', 'serif'],
        'frank-rupp': ['Frank Rupp', 'serif'],
        'italiana': ['Italiana', 'serif'],
        'courgette': ['Courgette', 'cursive'],
        // Added Mali font
        'mali': ['Mali', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
