import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/flameo-lol/",
  plugins: [react()],
  publicDir: "public",
  preview: {
    port: 3333
  }
});
