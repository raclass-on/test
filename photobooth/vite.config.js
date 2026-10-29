import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        share: new URL('./share.html', import.meta.url).pathname,
      },
    },
  },
})
