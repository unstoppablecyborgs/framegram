import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

export default [
    ...compat.extends(
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended',
        "plugin:storybook/recommended"
    ),
    {
        plugins: {
            prettier: require('eslint-plugin-prettier'),
            'react-hooks-extra': require('eslint-plugin-react-hooks-extra'),
        },

        rules: {
            'prettier/prettier': [
                'error',
                {
                    trailingComma: 'es5',
                    semi: false,
                    singleQuote: true,
                    endOfLine: 'auto',
                    printWidth: 100,
                    arrowParens: 'avoid',
                },
            ],
            'import/no-default-export': 'error',
            'react-hooks-extra/no-direct-set-state-in-use-effect': 'error',
        },
    },
    {
        files: [
            '*.stories.tsx',
            '*.stories.ts',
            'app/**/*.tsx',
            'next.config.mjs',
        ],
        rules: {
            'import/no-default-export': 'off',
        },
    },
    {
        files: ['src/**/*.{ts,tsx}'],
        excludedFiles: ['**/*.stories.tsx'],
        rules: {
            'import/no-default-export': 'error',
        },
    },
]
