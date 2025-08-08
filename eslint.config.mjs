import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: globals.node,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // Keep formatting to Prettier
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    ignores: ["node_modules", "dist", ".github", "eslint.config.mjs"],
  },
];
