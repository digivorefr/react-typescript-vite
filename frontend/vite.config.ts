/* eslint-disable import/no-extraneous-dependencies */
import {
  AliasOptions, UserConfig, defineConfig, loadEnv,
} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import checker from 'vite-plugin-checker';
import tsConfigPaths from 'vite-plugin-tsconfig-paths';
import autoprefixer from 'autoprefixer';

require.resolve('react/jsx-dev-runtime');

const envPrefix = ['HOST', 'FRONT_'];

const srcPath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public');

const srcSubDirectories = fs.readdirSync(srcPath, { withFileTypes: true })
  .filter((fileOrDirectory) => fileOrDirectory.isDirectory())
  .map((directory) => directory.name);

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), envPrefix);
  // Options for Vite react plugin.
  const reactOptions = {
    // Only .tsx files
    include: '**/*.tsx',
  };
  return <UserConfig><unknown>{
    root: process.cwd(),
    envPrefix,
    publicDir: publicPath,
    mode,
    resolve: {
      alias: srcSubDirectories.reduce((aliases, directory) => ({
        ...aliases, [directory]: path.join(srcPath, directory),
      }), { public: publicPath } as AliasOptions),
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      // Fix to be able to build with 'development' env, and develop with 'production' env.
      // See https://github.com/vitejs/vite/issues/5885#issuecomment-1020082111
      ...((mode === 'production')
        ? [react(reactOptions)]
        : [
          // react({ ...reactOptions, jsxRuntime: 'classic' }),
          react(reactOptions),
          checker({
            typescript: true,
            eslint: {
              lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            },
          }),
        ]),
      tsConfigPaths(),
    ],
    build: {
      outDir: 'build/',
      sourcemap: mode === 'development',
      target: 'es6',
    },
    server: {
      host: env.HOST,
      port: parseInt(env.FRONT_DEV_PORT, 10),
      https: false,
    },
  };
});
