import react from '@vitejs/plugin-react';
import unocss from 'unocss/vite';
import { defineConfig } from 'vite-plus';

export default defineConfig({
	plugins: [react(), unocss()],
	staged: {
		'**/*.*': [
			'eslint',
			'cspell --no-progress --no-must-find-files',
		],
	},
});
