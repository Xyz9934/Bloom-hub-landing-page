import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
var __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [react()],
    build: {
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks: function (id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('framer-motion'))
                            return 'motion';
                        if (id.includes('react-helmet-async'))
                            return 'helmet';
                        if (id.includes('react-dom') || id.includes('react'))
                            return 'react-vendor';
                    }
                    return undefined;
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 5173,
    },
});
