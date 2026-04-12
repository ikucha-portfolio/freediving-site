import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // ←ここ変更🔥
  plugins: [react()],
});