<script context="module" >
	import { authGuard } from '$lib/guard';

	export async function load({ url }) {
		return await authGuard({ url });
	}
</script>

<h1>Welcome to the Profile page!!! 😻</h1>