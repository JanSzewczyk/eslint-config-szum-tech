module.exports = {
        rules: {
                // The rules below are listed in the order they appear on the eslint
                // rules page. All rules are listed to make it easier to keep in sync
                // as new ESLint rules are added.
                // http://eslint.org/docs/rules/
                // - Rules in the `eslint:recommended` ruleset that aren't specifically
                //   mentioned by the google styleguide are listed but commented out (so
                //   they don't override a base ruleset).
                // - Rules that are recommended but contradict the Google styleguide
                //   are explicitly set to the Google styleguide value.

                // Possible Errors
                // http://eslint.org/docs/rules/#possible-errors
                // ---------------------------------------------
                // 'for-direction': 'off',
                // 'no-await-in-loop': 'off',
                // 'no-compare-neg-zero': 'error', // eslint:recommended
                'no-cond-assign': 'off', // eslint:recommended
                // 'no-console': 'error', // eslint:recommended
                // 'no-constant-condition': 'error', // eslint:recommended
                // 'no-control-regex': 'error', // eslint:recommended
                // 'no-debugger': 'error', // eslint:recommended
                // 'no-dupe-args': 'error', // eslint:recommended
                // 'no-dupe-keys': 'error', // eslint:recommended
                // 'no-duplicate-case': 'error', // eslint:recommended
                // 'no-empty': 'error', // eslint:recommended
                // 'no-empty-character-class': 'error', // eslint:recommended
                // 'no-ex-assign': 'error', // eslint:recommended
                // 'no-extra-boolean-cast': 'error', // eslint:recommended
                // 'no-extra-parens': 'off',
                // 'no-extra-semi': 'error', // eslint:recommended
                // 'no-func-assign': 'error', // eslint:recommended
                // 'no-inner-declarations': 'error', // eslint:recommended
                // 'no-invalid-regexp': 'error', // eslint:recommended
                'no-irregular-whitespace': 'error', // eslint:recommended
                // 'no-obj-calls': 'error', // eslint:recommended
                // 'no-prototype-builtins': 'off',
                // 'no-regex-spaces': 'error', // eslint:recommended
                // 'no-sparse-arrays': 'error', // eslint:recommended
                // 'no-template-curly-in-string': 'off',
                'no-unexpected-multiline': 'error', // eslint:recommended
                // 'no-unreachable': 'error', // eslint:recommended
                // 'no-unsafe-finally': 'error', // eslint:recommended
                // 'no-unsafe-negation': 'off',
                // 'use-isnan': 'error' // eslint:recommended
                'valid-jsdoc': ['error', {
                        requireParamDescription: false,
                        requireReturnDescription: false,
                        requireReturn: false,
                        prefer: {returns: 'return'},
                }],
                // 'valid-typeof': 'error' // eslint:recommended


                // Best Practices
                // http://eslint.org/docs/rules/#best-practices
                // --------------------------------------------

                // 'accessor-pairs': 'off',
                // 'array-callback-return': 'off',
                // 'block-scoped-var': 'off',
                // 'class-methods-use-this': 'off',
                // 'complexity': 'off',
                // 'consistent-return': 'off'
                // TODO(philipwalton): add an option to enforce braces with the
                // exception of simple, single-line if statements.
                'curly': ['error', 'multi-line'],
                // 'default-case': 'off',
                // 'dot-location': 'off',
                // 'dot-notation': 'off',
                // 'eqeqeq': 'off',
                'guard-for-in': 'error',
                // 'no-alert': 'off',
                'no-caller': 'error',
                // 'no-case-declarations': 'error', // eslint:recommended
                // 'no-div-regex': 'off',
                // 'no-else-return': 'off',
                // 'no-empty-function': 'off',
                // 'no-empty-pattern': 'error', // eslint:recommended
                // 'no-eq-null': 'off',
                // 'no-eval': 'off',
                'no-extend-native': 'error',
                'no-extra-bind': 'error',
                // 'no-extra-label': 'off',
                // 'no-fallthrough': 'error', // eslint:recommended
                // 'no-floating-decimal': 'off',
                // 'no-global-assign': 'off',
                // 'no-implicit-coercion': 'off',
                // 'no-implicit-globals': 'off',
                // 'no-implied-eval': 'off',
                'no-invalid-this': 'error',
        }
}