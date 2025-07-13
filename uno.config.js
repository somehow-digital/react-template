import preset from '@somehow-digital/unocss-preset';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [preset()],
	rules: [],
	safelist: [],
	theme: {
		breakpoints: {},
		colors: {},
		fontFamily: {},
	},
});
