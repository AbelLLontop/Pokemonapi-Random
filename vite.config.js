import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@providers', replacement: path.resolve(__dirname, 'src/providers') },
      { find: '@reducers', replacement: path.resolve(__dirname, 'src/reducers') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
  },

})
