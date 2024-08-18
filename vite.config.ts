import path from 'path';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'magic-motion',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'setuptTests.ts',
                'eslintrc.cjs',
                'vitest.config.ts',
                'prettier.config.js',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
        minify: 'esbuild',
    },
    plugins: [react(), dts(), viteCompression()],
    server: {
        host: true,
        port: 3000,
    },
});
