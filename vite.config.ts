import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Remove the base option or set it to '/'
  // base: '/fixit-pro-services/',

  // Leave the rest of your configuration as-is
  build: {
    outDir: './docs'
  },
});
