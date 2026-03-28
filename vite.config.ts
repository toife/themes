import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const stylePath = fileURLToPath(new URL("./src/styles", import.meta.url));
// Single source for the linked package — avoids duplicate module scope (e.g. two useAction singletons)
const toifeVueEntry = fileURLToPath(new URL("../vue/src/index.ts", import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ["vue", "vue-router"],
    alias: {
      "@toife/vue": toifeVueEntry,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${stylePath}/config" as *;\n`,
      },
    },
  },
  optimizeDeps: {
    // Do not pre-bundle the linked library — pre-bundle often loads a second copy of composable singletons
    exclude: ["@toife/vue"],
    include: ["@toife/gesture", "vue", "vue-router"],
  },
  server: {
    port: 5173,
    open: true,
  },
});
