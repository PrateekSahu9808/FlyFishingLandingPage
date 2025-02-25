import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/FlyFishingLandingPage/", // Replace with your actual GitHub repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Define @ as src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/mixins" as *;`, // Preload mixins globally (optional)
      },
    },
  },
  plugins: [react(), svgr()],
});
