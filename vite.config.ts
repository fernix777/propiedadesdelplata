import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public', // Cambia la carpeta de salida a public
    assetsDir: 'assets', // Esto definirá la carpeta para los activos
  },
});