import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,jsx}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            semi: "error",
            "prefer-const": "warn",
            indent: ["error", 4],
            "react/prop-types": "off"
        }
    }
];