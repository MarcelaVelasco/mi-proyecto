import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// "base" debe coincidir con el nombre del repositorio en GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/mi-proyecto/',
})
