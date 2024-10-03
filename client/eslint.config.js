import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'no-console': ['error', { allow: ['warn', 'error'] }],
            quotes: ['error', 'single', { avoidEscape: true }],
            semi: 'error',
            curly: 'error',
            'no-mixed-spaces-and-tabs': 'error',
            'max-len': [
                'warn',
                {
                    code: 100,
                    ignoreTemplateLiterals: true,
                    tabWidth: 4,
                    ignoreStrings: true,
                    ignoreRegExpLiterals: true,
                    ignoreComments: true,
                },
            ],
            'object-curly-spacing': ['error', 'always'],
            'space-in-parens': ['error', 'never'],
        },
    }
);
