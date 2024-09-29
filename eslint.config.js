const { FlatCompat } = require('@eslint/eslintrc');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const jest = require('eslint-plugin-jest');
const jestDom = require('eslint-plugin-jest-dom');
const jestFormatting = require('eslint-plugin-jest-formatting');
const playwright = require('eslint-plugin-playwright');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const storybook = require('eslint-plugin-storybook');
const tailwindcss = require('eslint-plugin-tailwindcss');
const testingLibrary = require('eslint-plugin-testing-library');
const unusedImports = require('eslint-plugin-unused-imports');

const compat = new FlatCompat();

module.exports = [
  {
    ignores: ['node_modules', 'out', '.storybook'],
  },
  ...compat.extends('airbnb-base', 'next/core-web-vitals', 'plugin:prettier/recommended'),
  {
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      'tailwindcss': tailwindcss,
      'simple-import-sort': simpleImportSort,
    },
    ...compat.extends(
      'plugin:tailwindcss/recommended',
      'airbnb',
      'airbnb-typescript',
      'next/core-web-vitals',
      'plugin:prettier/recommended'
    ),
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
      'import/extensions': 'off',
      'react/function-component-definition': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'import/prefer-default-export': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/order': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: {
      'jest': jest,
      'jest-formatting': jestFormatting,
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
    ...compat.extends(
      'plugin:jest/recommended',
      'plugin:jest-formatting/recommended',
      'plugin:testing-library/react',
      'plugin:jest-dom/recommended'
    ),
  },
  {
    files: ['**/*.spec.ts'],
    ...compat.extends('plugin:playwright/recommended'),
  },
  {
    files: ['*.stories.*'],
    plugins: {
      'storybook': storybook,
    },
    ...compat.extends('plugin:storybook/recommended'),
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];
