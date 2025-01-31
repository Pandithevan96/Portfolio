import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/portfolio/',  // 🔴 Add this line (use your repo name)
  plugins: [react(), svgr()],
});
