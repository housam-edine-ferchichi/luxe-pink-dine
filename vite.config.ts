import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
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
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Ajoute explicitement index.html comme point d'entrée
      external: ['nom-du-module-problématique'] // Remplacez 'nom-du-module-problématique' par le nom du module à externaliser
    }
  }
});