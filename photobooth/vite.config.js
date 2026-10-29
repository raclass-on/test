import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercelApiDev from './vite.api-dev.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiDev()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        share: new URL('./share.html', import.meta.url).pathname,
      },
    },
  },
})
