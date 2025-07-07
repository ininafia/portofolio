/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Sesuaikan dengan jalur file Anda
  ],
  theme: {
    extend: {
      colors: {
        'soft-pink': '#ffeef1',
        'pink-accent': '#ffcad4',
        'dark-pink': '#fb6f92',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #ff8fab, #fb6f92)',
      },
      // Tambahkan lebih banyak konfigurasi tema sesuai kebutuhan
    },
  },
  plugins: [],
}
