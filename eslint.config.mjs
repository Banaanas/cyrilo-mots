import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  // Global ignores
  {
    ignores: [
      ".next/**/*",
      "node_modules/",
      "*.config.js",
      "package*.json",
      "playwright-report/**/*",
      "playwright/.cache/**/*",
      ".tests/**/*",
      "*.json",
      "*.css",
      "*.scss",
    ],
  },
  // Base configuration from plugins
  ...compat.config({
    extends: [
      "next/core-web-vitals", // This is the key change
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
  }),
  // Next.js plugin configuration
  {
    plugins: {
      next: pluginNext, // Use "next" instead of "@next/next"
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
    },
  },
  // TypeScript-specific configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "warn",
      "import/no-default-export": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
  // Override import/no-default-export for Next.js pages
  {
    files: ["pages/**/*.tsx", "pages/**/*.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];

export default eslintConfig;
