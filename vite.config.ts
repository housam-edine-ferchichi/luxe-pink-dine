import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  
  // chunkSizeWarningLimit moved to build object
  base: "/luxe-pink-dine/", // Replace with your repository name
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Map "@" to the "src" directory
    },
  },
  build: {
    assetsDir: "assets", // Spécifie le répertoire des actifs pour éviter les problèmes de résolution
    emptyOutDir: true, // Nettoie le répertoire de sortie avant chaque construction
    outDir: "dist", // Spécifie le répertoire de sortie pour la construction
    manifest: true, // Génère un fichier manifest pour diagnostiquer les problèmes
    
    chunkSizeWarningLimit: 1000, // Augmente la limite à 1000 kB
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Place les dépendances principales dans un chunk séparé
            },
          },
        },
      },
    });