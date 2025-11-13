import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], settings:{react:{version:'detect'}}, languageOptions: { globals: globals.browser }, rules: {'no-unused-vars':'warn','reaxt/react-in-jsx scope':'off','react/jsx-uses-react':'off'} },
  pluginReact.configs.flat.recommended,
]);
