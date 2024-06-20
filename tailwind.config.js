/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'golden': {
          DEFAULT:'#C59D5F',
          100: '#e2b673',
        },
      },
      backgroundImage: {
        hero: "url('src/assets/images/h5-revolution-img-1.jpg')",
        holder1: "url('src/assets/images/h5-el-holder-img-1-1.jpg')",
        holder2: "url('src/assets/images/h5-el-holder-img-2.jpg')",
        parallax: "url('src/assets/images/h5-parallax-img-2.jpg')",
      },
    },
  },
  plugins: [],
}

