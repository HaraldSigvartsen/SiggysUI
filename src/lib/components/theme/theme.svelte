<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import Arrow from "../icons/arrow.svelte";
	import Button from "../button/button.svelte";

	let themes = ["dim", "retro", "pastel", "black"];
	let selectedTheme: string = "dim";
	let isExpanded = false;

	function clickHandler() {
		isExpanded = !isExpanded;
	}

	onMount(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme && themes.includes(savedTheme)) {
			selectedTheme = savedTheme;
		}
		applyTheme(selectedTheme);
	});

	function applyTheme(theme: string) {
		selectedTheme = theme;
		isExpanded = false;
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}
</script>

<div class="z-50">
	<Button
		aria-label="themes selection"
		class="rounded-lg"
		text="Themes"
		size="extra-small"
		variant="ghost"
		on:click={clickHandler}
	>
		<Arrow /></Button
	>

	{#if isExpanded}
		<ul
			class="fixed z-50 mt-2 flex flex-col gap-y-2 rounded-md bg-neutral px-2 py-3 shadow-sm md:min-w-48"
			transition:slide
		>
			{#each themes as theme}
				<li
					data-theme={theme}
					class={`w-full rounded-lg bg-base-100 px-6 py-1.5  text-textColor hover:bg-base-200`}
				>
					<button
						data-theme={theme}
						class="my-auto flex w-full flex-row items-center gap-x-4 py-1"
						on:click={() => applyTheme(theme)}
						style="justify-content: space-between;"
					>
						<span class="w-1/2 px-2 text-left">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
						<ul class="ml-auto flex gap-x-1">
							<li class="h-8 w-4 rounded-sm bg-bgColor px-2"></li>
							<li class="h-8 w-4 rounded-sm bg-primary px-2"></li>
							<li class="h-8 w-4 rounded-sm bg-secondary px-2"></li>
							<li class="h-8 w-4 rounded-sm bg-accent px-2"></li>
						</ul>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
