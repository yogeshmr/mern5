import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: 443,
      host: '0.0.0.0'
    },
    proxy: {
      '/api': {
        target: 'https://localhost:3000',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
