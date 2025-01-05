import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps: {
  //   exclude: ['@joelshejar/react-ai-translator'], // Skip optimization for problematic package
  //   include:['@xenova/transformers']
  // },
  plugins: [react()],
})