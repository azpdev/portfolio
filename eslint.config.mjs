import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import regexPlugin from "eslint-plugin-regexp";
import security from "eslint-plugin-security";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

/**
 * ESLint Flat Config for Vanilla JavaScript (Vite)
 *
 * Includes:
 * - JavaScript best practices
 * - Security best practices
 * - Unused import cleanup
 * - Regex validation
 * - Prettier compatibility
 */
export default [
  // Ignore patterns
  {
    ignores: ["node_modules", "dist", "**/*.min.js"],
  },

  // Base configs
  js.configs.recommended,
  comments.recommended,
  regexPlugin.configs["flat/recommended"],
  security.configs.recommended,

  // Main config
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    plugins: {
      "unused-imports": unusedImports,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Code quality
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["warn", "all"],
      "no-else-return": "warn",
      "no-empty-function": "warn",
      "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",

      // Style (relaxed since Prettier handles most)
      camelcase: "warn",

      // Unused imports
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],

      // Relaxed for vanilla projects
      "no-magic-numbers": "off",
      "no-console": "off",
    },
  },

  // Prettier (must be last)
  prettierConfig,
];
