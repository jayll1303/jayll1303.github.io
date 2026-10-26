import { defineConfig } from 'vite';

export default defineConfig({
  base: '/chat/',
  worker: {
    rolldownOptions: {
      output: { entryFileNames: 'assets/local-model-worker.js' }
    }
  },
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
