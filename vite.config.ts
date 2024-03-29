import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@ui": path.resolve(__dirname, "./src/shared/ui/"),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    port: 8080, // you can replace this port with any port
  },
  preview: {
    host: true,
    port: 8080,
  },
  base: "./",
  plugins: [react()],
});
