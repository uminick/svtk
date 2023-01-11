import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),
		// alias: {
		// 	$blog: path.resolve("./src/blog"),
		// 	$lib: path.resolve("./src/lib")
		// }
	},
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexConfig)
	]
};

export default config;
