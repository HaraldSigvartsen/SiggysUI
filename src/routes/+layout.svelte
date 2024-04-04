<script lang="ts">
	import '../app.css';
	import MainMenu from '$lib/components/navigation/mainmenu/mainMenu.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<MainMenu/>
	<main><slot /></main>
</div>
