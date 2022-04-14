import { writable } from 'svelte/store';
import App from '$lib/Firebase/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { goto } from '$app/navigation';


const auth = getAuth(App);

export const userIsLogged = writable(false);

//Auth page items and status
export const TABS = Object.freeze({
	SIGNUP: {
		title: 'Sign Up',
		header: 'Register a new account.',
		showActions: false
	},
	LOGIN: {
		title: 'Log In',
		header: 'Log into your account.',
		showActions: true
	}
});

export var tabStatus = writable(TABS.LOGIN);

//NavBar profile items and status
export const PROFILE_MENU_STATE = Object.freeze({
	GUEST: [
		{
			ref: '/',
			label: 'Settings',
			action() {
				console.log('hi');
			}
		},
		{
			ref: '/auth',
			label: 'Log In',
			action() {
                tabStatus.set(TABS.LOGIN)
                goto('auth')
			}
		},
		{
			ref: '/auth',
			label: 'Sign In',
			action() {
				tabStatus.set(TABS.SIGNUP)
                goto('auth')
			}
		}
	],
	USER: [
		{
			ref: '/',
			label: 'Settings',
			action() {
				console.log('he');
			}
		},
		{
			ref: '/auth',
			label: 'Profile',
			action() {
				console.log('hee');
			}
		},
		{
			ref: '/',
			label: 'LogOut',
			action() {
				signOut(auth)
					.then(() => {
                        profileMenuStatus.set(PROFILE_MENU_STATE.GUEST)
						console.log("User is logged out")
					})
					.catch((error) => {
						console.error(error)
					});
			}
		}
	]
});

export var profileMenuStatus = writable(PROFILE_MENU_STATE.GUEST);
