import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { URL, fileURLToPath} from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(
        new URL('./starter-code/assets', import.meta.url)
      ),
    },
  },
  plugins: [react()],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

})
