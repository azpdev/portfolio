import { resolve } from "path";
import { defineConfig } from "vite";
import htmlMinifier from "vite-plugin-html-minifier";
import forwardToTrailingSlashPlugin from "./vite-plugins/forward-to-trailing-slash-plugin.js";
import inlineSource from "vite-plugin-inline-source";

const build = {
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      // employment: resolve(__dirname, "employment", "index.html"),
      // projects: resolve(__dirname, "projects", "index.html"),
      // contact: resolve(__dirname, "contact", "index.html"),
    },
    output: {
      // Optimize asset naming for better caching
      assetFileNames: (assetInfo) => {
        const info = assetInfo.name.split(".");
        const ext = info[info.length - 1];
        if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
          return `assets/images/[name]-[hash][extname]`;
        }
        if (/woff2?|eot|ttf|otf/i.test(ext)) {
          return `assets/fonts/[name]-[hash][extname]`;
        }
        return `assets/[name]-[hash][extname]`;
      },
      chunkFileNames: "assets/js/[name]-[hash].js",
      entryFileNames: "assets/js/[name]-[hash].js",
    },
  },
  // Enhanced optimization settings
  css: {
    devSourcemap: false,
    // CSS optimization for production
    postcss: {
      plugins: [
        // Add autoprefixer if needed
      ],
    },
  },
  // Asset optimization
  assetsInclude: ["**/*.woff2", "**/*.woff"],
};

export default defineConfig({
  appType: "mpa",
  base: "",
  build,
  plugins: [
    // Enhanced inline source configuration
    inlineSource({
      optimizeCss: true,
      compress: true,
      rootDir: resolve(__dirname),
      // Only inline critical resources marked with inline-source attribute
      attribute: "inline-source",
    }),
    htmlMinifier({
      minify: true,
      // Enhanced HTML minification options
      options: {
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: false, // Keep quotes for better compatibility
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    forwardToTrailingSlashPlugin(Object.keys(build.rollupOptions.input)),
  ],

  // Development server configuration
  server: {
    port: 5173,
    open: true,
    // Enable HTTP/2 in development for better performance testing
    https: false,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },

  // Enhanced build optimizations
  build: {
    ...build,
    // Generate sourcemaps for debugging (disable in production)
    sourcemap: false,
    // Minify output
    minify: "terser",
    // Terser options for better compression
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ["console.log"], // Remove specific functions
      },
      format: {
        comments: false, // Remove comments
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Asset inlining threshold (inline assets smaller than 4kb)
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: false, // Inline all CSS for better performance
    // Rollup options for better tree-shaking
    rollupOptions: {
      ...build.rollupOptions,
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
});
