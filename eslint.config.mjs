import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-undef': 'warn',
      'react/no-unused-state': 'warn',
      'react/react-in-jsx-scope': 'off'
    },
  },
];