<script lang="ts">
	import Close from "$lib/components/icons/close.svelte";
	import Hamburger from "$lib/components/icons/hamburger.svelte";
	import Theme from "$lib/components/theme/theme.svelte";
	import SideMenu from "../sidemenu/sideMenu.svelte";
	import MainMenuItem from "./mainMenuItem.svelte";

	//TODO: Forbedre a11y
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
		{
			name: "Icons",
			url: "/icons",
		},
	];

	let isOpen: boolean = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}

	function closeMenu() {
		isOpen = false;
	}
</script>

<header class="w-full md:p-4">
	<nav class=" md:flex md:w-11/12">
		<div class="hidden w-full items-center md:flex">
			<a class="ml-4 font-bold" href="/">SiggysUI</a>

			<ul class="ml-10 flex flex-row gap-x-4">
				{#each menuItems as menuItem}
					<MainMenuItem name={menuItem.name} url={menuItem.url} on:click={closeMenu} />
				{/each}
			</ul>

			<div class="ml-auto">
				<Theme />
			</div>
		</div>

		<!-- Mobile navigation -->
		<div class="flex flex-col overflow-hidden md:hidden">
			<div class="flex items-center p-2 md:hidden">
				<div class="h-fit">
					<Hamburger {isOpen} {toggleMenu} />
				</div>
				<a class="ml-8 font-bold" href="/">SiggysUI</a>
			</div>
			<!-- BACKDROP -->
			<div
				class={`${isOpen ? "" : "pointer-events-none opacity-0"} fixed z-50 h-screen w-full bg-black bg-opacity-50 transition-opacity duration-300`}
				role="button"
				tabindex="0"
				on:keydown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						closeMenu();
					}
				}}
				on:click={closeMenu}
			>
				<!-- CONTENT -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<div
					role="dialog"
					class={`${isOpen ? "slide-in" : "slide-out"} mr-auto h-full w-9/12 bg-base-200 px-4`}
					on:click={(e) => e.stopPropagation()}
				>
					<div class="flex items-center p-2">
						<Close {toggleMenu} />
						<a class="ml-8 font-bold" href="/">SiggysUI</a>
					</div>
					<ul class="mt-8 flex h-full flex-col gap-y-1">
						{#each menuItems as menuItem}
							<MainMenuItem name={menuItem.name} url={menuItem.url} on:click={closeMenu} />
						{/each}
						<SideMenu />
						<div class="mx-auto mt-[60%] w-fit">
							<Theme />
						</div>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.slide-in {
		animation: slideIn 0.5s forwards;
	}

	.slide-out {
		animation: slideOut 0.5s forwards;
	}

	@keyframes slideIn {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes slideOut {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
</style>
