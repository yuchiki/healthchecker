/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import eslintCdkPlugin from 'eslint-cdk-plugin'
import importPlugin from 'eslint-plugin-import'
import ts from 'typescript-eslint'

const compat = new FlatCompat()

export default ts.config(
  js.configs.recommended,
  ...compat.extends('plugin:import/typescript'),
  ...ts.configs.strictTypeChecked,
  importPlugin.flatConfigs.recommended,
  stylistic.configs['recommended'],
  {
    plugins: {
      cdk: eslintCdkPlugin,
    },
    rules: {
      // eslint-disable-next-line import/no-named-as-default-member
      ...eslintCdkPlugin.configs.strict.rules,
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'object',
            'type',
            'index',
          ],
          'newlines-between': 'always',
          'pathGroupsExcludedImportTypes': ['builtin'],
          'alphabetize': { order: 'asc', caseInsensitive: true },
          'pathGroups': [
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
        projectService: {
          allowDefaultProject: ['*.js', '*.mjs'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ['node_modules/', 'cdk.out/'],
  },
)
