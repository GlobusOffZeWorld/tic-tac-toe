import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended, 
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-refresh': eslintPluginReactRefresh,
      'prettier': eslintPluginPrettier,
      'import': eslintPluginImport,
      'react': eslintPluginReact,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      semi: "error",
      "prefer-const": "error",
      "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "pathGroups": [
          {
            "pattern": "{node_modules/**}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "{../**/*.module.scss,./**/*.module.scss,../**/*.scss,./**/*.scss}",
            "group": "index",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": [
          "{react,react-dom,react-redux}",
          "{../**/*.module.scss,./**/*.module.scss,../**/*.scss,./**/*.scss}"
        ],
        "newlines-between": "always"
      }
      ],
      "prettier/prettier": "error",
      "import/first": 2,
      "import/exports-last": 0,
      "dot-notation": 2,
      "react/jsx-key": 1,
    },
  },
)
