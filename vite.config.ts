
import { defineConfig } from "vite";
import path from "path";
import react from '@vitejs/plugin-react';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // This ensures GitHub Pages compatibility
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    }
  },
  build: {
    assetsDir: "assets",
    emptyOutDir: true,
    outDir: "dist",
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
        format: 'es', // Ensure ESM output format
      },
    },
  },
}));
