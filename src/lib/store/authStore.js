import { writable } from 'svelte/store';
import App from '$lib/Firebase/firebase';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut
} from 'firebase/auth';
import { goto } from '$app/navigation';

//Important to perform operations only on client
const isClient = typeof window !== 'undefined';

//Reference to the authentication SDK
const auth = getAuth(App);

//State of user
export const userIsLogged = writable(true);
$: console.log(userIsLogged);

//Initialization of user Avatar
export const avatarURL = writable('/defaultUser.svg');

function resolveSignIn(user) {
	// The signed-in user info.
	avatarURL.set(user.photoURL);
	userIsLogged.set(true);
	profileMenuStatus.set(PROFILE_MENU_STATE.USER);
	goto('/');
}

export function signIn(email, password) {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			console.error(error);
		});
}

export function register(email, password) {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			console.error(error);
		});
}

const provider = new GoogleAuthProvider();
export function signInWithGoogle() {
	console.log('login with google');
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			resolveSignIn(result.user);
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...TODO make a modal in the auth form?
		});
}

export function signOutUser() {
	signOut(auth)
		.then(() => {
			profileMenuStatus.set(PROFILE_MENU_STATE.GUEST);
			avatarURL.set('/defaultUser.svg');
			userIsLogged.set(false);
			console.log('User is logged out');
		})
		.catch((error) => {
			console.error(error);
		});
}

//Auth page items and status
export const TABS = Object.freeze({
	SIGNUP: {
		title: 'Sign Up',
		header: 'Register a new account.',
		isLogin: false,
		action(email, password) {}
	},
	LOGIN: {
		title: 'Log In',
		header: 'Log into your account.',
		isLogin: true
	}
});

export var tabStatus = writable(TABS.LOGIN);

//NavBar profile items and status
export const PROFILE_MENU_STATE = Object.freeze({
	GUEST: [
		{
			ref: '/auth/profile',
			label: 'Settings',
			action() {
				goto('/auth/profile');
			}
		},
		{
			ref: 'auth',
			label: 'Log In',
			action() {
				tabStatus.set(TABS.LOGIN);
				goto('/auth');
			}
		},
		{
			ref: 'auth',
			label: 'Sign In',
			action() {
				tabStatus.set(TABS.SIGNUP);
				goto('/auth');
			}
		}
	],
	USER: [
		{
			ref: '/auth/profile',
			label: 'Settings',
			action() {
				goto('/auth/profile');
			}
		},
		{
			ref: '/auth/profile',
			label: 'Profile',
			action() {
				goto('/auth/profile');
			}
		},
		{
			ref: '/',
			label: 'LogOut',
			action() {
				signOutUser();
				goto('/');
			}
		}
	]
});

export var profileMenuStatus = writable(PROFILE_MENU_STATE.GUEST);
