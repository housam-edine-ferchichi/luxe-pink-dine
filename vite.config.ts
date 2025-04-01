import { defineConfig } from "vite";

import path from "path";

import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/luxe-pink-dine/",
    plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: "assets",
    emptyOutDir: true,
    outDir: "dist",
    manifest: true,
    chunkSizeWarningLimit: 1000, // Augmente la limite d'avertissement
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Découpage des chunks
        },
      },
    },
  },
});