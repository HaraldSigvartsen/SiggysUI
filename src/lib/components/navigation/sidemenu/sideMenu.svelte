<script lang="ts">
	import { page } from "$app/stores";

	$: activeURL = $page.url.pathname;

	//TODO Lag en enklere måte å legge til nye sider i menyen. Men for øyeblikket
	// så blir det enkel måte

	let navItems = [
		{
			name: "Introduction",
			url: "/docs/introduction",
		},
		{
			name: "Installation",
			url: "/docs/installation",
		},
	];

	let components = [
		{
			name: "Button",
			url: "/components/button",
		},
		{
			name: "Dropdown",
			url: "/components/dropdown",
		},
	];
</script>

<nav class="flex flex-col py-4 md:min-h-screen md:w-4/12 md:px-8">
	<ul>
		<h4 class="font-bold">Getting Started</h4>
		{#each navItems as item, index}
			{#if item.url.startsWith("/docs")}
				<li class="hover:underline">
					<a
						href={item.url}
						class={activeURL === item.url || (activeURL === "/docs" && index === 0) ? "underline" : ""}
						>{item.name}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
	<ul class="mt-10">
		<h4 class="font-bold">Components</h4>
		{#each components as component, index}
			{#if component.url.startsWith("/components")}
				<li class="hover:underline">
					<a
						href={component.url}
						class={activeURL === component.url || (activeURL === "/components" && index === 0)
							? "underline"
							: ""}>{component.name}</a
					>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
