import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import dotenv from 'dotenv';
// import { loadEnv } from 'vite';

dotenv.config();
// process.env = {...process.env, ...loadEnv('production', process.cwd())};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			define: {
				'process.env': process.env
			},
		}
	}
};

export default config;
