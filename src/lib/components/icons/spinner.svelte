<span {...$$restProps} class={`spinner ${$$restProps.class}`} />

<style>
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
