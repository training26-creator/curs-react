import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { patchCssModules } from 'vite-css-modules'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), patchCssModules()],
})
