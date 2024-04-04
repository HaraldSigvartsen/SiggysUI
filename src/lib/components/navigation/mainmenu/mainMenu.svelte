<script lang="ts">
  import MainMenuItem from './mainMenuItem.svelte';

let menuItems = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Docs',
			url: '/docs'
		},
		{
			name: 'Components',
			url: '/components'
		}
	];
</script>

<header>
  <nav class="w-full flex p-4 border-b-2">
    <a class="font-bold ml-4" href="/">SiggysUI</a>
    
    <ul class="flex flex-row ml-10 gap-x-4">
      {#each menuItems as menuItem}
        <MainMenuItem name={menuItem.name} url={menuItem.url} />
      {/each}
    </ul>
  </nav>
</header>