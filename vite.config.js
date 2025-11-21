import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键点：对于 Netlify 根目录部署，base 应该是 '/'
  // 如果你之前设置了其他值，请改回 '/' 或者直接注释掉这一行
  base: '/', 
})