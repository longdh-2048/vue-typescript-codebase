/* eslint-env node */
import pluginVue from 'eslint-plugin-vue'
import eslint from '@eslint/js'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfigWithVueTs(
  eslint.configs.recommended,
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
