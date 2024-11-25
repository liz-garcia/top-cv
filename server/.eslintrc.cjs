/**
 * Eslint configuration file for the server.
 * Note: If a change is made here, consider if it should be applied in the client config file as well.
 *
 * ESlint is a way to enforce certain code rules to keep the code base consistent.
 *
 * Have a look at this project repo's README or https://eslint.org/ for more information.
 */

module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    // Prettier does double quotes so make that the default
    quotes: ["error", "double"],
    // Block any code that is not formatted according to prettier formatting rules
    "prettier/prettier": "error",
    // Turned off the rule to make everything a default export
    "import/prefer-default-export": "off",
    // Turned off the rule that you should not have file extensions. For modules in node this is actually required.
    "import/extensions": "off",
    // Receive warnings for console.log.
    // Can also be set to ""warn" or "error".
    "no-console": "error",
  },
};
