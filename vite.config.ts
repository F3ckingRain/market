import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],

  server: {
    port: 8080,
    host: true,
    strictPort: true,
  },

  build: {
    emptyOutDir: true,
    chunkSizeWarningLimit: 450,
    target: 'esnext',
    modulePreload: false,
    cssMinify: 'esbuild',
    cssCodeSplit: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },

      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|webp|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }

          if (/svg/i.test(extType)) extType = 'icon';

          if (/css/i.test(extType)) {
            if (assetInfo.name.includes('index')) {
              return `assets/${extType}/main[extname]`;
            }

            return `assets/${extType}/[name]-[hash][extname]`;
          }

          return `assets/media/${extType}/[name]-[hash][extname]`;
        },

        chunkFileNames: chunkInfo => {
          return `assets/js/${chunkInfo.name}-[hash].js`;
        },

        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },

  esbuild: {},

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
