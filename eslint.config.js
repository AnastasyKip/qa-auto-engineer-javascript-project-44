import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      stylistic,
    },
    rules: {
      ...stylistic.configs.custom,
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
    },
  },
])
