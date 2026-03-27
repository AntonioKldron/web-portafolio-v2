import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@data':     fileURLToPath(new URL('./src/data',          import.meta.url)),
      '@context':  fileURLToPath(new URL('./src/app/context',   import.meta.url)),
      '@router':   fileURLToPath(new URL('./src/app/router',    import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features',      import.meta.url)),
      '@shared':   fileURLToPath(new URL('./src/shared',        import.meta.url)),
      '@page':     fileURLToPath(new URL('./src/page',          import.meta.url)),
      '@app':      fileURLToPath(new URL('./src/app',           import.meta.url)),
      '@img':      fileURLToPath(new URL('./src/assets/img',    import.meta.url)),
      '@doc':      fileURLToPath(new URL('./src/assets/doc',    import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services',      import.meta.url)),
    }
  }
})

