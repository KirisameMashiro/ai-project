module.exports = {
  darkMode: 'class', // 使用class模式支持暗黑模式
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        dark: '#1F2937',
        'light-gray': '#F3F4F6',
        'dark-gray': '#6B7280',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}    