<script lang="ts">
	import Theme from "$lib/components/theme/theme.svelte";
	import MainMenuItem from "./mainMenuItem.svelte";

	let menuItems = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Docs",
			url: "/docs",
		},
		{
			name: "Components",
			url: "/components",
		},
	];
</script>

<header class="w-full p-4">
	<nav class="sticky flex w-10/12">
		<a class="ml-4 font-bold" href="/">SiggysUI</a>

		<ul class="ml-10 flex flex-row gap-x-4">
			{#each menuItems as menuItem}
				<MainMenuItem name={menuItem.name} url={menuItem.url} />
			{/each}
		</ul>

		<div class="ml-auto">
			<Theme />
		</div>
	</nav>
</header>
