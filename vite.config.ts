import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", // Базовий шлях для Vercel
  build: {
    sourcemap: true,
    outDir: "dist",
  },
  server: {
    open: true,
  },
});
