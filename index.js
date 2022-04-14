/**
 * Copyright (c) 2022-present, Szum-Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

module.exports = {
  extends: [
    "google",
    "plugin:import/errors",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "import", "react-hooks"],
  rules: {
    "max-len": ["warn", { code: 120 }],

    "import/no-unresolved": "error",
    "import/no-named-as-default-member": "off",
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
