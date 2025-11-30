import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { HMR, API_HOST } from './conf/config.local.js';


const proxy = {
	'/api':    {target: API_HOST},
	'/admin':  {target: API_HOST},
	'/static': {target: API_HOST},
}

export default defineConfig({
	plugins: [sveltekit()],
    server: {
        fs: {
            allow: ['..'],  // Allow serving files from one level up to the project root
        },
		hmr: HMR,
        proxy,
    },
	preview: {
		proxy,
	},
});
