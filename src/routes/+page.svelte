<script lang="ts">
	import Button from "$lib/components/button/button.svelte";
	import Waves from "$lib/components/waves/waves.svelte";
</script>

<div class="z-0 w-full overflow-y-hidden">
	<Waves animationId={10}>
		<div class="z-0 flex h-screen flex-col items-center justify-center overflow-y-hidden">
			<div class="flex h-1/4 flex-col items-center justify-center gap-y-4">
				<h1 class="text-5xl md:text-7xl">SiggysUI</h1>
				<h2 class="text-center">An open source design system for building modern websites and applications.</h2>
			</div>

			<div class="h-1/4 items-center">
				<Button size="wide" variant="default" type="a" href="/docs" text="Get started"></Button>
			</div>
		</div>
	</Waves>
</div>
