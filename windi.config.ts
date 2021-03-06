import { defineConfig } from 'windicss/helpers';


const colors = require ('windicss/colors') 

export default defineConfig({
	theme: {},
	variants: {},
	plugins: [
		require('windicss/plugin/forms'),
		require('windicss/plugin/typography'),
		require('windicss/plugin/aspect-ratio'),
	]
});
