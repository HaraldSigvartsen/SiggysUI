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
		isExpanded = false;
	}
</script>

<div class="">
	<button
		class={`flex items-center rounded-md border p-2 hover:bg-base-100 md:border-none ${isExpanded ? "bg-base-100" : "bg-none"}`}
		on:click={clickHandler}
		>Themes <ArrowDown />
	</button>
	{#if isExpanded}
		<ul class="fixed mt-2 flex min-w-min flex-col gap-y-2 rounded bg-base-100 shadow-sm" transition:slide>
			{#each themes as theme}
				<li data-theme={theme} class="w-full hover:bg-neutral">
					<button
						data-theme={theme}
						class="my-auto flex flex-row items-center gap-x-4 px-8 py-1"
						on:click={() => applyTheme(theme)}
					>
						<span class="w-1/2">{theme}</span>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
