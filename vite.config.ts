import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/rawg': {
        target: 'https://api.rawg.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/rawg/, '/api'),
      },
    },
  },
})