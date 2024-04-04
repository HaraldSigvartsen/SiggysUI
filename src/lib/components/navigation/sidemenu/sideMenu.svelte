<script lang="ts">
    import { page } from '$app/stores';


    $: activeURL = $page.url.pathname;


    let navItems = [
        {
            name: 'Introduction',
            url: '/docs/introduction'
        },
        {
            name: 'Installation',
            url: '/docs/installation'
        },
        {
            name: 'Button',
            url: '/components/button'
        },
        {
            name: 'Dropdown',
            url: '/components/dropdown'
        }
    ];
</script>

<nav class="px-8 py-4 min-h-screen w-2/12 flex flex-col">
    <ul>
        <h4 class="font-bold">Getting Started</h4>
        {#each navItems as item}
            {#if item.url.startsWith('/docs')}
                <li class="hover:underline">
                    <a href="{item.url}" class="{activeURL === item.url ? 'text-red-500' : ''}">{item.name}</a>
                </li>
            {/if}
        {/each}
    </ul>
    <ul class="mt-10">
        <h4 class="font-bold">Components</h4>
        {#each navItems as item}
            {#if item.url.startsWith('/components')}
                <li class="hover:underline">
                    <a href="{item.url}" class="{activeURL === item.url ? 'text-red-500' : ''}">{item.name}</a>
                </li>
            {/if}
        {/each}
    </ul>
</nav>
