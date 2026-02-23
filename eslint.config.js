export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly' // Add 'process' as a global for Node.js
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      // Possible Errors
      'no-console': ['warn', { 'allow': ['info', 'warn', 'error'] }],
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { 'allowEmptyCatch': true }],
      'no-extra-semi': 'error',
      'no-irregular-whitespace': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      // Best Practices
      'curly': 'error',
      'eqeqeq': ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-multi-spaces': 'error',
      'no-return-assign': ['error', 'always'],
      'no-unused-expressions': 'error',
      'yoda': ['error', 'never'],
      // Variables
      'no-delete-var': 'error',
      'no-undef': 'error',
      'no-unused-vars': ['error', { 'args': 'none', 'ignoreRestSiblings': true }],
      // Stylistic Issues
      'array-bracket-spacing': ['error', 'never'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'camelcase': ['warn', { 'properties': 'never' }],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'comma-style': ['error', 'last'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'max-len': ['warn', { 'code': 120 }],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'spaced-comment': ['error', 'always', { 'exceptions': ['-'] }],
      // ECMAScript 6
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-var': 'error',
      'prefer-const': ['error', { 'destructuring': 'all' }],
      'prefer-template': 'error'
    }
  }
];
