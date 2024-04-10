<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import Arrow from "../icons/arrow.svelte";

	let themes = ["Dim", "Retro", "Pastel", "Black"];
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
		class={` flex items-center gap-x-2 rounded-md border p-2 hover:bg-base-100 md:border-none ${isExpanded ? "bg-base-100" : "bg-none"}`}
		on:click={clickHandler}
	>
		Themes <Arrow />
	</button>
	{#if isExpanded}
		<ul class="fixed mt-2 flex min-w-min flex-col gap-y-2 rounded-md bg-base-100 shadow-sm" transition:slide>
			{#each themes as theme, idx}
				<li
					data-theme={theme}
					class={`w-full  hover:bg-neutral ${idx === 0 ? "rounded-t-md" : ""} ${idx === themes.length - 1 ? "rounded-b-md" : ""}`}
				>
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
