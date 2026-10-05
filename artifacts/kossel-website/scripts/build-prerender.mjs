import { build } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
// Separate output: never erase the browser build or ship server modules publicly.
await build({
  configFile: resolve(root, "vite.config.ts"),
  build: {
    ssr: resolve(root, "src/entry-prerender.tsx"),
    outDir: resolve(root, "dist/prerender"),
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "render.mjs" } },
  },
});
