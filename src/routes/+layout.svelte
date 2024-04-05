<script lang="ts">
	import "../app.css";
	import MainMenu from "$lib/components/navigation/mainmenu/mainMenu.svelte";
</script>

<div class="text-textColor flex min-h-screen flex-col bg-bgColor">
	<MainMenu />
	<main><slot /></main>
</div>
