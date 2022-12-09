// Temporary module until @nuxtjs/eslint-module is updated to support Nuxt 3

import { defineNuxtModule, addVitePlugin, addWebpackPlugin } from '@nuxt/kit';
import type { Options as VitePlugin } from 'vite-plugin-eslint';
import type { Options as WebpackPlugin } from 'eslint-webpack-plugin';
import vitePluginEslint from 'vite-plugin-eslint';
import EslintWebpackPlugin from 'eslint-webpack-plugin';

export interface ModuleOptions {
  vite: VitePlugin;
  webpack: WebpackPlugin;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'eslint',
    version: '0.0.0',
    configKey: 'eslint',
    compatibility: {
      bridge: true,
    },
  },
  defaults: (nuxt) => ({
    vite: {
      cache: true,
      failOnWarning: false,
      failOnError: false,
    },
    webpack: {
      context: nuxt.options.srcDir,
      eslintPath: 'eslint',
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
      cache: true,
      lintDirtyModulesOnly: true,
      emitWarning: true,
    },
  }),
  setup(options, nuxt) {
    if (!nuxt.options.dev) {
      return;
    }
    addVitePlugin(vitePluginEslint(options.vite), { server: false });
    addWebpackPlugin(new EslintWebpackPlugin(options.webpack), { server: false });
  },
});
