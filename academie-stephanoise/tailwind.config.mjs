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
	plugins: [
		require('@tailwindcss/forms'),
	],
	safelist: [
		'text-[#3b82f6]', // bg-blue-500
		'text-[#ef4444]', // bg-red-500
		'text-[#f97316]', // bg-orange-500
		'text-[#a855f7]', // bg-purple-500
		'text-[#22c55e]', // bg-green-500
		'text-[#eab308]', // bg-yellow-500
		'text-[#6366f1]', // default
		'focus:ring-[#3b82f6]', // bg-blue-500
		'focus:ring-[#ef4444]', // bg-red-500
		'focus:ring-[#f97316]', // bg-orange-500
		'focus:ring-[#a855f7]', // bg-purple-500
		'focus:ring-[#22c55e]', // bg-green-500
		'focus:ring-[#eab308]', // bg-yellow-500
		'focus:ring-[#6366f1]', // default
	],
}
