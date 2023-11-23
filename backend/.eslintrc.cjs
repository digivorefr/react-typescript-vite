let tsConfigPath = 'backend/tsconfig.json';
if (__dirname === '/var/www/html'){
  tsConfigPath = 'tsconfig.json';
}


module.exports = {
  root: false,
  env: { node: true },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: tsConfigPath,
    sourceType: "module",
  },
  ignorePatterns: ['build', '.eslintrc.cjs'],
  plugins: [],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    'no-restricted-imports': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'backend/tsconfig.json',
      },
    },
  },
};
