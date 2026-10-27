import { defineConfig } from 'vite';
import { copyFileSync } from 'node:fs';

export default defineConfig({
  base: '/chat/',
  plugins: [{
    name: 'publish-chat-homepage',
    closeBundle() {
      copyFileSync(new URL('../chat/index.html', import.meta.url), new URL('../index.html', import.meta.url));
    }
  }],
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
