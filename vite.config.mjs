import { resolve } from 'path';
import { defineConfig } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier';

const build = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      "about-me": resolve(__dirname, "about-me", "index.html"),
      experience: resolve(__dirname, "experience", "index.html"),
      projects: resolve(__dirname, "projects", "index.html"),
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
