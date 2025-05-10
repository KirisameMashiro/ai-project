import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/ai-project/',
  css: {
    postcss: './postcss.config.js' // 指向您的配置文件
  },
  build: {
    rollupOptions: {
      output: {
        // 静态资源（图片、字体、CSS）
        assetFileNames: 'assets/[name]-[hash][extname]',
        
        // 代码分割生成的文件
        chunkFileNames: 'assets/js/[name]-[hash].js',
        
        // 入口 JS 文件
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  }
})