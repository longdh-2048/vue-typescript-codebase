/* eslint-env node */
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginJs from '@eslint/js'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfigWithVueTs(
  { ignores: ['dist'] },
  { files: ['**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}'] },
  { languageOptions: { ecmaVersion: 2020, globals: globals.browser } },
  pluginJs.configs.recommended,
  vueTsConfigs.recommended,
  eslintPluginPrettierRecommended,
  ...pluginVue.configs['flat/essential'],
)
// {
//   root: true,
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-typescript',
//     '@vue/eslint-config-prettier/skip-formatting',
//     'plugin:prettier/recommended',
//   ],
//   overrides: [
//     {
//       files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
//       extends: ['plugin:cypress/recommended'],
//     },
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest',
//   },
// }
