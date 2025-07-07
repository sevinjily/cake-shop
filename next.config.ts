const nextConfig = {
  /* config options here */
    content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}', // əgər pages-dirə əsaslanırsansa
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],

};

export default nextConfig;
