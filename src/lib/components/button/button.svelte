<script lang="ts">
	export let text: string = "Button";

	export let isLoading: boolean = false;
	export let loadingText: string = "Loading...";

	export let type: string = "button";

	export let variant: "default" | "destructive" | "outline" | "ghost" | "link";

	export let size: "small" | "wide" | "large" | "extra-small" | "undefined";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={type}
	{...$$restProps}
	data-root
	data-is-loading={isLoading ? "true" : null}
	on:click
	on:mousedown
	on:mouseup
	on:touchstart|passive
	on:touchend|passive
	on:mouseleave
	on:touchcancel|passive
	aria-busy={isLoading}
	aria-label={isLoading ? loadingText : $$restProps["aria-label"] ?? $$restProps.title}
	tabindex={isLoading ? -1 : undefined}
	class={`${variant} ${size} ${$$restProps.class ?? ""} flex gap-x-2 rounded-3xl `}
>
	{#if isLoading}
		<span {...$$restProps} class={`spinner ${$$restProps.class}`} />
	{/if}
	{text}
	<slot />
</svelte:element>

<style lang="postcss">
	[data-root] {
		@apply border border-transparent transition-all;
	}
	/* Variants */
	.default {
		@apply bg-base-100 text-textColor hover:border  hover:bg-base-200;
	}
	.destructive {
		@apply bg-error text-base-200 hover:bg-errorActive;
	}
	.outline {
		@apply border border-base-100 bg-transparent text-textColor hover:bg-base-100;
	}
	.ghost {
		@apply bg-transparent text-textColor hover:bg-base-100;
	}
	.link {
		@apply bg-transparent text-textColor underline hover:font-bold;
	}

	/* Sizes */

	.small {
		@apply px-6 py-3.5 text-sm;
	}

	.extra-small {
		@apply px-4 py-2.5 text-sm;
	}

	.large {
		@apply px-8 py-4 text-base;
	}

	.wide {
		@apply px-16 py-4;
	}

	[data-root][data-is-loading="true"],
	[data-root][data-is-loading="true"] > *:not(.spinner) {
		color: transparent;
	}
	[data-root][data-is-loading="true"] > *:not(.spinner) {
		opacity: 0;
	}
	.spinner {
		display: inline-block;
		width: 1em;
		height: 1em;
		animation: spin 0.45s linear infinite;
		border-color: currentColor;
		@apply rounded-full border-2 border-r-transparent;
	}

	@keyframes spin {
		to {
			rotate: 360deg;
		}
	}
</style>
