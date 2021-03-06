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
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
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
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react", "react-hooks"],
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset that aren't specifically
    //   mentioned by the google styleguide are listed but commented out (so
    //   they don't override a base ruleset).
    // - Rules that are recommended but contradict the Google styleguide
    //   are explicitely set to the Google styleguide value.

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    // 'for-direction': 0,
    // 'no-await-in-loop': 0,
    // 'no-compare-neg-zero': 2, // eslint:recommended
    "no-cond-assign": 0, // eslint:recommended
    "no-console": 1, // eslint:recommended
    // 'no-constant-condition': 2, // eslint:recommended
    // 'no-control-regex': 2, // eslint:recommended
    // 'no-debugger': 2, // eslint:recommended
    // 'no-dupe-args': 2, // eslint:recommended
    // 'no-dupe-keys': 2, // eslint:recommended
    "no-duplicate-case": 2, // eslint:recommended
    // 'no-empty': 2, // eslint:recommended
    // 'no-empty-character-class': 2, // eslint:recommended
    // 'no-ex-assign': 2, // eslint:recommended
    // 'no-extra-boolean-cast': 2, // eslint:recommended
    // 'no-extra-parens': 0,
    "no-extra-semi": 2,
    // 'no-func-assign': 2, // eslint:recommended
    // 'no-inner-declarations': 2, // eslint:recommended
    // 'no-invalid-regexp': 2, // eslint:recommended
    "no-irregular-whitespace": 2, // eslint:recommended
    // 'no-obj-calls': 2, // eslint:recommended
    // 'no-prototype-builtins': 0,
    // 'no-regex-spaces': 2, // eslint:recommended
    // 'no-sparse-arrays': 2, // eslint:recommended
    // 'no-template-curly-in-string': 0,
    "no-unexpected-multiline": 2, // eslint:recommended
    // 'no-unreachable': 2, // eslint:recommended
    // 'no-unsafe-finally': 2, // eslint:recommended
    // 'no-unsafe-negation': 0,
    // 'use-isnan': 2 // eslint:recommended
    "valid-jsdoc": [
      2,
      {
        requireParamDescription: false,
        requireReturnDescription: false,
        requireReturn: false,
        prefer: { returns: "return" },
      },
    ],
    // 'valid-typeof': 2 // eslint:recommended

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------
    // 'accessor-pairs': 0,
    // 'array-callback-return': 0,
    // 'block-scoped-var': 0,
    // 'class-methods-use-this': 0,
    // 'complexity': 0,
    "consistent-return": "warn",
    // exception of simple, single-line if statements.
    curly: [1, "multi-line"],
    // 'default-case': 0,
    // 'dot-location': 0,
    // 'dot-notation': 0,
    eqeqeq: [1, "always"],
    "guard-for-in": 2,
    "no-alert": 1,
    "no-caller": 2,
    // 'no-case-declarations': 2, // eslint:recommended
    // 'no-div-regex': 0,
    // 'no-else-return': 0,
    "no-empty-function": "warn",
    "no-empty-pattern": "error",
    // 'no-eq-null': 0,
    // 'no-eval': 0,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    // 'no-extra-label': 0,
    "no-fallthrough": "warn",
    // 'no-floating-decimal': 0,
    // 'no-global-assign': 0,
    // 'no-implicit-coercion': 0,
    // 'no-implicit-globals': 0,
    // 'no-implied-eval': 0,
    "no-invalid-this": 2,
    // 'no-iterator': 0,
    // 'no-labels': 0,
    // 'no-lone-blocks': 0,
    // 'no-loop-func': 0,
    // 'no-magic-numbers': 0,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    // 'no-new': 0,
    // 'no-new-func': 0,
    "no-new-wrappers": 2,
    // 'no-octal': 2, // eslint:recommended
    // 'no-octal-escape': 0,
    // 'no-param-reassign': 0,
    // 'no-proto': 0,
    // 'no-redeclare': 2, // eslint:recommended
    // 'no-restricted-properties': 0,
    // 'no-return-assign': 0,
    // 'no-script-url': 0,
    // 'no-self-assign': 2, // eslint:recommended
    // 'no-self-compare': 0,
    // 'no-sequences': 0,
    "no-throw-literal": 2, // eslint:recommended
    // 'no-unmodified-loop-condition': 0,
    // 'no-unused-expressions': 0,
    // 'no-unused-labels': 2, // eslint:recommended
    // 'no-useless-call': 0,
    // 'no-useless-concat': 0,
    // 'no-useless-escape': 0,
    // 'no-void': 0,
    // 'no-warning-comments': 0,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    // 'radix': 0,
    // 'require-await': 0,
    // 'vars-on-top': 0,
    // 'wrap-iife': 0,
    // 'yoda': 0,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    strict: 0,

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    // 'no-catch-shadow': 0,
    // 'no-delete-var': 2, // eslint:recommended
    // 'no-label-var': 0,
    // 'no-restricted-globals': 0,
    // 'no-shadow': 0,
    // 'no-shadow-restricted-names': 0,
    "no-undef": 0, // eslint:recommended
    // 'no-undef-init': 0,
    // 'no-undefined': 0,
    "no-unused-vars": ["warn", { args: "none" }], // eslint:recommended
    // 'no-use-before-define': 0,

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 0,
    // 'global-require': 0,
    // 'handle-callback-err': 0,
    // 'no-buffer-constructor': 0,
    // 'no-mixed-requires': 0,
    "no-new-require": 2,
    // 'no-path-concat': 0,
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 'no-restricted-modules': 0,
    "no-sync": 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    "array-bracket-newline": 0, // eslint:recommended
    "array-bracket-spacing": [2, "never"],
    "array-element-newline": 0, // eslint:recommended
    "block-spacing": [2, "never"],
    "brace-style": 2,
    camelcase: [2, { properties: "always" }],
    // 'capitalized-comments': 0,
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { before: false, after: true }],
    "comma-style": 2,
    "computed-property-spacing": 2,
    // 'consistent-this': 0,
    "eol-last": 2,
    "func-call-spacing": 2,
    // 'func-name-matching': 0,
    // 'func-names': 0,
    // 'func-style': 0,
    // 'id-blacklist': 0,
    // 'id-length': 0,
    // 'id-match': 0,
    indent: [
      1,
      2,
      {
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        ignoredNodes: ["ConditionalExpression"],
      },
    ],
    "jsx-quotes": [1, "prefer-double"],
    "key-spacing": 2,
    "keyword-spacing": 2,
    // 'line-comment-position': 0,
    "linebreak-style": "off",
    // 'lines-around-comment': 0,
    // 'max-depth': 0,
    "max-len": [
      1,
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: "goog.(module|require)",
      },
    ],
    // 'max-lines': 0,
    // 'max-nested-callbacks': 0,
    // 'max-params': 0,
    // 'max-statements': 0,
    // 'max-statements-per-line': 0,
    // 'multiline-ternary': 0,
    "new-cap": 2,
    // 'new-parens': 0,
    // 'newline-per-chained-call': 0,
    "no-array-constructor": 2,
    // 'no-bitwise': 0,
    // 'no-continue': 0,
    // 'no-inline-comments': 0,
    // 'no-lonely-if': 0,
    // 'no-mixed-operators': 0,
    "no-mixed-spaces-and-tabs": 2, // eslint:recommended
    // 'no-multi-assign': 0,
    "no-multiple-empty-lines": [2, { max: 2 }],
    // 'no-negated-condition': 0,
    // 'no-nested-ternary': 0,
    "no-new-object": 2,
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0,
    "no-tabs": 2,
    // 'no-ternary': 0,
    "no-trailing-spaces": "off",
    // 'no-underscore-dangle': 0,
    // 'no-unneeded-ternary': 0,
    // 'no-whitespace-before-property': 0,
    // 'nonblock-statement-body-position': 0,
    // 'object-curly-newline': 0,
    "object-curly-spacing": [1, "always"],
    // 'object-property-newline': 0,
    "one-var": [
      2,
      {
        var: "never",
        let: "never",
        const: "never",
      },
    ],
    // 'one-var-declaration-per-line': 0,
    // 'operator-assignment': 0,
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    // 'padding-line-between-statements': 0,
    "quote-props": [2, "consistent"],
    quotes: [1, "double", { allowTemplateLiterals: true }],
    "require-jsdoc": "off",
    semi: 2,
    "semi-spacing": 2,
    // 'semi-style': 0,
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        asyncArrow: "always",
        anonymous: "never",
        named: "never",
      },
    ],
    // 'space-in-parens': 0,
    // 'space-infix-ops': 0,
    // 'space-unary-ops': 0,
    "spaced-comment": [2, "always"],
    "switch-colon-spacing": 2,
    // 'template-tag-spacing': 0,
    // 'unicode-bom': 0,
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    // recommended. ESLint doesn't support a *consistent* setting so
    // "always" is used.
    "arrow-parens": [2, "always"],
    "arrow-spacing": [2, { before: true, after: true }],
    "constructor-super": 2, // eslint:recommended
    "generator-star-spacing": [2, "after"],
    // 'no-class-assign': 0,
    // 'no-confusing-arrow': 0,
    // 'no-const-assign': 0, // eslint:recommended
    // 'no-dupe-class-members': 0, // eslint:recommended
    // 'no-duplicate-imports': 0,
    "no-new-symbol": 2, // eslint:recommended
    // 'no-restricted-imports': 0,
    "no-this-before-super": 2, // eslint:recommended
    // 'no-useless-computed-key': 0,
    // 'no-useless-constructor': 0,
    // 'no-useless-rename': 0,
    "no-var": 2,
    // 'object-shorthand': 0,
    // 'prefer-arrow-callback': 0,
    "prefer-const": [2, { destructuring: "all" }],
    // 'prefer-destructuring': 0,
    // 'prefer-numeric-literals': 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    // 'prefer-template': 0,
    // 'require-yield': 2, // eslint:recommended
    "rest-spread-spacing": 2,
    // 'sort-imports': 0,
    // 'symbol-description': 0,
    // 'template-curly-spacing': 0,
    "yield-star-spacing": [2, "after"],

    // `@typescript-eslint` plugin roles:
    // ---------------------------------------------
    "@typescript-eslint/consistent-type-imports": 2,
    "@typescript-eslint/no-unused-vars": 1,

    // `import` plugin roles:
    // ---------------------------------------------
    "import/default": "error",
    "import/export": "error",
    // TypeScript compilation already ensures that named imports exist in the referenced module
    "import/named": "off",
    "import/namespace": "error",
    "import/no-cycle": "off",
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

    // `jest` plugin roles:
    // ---------------------------------------------
    "jest/consistent-test-it": [
      "error",
      { fn: "test", withinDescribe: "test" },
    ],
    "jest/no-mocks-import": "off",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",

    // `react` plugin roles:
    // ---------------------------------------------
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "always", children: "never" },
    ],
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    // `react-hooks` plugin roles:
    // ---------------------------------------------
    "react-hooks/exhaustive-deps": "warn",
  },
};
