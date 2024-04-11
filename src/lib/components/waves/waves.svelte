<script lang="ts">
	import { cn } from "$lib/utils/cn";
	import { createNoise3D } from "simplex-noise";
	import { onMount } from "svelte";

	let blur = 10;
	export let speed: "slow" | "fast" | undefined = "fast";

	const noise = createNoise3D();
	let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;

	let canvasRef: HTMLCanvasElement;

	const getSpeed = () => {
		switch (speed) {
			case "slow":
				return 0.001;
			case "fast":
				return 0.002;
			default:
				return 0.001;
		}
	};

	const init = () => {
		canvas = canvasRef;
		ctx = canvas.getContext("2d");
		w = ctx.canvas.width = window.innerWidth;
		h = ctx.canvas.height = window.innerHeight;
		ctx.filter = `blur(${blur}px)`;
		nt = 0;
		window.onresize = function () {
			w = ctx.canvas.width = window.innerWidth;
			h = ctx.canvas.height = window.innerHeight;
			ctx.filter = `blur(${blur}px)`;
		};
		render();
	};

	const getThemeColors = () => {
		const root = document.documentElement;
		return {
			bg: getComputedStyle(root).getPropertyValue(`--color-bg`),
			primary: getComputedStyle(root).getPropertyValue(`--color-primary`),
			secondary: getComputedStyle(root).getPropertyValue(`--color-secondary`),
			accent: getComputedStyle(root).getPropertyValue(`--color-accent`),
			neutral: getComputedStyle(root).getPropertyValue(`--color-neutral`),
			base100: getComputedStyle(root).getPropertyValue(`--color-base-100`),
		};
	};

	const drawWave = (n: number) => {
		const themeColors = getThemeColors();
		const { primary, secondary, accent, neutral, base100 } = themeColors;
		const waveColors = [primary, secondary, accent, neutral, base100];
		nt += getSpeed();
		for (i = 0; i < n; i++) {
			ctx.beginPath();
			ctx.lineWidth = 50;
			ctx.strokeStyle = waveColors[i % waveColors.length];
			for (x = 0; x < w; x += 5) {
				var y = noise(x / 800, 0.3 * i, nt) * 100;
				ctx.lineTo(x, y + h * 0.5);
			}
			ctx.stroke();
			ctx.closePath();
		}
	};

	let animationId: number;
	const render = () => {
		ctx.clearRect(0, 0, w, h);
		ctx.fillStyle = "rgba(0, 0, 0, 0)";
		ctx.fillRect(0, 0, w, h);
		drawWave(5);
		animationId = requestAnimationFrame(render);
	};

	onMount(() => {
		init();
		return () => {
			cancelAnimationFrame(animationId);
		};
	});
</script>

<div class={cn("flex h-screen flex-col items-center justify-center")}>
	<canvas class="absolute inset-0 top-20 z-0" bind:this={canvasRef} id="canvas"></canvas>
	<div class={cn("relative z-10")} {...$$props}>
		<slot />
	</div>
</div>

<style>
	#canvas {
		background-color: transparent;
	}
</style>
