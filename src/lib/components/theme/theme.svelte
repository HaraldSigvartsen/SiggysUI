<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import ArrowDown from "../icons/arrowDown.svelte";

	let themes = ["Dim", "Pastel", "Black", "Retro"];
	let selectedTheme: string = "Dim";
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
		document.documentElement.classList.remove(selectedTheme);
		document.documentElement.classList.add(theme);
		localStorage.setItem("theme", theme);
		selectedTheme = theme;
		console.log("Theme applied: ", theme);
	}
</script>

<div class="">
	<button class="flex items-center" on:click={clickHandler}>Themes <ArrowDown /> </button>
	{#if isExpanded}
		<ul class="fixed flex min-w-min flex-col gap-y-2 rounded bg-base-200 px-4 py-2 shadow-sm" transition:slide>
			{#each themes as theme}
				<li data-theme={theme} class="rounded-md bg-accent p-2 hover:bg-base-100">
					<button class="my-auto flex flex-row items-center gap-x-4" on:click={() => applyTheme(theme)}>
						<span class="w-1/2">{theme}</span>
						<ul class="ml-auto flex w-1/2 flex-row">
							<li data-theme={theme} class="bg-primary p-2" />
							<li class="bg-secondary p-2" />
							<li class="bg-neutral p-2" />
							<li class="bg-accent p-2" />
						</ul>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
