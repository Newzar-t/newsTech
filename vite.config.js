import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/newsTech/',  // <-- Important : doit correspondre au nom de ton repo
  plugins: [react()],
});