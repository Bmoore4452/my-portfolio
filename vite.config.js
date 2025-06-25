import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/my-portfolio/',
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    motion: ['motion', 'framer-motion'],
                    three: ['three', '@react-three/fiber', '@react-three/drei'],
                    ui: ['tailwind-merge', 'cobe']
                }
            }
        },
        chunkSizeWarningLimit: 1000
    }
});
