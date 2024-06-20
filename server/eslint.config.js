/**
 * This is our eslint configuration file for the server.
 * Note: If you make a change here, think about if it should be applied in the client config file as well.
 *
 * ESlint is a way to enforce certain code rules to keep the code base consistent.
 * Have a look at our project repo README or https://eslint.org/ for more information
 */

import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 13,
      sourceType: "module",
      globals: {
        // Node.js globals
        __dirname: "readonly",
        __filename: "readonly",
        exports: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        console: "readonly",
        // ES2021 globals
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        // Jest globals
        afterAll: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        beforeEach: "readonly",
        describe: "readonly",
        expect: "readonly",
        it: "readonly",
        jest: "readonly",
        test: "readonly",
      },
    },
    rules: {
      "prettier/prettier": "error",
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      quotes: ["error", "double"],
      // "no-console": "warn", // Uncomment this if you want to warn against console usage
    },
  },
];
