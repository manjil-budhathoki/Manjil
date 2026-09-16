import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(({ mode }) => ({ plugins: [react(), tailwindcss()], base: loadEnv(mode, '.', '').VITE_BASE_PATH || '/' }))
