// https://eslint.org/docs/user-guide/configuring

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': isDev ? 'warn' : 'error',
    'no-debugger': isDev ? 'warn' : 'error',
    'prettier/prettier': isDev ? 'warn' : 'error',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
