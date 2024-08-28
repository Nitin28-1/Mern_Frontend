import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5173, // Frontend port
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper']
  },
  define: {
    global: 'window',
  },
});

