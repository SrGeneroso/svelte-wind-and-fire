import { get } from 'svelte/store';

import { userIsLogged } from '$lib/store/authStore';

const isClient = typeof window !== 'undefined';

export function authGuard({ url }): any {
	const isLoggedIn = get(userIsLogged);

	if (!isClient) {
		return {};
	}

	if (isLoggedIn && url.path === '/profile') {
		return { status: 302, redirect: '/profile' };
	} else if (!isLoggedIn && url.path !== '/profile') {
        console.log('Guard is working')
		return { status: 302, redirect: '/' };
	}
    console.log('Guard is working')
	return {};
}
