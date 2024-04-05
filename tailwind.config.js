/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				bgColor: `var(--color-bg)`,
				primary: `var(--color-primary)`,
				secondary: `var(--color-secondary)`,
				accent: `var(--color-accent)`,
				neutral: `var(--color-neutral)`,
				"neutral-content": `var(--color-neutral-content)`,
				"base-100": `var(--color-base-100)`,
				"base-200": `var(--color-base-200)`,
				"base-300": `var(--color-base-300)`,
				"base-content": `var(--color-base-content)`,
				info: `var(--color-info)`,
				success: `var(--color-success)`,
				warning: `var(--color-warning)`,
				error: `var(--color-error)`,
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};
