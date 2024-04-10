<script lang="ts">
	import Button from "$lib/components/button/button.svelte";
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center">
	<div class="flex h-1/4 flex-col items-center justify-center gap-y-4">
		<h1 class="md:text-7xl">SiggysUI</h1>
		<h2>An open source design system for building modern websites and applications.</h2>
	</div>

	<div class="h-1/4 items-center">
		<Button size="wide" variant="default" type="link" href="/docs" text="Get started"></Button>
	</div>
</div>
