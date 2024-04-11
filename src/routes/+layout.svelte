<script lang="ts">
	import "../app.css";
	import MainMenu from "$lib/components/navigation/mainmenu/mainMenu.svelte";
</script>

<div class="flex min-h-screen flex-col bg-bgColor text-textColor">
	<MainMenu />
	<main><slot /></main>
</div>
