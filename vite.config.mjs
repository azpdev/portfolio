import { resolve } from "path";
import { defineConfig } from "vite";
import htmlMinifier from "vite-plugin-html-minifier";
import forwardToTrailingSlashPlugin from "./vite-plugins/forward-to-trailing-slash-plugin.js";

const build = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      // about: resolve(__dirname, "about", "index.html"),
      // employment: resolve(__dirname, "employment", "index.html"),
      // projects: resolve(__dirname, "projects", "index.html"),
      // contact: resolve(__dirname, "contact", "index.html"),
    },
  },
};

export default defineConfig({
  appType: "mpa",
  base: "",
  build,
  plugins: [
    htmlMinifier({
      minify: true,
    }),
    forwardToTrailingSlashPlugin(Object.keys(build.rollupOptions.input)),
  ],
});
