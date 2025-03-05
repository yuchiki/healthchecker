

import js from '@eslint/js'
import ts from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import';
import eslintCdkPlugin from "eslint-cdk-plugin";



const compat = new FlatCompat()

export default ts.config(
  js.configs.recommended,
  ...compat.extends("plugin:import/typescript"),
  ...ts.configs.strictTypeChecked,
  importPlugin.flatConfigs.recommended,
  stylistic.configs['recommended'],
  {
    plugins: {
      cdk: eslintCdkPlugin
    },
    rules: {
      ...eslintCdkPlugin.configs.strict.rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
        },
      ],
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ['node_modules/', 'dist/', 'eslint.config.js'],
  },
)
