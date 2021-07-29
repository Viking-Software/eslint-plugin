module.exports = {
    root: true,

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react-hooks/recommended',
        'airbnb'
    ],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        parser: 'eslint'
    },

    settings: {
        react: {
            version: 'detect'
        }
    },

    globals: {
        React: 'writable'
    },

    rules: {
        // React
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',

        // Possible Errors
        'no-await-in-loop': 'error',
        'no-control-regex': 'off',
        'no-promise-executor-return': 'error',
        'no-template-curly-in-string': 'error',
        'no-unreachable-loop': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',

        // Best Practices
        'block-scoped-var': 'error',
        'curly': 'error',
        'default-case-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': ['error', 'smart'],
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-invalid-this': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
        'no-return-assign': ['error', 'always'],
        'no-return-await': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-useless-escape': 'off',
        'no-useless-return': 'error',
        'prefer-promise-reject-errors': 'error',
        'yoda': 'error',

        // Strict Mode overridden by both:
        // parserOptions.sourceType
        // parserOptions.ecmaFeatures.impliedStrict

        // Variables
        'no-shadow': 'error',
        'no-unused-vars': 'error',

        // Sylistic Issues
        'array-bracket-newline': ['error', { 'multiline': true }],
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'func-call-spacing': ['error', 'never'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'consistent'],
        'id-denylist': ['error', 'e', 'err', 'req', 'res'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': ['error', 4, {
            'SwitchCase': 1,
            'MemberExpression': 1,
            'FunctionDeclaration': { 'parameters': 'first' },
            'FunctionExpression': { 'parameters': 'first' },
            'CallExpression': { 'arguments': 'first' },
            'ArrayExpression': 1,
            'ObjectExpression': 1,
            'flatTernaryExpressions': false,
            'offsetTernaryExpressions': true
        }],
        'jsx-quotes': ['warn', 'prefer-single'],
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
        'keyword-spacing': ['error', {
            'overrides': {
                'if': { 'after': false },
                'for': { 'after': false },
                'while': { 'after': false },
                'catch': { 'after': false }
            }
        }],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always'],
        'new-cap': ['error', { 'newIsCap': true }],
        'new-parens': 'error',
        'no-lonely-if': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-nested-ternary': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-newline': ['error', { 'consistent': true }],
        'object-curly-spacing': ['error', 'always'],
        'one-var': ['error', 'never'],
        'operator-assignment': ['error', 'always'],
        'padded-blocks': ['error', { 'classes': 'always' }],
        'prefer-exponentiation-operator': 'error',
        'prefer-object-spread': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'never'],
        'semi-spacing': ['error', { 'before': false, 'after': true }],
        'semi-style': ['error', 'last'],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            'anonymous': 'never',
            'named': 'never',
            'asyncArrow': 'always'
        }],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', { 'words': true, 'nonwords': false }],
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': ['error', { 'before': false, 'after': true }],
        'template-tag-spacing': ['error', 'never'],

        // ECMAScript 6
        'arrow-body-style': ['warn', 'always'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': ['error', { 'before': true, 'after': true }],
        'generator-star-spacing': ['error', { 'before': false, 'after': true }],
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': ['error', { 'destructuring': 'all' }],
        'prefer-destructuring': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'], // Need to revisit this
        'yield-star-spacing': ['error', 'after']
    }
};
