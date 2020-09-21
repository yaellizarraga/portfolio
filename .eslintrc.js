module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'arrow-parens': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-one-expression-per-line': 'off'
  },
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
};