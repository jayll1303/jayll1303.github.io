import { defineConfig } from 'vite';

export default defineConfig({
  base: '/chat/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/portfolio.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});
