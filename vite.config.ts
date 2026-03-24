import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const stylePath = fileURLToPath(new URL("./src/styles", import.meta.url));

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${stylePath}/config" as *;\n`,
      },
    },
  },
  optimizeDeps: {
    include: ["@toife/vue", "@toife/gesture", "vue", "vue-router"],
  },
  server: {
    port: 5173,
    open: true,
  },
});
