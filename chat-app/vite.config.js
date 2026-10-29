import { defineConfig } from 'vite';
import { copyFileSync, readFileSync } from 'node:fs';

export default defineConfig({
  base: '/chat/',
  plugins: [{
    name: 'publish-chat-homepage',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const appearance = readFileSync(new URL('./src/appearance-init.js', import.meta.url), 'utf8');
        return html.replace('<!-- appearance-init -->', `<script>${appearance}</script>`).replace(/\r/g, '');
      }
    },
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
