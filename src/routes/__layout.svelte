<script>
    import NavBar from '$lib/Components/UI/NavBar.svelte'
    import 'virtual:windi.css';
	import { browser } from '$app/env';
	// @ts-ignore: Cannot find module 'virtual:windi-devtools' or its corresponding type declarations.
	if (browser) import('virtual:windi-devtools');
</script>

<NavBar />

<main>
    <slot />
</main>


