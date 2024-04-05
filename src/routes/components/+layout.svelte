<script lang="ts">
	import "../../app.css";
	import SideMenu from "$lib/components/navigation/sidemenu/sideMenu.svelte";
</script>

<div class="flex min-h-screen">
	<SideMenu />
	<main class="w-full"><slot /></main>
</div>
