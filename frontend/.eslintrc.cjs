module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['build', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.tsx'],
    }],
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never',
      tsx: 'never',
    }],
    'no-shadow': 'off',
    indent: 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    'no-restricted-imports': ['error', {
      patterns: ['.*'],
    }],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'frontend/tsconfig.json',
      },
    },
  },
};
