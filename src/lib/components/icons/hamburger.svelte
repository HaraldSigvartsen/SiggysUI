<script lang="ts">
	export let isOpen: boolean = false;
	export let toggleMenu: () => void;

	function handleClick() {
		toggleMenu();
	}
</script>

<button class="" on:click={handleClick}>
	<svg class="pt-1" class:open={isOpen} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 30" width="40" height="35">
		<!-- Top horizontal line -->
		<line x1="20" y1="20" x2="0" y2="20" stroke="currentColor" stroke-width="2" />
		<!-- Middle horizontal line -->
		<line x1="15" y1="15" x2="0" y2="15" stroke="currentColor" stroke-width="2" />
		<!-- Bottom horizontal line -->
		<line x1="10" y1="10" x2="0" y2="10" stroke="currentColor" stroke-width="2" />
	</svg>
</button>
