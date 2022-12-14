import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/homepage/',
  root: './src',
  publicDir: '../public',
  assetsInclude: ['**/assets/scene.gltf'],
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
