import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'

// плагины
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginImport from 'eslint-plugin-import'
import pluginPrettier from 'eslint-plugin-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import tsParser from '@typescript-eslint/parser'
import pluginTs from '@typescript-eslint/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  // базовые конфиги Next.js
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // твои кастомные правила
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      prettier: pluginPrettier,
      perfectionist,
      '@typescript-eslint': pluginTs,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: { version: 'detect' },
    },
    rules: {
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-nested-ternary': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'perfectionist/sort-imports': [
          'error',
          {
              customGroups: {
                  type: {
                      react: ['react', 'react-*']
                  }
              },
              groups: [
                  'type',
                  'react',
                  'builtin',
                  'external',
                  'internal-type',
                  'internal',
                  'side-effect',
                  'style'
              ],
              newlinesBetween: 'always', // тоже camelCase!
              order: 'asc',
              type: 'natural'
          }
      ],
      'react/button-has-type': 'error',
      'react/jsx-boolean-value': ['error'],
      'react/jsx-fragments': ['error'],
      'react/void-dom-elements-no-children': ['error'],
    },
  },

  // игнорируем папки
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
]

export default config
