/**
 * Copyright (c) 2022-present, Szum-Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, and 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.

const tsExtensions = [".ts", ".tsx"];
const jsExtensions = [".js", ".jsx"];

const allExtensions = [...jsExtensions, ...tsExtensions];

module.exports = {
  extends: [
    "google",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/extensions": allExtensions,
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/parsers": {
      "@typescript-eslint/parser": tsExtensions,
    },
    "import/resolver": {
      node: {
        extensions: allExtensions,
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react", "react-hooks"],
  rules: {
    "max-len": ["warn", { code: 120 }],

    // import plugin
    "import/default": "error",
    "import/export": "error",
    // TypeScript compilation already ensures that named imports exist in the referenced module
    // 'import/named': 'off',
    "import/named": "error",
    "import/namespace": "error",
    "import/no-cycle": "warn",
    "import/no-duplicates": "warn",
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
