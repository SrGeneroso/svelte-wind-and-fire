<script context="module">
	export async function load({ url, session }) {
		if (/^\/auth\/(.*)/.test(url.path) && session.user === '') {
			return { redirect: '/', status: 302 };
		}
		return { props: {} };
	}
</script>

<script>
	import NavBar from '$lib/Components/UI/NavBar.svelte';
	import 'virtual:windi.css';
	// import { browser } from '$app/env';
	// @ts-ignore: Cannot find module 'virtual:windi-devtools' or its corresponding type declarations.
	// if (browser) import('virtual:windi-devtools');
	import App from '$lib/Firebase/firebase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { userIsLogged } from '$lib/store/authStore';

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				userIsLogged.update(() => true);
			} else {
				console.log('User not authenticated');
				userIsLogged.update(() => false);
			}
		});
	});
</script>

<NavBar />

<main>
	<slot />
</main>
