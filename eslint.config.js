import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-config-prettier/flat";
import globals from "globals";

export default defineConfig(
  globalIgnores(["dist/", ".astro/"]),
  js.configs.recommended,
  ts.configs.recommended,
  astro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  prettier,
);
