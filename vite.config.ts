
import { defineConfig } from "vite";
import path from "path";
import react from '@vitejs/plugin-react';
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./",
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
    // Add proper MIME type configuration
    headers: {
      'Content-Type': 'application/javascript',
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
      },
    },
  },
}));
