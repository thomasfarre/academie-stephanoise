/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				protestStrike: ['Protest Strike', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
