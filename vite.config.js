import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages/"),
      partials: path.resolve(__dirname, "./src/partials/"),
      layout: path.resolve(__dirname, "./src/layout/"),
      constants: path.resolve(__dirname, "./src/constants/"),
      routes: path.resolve(__dirname, "./src/routes/"),
      assets: path.resolve(__dirname, "./src/assets/"),
    },
  },
})
