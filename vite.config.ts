import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  root: './src',
  publicDir: '../public',
  assetsInclude: ['**/*.gltf'],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 10000,
  },
  server: {
    open: true,
  },
  plugins: [react()],
});