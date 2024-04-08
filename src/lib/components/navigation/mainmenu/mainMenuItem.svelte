<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<li>
	<a class="hover:underline" href={url}>{name}</a>
</li>
