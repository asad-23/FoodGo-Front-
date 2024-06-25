import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      // '/api': 'http://localhost:5000'
      '/api': 'https://foodgo-back.onrender.com',
    }
  },
  plugins: [react()],
})
