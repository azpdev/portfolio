import { resolve } from "path";
import { defineConfig } from "vite";
import htmlMinifier from "vite-plugin-html-minifier";

const build = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      resume: resolve(__dirname, "resume", "index.html"),
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
  ],
});
