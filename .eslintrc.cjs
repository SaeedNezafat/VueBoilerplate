module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': 'error',
    camelcase: 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 'tab'],
    '@typescript-eslint/keyword-spacing': ['error'],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-extra-semi': ['error'],
    '@typescript-eslint/no-loss-of-precision': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/space-before-blocks': ['error'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-infix-ops': ['error'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-mixed-spaces-and-tabs': 0,
  },
};
