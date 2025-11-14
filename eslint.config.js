import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js, react: pluginReact, prettier: pluginPrettier, }, extends: ["js/recommended", prettierConfig, pluginReact.configs.flat.recommended],
   settings:{react:{version:'detect'}}, languageOptions: { globals: globals.browser,
     parserOptions: 2025, sourceType:'module', ecmaFeatures:{ jsx: true} },
    rules: {"prettier/prettier":"error", 'no-unused-vars':'warn','reaxt/react-in-jsx scope':'off','react/jsx-uses-react':'off'} },
  pluginReact.configs.flat.recommended,
]);
