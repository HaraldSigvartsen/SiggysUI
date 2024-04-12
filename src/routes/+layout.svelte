<script lang="ts">
	import "../app.css";
	import MainMenu from "$lib/components/navigation/mainmenu/mainMenu.svelte";
</script>

<div class="flex h-screen w-screen flex-col overflow-hidden bg-bgColor text-textColor">
	<MainMenu />
	<main class="h-screen"><slot /></main>
</div>
