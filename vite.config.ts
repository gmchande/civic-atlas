import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const basePath = process.env.VITE_BASE_PATH ?? '/'
const base = basePath.endsWith('/') ? basePath : `${basePath}/`

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
