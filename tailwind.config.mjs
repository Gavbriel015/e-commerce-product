/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainOrange: '#FF7E1B',
				lightOrange: 'hsl(25, 100%, 94%)',
				
			}
		},
		screens: {
			'vm': '520px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',

		}
		
	},
	
	plugins: [],
}
