import { defineConfig } from 'vite';
import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

// Keep existing static URLs and relative JSON/image/PDF paths intact.
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) return 'three';
        },
      },
    },
  },
  plugins: [{
    name: 'preserve-portfolio-pages',
    closeBundle() {
      for (const entry of ['resume', 'prompts', 'themes', 'terminal.js', 'terminal.css', 'legacy']) {
        cpSync(resolve(entry), resolve('dist', entry), { recursive: true });
      }
    },
  }],
});
